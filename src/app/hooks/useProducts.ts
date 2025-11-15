import { useState, useMemo } from 'react';
import { Product, ProductFilter, ProductCondition, ProductBrand } from '@/app/types/product';
import { products } from '@/app/data/products';

export const useProducts = (initialFilter: ProductFilter = { condition: 'all', brand: 'all' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filter, setFilter] = useState<ProductFilter>(initialFilter);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  const filteredProducts = useMemo(() => {
    let filtered = products.filter(product => {
      const conditionMatch =
        filter.condition === 'all' ||
        (filter.condition === 'new' && product.condition === 'Novo') ||
        (filter.condition === 'used' && product.condition === 'Seminovo');

      const brandMatch =
        filter.brand === 'all' ||
        (filter.brand === 'apple' && product.brand === 'Apple') ||
        (filter.brand === 'xiaomi' && product.brand === 'Xiaomi');

      const searchMatch =
        searchTerm === '' ||
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase());

      return conditionMatch && brandMatch && searchMatch;
    });

    return filtered;
  }, [filter, searchTerm]);

  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * productsPerPage;
    return filteredProducts.slice(startIndex, startIndex + productsPerPage);
  }, [filteredProducts, currentPage, productsPerPage]);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };

  return {
    currentIndex,
    currentProduct: filteredProducts[currentIndex],
    filteredProducts: paginatedProducts,
    allFilteredProducts: filteredProducts,
    filter,
    searchTerm,
    currentPage,
    totalPages,
    productsPerPage,
    nextSlide: () => setCurrentIndex((prev) => (prev + 1) % filteredProducts.length),
    prevSlide: () => setCurrentIndex((prev) => (prev - 1 + filteredProducts.length) % filteredProducts.length),
    goToSlide: (index: number) => setCurrentIndex(index),
    handleConditionChange: (condition: ProductCondition) => {
      setFilter(prev => ({ ...prev, condition }));
      setCurrentPage(1);
    },
    handleBrandChange: (brand: ProductBrand) => {
      setFilter(prev => ({ ...prev, brand }));
      setCurrentPage(1);
    },
    handleSearchChange: (term: string) => {
      setSearchTerm(term);
      setCurrentPage(1);
    },
    goToPage,
    nextPage,
    prevPage
  };
};