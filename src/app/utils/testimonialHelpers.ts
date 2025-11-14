import { Variants, Transition } from 'framer-motion';

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

// Versão corrigida com tipagem correta
export const getCarouselAnimation = (currentIndex: number, visibleCards: number) => ({
  x: `-${currentIndex * (100 / visibleCards)}%`,
  transition: {
    type: "spring" as const,
    stiffness: 300,
    damping: 30
  }
});

export const buttonVariants = {
  whileHover: { scale: 1.1 },
  whileTap: { scale: 0.9 }
};