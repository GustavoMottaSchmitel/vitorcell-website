import { useState, useMemo } from 'react';
import { Product, ProductFilter, ProductCondition, ProductBrand } from '@/app/types/product';
import { products } from '@/app/data/products';

export const useProducts = (initialFilter: ProductFilter = { condition: 'all', brand: 'all' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filter, setFilter] = useState<ProductFilter>(initialFilter);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      // Filtro por condição
      const conditionMatch = 
        filter.condition === 'all' || 
        (filter.condition === 'new' && product.condition === 'Novo') ||
        (filter.condition === 'used' && product.condition === 'Seminovo');
      
      // Filtro por marca
      const brandMatch = 
        filter.brand === 'all' ||
        (filter.brand === 'apple' && product.brand === 'Apple') ||
        (filter.brand === 'xiaomi' && product.brand === 'Xiaomi');
      
      return conditionMatch && brandMatch;
    });
  }, [filter]);

  const currentProduct = filteredProducts[currentIndex];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredProducts.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredProducts.length) % filteredProducts.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handleConditionChange = (condition: ProductCondition) => {
    setFilter(prev => ({ ...prev, condition }));
    setCurrentIndex(0);
  };

  const handleBrandChange = (brand: ProductBrand) => {
    setFilter(prev => ({ ...prev, brand }));
    setCurrentIndex(0);
  };

  const handleFilterChange = (newFilter: ProductFilter) => {
    setFilter(newFilter);
    setCurrentIndex(0);
  };

  return {
    currentIndex,
    currentProduct,
    filteredProducts,
    filter,
    nextSlide,
    prevSlide,
    goToSlide,
    handleConditionChange,
    handleBrandChange,
    handleFilterChange
  };
};