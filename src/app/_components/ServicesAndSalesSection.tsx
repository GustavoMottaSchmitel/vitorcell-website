'use client';

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import React from 'react';
import { ServiceCategory, Stat } from '@/app/types/service';
import { categories, stats, brands, SECTION_CONFIG } from '@/app/data/serviceData';
import { useBrandsCarousel } from '@/app/hooks/useBrandsCarousel';

const BrandsCarousel = () => {
  const { currentIndex } = useBrandsCarousel(brands.length);

  return (
    <div className="relative overflow-hidden py-4">
      <motion.div
        className="flex space-x-6"
        animate={{ 
          x: `-${currentIndex * 100}%` 
        }}
        transition={{ 
          type: "tween" as const,
          duration: 0.5 
        }}
      >
        {[...brands, ...brands].map((brand, index) => (
          <div
            key={`${brand}-${index}`}
            className="flex items-center space-x-2 text-sm font-medium text-gray-400 whitespace-nowrap flex-shrink-0 px-3"
          >
            <Check size={14} className="text-green-400 flex-shrink-0" />
            <span>{brand}</span>
          </div>
        ))}
      </motion.div>
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gray-950 to-transparent pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-950 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default function LightServicesSection() {
  return (
    <section id="servicos" className="relative py-12 md:py-16 bg-gradient-to-b from-gray-950 to-black overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/3 -right-1/4 w-1/2 h-1/2 bg-blue-500/3 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/3 -left-1/4 w-1/2 h-1/2 bg-purple-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8">
          <div className="h-1 bg-gradient-to-r from-cyan-500 to-blue-500 w-16 mx-auto mb-4 rounded-full" />

          <h1 className="text-2xl md:text-4xl font-bold mb-3 text-white">
            {SECTION_CONFIG.title.split(' ')[0]}
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              {SECTION_CONFIG.title.split(' ')[1]}
            </span>
          </h1>

          <p className="text-gray-400 max-w-xl mx-auto text-sm">
            {SECTION_CONFIG.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-3 bg-gray-900/30 border border-gray-800/30 rounded-lg"
            >
              <div className="text-lg font-bold text-cyan-400 mb-1">
                {stat.value}
              </div>
              <div className="text-gray-400 text-xs">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          {categories.map((category) => {
            const CategoryIcon = category.icon;

            return (
              <div
                key={category.name}
                className="group"
              >
                <div className="relative p-4 bg-gray-900/40 border border-gray-800/30 rounded-lg flex flex-col min-h-[350px]">
                  <div className="flex items-start space-x-3 mb-4 pb-4 border-b border-gray-800/30">
                    <div className={`p-2 bg-gradient-to-br ${category.gradient} rounded-lg flex-shrink-0`}>
                      <CategoryIcon size={20} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-1">
                        {category.name}
                      </h3>
                      <p className="text-gray-400 text-xs">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex-1">
                    <ul className="space-y-1">
                      {category.items.map((item, itemIndex) => {
                        const ItemIcon = item.icon;
                        return (
                          <li
                            key={itemIndex}
                            className="flex items-center space-x-2 p-1 rounded-lg hover:bg-gray-800/20 transition-colors duration-150"
                          >
                            <div className="p-1 rounded-md bg-cyan-500/20 text-cyan-400 flex-shrink-0">
                              <ItemIcon size={14} />
                            </div>
                            <span className="text-sm text-white flex-1">
                              {item.name}
                            </span>
                            <ArrowRight size={12} className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  <div className="mt-4 pt-3 border-t border-gray-800/30">
                    <div className="flex items-center justify-center text-gray-400 text-xs">
                      <Check size={10} className="text-green-400 mr-1" />
                      Garantia e peças originais
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-8">
          <div className="mb-6">
            <p className="text-gray-500 text-xs mb-3">
              {SECTION_CONFIG.cta.brandsText}
            </p>
            <div className="max-w-xl mx-auto">
              <BrandsCarousel />
            </div>
          </div> 

          <a
            href="#orcamento"
            className="inline-flex items-center px-6 py-2 text-sm font-semibold rounded-lg transition-all duration-200 bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
          >
            <span>{SECTION_CONFIG.cta.text}</span>
            <ArrowRight size={14} className="ml-1" />
          </a>

          <p className="text-gray-500 text-xs mt-2">
            {SECTION_CONFIG.cta.responseTime}
          </p>
        </div>
      </div>
    </section>
  );
}