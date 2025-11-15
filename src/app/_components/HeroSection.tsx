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

export default function OptimizedHeroSection() {
    return (
        <section className="relative bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white py-16 md:py-20 overflow-hidden">
            {/* Background Elements - Reduzidos */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-10 -right-10 w-48 h-48 md:-top-20 md:-right-20 md:w-96 md:h-96 bg-cyan-500/5 rounded-full blur-xl md:blur-3xl"></div>
                <div className="absolute -bottom-10 -left-10 w-48 h-48 md:-bottom-20 md:-left-20 md:w-96 md:h-96 bg-blue-500/5 rounded-full blur-xl md:blur-3xl"></div>
            </div>

            <motion.div
                className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
                variants={containerVariants}
                initial="hidden"
                animate="show"
            >
                {/* Conteúdo Principal - Centralizado */}
                <div className="text-center">

                    {/* Link para produtos - APENAS NO DESKTOP */}
                    <motion.a
                        href="#produtos"
                        variants={itemVariants}
                        className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-400 hover:text-cyan-300 hover:border-cyan-400/50 transition-all duration-200 mb-8 group text-base"
                    >
                        <Smartphone size={16} className="text-cyan-400" />
                        <span>#produtos</span>
                        <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-200" />
                    </motion.a>

                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "60px" }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-6 md:mb-8 mx-auto"
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
                        className="text-base sm:text-lg text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed"
                    >
                        Reparo rápido, confiável e com <span className="text-cyan-400 font-semibold">garantia</span>. 
                        Especialistas em <span className="text-blue-400">Apple</span>, 
                        <span className="text-green-400"> Xiaomi</span> e todos os grandes fabricantes.
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-8"
                    >
                        <motion.a
                            href="#orcamento"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-bold rounded-lg md:rounded-xl transition-all duration-200 bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg hover:from-cyan-500 hover:to-blue-500"
                        >
                            <span className="flex items-center gap-2">
                                <Smartphone size={18} />
                                Solicitar Orçamento
                            </span>
                        </motion.a>
                        
                        <motion.a
                            href="#servicos"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-semibold rounded-lg md:rounded-xl transition-all duration-200 border border-gray-600 text-gray-300 hover:border-cyan-500 hover:text-cyan-400"
                        >
                            <span className="flex items-center gap-2">
                                <Shield size={18} />
                                Nossos Serviços
                            </span>
                        </motion.a>
                    </motion.div>

                    {/* Link para produtos - APENAS NO MOBILE */}
                    <motion.div
                        variants={itemVariants}
                        className="md:hidden"
                    >
                        <motion.a
                            href="#produtos"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-400 hover:text-cyan-300 hover:border-cyan-400/50 transition-all duration-200"
                        >
                            <Smartphone size={18} />
                            <span>Ver celulares novos e usados</span>
                            <ArrowRight size={16} />
                        </motion.a>
                    </motion.div>
                </div>

                {/* Imagem do Celular - CENTRALIZADA E SEM FLUTUAÇÃO */}
                <motion.div
                    className="flex justify-center relative w-full max-w-xs sm:max-w-sm md:max-w-lg mx-auto mt-8 md:mt-12 h-[250px] sm:h-[350px] md:h-[400px]"
                    variants={itemVariants}
                >
                    <div className="relative w-full h-full">
                        <Image
                            src="/phone-flutuante-tech-removebg-preview.png"
                            alt="Celular VitorCell - Assistência Técnica"
                            fill
                            style={{ objectFit: 'contain' }}
                            priority
                            className="drop-shadow-lg"
                            sizes="(max-width: 768px) 80vw, (max-width: 1200px) 60vw, 50vw"
                        />
                    </div>
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