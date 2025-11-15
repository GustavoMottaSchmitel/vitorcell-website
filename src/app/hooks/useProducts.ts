import { useState, useMemo } from 'react';
import { Product, ProductFilter, ProductCondition, ProductBrand } from '@/app/types/product';
import { products } from '@/app/data/products';

export const useProducts = (initialFilter: ProductFilter = { condition: 'all', brand: 'all' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filter, setFilter] = useState<ProductFilter>(initialFilter);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9; // Mostrar 9 produtos por página

  const filteredProducts = useMemo(() => {
    let filtered = products.filter(product => {
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

      // Filtro por pesquisa
      const searchMatch =
        searchTerm === '' ||
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase());

      return conditionMatch && brandMatch && searchMatch;
    });

    return filtered;
  }, [filter, searchTerm]);

  // Produtos paginados
  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * productsPerPage;
    return filteredProducts.slice(startIndex, startIndex + productsPerPage);
  }, [filteredProducts, currentPage, productsPerPage]);

  // Total de páginas
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

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
    setCurrentPage(1); // Reset para primeira página
  };

  const handleBrandChange = (brand: ProductBrand) => {
    setFilter(prev => ({ ...prev, brand }));
    setCurrentIndex(0);
    setCurrentPage(1); // Reset para primeira página
  };

  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
    setCurrentPage(1); // Reset para primeira página
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return {
    currentIndex,
    currentProduct,
    filteredProducts: paginatedProducts,
    allFilteredProducts: filteredProducts,
    filter,
    searchTerm,
    currentPage,
    totalPages,
    productsPerPage,
    nextSlide,
    prevSlide,
    goToSlide,
    handleConditionChange,
    handleBrandChange,
    handleSearchChange,
    goToPage,
    nextPage,
    prevPage
  };
};