'use client';

import { Star, Quote, ArrowLeft, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import React from 'react';

// Importações organizadas
import { Testimonial } from '@/app/types/testimonial';
import { testimonials, SECTION_CONFIG } from '@/app/data/testimonialData';
import { useTestimonials } from '@/app/hooks/useTestimonials';
import { containerVariants, itemVariants, getCarouselAnimation, buttonVariants } from '@/app/utils/testimonialHelpers';

// Componente de Estrelas Simplificado
const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center space-x-0.5">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        size={14}
        className={i < rating
          ? "text-amber-400 fill-amber-400"
          : "text-gray-600"
        }
      />
    ))}
  </div>
);

// Componente do Card de Depoimento Simplificado
const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="p-5 bg-gray-900/20 border border-gray-700/20 rounded-lg shadow-sm h-full flex flex-col hover:border-cyan-500/10 transition-all duration-200">
    {/* Cabeçalho do Card */}
    <div className="flex items-start justify-between mb-3">
      <div className="text-xl">
        {testimonial.avatar}
      </div>
      <Quote size={20} className="text-cyan-500/40 flex-shrink-0" />
    </div>

    {/* Texto do Depoimento */}
    <p className="text-gray-200 text-sm leading-relaxed mb-3 flex-grow">
      "{testimonial.quote}"
    </p>

    {/* Rodapé do Card */}
    <div className="pt-3 border-t border-gray-700/20">
      <div className="flex items-center justify-between mb-2">
        <div>
          <p className="font-semibold text-white text-sm">{testimonial.name}</p>
          <p className="text-gray-400 text-xs">{testimonial.role}</p>
        </div>
        <StarRating rating={testimonial.rating} />
      </div>
      <div className="flex justify-between items-center">
        <span className="inline-block px-2 py-0.5 bg-cyan-500/10 border border-cyan-500/10 rounded text-cyan-400 text-xs">
          {testimonial.service}
        </span>
      </div>
    </div>
  </div>
);

// Componente Principal Simplificado
export default function LightTestimonialsSection() {
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
    <section id="depoimentos" className="py-16 bg-gradient-to-b from-gray-950 to-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Cabeçalho da Seção Simplificado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "50px" }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="h-1 bg-cyan-500 mx-auto mb-4 rounded-full"
          />

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            {SECTION_CONFIG.title}
          </h2>

          <p className="text-gray-400 max-w-xl mx-auto text-sm">
            {SECTION_CONFIG.subtitle}
          </p>
        </motion.div>

        {/* Carrossel Container Simplificado */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Viewport do Carrossel */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-4"
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

          {/* Botões de Navegação Simplificados */}
          <div className="absolute inset-y-0 w-full flex justify-between items-center pointer-events-none">
            <motion.button
              onClick={prevSlide}
              {...buttonVariants}
              className="pointer-events-auto z-20 p-2 bg-gray-900/60 backdrop-blur-sm border border-gray-600 rounded-full text-white transition-all shadow -ml-3 hover:bg-cyan-600 hover:border-cyan-500"
              aria-label="Depoimento Anterior"
            >
              <ArrowLeft size={16} />
            </motion.button>

            <motion.button
              onClick={nextSlide}
              {...buttonVariants}
              className="pointer-events-auto z-20 p-2 bg-gray-900/60 backdrop-blur-sm border border-gray-600 rounded-full text-white transition-all shadow -mr-3 hover:bg-cyan-600 hover:border-cyan-500"
              aria-label="Próximo Depoimento"
            >
              <ArrowRight size={16} />
            </motion.button>
          </div>
        </div>

        {/* Indicadores de Progresso Simplificados */}
        <div className="flex flex-col items-center mt-6 space-y-3">
          {/* Dots de Navegação */}
          <div className="flex items-center space-x-1.5">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${index === currentIndex
                    ? 'bg-cyan-500 w-4'
                    : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                aria-label={`Ir para o slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Contador Simplificado */}
          <div className="flex items-center space-x-1 text-gray-400 text-xs">
            <span className="text-cyan-500 font-semibold">
              {currentIndex + 1}
            </span>
            <span className="text-gray-600">de</span>
            <span className="font-semibold">
              {maxIndex + 1}
            </span>
          </div>
        </div>

        {/* Rodapé da Seção Simplificado */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-8"
        >
          <p className="text-gray-500 text-sm">
            Junte-se aos <span className="text-cyan-400 font-semibold">{SECTION_CONFIG.clientCount}</span> satisfeitos
          </p>
        </motion.div>
      </div>
    </section>
  );
}