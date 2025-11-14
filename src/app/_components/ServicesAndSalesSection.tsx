'use client';

import { motion } from "framer-motion";
import { Check, Zap, ArrowRight } from "lucide-react";
import React from 'react';

// Importações organizadas
import { ServiceCategory, Stat } from '@/app/types/service';
import { categories, stats, brands, SECTION_CONFIG } from '@/app/data/serviceData';
import { useBrandsCarousel } from '@/app/hooks/useBrandsCarousel';
import { containerVariants, cardVariants, itemVariants, statVariants, getCarouselAnimation } from '@/app/utils/serviceHelpers';

// Componente do Carrossel de Marcas
const BrandsCarousel = () => {
  const { currentIndex } = useBrandsCarousel(brands.length);

  return (
    <div className="relative overflow-hidden py-4">
      <motion.div
        className="flex space-x-8"
        animate={getCarouselAnimation(currentIndex)}
      >
        {/* Duplicamos o array para criar efeito infinito suave */}
        {[...brands, ...brands].map((brand, index) => (
          <motion.div
            key={`${brand}-${index}`}
            className="flex items-center space-x-2 text-lg font-semibold text-gray-400 whitespace-nowrap flex-shrink-0 px-4"
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.8 }}
          >
            <Check size={16} className="text-green-400 flex-shrink-0" />
            <span>{brand}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Efeito de fade nas bordas */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-950 to-transparent pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-950 to-transparent pointer-events-none"></div>
    </div>
  );
};

// Componente Principal
export default function PremiumServicesSection() {
  return (
    <section id="servicos" className="relative py-16 md:py-24 bg-gradient-to-b from-gray-950 to-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-1/2 h-1/2 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/2 -left-1/4 w-1/2 h-1/2 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 left-1/2 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          {/* Decorative Top Line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-6 md:mb-8 rounded-full"
          />

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            {SECTION_CONFIG.title}
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-gray-400 max-w-3xl lg:max-w-4xl mx-auto leading-relaxed px-4">
            {SECTION_CONFIG.subtitle}
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              custom={index}
              variants={statVariants}
              className="text-center p-4 md:p-6 bg-gray-900/40 backdrop-blur-sm border border-gray-800/50 rounded-xl md:rounded-2xl"
            >
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-xs md:text-sm lg:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {categories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;

            return (
              <motion.div
                key={category.name}
                variants={cardVariants}
                whileHover={{
                  y: -4,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                {/* Card Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-10 blur-xl rounded-2xl lg:rounded-3xl transition-opacity duration-500`} />

                <div className="relative p-6 md:p-8 bg-gradient-to-br from-gray-900/80 to-gray-950/80 backdrop-blur-sm border border-gray-800/50 rounded-2xl lg:rounded-3xl shadow-2xl flex flex-col min-h-[480px] md:min-h-[520px]">
                  {/* Card Header */}
                  <div className="flex items-start space-x-4 md:space-x-6 mb-6 md:mb-8 pb-6 md:pb-8 border-b border-gray-800/50">
                    <motion.div
                      whileHover={{
                        scale: 1.1,
                        rotate: 5
                      }}
                      className={`p-3 md:p-4 bg-gradient-to-br ${category.gradient} rounded-xl md:rounded-2xl shadow-lg flex-shrink-0`}
                    >
                      <CategoryIcon size={28} className="text-white md:w-8 md:h-8" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-3">
                        {category.name}
                      </h3>
                      <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Services List */}
                  <div className="flex-1">
                    <motion.ul
                      className="space-y-3 md:space-y-4"
                      variants={{
                        show: {
                          transition: {
                            staggerChildren: 0.1,
                            delayChildren: 0.3 + categoryIndex * 0.2
                          }
                        }
                      }}
                    >
                      {category.items.map((item, itemIndex) => {
                        const ItemIcon = item.icon;
                        return (
                          <motion.li
                            key={itemIndex}
                            variants={itemVariants}
                            whileHover={{
                              x: 4,
                              backgroundColor: "rgba(255,255,255,0.02)"
                            }}
                            className="flex items-center space-x-3 md:space-x-4 p-3 md:p-4 rounded-lg md:rounded-xl border border-transparent hover:border-gray-700/50 transition-all duration-300"
                          >
                            <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400 flex-shrink-0">
                              <ItemIcon size={18} className="md:w-5 md:h-5" />
                            </div>
                            <span className="text-base md:text-lg font-medium text-white">
                              {item.name}
                            </span>
                          </motion.li>
                        );
                      })}
                    </motion.ul>
                  </div>

                  {/* Card Footer */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-gray-800/50"
                  >
                    <div className="flex flex-col sm:flex-row items-center justify-between text-gray-400 space-y-2 sm:space-y-0">
                      <div className="flex items-center space-x-2">
                        <Zap size={14} className="text-cyan-400 md:w-4 md:h-4" />
                        <span className="text-xs md:text-sm">Garantia incluída</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Check size={14} className="text-green-400 md:w-4 md:h-4" />
                        <span className="text-xs md:text-sm">Peças originais</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16 md:mt-20"
        >
          {/* Brands Support com Carrossel */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mb-8 md:mb-12"
          >
            <p className="text-gray-500 text-base md:text-lg mb-4 md:mb-6">
              {SECTION_CONFIG.cta.brandsText}
            </p>

            {/* Carrossel de Marcas */}
            <div className="max-w-4xl mx-auto">
              <BrandsCarousel />
            </div>
          </motion.div>

          {/* Main CTA Button */}
          <motion.a
            href="#orcamento"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(6, 182, 212, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center px-8 md:px-12 py-4 md:py-5 text-lg md:text-xl font-bold rounded-xl md:rounded-2xl transition-all duration-300 bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-2xl shadow-cyan-500/25 overflow-hidden"
          >
            {/* Button Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

            <span className="relative">{SECTION_CONFIG.cta.text}</span>
            <ArrowRight size={20} className="ml-2 md:ml-3 relative transition-transform group-hover:translate-x-1" />
          </motion.a>

          {/* Support Text */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-gray-500 text-base md:text-lg mt-4 md:mt-6"
          >
            {SECTION_CONFIG.cta.responseTime}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}