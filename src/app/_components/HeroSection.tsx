'use client';

import { motion, Variants } from "framer-motion";
import Image from 'next/image';
import { Smartphone, Shield, ArrowRight } from 'lucide-react';

// Variantes de animação otimizadas
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

const phoneVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.8,
            delay: 0.3
        }
    }
};

// Animação apenas para desktop
const floatAnimation: Variants = {
    float: {
        y: [0, -15, 0],
        transition: {
            duration: 6,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop"
        }
    }
};

export default function OptimizedHeroSection() {
    return (
        <section className="relative bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white py-16 md:py-24 overflow-hidden">
            {/* Background Elements - Reduzidos para mobile */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-10 -right-10 w-48 h-48 md:-top-20 md:-right-20 md:w-96 md:h-96 bg-cyan-500/5 rounded-full blur-xl md:blur-3xl"></div>
                <div className="absolute -bottom-10 -left-10 w-48 h-48 md:-bottom-20 md:-left-20 md:w-96 md:h-96 bg-blue-500/5 rounded-full blur-xl md:blur-3xl"></div>
                
                {/* Grid sutil apenas no desktop */}
                <div className="hidden md:block absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
                
                {/* Partículas apenas no desktop */}
                <motion.div
                    className="hidden md:block absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full"
                    animate={{
                        y: [0, -20, 0],
                        opacity: [0, 1, 0]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: 0
                    }}
                />
            </div>

            <motion.div
                className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center justify-between"
                variants={containerVariants}
                initial="hidden"
                animate="show"
            >
                {/* Conteúdo Principal */}
                <div className="lg:w-1/2 mb-12 lg:mb-0 text-center lg:text-left">

                    {/* Link para produtos */}
                    <motion.a
                        href="#produtos"
                        variants={itemVariants}
                        className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-400 hover:text-cyan-300 hover:border-cyan-400/50 transition-all duration-200 mb-6 md:mb-8 group text-sm md:text-base"
                    >
                        <Smartphone size={14} className="text-cyan-400 md:w-4 md:h-4" />
                        <span>#produtos</span>
                        <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform duration-200 md:w-3 md:h-3" />
                    </motion.a>

                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "60px" }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-6 md:mb-8 mx-auto lg:mx-0"
                    />

                    <motion.h1
                        variants={itemVariants}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6"
                    >
                        Seu celular
                        <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                            novo de novo
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="text-base sm:text-lg text-gray-300 mb-6 md:mb-8 max-w-lg leading-relaxed mx-auto lg:mx-0"
                    >
                        Reparo rápido, confiável e com <span className="text-cyan-400 font-semibold">garantia</span>. 
                        Especialistas em <span className="text-blue-400">Apple</span>, 
                        <span className="text-green-400"> Xiaomi</span> e todos os grandes fabricantes.
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start"
                    >
                        <motion.a
                            href="#orcamento"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="group relative px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-bold rounded-lg md:rounded-xl transition-all duration-200 bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg md:shadow-xl shadow-cyan-600/20 hover:from-cyan-500 hover:to-blue-500"
                        >
                            <span className="relative flex items-center gap-2">
                                <Smartphone size={18} className="md:w-5 md:h-5" />
                                Solicitar Orçamento
                            </span>
                        </motion.a>
                        
                        <motion.a
                            href="#servicos"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="group px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-semibold rounded-lg md:rounded-xl transition-all duration-200 border border-gray-600 text-gray-300 hover:border-cyan-500 hover:text-cyan-400"
                        >
                            <span className="flex items-center gap-2">
                                <Shield size={18} className="md:w-5 md:h-5" />
                                Nossos Serviços
                            </span>
                        </motion.a>
                    </motion.div>

                    {/* Link para produtos - Versão Mobile */}
                    <motion.div
                        variants={itemVariants}
                        className="mt-6 lg:hidden"
                    >
                        <motion.a
                            href="#produtos"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-400 hover:text-cyan-300 hover:border-cyan-400/50 transition-all duration-200 text-sm"
                        >
                            <Smartphone size={16} />
                            <span>Ver celulares</span>
                            <ArrowRight size={14} />
                        </motion.a>
                    </motion.div>
                </div>

                {/* Imagem do Celular - Otimizada para mobile */}
                <motion.div
                    className="lg:w-1/2 flex justify-center relative w-full max-w-xs sm:max-w-sm md:max-w-md h-[300px] sm:h-[400px] md:h-[500px]"
                    variants={phoneVariants}
                >
                    <motion.div
                        className="relative w-full h-full flex items-center justify-center"
                        // Aplica animação apenas no desktop
                        {...(typeof window !== 'undefined' && window.innerWidth >= 768 ? {
                            variants: floatAnimation,
                            animate: "float"
                        } : {})}
                    >
                        {/* Efeito de brilho apenas no desktop */}
                        <motion.div
                            className="hidden md:block absolute w-48 h-48 md:w-80 md:h-80 bg-cyan-500/10 rounded-full blur-2xl"
                            animate={{
                                opacity: [0.2, 0.4, 0.2],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />

                        {/* Imagem do Celular */}
                        <div className="relative w-full h-full z-10">
                            <Image
                                src="/phone-flutuante-tech-removebg-preview.png"
                                alt="Celular VitorCell - Assistência Técnica"
                                fill
                                style={{ objectFit: 'contain' }}
                                priority
                                className="drop-shadow-xl"
                                sizes="(max-width: 768px) 80vw, (max-width: 1200px) 40vw, 35vw"
                            />
                        </div>

                        {/* Elementos flutuantes apenas no desktop */}
                        <motion.div
                            className="hidden md:block absolute -top-2 -right-2 w-4 h-4 bg-cyan-500/20 rounded-full blur-sm"
                            animate={{
                                y: [0, -5, 0],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                delay: 0.5
                            }}
                        />
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator - Apenas no desktop */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="hidden md:block absolute bottom-6 left-1/2 -translate-x-1/2 z-20"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex flex-col items-center gap-1"
                >
                    <div className="text-cyan-400/60 text-xs font-medium">Scroll</div>
                    <div className="w-4 h-6 border border-cyan-500/30 rounded-full flex justify-center">
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-0.5 h-2 bg-cyan-400 rounded-full mt-1"
                        />
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}