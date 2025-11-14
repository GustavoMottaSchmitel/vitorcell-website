import { useState, useEffect } from 'react';
import { BrandsCarouselState } from '@/app/types/service';

export const useBrandsCarousel = (brandsCount: number) => {
  const [state, setState] = useState<BrandsCarouselState>({
    currentIndex: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setState(prev => ({
        currentIndex: (prev.currentIndex + 1) % brandsCount
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, [brandsCount]);

  return state;
};