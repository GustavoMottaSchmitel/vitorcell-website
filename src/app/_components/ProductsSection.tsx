'use client';

import { motion } from 'framer-motion';
import { Search, Smartphone, Filter, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';

import { products, phoneNumber, getFilterOptions } from '@/app/data/products';
import { useProducts } from '@/app/hooks/useProducts';
import { getBrandGradient, getConditionStyles, getWhatsAppUrl } from '@/app/utils/productHelpers';

// Componente de Card de Produto
const ProductCard = ({ product }: { product: any }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ y: -5, scale: 1.02 }}
    className="group relative bg-gradient-to-br from-gray-900/80 to-gray-950/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:border-cyan-500/30 transition-all duration-300"
  >
    {/* Badge de Condição */}
    <div className={`absolute -top-2 -right-2 px-3 py-1 rounded-full text-xs font-bold ${getConditionStyles(product.condition)} z-10`}>
      {product.condition}
    </div>

    {/* Imagem do Produto */}
    <div className="relative h-48 mb-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden">
      <Image
        src={product.image}
        alt={product.name}
        fill
        className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      {/* Overlay gradiente */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent"></div>
    </div>

    {/* Informações do Produto */}
    <div className="space-y-3">
      {/* Marca */}
      <div className={`inline-flex items-center px-2 py-1 rounded-lg text-xs font-semibold bg-gradient-to-r ${getBrandGradient(product.brand)} text-white`}>
        {product.brand}
      </div>

      {/* Nome */}
      <h3 className="text-lg font-bold text-white line-clamp-2 group-hover:text-cyan-100 transition-colors">
        {product.name}
      </h3>

      {/* Descrição */}
      <p className="text-gray-400 text-sm line-clamp-2 leading-relaxed">
        {product.description}
      </p>

      {/* Preço */}
      <div className="text-2xl font-bold text-cyan-400">
        {product.price}
      </div>

      {/* Informações para Consulta */}
      <div className="space-y-2 pt-2 border-t border-gray-700/50">
        <div className="flex justify-between text-xs text-gray-400">
          <span>💾 {product.storage}</span>
          <span>🎨 {product.color}</span>
        </div>
        {product.condition === 'Seminovo' && (
          <div className="text-xs text-gray-400">
            🔋 {product.batteryHealth}
          </div>
        )}
      </div>

      {/* Botão WhatsApp */}
      <motion.a
        href={getWhatsAppUrl(phoneNumber, product.whatsappMessage)}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-green-500/20"
      >
        <Smartphone size={18} />
        Consultar
      </motion.a>
    </div>
  </motion.div>
);

// Componente de Paginação
const Pagination = ({ currentPage, totalPages, goToPage, nextPage, prevPage }: any) => {
  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-2 mt-12">
      <motion.button
        onClick={prevPage}
        disabled={currentPage === 1}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="p-2 rounded-lg bg-gray-800/50 border border-gray-700/50 text-gray-400 hover:text-white hover:border-cyan-500/30 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
      >
        <ChevronLeft size={20} />
      </motion.button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
        <motion.button
          key={page}
          onClick={() => goToPage(page)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
            currentPage === page
              ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
              : 'bg-gray-800/50 border border-gray-700/50 text-gray-400 hover:text-white hover:border-cyan-500/30'
          }`}
        >
          {page}
        </motion.button>
      ))}

      <motion.button
        onClick={nextPage}
        disabled={currentPage === totalPages}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="p-2 rounded-lg bg-gray-800/50 border border-gray-700/50 text-gray-400 hover:text-white hover:border-cyan-500/30 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
      >
        <ChevronRight size={20} />
      </motion.button>
    </div>
  );
};

// Componente Principal
export default function LightweightProductsSection() {
  const {
    filteredProducts,
    allFilteredProducts,
    filter,
    searchTerm,
    currentPage,
    totalPages,
    handleConditionChange,
    handleBrandChange,
    handleSearchChange,
    goToPage,
    nextPage,
    prevPage
  } = useProducts();

  const filterOptions = getFilterOptions(products, filter);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  return (
    <section id="produtos" className="relative py-16 md:py-24 bg-gradient-to-b from-gray-950 to-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            className="h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-6 rounded-full"
          />

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Nossos
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Celulares
            </span>
          </h2>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Encontre o celular perfeito entre novos e seminovos
          </p>
        </motion.div>

        {/* Barra de Pesquisa e Filtros */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-8 space-y-4"
        >
          {/* Barra de Pesquisa */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Pesquisar por modelo, marca..."
              value={searchTerm}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-gray-900/50 border border-gray-700/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:bg-gray-800/30 transition-all duration-300 backdrop-blur-sm"
            />
          </div>

          {/* Botão Mobile Filters */}
          <button
            onClick={() => setShowMobileFilters(!showMobileFilters)}
            className="lg:hidden flex items-center gap-2 px-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-xl text-gray-300 mx-auto"
          >
            <Filter size={16} />
            Filtros
          </button>

          {/* Filtros */}
          <div className={`flex flex-col lg:flex-row gap-4 justify-center ${showMobileFilters ? 'block' : 'hidden lg:flex'}`}>
            {/* Filtro Condição */}
            <div className="flex gap-2 justify-center">
              {filterOptions.conditionOptions.map((filterItem) => (
                <motion.button
                  key={filterItem.key}
                  onClick={() => handleConditionChange(filterItem.key as any)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-xl font-semibold transition-all duration-300 ${
                    filter.condition === filterItem.key
                      ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg'
                      : 'bg-gray-800/50 text-gray-300 border border-gray-700/50 hover:bg-gray-700/50'
                  }`}
                >
                  {filterItem.label}
                  <span className="ml-2 text-sm opacity-90">({filterItem.count})</span>
                </motion.button>
              ))}
            </div>

            {/* Filtro Marca */}
            <div className="flex gap-2 justify-center">
              {filterOptions.brandOptions.map((filterItem) => (
                <motion.button
                  key={filterItem.key}
                  onClick={() => handleBrandChange(filterItem.key as any)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-xl font-semibold transition-all duration-300 ${
                    filter.brand === filterItem.key
                      ? `bg-gradient-to-r ${
                          filterItem.key === 'apple' 
                            ? 'from-blue-500 to-cyan-400' 
                            : filterItem.key === 'xiaomi'
                            ? 'from-orange-500 to-amber-400'
                            : 'from-cyan-600 to-blue-600'
                        } text-white shadow-lg`
                      : 'bg-gray-800/50 text-gray-300 border border-gray-700/50 hover:bg-gray-700/50'
                  }`}
                >
                  {filterItem.label}
                  <span className="ml-2 text-sm opacity-90">({filterItem.count})</span>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Contador de Resultados */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-8"
        >
          <p className="text-gray-400">
            {allFilteredProducts.length} {allFilteredProducts.length === 1 ? 'produto encontrado' : 'produtos encontrados'}
          </p>
        </motion.div>

        {/* Grid de Produtos */}
        {filteredProducts.length > 0 ? (
          <>
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </motion.div>

            {/* Paginação */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              goToPage={goToPage}
              nextPage={nextPage}
              prevPage={prevPage}
            />
          </>
        ) : (
          // Estado vazio
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <div className="text-gray-400 text-lg">
              Nenhum produto encontrado com os filtros selecionados.
            </div>
            <button
              onClick={() => {
                handleSearchChange('');
                handleConditionChange('all');
                handleBrandChange('all');
              }}
              className="mt-4 px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl font-semibold transition-all duration-300"
            >
              Limpar Filtros
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}