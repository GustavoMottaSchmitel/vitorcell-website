'use client';

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import React from 'react';

// Importações organizadas
import { ServiceCategory, Stat } from '@/app/types/service';
import { categories, stats, brands, SECTION_CONFIG } from '@/app/data/serviceData';
import { useBrandsCarousel } from '@/app/hooks/useBrandsCarousel';
import { containerVariants, cardVariants, itemVariants, statVariants, getCarouselAnimation } from '@/app/utils/serviceHelpers';

// Componente do Carrossel de Marcas Simplificado
const BrandsCarousel = () => {
  const { currentIndex } = useBrandsCarousel(brands.length);

  return (
    <div className="relative overflow-hidden py-4">
      <motion.div
        className="flex space-x-6"
        animate={getCarouselAnimation(currentIndex)}
      >
        {[...brands, ...brands].map((brand, index) => (
          <motion.div
            key={`${brand}-${index}`}
            className="flex items-center space-x-2 text-sm font-medium text-gray-400 whitespace-nowrap flex-shrink-0 px-3"
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
          >
            <Check size={14} className="text-green-400 flex-shrink-0" />
            <span>{brand}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Efeito de fade nas bordas */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gray-950 to-transparent pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-950 to-transparent pointer-events-none"></div>
    </div>
  );
};

// Componente Principal
export default function LightServicesSection() {
  return (
    <section id="servicos" className="relative py-16 md:py-20 bg-gradient-to-b from-gray-950 to-black overflow-hidden">
      {/* Background Elements Simplificados */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/3 -right-1/4 w-1/2 h-1/2 bg-blue-500/3 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/3 -left-1/4 w-1/2 h-1/2 bg-purple-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section Simplificado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-6 rounded-full"
          />

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
            {SECTION_CONFIG.title.split(' ')[0]}
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              {SECTION_CONFIG.title.split(' ')[1]}
            </span>
          </h1>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {SECTION_CONFIG.subtitle}
          </p>
        </motion.div>

        {/* Stats Grid Simplificado */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12"
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
              className="text-center p-4 bg-gray-900/30 backdrop-blur-sm border border-gray-800/30 rounded-lg"
            >
              <div className="text-xl md:text-2xl font-bold text-cyan-400 mb-1">
                {stat.value}
              </div>
              <div className="text-gray-400 text-xs">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Services Grid Simplificado */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8"
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
                  y: -2,
                  transition: { duration: 0.2 }
                }}
                className="group"
              >
                <div className="relative p-6 bg-gray-900/40 backdrop-blur-sm border border-gray-800/30 rounded-xl shadow-lg flex flex-col min-h-[400px]">
                  
                  {/* Card Header */}
                  <div className="flex items-start space-x-4 mb-6 pb-6 border-b border-gray-800/30">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className={`p-3 bg-gradient-to-br ${category.gradient} rounded-lg shadow-md flex-shrink-0`}
                    >
                      <CategoryIcon size={24} className="text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                        {category.name}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Services List */}
                  <div className="flex-1">
                    <motion.ul
                      className="space-y-2"
                      variants={{
                        show: {
                          transition: {
                            staggerChildren: 0.08,
                            delayChildren: 0.2 + categoryIndex * 0.15
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
                            className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-800/20 transition-colors duration-200"
                          >
                            <div className="p-1.5 rounded-md bg-cyan-500/20 text-cyan-400 flex-shrink-0">
                              <ItemIcon size={16} />
                            </div>
                            <span className="text-sm font-medium text-white flex-1">
                              {item.name}
                            </span>
                            <ArrowRight size={14} className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                          </motion.li>
                        );
                      })}
                    </motion.ul>
                  </div>

                  {/* Card Footer Simplificado */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mt-6 pt-4 border-t border-gray-800/30"
                  >
                    <div className="flex items-center justify-center text-gray-400 text-xs">
                      <Check size={12} className="text-green-400 mr-1" />
                      Garantia e peças originais incluídas
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section Simplificada */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          {/* Brands Support */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mb-8"
          >
            <p className="text-gray-500 text-sm mb-4">
              {SECTION_CONFIG.cta.brandsText}
            </p>
            <div className="max-w-2xl mx-auto">
              <BrandsCarousel />
            </div>
          </motion.div>

          {/* Main CTA Button */}
          <motion.a
            href="#orcamento"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center px-8 py-3 text-base font-semibold rounded-lg transition-all duration-300 bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg hover:shadow-cyan-500/25"
          >
            <span>{SECTION_CONFIG.cta.text}</span>
            <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
          </motion.a>

          {/* Support Text */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-gray-500 text-sm mt-3"
          >
            {SECTION_CONFIG.cta.responseTime}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}