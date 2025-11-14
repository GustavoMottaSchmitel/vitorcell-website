'use client';

import { motion } from 'framer-motion';
import { Smartphone, ChevronLeft, ChevronRight, Zap, Camera, Battery, Aperture, Cpu, BatteryCharging } from 'lucide-react';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

// Dados dos produtos iPhone 17 Pro Max
const products = [
  {
    id: 1,
    name: "iPhone 17 Pro Max",
    brand: "Apple",
    price: "R$ 12.999",
    storage: "1TB",
    color: "Titânio Cósmico",
    condition: "Novo",
    batteryHealth: "100%",
    images: [
      "/iphone-15-pro-max-2.jpg",
      "/iphone-15-pro-max-2.jpg", 
      "/iphone-15-pro-max-2.jpg",
      "/iphone-15-pro-max-2.jpg"
    ],
    description: "O futuro chegou. Com chip A19 Pro revolucionário e câmera quântica de 108MP.",
    features: [
      { icon: Camera, text: "Câmera 108MP", description: "Sistema Quântico Pro" },
      { icon: Cpu, text: "Chip A19 Pro", description: "6.8GHz 8-core" },
      { icon: Battery, text: "Bateria 5000mAh", description: "48h de autonomia" },
      { icon: Aperture, text: "Tela 6.9\"", description: "XDR ProMotion 165Hz" }
    ],
    whatsappMessage: "Olá! Gostaria de comprar o iPhone 17 Pro Max 1TB Titânio Cósmico"
  },
  {
    id: 2,
    name: "iPhone 17 Pro",
    brand: "Apple",
    price: "R$ 10.499",
    storage: "512GB",
    color: "Titânio Nebulosa",
    condition: "Seminovo",
    batteryHealth: "96%",
    images: [
      "/iphone-15-pro-max-2.jpg",
      "/iphone-15-pro-max-2.jpg",
      "/iphone-15-pro-max-2.jpg"
    ],
    description: "Performance extrema em design compacto. Chip A19 Pro e sistema de câmeras avançado.",
    features: [
      { icon: Camera, text: "Câmera 84MP", description: "Tripla câmera Pro" },
      { icon: Cpu, text: "Chip A19 Pro", description: "5.8GHz 6-core" },
      { icon: Battery, text: "Bateria 4200mAh", description: "36h de uso" },
      { icon: Aperture, text: "Tela 6.3\"", description: "Super Retina XDR" }
    ],
    whatsappMessage: "Olá! Gostaria de comprar o iPhone 17 Pro 512GB Titânio Nebulosa"
  },
  {
    id: 3,
    name: "Xiaomi 15 Ultra",
    brand: "Xiaomi",
    price: "R$ 8.999",
    storage: "1TB",
    color: "Preto Espacial",
    condition: "Novo",
    batteryHealth: "100%",
    images: [
      "/iphone-15-pro-max-2.jpg",
      "/iphone-15-pro-max-2.jpg",
      "/iphone-15-pro-max-2.jpg"
    ],
    description: "Parceria Leica evoluída com inteligência artificial generativa.",
    features: [
      { icon: Camera, text: "Câmera 200MP", description: "Leica Summilux" },
      { icon: Cpu, text: "Snapdragon 9 Gen 3", description: "Chipset topo" },
      { icon: Battery, text: "Bateria 5800mAh", description: "Carregamento 150W" },
      { icon: Aperture, text: "Tela 6.8\"", description: "LTPO AMOLED 2K" }
    ],
    whatsappMessage: "Olá! Gostaria de comprar o Xiaomi 15 Ultra 1TB Preto Espacial"
  },
  {
    id: 4,
    name: "Xiaomi 14T Pro",
    brand: "Xiaomi",
    price: "R$ 4.299",
    storage: "512GB",
    color: "Azul Celestial",
    condition: "Seminovo",
    batteryHealth: "89%",
    images: [
      "/iphone-15-pro-max-2.jpg",
      "/iphone-15-pro-max-2.jpg",
      "/iphone-15-pro-max-2.jpg"
    ],
    description: "Performance flagship com valor excepcional e câmeras Leica.",
    features: [
      { icon: Camera, text: "Câmera 120MP", description: "Leica Vario-Summicron" },
      { icon: Cpu, text: "Dimensity 9300+", description: "Performance gaming" },
      { icon: Battery, text: "Bateria 5200mAh", description: "Carregamento 120W" },
      { icon: Aperture, text: "Tela 6.7\"", description: "CrystalRes AMOLED" }
    ],
    whatsappMessage: "Olá! Gostaria de comprar o Xiaomi 14T Pro 512GB Azul Celestial"
  }
];

const phoneNumber = "5527999765211";

// Componente do Carousel de Imagens
const ImageCarousel = ({ images, productName }: { images: string[], productName: string }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="relative h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden group">
      {/* Imagem Principal */}
      <motion.div
        key={currentImageIndex}
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-full h-full"
      >
        <Image
          src={images[currentImageIndex]}
          alt={`${productName} - Imagem ${currentImageIndex + 1}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
        
        {/* Overlay de gradiente */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent"></div>
      </motion.div>

      {/* Controles do Carousel */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {/* Botões de navegação */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/60 hover:bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 border border-cyan-500/30"
        >
          <ChevronLeft size={24} />
        </button>
        
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/60 hover:bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 border border-cyan-500/30"
        >
          <ChevronRight size={24} />
        </button>

        {/* Indicadores */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentImageIndex 
                  ? 'bg-cyan-400 scale-125 shadow-lg shadow-cyan-400/50' 
                  : 'bg-white/60 hover:bg-white/80'
              }`}
            />
          ))}
        </div>

        {/* Badge de múltiplas imagens */}
        <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
          {currentImageIndex + 1}/{images.length}
        </div>
      </div>

      {/* Efeito de brilho */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 pointer-events-none"></div>
    </div>
  );
};

export default function PremiumTechCarouselSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filter, setFilter] = useState<'all' | 'apple' | 'xiaomi'>('all');

  const filteredProducts = products.filter(product => {
    if (filter === 'all') return true;
    if (filter === 'apple') return product.brand === 'Apple';
    if (filter === 'xiaomi') return product.brand === 'Xiaomi';
    return true;
  });

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === filteredProducts.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? filteredProducts.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, filteredProducts.length]);

  const currentProduct = filteredProducts[currentIndex];

  // Função para determinar a cor do badge da bateria
  const getBatteryColor = (health: string) => {
    const percentage = parseInt(health);
    if (percentage >= 90) return 'bg-green-500/20 text-green-400 border-green-500/30';
    if (percentage >= 80) return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
    return 'bg-red-500/20 text-red-400 border-red-500/30';
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-950 to-black min-h-screen">
      {/* Background Elements Melhorados */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Tech Melhorado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-8 rounded-full"
          />

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Tech
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent bg-size-200 animate-gradient">
              Premium
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Smartphones de última geração com garantia e qualidade assegurada
          </p>
        </motion.div>

        {/* Filtros Tech Melhorados */}
        <div className="flex justify-center gap-4 mb-12">
          {[
            { key: 'all' as const, label: 'Todos', count: products.length },
            { key: 'apple' as const, label: 'iPhone', count: products.filter(p => p.brand === 'Apple').length },
            { key: 'xiaomi' as const, label: 'Xiaomi', count: products.filter(p => p.brand === 'Xiaomi').length }
          ].map((filterItem) => (
            <motion.button
              key={filterItem.key}
              onClick={() => {
                setFilter(filterItem.key);
                setCurrentIndex(0);
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 backdrop-blur-sm ${
                filter === filterItem.key
                  ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-2xl shadow-cyan-500/25'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700/50'
              }`}
            >
              {filterItem.label} <span className="text-cyan-400">({filterItem.count})</span>
            </motion.button>
          ))}
        </div>

        {/* Carousel Principal Tech Melhorado */}
        <motion.div
          key={currentProduct.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-gray-900/90 to-gray-950/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-cyan-500/20 p-8 mb-8 hover:border-cyan-400/30 transition-all duration-500"
        >
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Imagem do Produto com Carousel */}
            <div className="flex-1 relative">
              <ImageCarousel images={currentProduct.images} productName={currentProduct.name} />

              {/* Indicadores do Carousel Principal */}
              <div className="flex justify-center gap-3 mt-8">
                {filteredProducts.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-cyan-400 scale-125 shadow-lg shadow-cyan-400/50' 
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Informações do Produto Melhoradas */}
            <div className="flex-1 space-y-8">
              <div>
                {/* Badges de Condição e Bateria */}
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className={`px-4 py-2 rounded-xl text-sm font-bold border ${
                    currentProduct.condition === "Novo" 
                      ? "bg-green-500/20 text-green-400 border-green-500/30" 
                      : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                  }`}>
                    {currentProduct.condition}
                  </span>
                  
                  <span className={`px-4 py-2 rounded-xl text-sm font-bold border flex items-center gap-2 ${getBatteryColor(currentProduct.batteryHealth)}`}>
                    <BatteryCharging size={16} />
                    {currentProduct.batteryHealth}
                  </span>

                  <span className={`px-4 py-2 rounded-xl text-sm font-bold border ${
                    currentProduct.brand === "Apple" 
                      ? "bg-blue-500/20 text-blue-400 border-blue-500/30" 
                      : "bg-orange-500/20 text-orange-400 border-orange-500/30"
                  }`}>
                    {currentProduct.brand}
                  </span>
                </div>

                <h3 className="text-4xl font-bold text-white mb-4">
                  {currentProduct.name}
                </h3>
                <div className="flex items-center gap-6 text-cyan-300 mb-6 text-lg">
                  <span className="font-semibold">{currentProduct.storage}</span>
                  <span className="text-cyan-400">•</span>
                  <span className="text-cyan-400">{currentProduct.color}</span>
                </div>
                <p className="text-gray-300 text-xl leading-relaxed">
                  {currentProduct.description}
                </p>
              </div>

              {/* Features Melhoradas */}
              <div className="grid grid-cols-1 gap-4">
                {currentProduct.features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div 
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon size={20} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-lg font-semibold text-white">{feature.text}</div>
                        <div className="text-cyan-400/80 text-sm">{feature.description}</div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <div className="space-y-6">
                <div className="text-5xl font-bold text-white">
                  {currentProduct.price}
                </div>
                <div className="text-cyan-400 text-lg font-semibold flex flex-wrap gap-4">
                  <span>✓ 12x sem juros</span>
                  <span>✓ Garantia 12 meses</span>
                  <span>✓ Entrega Rápida</span>
                </div>
              </div>

              <motion.a
                href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(currentProduct.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-2xl font-bold text-xl transition-all duration-300 shadow-2xl shadow-cyan-500/25 w-full justify-center group/btn"
              >
                <Smartphone size={28} className="group-hover/btn:scale-110 transition-transform duration-300" />
                <span>Comprar no WhatsApp</span>
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Mini Carousel de Pré-visualização Melhorado */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <motion.button
              key={product.id}
              onClick={() => goToSlide(index)}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`relative rounded-2xl p-6 text-center transition-all duration-300 backdrop-blur-sm border-2 overflow-hidden group ${
                index === currentIndex
                  ? 'border-cyan-400 shadow-2xl shadow-cyan-400/25 scale-105 bg-gradient-to-br from-cyan-500/10 to-blue-500/10'
                  : 'border-gray-700 hover:border-cyan-500/50 bg-gray-900/30'
              }`}
            >
              {/* Efeito de fundo animado */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="w-16 h-16 mx-auto mb-4 relative z-10">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              
              <div className="space-y-2 z-10 relative">
                <div className="text-sm font-bold text-white truncate">
                  {product.name.split(' ')[0]}
                </div>
                <div className="text-xs text-cyan-400 font-semibold">
                  {product.storage}
                </div>
                <div className="text-lg font-bold text-cyan-400">
                  {product.price}
                </div>
                
                {/* Badge de condição mini */}
                <div className={`text-xs px-2 py-1 rounded-full ${
                  product.condition === "Novo" 
                    ? "bg-green-500/20 text-green-400" 
                    : "bg-yellow-500/20 text-yellow-400"
                }`}>
                  {product.condition}
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* CTA Final Tech Melhorado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-6">
              Não encontrou o ideal?
            </h3>
            <p className="text-gray-400 text-xl mb-8 max-w-2xl mx-auto">
              Temos mais de 50 modelos disponíveis. Nossos especialistas podem ajudar você a encontrar o smartphone perfeito.
            </p>
            <motion.a
              href={`https://wa.me/${phoneNumber}?text=Olá! Gostaria de consultar a disponibilidade de outros modelos premium`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-2xl font-bold text-xl transition-all duration-300 shadow-2xl shadow-cyan-500/25"
            >
              <Smartphone size={28} />
              <span>Falar com Especialista</span>
            </motion.a>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
}