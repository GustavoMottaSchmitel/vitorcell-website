import { Variants } from 'framer-motion';

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

export const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.9,
    rotateX: -10
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

export const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -20,
    scale: 0.95
  },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

export const statVariants: Variants = {
  hidden: { scale: 0, opacity: 0 },
  show: (i: number) => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay: i * 0.1 + 0.8,
      duration: 0.5,
      ease: "backOut"
    }
  })
};

// Função auxiliar para animação do carrossel (não é um Variant)
export const getCarouselAnimation = (currentIndex: number) => ({
  x: `-${currentIndex * 100}%`,
  transition: {
    duration: 0.8,
    ease: "easeInOut" as const
  }
});