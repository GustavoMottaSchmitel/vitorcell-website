'use client';

import { motion, Variants } from "framer-motion";
import Image from 'next/image';
import React from 'react';

// Variantes de animação
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    }
};

const phoneVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, x: 50 },
    show: {
        opacity: 1,
        scale: 1,
        x: 0,
        transition: {
            duration: 1,
            delay: 0.4,
            ease: [0.25, 0.1, 0.25, 1]
        }
    }
};

const floatAnimation: Variants = {
    float: {
        y: [0, -15, 0],
        transition: {
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop"
        }
    }
};

export default function RefinedHeroSection() {
    return (
        <section className="relative bg-gradient-to-b from-gray-950 to-black text-white py-20 md:py-28 overflow-hidden">

            {/* Background Elements Sutis */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/3 rounded-full blur-3xl"></div>
            </div>

            <motion.div
                className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center justify-between"
                variants={containerVariants}
                initial="hidden"
                animate="show"
            >
                {/* Conteúdo Principal */}
                <div className="lg:w-1/2 mb-16 lg:mb-0 text-center lg:text-left">

                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "80px" }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="h-1 bg-cyan-500 rounded-full mb-8 mx-auto lg:mx-0"
                    />

                    <motion.h1
                        variants={itemVariants}
                        className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
                    >
                        Seu celular
                        <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                            novo de novo
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="text-xl text-gray-400 mb-8 max-w-lg leading-relaxed mx-auto lg:mx-0"
                    >
                        Reparo rápido, confiável e com garantia. Especialistas em Apple,
                        Samsung e todos os grandes fabricantes.
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                    >
                        <motion.a
                            href="#orcamento"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 text-lg font-bold rounded-xl transition-all duration-300 bg-cyan-600 text-white shadow-lg shadow-cyan-600/25 hover:bg-cyan-500 hover:shadow-cyan-500/30"
                        >
                            Solicitar Orçamento
                        </motion.a>
                        <motion.a
                            href="#servicos"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 border-2 border-gray-600 text-gray-300 hover:border-cyan-500 hover:text-cyan-400"
                        >
                            Nossos Serviços
                        </motion.a>
                    </motion.div>

                    {/* Informações de Confiança */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-wrap justify-center lg:justify-start gap-6 mt-12 text-gray-400"
                    >
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            <span className="text-sm">+100 clientes satisfeitos</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                            <span className="text-sm">Garantia em todos os serviços</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                            <span className="text-sm">Peças originais</span>
                        </div>
                    </motion.div>
                </div>

                {/* Imagem do Celular */}
                <motion.div
                    className="lg:w-1/2 flex justify-center relative w-full max-w-md h-[500px] md:h-[600px]"
                    variants={phoneVariants}
                >
                    <motion.div
                        className="relative w-full h-full flex items-center justify-center"
                        variants={floatAnimation}
                        animate="float"
                    >
                        {/* Imagem do Celular */}
                        <div className="relative w-full h-full">
                            <Image
                                src="/phone-flutuante-tech-removebg-preview.png"
                                alt="Celular VitorCell - Assistência Técnica"
                                fill
                                style={{ objectFit: 'contain' }}
                                priority
                                className="drop-shadow-2xl"
                            />
                        </div>

                        {/* Efeito de brilho sutil atrás do celular */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-64 h-64 bg-cyan-500/10 rounded-full blur-2xl"></div>
                        </div>
                    </motion.div>
                </motion.div>

            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-6 h-10 border-2 border-cyan-500/50 rounded-full flex justify-center"
                >
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-1 h-3 bg-cyan-500 rounded-full mt-2"
                    />
                </motion.div>
            </motion.div>
        </section>
    );
}