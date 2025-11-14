'use client';

import { Star, Quote, ArrowLeft, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import React from 'react';

// Importações organizadas
import { Testimonial } from '@/app/types/testimonial';
import { testimonials, SECTION_CONFIG } from '@/app/data/testimonialData';
import { useTestimonials } from '@/app/hooks/useTestimonials';
import { containerVariants, itemVariants, getCarouselAnimation, buttonVariants } from '@/app/utils/testimonialHelpers';

// Componente de Estrelas
const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center space-x-1">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        size={16}
        className={i < rating
          ? "text-amber-400 fill-amber-400"
          : "text-gray-600"
        }
      />
    ))}
  </div>
);

// Componente do Card de Depoimento
const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="p-6 bg-gray-900/30 border border-gray-700/30 rounded-xl shadow-lg h-full flex flex-col backdrop-blur-sm hover:border-cyan-500/20 transition-all duration-300">
    {/* Cabeçalho do Card */}
    <div className="flex items-start justify-between mb-4">
      <div className="text-2xl">
        {testimonial.avatar}
      </div>
      <Quote size={24} className="text-cyan-500/60 flex-shrink-0" />
    </div>

    {/* Texto do Depoimento */}
    <p className="text-gray-200 leading-relaxed mb-4 flex-grow">
      "{testimonial.quote}"
    </p>

    {/* Rodapé do Card */}
    <div className="pt-4 border-t border-gray-700/30">
      <div className="flex items-center justify-between mb-2">
        <div>
          <p className="font-semibold text-white">{testimonial.name}</p>
          <p className="text-gray-400 text-sm">{testimonial.role}</p>
        </div>
        <StarRating rating={testimonial.rating} />
      </div>
      <div className="flex justify-between items-center">
        <span className="inline-block px-2 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-xs">
          {testimonial.service}
        </span>
      </div>
    </div>
  </div>
);

// Componente Principal
export default function RefinedTestimonialsSection() {
  const {
    currentIndex,
    isHovered,
    visibleCards,
    maxIndex,
    nextSlide,
    prevSlide,
    goToSlide,
    setIsHovered
  } = useTestimonials(testimonials.length);

  return (
    <section id="depoimentos" className="py-20 bg-gradient-to-b from-gray-950 to-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Cabeçalho da Seção */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-1 bg-cyan-500 mx-auto mb-6 rounded-full"
          />

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {SECTION_CONFIG.title}
          </h2>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {SECTION_CONFIG.subtitle}
          </p>
        </motion.div>

        {/* Carrossel Container */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Viewport do Carrossel */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={getCarouselAnimation(currentIndex, visibleCards)}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex-shrink-0"
                  style={{ width: `${100 / visibleCards}%` }}
                >
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Botões de Navegação */}
          <div className="absolute inset-y-0 w-full flex justify-between items-center pointer-events-none">
            <motion.button
              onClick={prevSlide}
              {...buttonVariants}
              className="pointer-events-auto z-20 p-3 bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-full text-white transition-all shadow-lg -ml-4 hover:bg-cyan-600 hover:border-cyan-500"
              aria-label="Depoimento Anterior"
            >
              <ArrowLeft size={18} />
            </motion.button>

            <motion.button
              onClick={nextSlide}
              {...buttonVariants}
              className="pointer-events-auto z-20 p-3 bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-full text-white transition-all shadow-lg -mr-4 hover:bg-cyan-600 hover:border-cyan-500"
              aria-label="Próximo Depoimento"
            >
              <ArrowRight size={18} />
            </motion.button>
          </div>
        </div>

        {/* Indicadores de Progresso */}
        <div className="flex flex-col items-center mt-8 space-y-4">
          {/* Dots de Navegação */}
          <div className="flex items-center space-x-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                    ? 'bg-cyan-500 w-6'
                    : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                aria-label={`Ir para o slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Contador */}
          <div className="flex items-center space-x-2 text-gray-400 text-sm">
            <span className="text-cyan-500 font-mono font-bold">
              {(currentIndex + 1).toString().padStart(2, '0')}
            </span>
            <span className="text-gray-600">/</span>
            <span className="font-mono">
              {(maxIndex + 1).toString().padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* Rodapé da Seção */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-500">
            Junte-se aos <span className="text-cyan-400 font-semibold">{SECTION_CONFIG.clientCount}</span> satisfeitos
          </p>
        </motion.div>
      </div>
    </section>
  );
}