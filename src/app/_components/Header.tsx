'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, Smartphone, DollarSign, MapPin, Mail, Phone, ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    { name: "Serviços", href: "#servicos", icon: Smartphone },
    { name: "Orçamento", href: "#orcamento", icon: DollarSign },
    { name: "Localização", href: "#orcamento", icon: MapPin },
    { name: "Contato", href: "#orcamento", icon: Mail },
    { name: "Produtos", href: "#produtos", icon: ShoppingCart }
];

export default function OptimizedHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 30);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-200 ${
                isScrolled
                    ? 'bg-gray-950/90 backdrop-blur-sm border-b border-gray-800/20'
                    : 'bg-transparent'
            }`}
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <nav className="flex items-center justify-between h-16">

                    {/* Logo Otimizada */}
                    <a
                        href='#'
                        className='flex items-center space-x-2 z-50 group'
                    >
                        <div className="relative">
                            <Image
                                src="/logo-vitorcell.png"
                                alt="VitorCell - Assistência Técnica"
                                width={36}
                                height={36}
                                priority
                                className="w-9 h-9"
                            />
                        </div>
                        <div className="hidden sm:block">
                            <span className="text-lg font-bold text-white">VitorCell</span>
                            <span className="text-cyan-400 text-xs block">Assistência Técnica</span>
                        </div>
                    </a>

                    {/* Menu Desktop Otimizado */}
                    <div className="hidden lg:flex items-center space-x-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium text-sm relative group"
                            >
                                {link.name}
                                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-500 group-hover:w-full transition-all duration-200" />
                            </a>
                        ))}

                        {/* Botão de WhatsApp Otimizado */}
                        <a
                            href="https://wa.me/5527996144142"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 bg-cyan-600 text-white hover:bg-cyan-500"
                        >
                            <Phone size={16} />
                            <span>Orçamento</span>
                        </a>
                    </div>

                    {/* Botão Mobile Toggle Otimizado */}
                    <button
                        onClick={toggleMenu}
                        className="lg:hidden p-2 text-gray-300 hover:text-cyan-400 z-50 transition-colors rounded"
                        aria-label="Toggle Menu"
                    >
                        {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </nav>
            </div>

            {/* Menu Mobile Otimizado */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="lg:hidden absolute top-16 left-0 w-full bg-gray-950/95 backdrop-blur-sm border-b border-gray-800/30"
                    >
                        <div className="flex flex-col p-4 space-y-3">
                            {navLinks.map((link) => {
                                const Icon = link.icon;
                                return (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        initial={{ x: -10, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ duration: 0.2 }}
                                        className="flex items-center space-x-3 py-3 text-gray-300 hover:text-cyan-400 transition-colors duration-200 border-b border-gray-800/30 last:border-b-0"
                                    >
                                        <Icon size={18} className="text-cyan-500" />
                                        <span className="text-sm font-medium">{link.name}</span>
                                    </motion.a>
                                );
                            })}

                            {/* Botão WhatsApp Mobile Otimizado */}
                            <motion.a
                                href="https://wa.me/5527996144142"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setIsMenuOpen(false)}
                                initial={{ x: -10, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.2, delay: 0.1 }}
                                className="flex items-center justify-center space-x-2 mt-2 px-4 py-3 text-sm font-semibold rounded-lg bg-cyan-600 text-white hover:bg-cyan-500 transition-colors duration-200"
                            >
                                <Phone size={16} />
                                <span>Falar no WhatsApp</span>
                            </motion.a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}