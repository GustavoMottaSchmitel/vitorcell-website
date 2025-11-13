'use client';

import { Star, Quote, ArrowLeft, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import React, { useState, useEffect, useCallback } from 'react';

// Dados de depoimentos
const testimonials = [
  {
    id: 1,
    quote: "Fui muito bem atendida. O Vitor é super transparente, trocou a tela do meu Samsung S20 em menos de duas horas. Serviço nota 10!",
    name: "Laura V.",
    role: "Cliente Samsung S20",
    rating: 5,
    service: "Troca de Tela",
    avatar: "👩‍💼"
  },
  {
    id: 2,
    quote: "Precisava de um laudo para garantia e eles foram rápidos e precisos. A loja é organizada e o serviço tem preço justo. Virei cliente!",
    name: "Marcelo B.",
    role: "Cliente Corporativo",
    rating: 5,
    service: "Diagnóstico Técnico",
    avatar: "👨‍💼"
  },
  {
    id: 3,
    quote: "Meu iPhone 11 estava com problema na bateria, troquei aqui e a durabilidade voltou a ser como nova. O custo-benefício foi excelente.",
    name: "Patrícia R.",
    role: "Cliente iPhone",
    rating: 5,
    service: "Substituição de Bateria",
    avatar: "👩‍🎓"
  },
  {
    id: 4,
    quote: "Achei o carregador Turbo Original que eu precisava. Acessórios de verdade! Profissionais e honestos. Recomendo de olhos fechados.",
    name: "Sérgio M.",
    role: "Cliente Acessórios",
    rating: 5,
    service: "Venda de Acessórios",
    avatar: "👨‍🔧"
  },
  {
    id: 5,
    quote: "Atendimento impecável! Resolveram um problema complexo na placa do meu Poco F3 que outras assistências não conseguiram. Deixei um pouco mais de tempo, mas valeu a espera.",
    name: "Fernanda L.",
    role: "Cliente Técnico",
    rating: 4,
    service: "Reparo em Placa",
    avatar: "👩‍🔬"
  },
  {
    id: 6,
    quote: "Serviço super rápido! Deixei o celular de manhã e peguei no final da tarde. Qualidade e agilidade, não tem igual em Serra.",
    name: "Roberto C.",
    role: "Cliente Regular",
    rating: 5,
    service: "Desoxidação e Limpeza",
    avatar: "👨‍🏫"
  }
];

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

// Componente do Card
const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
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

export default function RefinedTestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Configurações responsivas
  const getVisibleCards = () => {
    if (typeof window === 'undefined') return 3;
    
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setVisibleCards(getVisibleCards());
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = testimonials.length - visibleCards;

  const nextSlide = useCallback(() => {
    setCurrentIndex(current => 
      current >= maxIndex ? 0 : current + 1
    );
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex(current => 
      current === 0 ? maxIndex : current - 1
    );
  }, [maxIndex]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Autoplay
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(nextSlide, 5000);
      return () => clearInterval(interval);
    }
  }, [isHovered, nextSlide]);

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
            Depoimentos Reais
          </h2>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A confiança dos nossos clientes é nosso maior orgulho.
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
              animate={{ x: `-${currentIndex * (100 / visibleCards)}%` }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 30 
              }}
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
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="pointer-events-auto z-20 p-3 bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-full text-white transition-all shadow-lg -ml-4 hover:bg-cyan-600 hover:border-cyan-500"
              aria-label="Depoimento Anterior"
            >
              <ArrowLeft size={18} />
            </motion.button>

            <motion.button
              onClick={nextSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
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
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
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
            Junte-se aos <span className="text-cyan-400 font-semibold">+100 clientes</span> satisfeitos
          </p>
        </motion.div>
      </div>
    </section>
  );
}