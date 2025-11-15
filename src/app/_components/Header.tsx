'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, Smartphone, DollarSign, MapPin, Mail, Phone, ShoppingCart } from 'lucide-react';

const navLinks = [
    { name: "Serviços", href: "#servicos", icon: Smartphone },
    { name: "Orçamento", href: "#orcamento", icon: DollarSign },
    { name: "Localização", href: "#orcamento", icon: MapPin },
    { name: "Contato", href: "#orcamento", icon: Mail },
    { name: "Produtos", href: "#produtos", icon: ShoppingCart }
];

export default function UltraLightHeader() {
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
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-colors duration-150 ${
                isScrolled
                    ? 'bg-gray-950 border-b border-gray-800'
                    : 'bg-transparent'
            }`}
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <nav className="flex items-center justify-between h-14">

                    {/* Logo Ultra Leve */}
                    <a
                        href='#'
                        className='flex items-center space-x-2 z-50'
                    >
                        <Image
                            src="/logo-vitorcell.png"
                            alt="VitorCell - Assistência Técnica"
                            width={32}
                            height={32}
                            priority
                            className="w-8 h-8"
                        />
                        <div className="hidden sm:block">
                            <span className="text-base font-bold text-white">VitorCell</span>
                            <span className="text-cyan-400 text-xs block">Assistência Técnica</span>
                        </div>
                    </a>

                    {/* Menu Desktop Ultra Leve */}
                    <div className="hidden lg:flex items-center space-x-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                            >
                                {link.name}
                            </a>
                        ))}

                        {/* Botão de WhatsApp Ultra Leve */}
                        <a
                            href="https://wa.me/5527996144142"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-1 px-3 py-1.5 text-sm font-medium rounded bg-cyan-600 text-white hover:bg-cyan-500 transition-colors"
                        >
                            <Phone size={14} />
                            <span>Orçamento</span>
                        </a>
                    </div>

                    {/* Botão Mobile Toggle Ultra Leve */}
                    <button
                        onClick={toggleMenu}
                        className="lg:hidden p-1 text-gray-300 hover:text-cyan-400 z-50 transition-colors"
                        aria-label="Toggle Menu"
                    >
                        {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
                    </button>
                </nav>
            </div>

            {/* Menu Mobile Ultra Leve */}
            {isMenuOpen && (
                <div className="lg:hidden absolute top-14 left-0 w-full bg-gray-950 border-b border-gray-800">
                    <div className="flex flex-col p-3 space-y-2">
                        {navLinks.map((link) => {
                            const Icon = link.icon;
                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="flex items-center space-x-2 py-2 text-gray-300 hover:text-cyan-400 transition-colors border-b border-gray-800 last:border-b-0"
                                >
                                    <Icon size={16} className="text-cyan-500" />
                                    <span className="text-sm">{link.name}</span>
                                </a>
                            );
                        })}

                        {/* Botão WhatsApp Mobile Ultra Leve */}
                        <a
                            href="https://wa.me/5527996144142"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsMenuOpen(false)}
                            className="flex items-center justify-center space-x-1 mt-1 px-3 py-2 text-sm font-medium rounded bg-cyan-600 text-white hover:bg-cyan-500 transition-colors"
                        >
                            <Phone size={14} />
                            <span>WhatsApp</span>
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}