import { useState, useEffect, useCallback } from 'react';
import { CarouselState } from '@/app/types/testimonial';

export const useTestimonials = (totalItems: number) => {
  const [state, setState] = useState<CarouselState>({
    currentIndex: 0,
    isHovered: false,
    visibleCards: 3
  });

  // Configurações responsivas
  const getVisibleCards = useCallback(() => {
    if (typeof window === 'undefined') return 3;

    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setState(prev => ({
        ...prev,
        visibleCards: getVisibleCards()
      }));
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [getVisibleCards]);

  const maxIndex = totalItems - state.visibleCards;

  const nextSlide = useCallback(() => {
    setState(prev => ({
      ...prev,
      currentIndex: prev.currentIndex >= maxIndex ? 0 : prev.currentIndex + 1
    }));
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setState(prev => ({
      ...prev,
      currentIndex: prev.currentIndex === 0 ? maxIndex : prev.currentIndex - 1
    }));
  }, [maxIndex]);

  const goToSlide = (index: number) => {
    setState(prev => ({ ...prev, currentIndex: index }));
  };

  const setIsHovered = (isHovered: boolean) => {
    setState(prev => ({ ...prev, isHovered }));
  };

  // Autoplay
  useEffect(() => {
    if (!state.isHovered) {
      const interval = setInterval(nextSlide, 5000);
      return () => clearInterval(interval);
    }
  }, [state.isHovered, nextSlide]);

  return {
    ...state,
    maxIndex,
    nextSlide,
    prevSlide,
    goToSlide,
    setIsHovered
  };
};