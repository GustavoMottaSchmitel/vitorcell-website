'use client';

import { motion, Variants } from "framer-motion";
import Image from 'next/image';
import { Smartphone, Shield, ArrowRight } from 'lucide-react';

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
        y: [0, -20, 0],
        rotate: [0, -2, 2, 0],
        transition: {
            duration: 6,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop"
        }
    }
};

const pulseGlow: Variants = {
    pulse: {
        opacity: [0.3, 0.6, 0.3],
        scale: [1, 1.05, 1],
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
        <section className="relative bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white py-20 md:py-32 overflow-hidden">
            {/* Container principal com overflow hidden */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Background Elements Melhorados */}
                <div className="absolute -top-20 -right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-2xl"></div>
                
                {/* Grid sutil de fundo */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
                
                {/* Partículas flutuantes */}
                <motion.div
                    className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full"
                    animate={{
                        y: [0, -30, 0],
                        x: [0, 20, 0],
                        opacity: [0, 1, 0]
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        delay: 0
                    }}
                />
                <motion.div
                    className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-400 rounded-full"
                    animate={{
                        y: [0, -40, 0],
                        x: [0, -15, 0],
                        opacity: [0, 1, 0]
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        delay: 1
                    }}
                />
                <motion.div
                    className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-purple-400 rounded-full"
                    animate={{
                        y: [0, 30, 0],
                        x: [0, 25, 0],
                        opacity: [0, 1, 0]
                    }}
                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        delay: 2
                    }}
                />
            </div>

            <motion.div
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center justify-between"
                variants={containerVariants}
                initial="hidden"
                animate="show"
            >
                {/* Conteúdo Principal */}
                <div className="lg:w-1/2 mb-16 lg:mb-0 text-center lg:text-left">

                    {/* Link para produtos */}
                    <motion.a
                        href="#produtos"
                        variants={itemVariants}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-400 hover:text-cyan-300 hover:border-cyan-400/50 transition-all duration-300 mb-8 group"
                    >
                        <Smartphone size={16} className="text-cyan-400" />
                        <span>#produtos</span>
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </motion.a>

                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "80px" }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-8 mx-auto lg:mx-0"
                    />

                    <motion.h1
                        variants={itemVariants}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
                    >
                        Seu celular
                        <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                            novo de novo
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="text-lg sm:text-xl text-gray-300 mb-8 max-w-lg leading-relaxed mx-auto lg:mx-0"
                    >
                        Reparo rápido, confiável e com <span className="text-cyan-400 font-semibold">garantia</span>. 
                        Especialistas em <span className="text-blue-400">Apple</span>, 
                        <span className="text-green-400"> Xiaomi</span> e todos os grandes fabricantes.
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                    >
                        <motion.a
                            href="#orcamento"
                            whileHover={{ 
                                scale: 1.05,
                                boxShadow: "0 20px 40px rgba(6, 182, 212, 0.3)"
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative px-8 py-4 text-lg font-bold rounded-xl transition-all duration-300 bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-2xl shadow-cyan-600/25 hover:from-cyan-500 hover:to-blue-500 overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <span className="relative flex items-center gap-2">
                                <Smartphone size={20} />
                                Solicitar Orçamento
                            </span>
                        </motion.a>
                        
                        <motion.a
                            href="#servicos"
                            whileHover={{ 
                                scale: 1.05,
                                borderColor: "#06b6d4"
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="group px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 border-2 border-gray-600 text-gray-300 hover:border-cyan-500 hover:text-cyan-400"
                        >
                            <span className="flex items-center gap-2">
                                <Shield size={20} />
                                Nossos Serviços
                            </span>
                        </motion.a>
                    </motion.div>

                    {/* Link para produtos - Versão Mobile */}
                    <motion.div
                        variants={itemVariants}
                        className="mt-8 lg:hidden"
                    >
                        <motion.a
                            href="#produtos"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-400 hover:text-cyan-300 hover:border-cyan-400/50 transition-all duration-300"
                        >
                            <Smartphone size={20} />
                            <span>Conhecer celulares novos e usados</span>
                            <ArrowRight size={16} />
                        </motion.a>
                    </motion.div>
                </div>

                {/* Imagem do Celular */}
                <motion.div
                    className="lg:w-1/2 flex justify-center relative w-full max-w-md h-[400px] sm:h-[500px] md:h-[600px]"
                    variants={phoneVariants}
                >
                    <motion.div
                        className="relative w-full h-full flex items-center justify-center"
                        variants={floatAnimation}
                        animate="float"
                    >
                        {/* Efeito de brilho pulsante atrás */}
                        <motion.div
                            className="absolute w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl"
                            variants={pulseGlow}
                            animate="pulse"
                        />

                        {/* Anéis concêntricos */}
                        <div className="absolute w-96 h-96 border border-cyan-500/10 rounded-full"></div>
                        <div className="absolute w-80 h-80 border border-blue-500/10 rounded-full"></div>
                        
                        {/* Imagem do Celular */}
                        <div className="relative w-full h-full z-10">
                            <Image
                                src="/phone-flutuante-tech-removebg-preview.png"
                                alt="Celular VitorCell - Assistência Técnica"
                                fill
                                style={{ objectFit: 'contain' }}
                                priority
                                className="drop-shadow-2xl"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                            />
                        </div>

                        {/* Elementos flutuantes ao redor */}
                        <motion.div
                            className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-500/20 rounded-full blur-sm"
                            animate={{
                                y: [0, -10, 0],
                                x: [0, 5, 0],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                delay: 0.5
                            }}
                        />
                        <motion.div
                            className="absolute -bottom-6 -left-6 w-6 h-6 bg-blue-500/20 rounded-full blur-sm"
                            animate={{
                                y: [0, 15, 0],
                                x: [0, -8, 0],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                delay: 1
                            }}
                        />
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
            >
                <motion.div
                    animate={{ y: [0, 12, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex flex-col items-center gap-2"
                >
                    <div className="text-cyan-400/70 text-sm font-medium">Scroll</div>
                    <div className="w-6 h-10 border-2 border-cyan-500/50 rounded-full flex justify-center">
                        <motion.div
                            animate={{ y: [0, 16, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-1 h-3 bg-gradient-to-b from-cyan-400 to-cyan-600 rounded-full mt-2"
                        />
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}