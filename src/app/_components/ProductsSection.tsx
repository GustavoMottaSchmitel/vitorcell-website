'use client';

import { motion } from 'framer-motion';
import { Smartphone, Battery, Camera, Cpu, Check, Zap, Shield, Sparkles } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';

// Dados dos produtos premium
const products = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    brand: "Apple",
    price: "R$ 5.999",
    storage: "256GB",
    color: "Titânio Natural",
    condition: "Seminovo",
    batteryHealth: "96%",
    image: "/iphone-17promax.png",
    description: "Performance máxima em estado impecável. Todas as funcionalidades preservadas como novo.",
    features: [
      { icon: Camera, text: "Câmera 48MP Pro", description: "Sistema avançado" },
      { icon: Cpu, text: "Chip A17 Pro", description: "Velocidade extrema" },
      { icon: Battery, text: "Bateria 4422mAh", description: "96% saúde" },
      { icon: Zap, text: "USB-C", description: "Carregamento rápido" }
    ],
    whatsappMessage: "Olá! Gostaria de comprar o iPhone 15 Pro Max 256GB Titânio Natural"
  },
  {
    id: 2,
    name: "iPhone 14 Pro",
    brand: "Apple",
    price: "R$ 4.299",
    storage: "128GB",
    color: "Roxo Profundo",
    condition: "Seminovo",
    batteryHealth: "92%",
    image: "/iphone-17promax.png",
    description: "Estado conservado com mínimo de uso. Funcionalidade 100% original.",
    features: [
      { icon: Camera, text: "Câmera 48MP", description: "Tripla lente" },
      { icon: Cpu, text: "Chip A16 Bionic", description: "Performance elite" },
      { icon: Battery, text: "Bateria 3200mAh", description: "92% saúde" },
      { icon: Sparkles, text: "Dynamic Island", description: "Inovação Apple" }
    ],
    whatsappMessage: "Olá! Gostaria de comprar o iPhone 14 Pro 128GB Roxo Profundo"
  },
  {
    id: 3,
    name: "Xiaomi 13T Pro",
    brand: "Xiaomi 13T Pro",
    price: "R$ 2.799",
    storage: "512GB",
    color: "Preto",
    condition: "Novo",
    batteryHealth: "100%",
    image: "/iphone-17promax.png",
    description: "Novo na caixa com garantia completa e todos os acessórios originais.",
    features: [
      { icon: Camera, text: "Câmera 50MP", description: "Leica Optics" },
      { icon: Cpu, text: "Dimensity 9200+", description: "Performance top" },
      { icon: Battery, text: "Bateria 5000mAh", description: "100% saúde" },
      { icon: Zap, text: "120W HyperCharge", description: "Carregamento ultra" }
    ],
    whatsappMessage: "Olá! Gostaria de comprar o Xiaomi 13T Pro 512GB Preto"
  },
  {
    id: 4,
    name: "Xiaomi Redmi Note 12",
    brand: "Xiaomi",
    price: "R$ 1.199",
    storage: "128GB",
    color: "Azul",
    condition: "Seminovo",
    batteryHealth: "88%",
    image: "/iphone-16promax.png",
    description: "Excelente custo-benefício em perfeito estado de funcionamento.",
    features: [
      { icon: Camera, text: "Câmera 50MP", description: "Tripla câmera" },
      { icon: Cpu, text: "Snapdragon 685", description: "Performance sólida" },
      { icon: Battery, text: "Bateria 5000mAh", description: "88% saúde" },
      { icon: Sparkles, text: "Tela AMOLED", description: "Cores vivas" }
    ],
    whatsappMessage: "Olá! Gostaria de comprar o Xiaomi Redmi Note 12 128GB Azul"
  }
];

const phoneNumber = "5527996144142";

export default function PremiumTechProductsSection() {
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

  const currentProduct = filteredProducts[currentIndex];

  const getBatteryColor = (health: string) => {
    const percentage = parseInt(health);
    if (percentage >= 90) return 'from-green-500 to-emerald-400';
    if (percentage >= 80) return 'from-amber-500 to-orange-400';
    return 'from-red-500 to-pink-400';
  };

  const getBrandGradient = (brand: string) => {
    return brand === "Apple"
      ? 'from-blue-500 to-cyan-400'
      : 'from-orange-500 to-amber-400';
  };

  return (
    <section id="produtos" className="py-20 bg-gradient-to-br from-gray-900 via-gray-950 to-black min-h-screen">
      {/* Efeitos de Background Sutil */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/3 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Premium */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-8 rounded-full"
          />

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Tech
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Selection
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            Smartphones premium selecionados. Qualidade verificada e garantia de performance.
          </motion.p>
        </motion.div>

        {/* Filtros Elegantes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex justify-center gap-3 mb-16"
        >
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
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 backdrop-blur-sm border ${filter === filterItem.key
                  ? `bg-gradient-to-r ${getBrandGradient(filterItem.key === 'all' ? 'apple' : filterItem.key)} text-white shadow-2xl border-transparent`
                  : 'bg-gray-800/50 text-gray-300 border-gray-700 hover:bg-gray-700/50'
                }`}
            >
              {filterItem.label}
              <span className="ml-2 text-sm opacity-90">({filterItem.count})</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Produto Principal - Design Inovador */}
        <motion.div
          key={currentProduct.id}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative mb-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Lado Esquerdo - Imagem com Efeito Tech */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700/50 shadow-2xl">
                {/* Container da Imagem com Efeito Glass */}
                <div className="relative h-96 bg-gradient-to-b from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-cyan-500/20">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5"></div>

                  {/* Imagem do Produto */}
                  <div className="w-full h-full flex items-center justify-center p-4"> {/* Reduzi o padding para dar mais espaço */}
                    <motion.div
                      className="relative w-80 h-96"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={currentProduct.image}
                        alt={currentProduct.name}
                        fill
                        className="object-contain drop-shadow-2xl"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                      />
                    </motion.div>
                  </div>

                  {/* Efeito de Brilho */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent"></div>
                </div>

                {/* Badges Flutuantes */}
                <div className="absolute -top-4 left-6 right-6 flex justify-between">
                  <motion.span
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className={`px-4 py-2 rounded-xl font-bold text-sm bg-gradient-to-r ${getBatteryColor(currentProduct.batteryHealth)} text-white shadow-lg`}
                  >
                    🔋 {currentProduct.batteryHealth}
                  </motion.span>

                  <motion.span
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className={`px-4 py-2 rounded-xl font-bold text-sm bg-gradient-to-r ${getBrandGradient(currentProduct.brand)} text-white shadow-lg`}
                  >
                    {currentProduct.brand}
                  </motion.span>
                </div>
              </div>
            </motion.div>

            {/* Lado Direito - Informações */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="space-y-8"
            >
              {/* Header do Produto */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-2">
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className={`px-3 py-1 rounded-lg text-sm font-bold ${currentProduct.condition === "Novo"
                        ? "bg-green-500/20 text-green-400 border border-green-500/30"
                        : "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                      }`}
                  >
                    {currentProduct.condition}
                  </motion.span>
                  <span className="text-cyan-400 font-semibold">{currentProduct.storage}</span>
                </div>

                <h3 className="text-4xl font-bold text-white leading-tight">
                  {currentProduct.name}
                </h3>

                <p className="text-xl text-gray-300 leading-relaxed">
                  {currentProduct.description}
                </p>
              </div>

              {/* Features em Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {currentProduct.features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      whileHover={{ scale: 1.02, y: -2 }}
                      className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Icon size={20} className="text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-white text-lg">{feature.text}</div>
                        <div className="text-cyan-400/80 text-sm">{feature.description}</div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Preço e Ação */}
              <div className="space-y-6 pt-4">
                <div className="flex items-baseline gap-4">
                  <span className="text-5xl font-bold text-white">{currentProduct.price}</span>
                  <span className="text-cyan-400 text-lg">à vista</span>
                </div>

                <div className="flex items-center gap-6 text-cyan-400 font-semibold">
                  <span className="flex items-center gap-2">
                    <Check size={18} className="text-green-400" />
                    12x sem juros
                  </span>
                  <span className="flex items-center gap-2">
                    <Shield size={18} className="text-green-400" />
                    Garantia 6 meses
                  </span>
                </div>

                <motion.a
                  href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(currentProduct.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-4 w-full px-8 py-5 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-2xl font-bold text-lg transition-all duration-300 shadow-2xl shadow-cyan-500/25 group/btn"
                >
                  <Smartphone size={24} className="group-hover/btn:scale-110 transition-transform duration-300" />
                  <span>Comprar no WhatsApp</span>
                  <Zap size={20} className="group-hover/btn:animate-pulse" />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Navegação e Miniaturas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="space-y-8"
        >
          {/* Navegação Principal */}
          <div className="flex justify-center gap-4">
            <motion.button
              onClick={prevSlide}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white rounded-2xl font-semibold transition-all duration-300 border border-gray-700 flex items-center gap-3"
            >
              ← Anterior
            </motion.button>

            <div className="flex items-center gap-3">
              {filteredProducts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                      ? 'bg-cyan-400 scale-125 shadow-lg shadow-cyan-400/50'
                      : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                />
              ))}
            </div>

            <motion.button
              onClick={nextSlide}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-2xl font-semibold transition-all duration-300 flex items-center gap-3"
            >
              Próximo →
            </motion.button>
          </div>

          {/* Grid de Miniaturas */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {filteredProducts.map((product, index) => (
              <motion.button
                key={product.id}
                onClick={() => goToSlide(index)}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`relative rounded-2xl p-6 text-center transition-all duration-300 border-2 backdrop-blur-sm overflow-hidden group ${index === currentIndex
                    ? 'border-cyan-400 bg-cyan-500/10 shadow-2xl shadow-cyan-400/25'
                    : 'border-gray-700 bg-gray-800/30 hover:border-cyan-500/50'
                  }`}
              >
                {/* Efeito de fundo gradiente */}
                <div className={`absolute inset-0 bg-gradient-to-br ${getBrandGradient(product.brand)} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 mx-auto mb-4">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={64}
                      height={64}
                      className="object-contain w-full h-full group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="text-sm font-bold text-white truncate">
                      {product.name.split(' ')[0]}
                    </div>
                    <div className="text-xs text-cyan-400 font-semibold">
                      {product.storage}
                    </div>
                    <div className="text-lg font-bold text-cyan-400">
                      {product.price}
                    </div>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* CTA Final Premium */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-950/80 backdrop-blur-sm border border-cyan-500/20 rounded-3xl p-12 max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-6">
              Encontrou o ideal?
            </h3>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Nossos especialistas estão prontos para te ajudar a escolher o smartphone perfeito para suas necessidades.
            </p>
            <motion.a
              href={`https://wa.me/${phoneNumber}?text=Olá! Gostaria de consultar a disponibilidade de outros modelos premium`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-2xl font-bold text-xl transition-all duration-300 shadow-2xl shadow-cyan-500/25"
            >
              <Smartphone size={24} />
              <span>Falar com Especialista</span>
              <Sparkles size={20} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}