import { useState, useMemo } from 'react';
import { Product, ProductFilter } from '@/app/types/product';
import { products } from '@/app/data/products';

export const useProducts = (initialFilter: ProductFilter = 'all') => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filter, setFilter] = useState<ProductFilter>(initialFilter);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      if (filter === 'all') return true;
      return product.brand === (filter === 'apple' ? 'Apple' : 'Xiaomi');
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
    handleFilterChange
  };
};