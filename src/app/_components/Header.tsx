'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, Smartphone, DollarSign, MapPin, Mail, Phone, ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

// Array de links para navegação
const navLinks = [
    { name: "Serviços", href: "#servicos", icon: Smartphone },
    { name: "Orçamento", href: "#orcamento", icon: DollarSign },
    { name: "Localização", href: "#localizacao", icon: MapPin },
    { name: "Contato", href: "#contato", icon: Mail },
    { name: "Produtos", href: "#produtos", icon: ShoppingCart}
];

const headerVariants: Variants = {
    initial: { y: -100, opacity: 0 },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 20,
            delay: 0.1
        }
    }
};

const linkVariants: Variants = {
    initial: { y: -20, opacity: 0 },
    animate: { 
        y: 0, 
        opacity: 1,
        transition: {
            duration: 0.4,
            ease: "easeOut"
        }
    }
};

const mobileMenuVariants: Variants = {
    closed: {
        opacity: 0,
        height: 0,
        transition: {
            duration: 0.3,
            ease: "easeInOut"
        }
    },
    open: {
        opacity: 1,
        height: "auto",
        transition: {
            duration: 0.4,
            ease: "easeInOut"
        }
    }
};

const mobileItemVariants: Variants = {
    closed: { x: -20, opacity: 0 },
    open: { x: 0, opacity: 1 }
};

export default function RefinedHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <motion.header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                isScrolled 
                    ? 'bg-gray-950/95 backdrop-blur-lg border-b border-gray-800/30' 
                    : 'bg-transparent backdrop-blur-md'
            }`}
            variants={headerVariants}
            initial='initial'
            animate='animate'
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <nav className="flex items-center justify-between h-20">

                    {/* Logo */}
                    <motion.a
                        href='#'
                        className='flex items-center space-x-3 z-50 group'
                        variants={linkVariants}
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className="relative">
                            <Image
                                src="/logo-vitorcell.png"
                                alt="VitorCell - Assistência Técnica"
                                width={40}
                                height={40}
                                priority
                                className="w-10 h-10"
                            />
                            <div className="absolute inset-0 bg-cyan-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        <div className="hidden sm:block">
                            <span className="text-xl font-bold text-white block leading-none">VitorCell</span>
                            <span className="text-cyan-400 text-xs font-medium block leading-none">Assistência Técnica</span>
                        </div>
                    </motion.a>

                    {/* Menu Desktop */}
                    <motion.div 
                        className="hidden lg:flex items-center space-x-8"
                        variants={{
                            animate: {
                                transition: {
                                    staggerChildren: 0.1,
                                    delayChildren: 0.3
                                }
                            }
                        }}
                    >
                        {navLinks.map((link) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                variants={linkVariants}
                                className="relative text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium text-sm tracking-wide group"
                                whileHover={{ y: -1 }}
                            >
                                {link.name}
                                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-500 group-hover:w-full transition-all duration-300" />
                            </motion.a>
                        ))}

                        {/* Botão de WhatsApp */}
                        <motion.a
                            href="https://wa.me/5527999765211"
                            target="_blank"
                            rel="noopener noreferrer"
                            variants={linkVariants}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center space-x-2 px-5 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 bg-cyan-600 text-white hover:bg-cyan-500 shadow-lg shadow-cyan-600/25"
                        >
                            <Phone size={16} />
                            <span>Orçamento</span>
                        </motion.a>
                    </motion.div>

                    {/* Botão Mobile Toggle */}
                    <motion.button
                        onClick={toggleMenu}
                        className="lg:hidden p-2 text-gray-300 hover:text-cyan-400 z-50 transition-colors rounded-lg hover:bg-gray-800/50"
                        aria-label="Toggle Menu"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </motion.button>
                </nav>
            </div>

            {/* Menu Mobile */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        variants={mobileMenuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        className="lg:hidden absolute top-20 left-0 w-full bg-gray-950/95 backdrop-blur-lg border-b border-gray-800/30"
                    >
                        <motion.div 
                            className="flex flex-col space-y-1 p-6"
                            variants={{
                                open: {
                                    transition: {
                                        staggerChildren: 0.1,
                                        delayChildren: 0.2
                                    }
                                }
                            }}
                        >
                            {navLinks.map((link) => {
                                const Icon = link.icon;
                                return (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        variants={mobileItemVariants}
                                        className="flex items-center space-x-4 py-4 text-lg text-gray-300 hover:text-cyan-400 transition-colors duration-200 border-b border-gray-800/50 last:border-b-0 group"
                                        whileHover={{ x: 4 }}
                                    >
                                        <Icon size={20} className="text-cyan-500 group-hover:scale-110 transition-transform duration-200" />
                                        <span>{link.name}</span>
                                    </motion.a>
                                );
                            })}
                            
                            {/* Botão WhatsApp Mobile */}
                            <motion.a
                                href="https://wa.me/5527999765211"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setIsMenuOpen(false)}
                                variants={mobileItemVariants}
                                className="flex items-center justify-center space-x-2 mt-4 px-6 py-3 text-base font-semibold rounded-xl bg-cyan-600 text-white hover:bg-cyan-500 transition-colors duration-300 shadow-lg shadow-cyan-600/25"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Phone size={18} />
                                <span>Falar no WhatsApp</span>
                            </motion.a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}