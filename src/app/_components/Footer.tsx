'use client';

import { Phone, MapPin, Mail, Instagram, Facebook, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const PHONE_NUMBER = "+55 27 99614-4142";
const WHATSAPP_LINK = `https://wa.me/5527996144142`;
const ADDRESS = "R. Humberto de Campos, 307 - Parque Res. Laranjeiras, Serra - ES";
const ADDRESS_LINK = "https://www.google.com/maps/search/?api=1&query=R.+Humberto+de+Campos,+307,+Serra+-+ES";
const EMAIL = "assistenciavitorcel@gmail.com";

const navLinks = [
    { name: "Início", href: "#" },
    { name: "Serviços", href: "#servicos" },
    { name: "Depoimentos", href: "#depoimentos" },
    { name: "Orçamento", href: "#orcamento" },
];

const socialLinks = [
    { icon: Instagram, href: "#", name: "Instagram" },
    { icon: Facebook, href: "#", name: "Facebook" },
];

const contactInfo = [
    {
        icon: Phone,
        text: PHONE_NUMBER,
        subtext: "(WhatsApp)",
        href: WHATSAPP_LINK,
        color: "text-green-400"
    },
    {
        icon: Mail,
        text: EMAIL,
        subtext: "E-mail",
        href: `mailto:${EMAIL}`,
        color: "text-cyan-400"
    },
    {
        icon: MapPin,
        text: ADDRESS,
        subtext: "Nossa localização",
        href: ADDRESS_LINK,
        color: "text-amber-400"
    },
    {
        icon: Clock,
        text: "Seg - Sex: 9h às 18h",
        subtext: "Sáb: 9h às 13h",
        href: "#",
        color: "text-purple-400"
    }
];

export default function RefinedFooter() {
    return (
        <footer className="bg-gradient-to-b from-gray-900 to-gray-950 border-t border-gray-800/50 pt-20 pb-8 text-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Conteúdo Principal */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 border-b border-gray-800/50 pb-12 mb-8">

                    {/* Coluna 1: Logo e Descrição */}
                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="space-y-4"
                        >
                            <a
                                href="#"
                                className="flex items-center space-x-4 group"
                            >
                                <div className="p-2 bg-cyan-500/10 border border-cyan-500/20 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                                    {/* Logo da VitorCell */}
                                    <div className="w-12 h-12 relative">
                                        <Image
                                            src="/logo-vitorcell.png"
                                            alt="VitorCell - Assistência Técnica"
                                            width={48}
                                            height={48}
                                            className="object-contain"
                                            priority
                                        />
                                    </div>
                                </div>
                                <div>
                                    <span className="text-2xl font-bold text-white block">VitorCell</span>
                                    <span className="text-cyan-400 text-sm font-medium">Assistência Técnica</span>
                                </div>
                            </a>
                            <p className="text-gray-400 max-w-md text-lg leading-relaxed">
                                Assistência técnica especializada em smartphones e acessórios premium.
                                Qualidade e confiança em cada reparo.
                            </p>
                        </motion.div>
                    </div>

                    {/* Coluna 2: Navegação */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <h4 className="text-lg font-semibold mb-6 text-white border-l-4 border-cyan-500 pl-3">
                            Navegação
                        </h4>
                        <ul className="space-y-3">
                            {navLinks.map((link, index) => (
                                <li key={link.name}>
                                    <motion.a
                                        href={link.href}
                                        className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center group"
                                        whileHover={{ x: 4 }}
                                    >
                                        <div className="w-1 h-1 bg-cyan-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {link.name}
                                    </motion.a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Coluna 3: Contato */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h4 className="text-lg font-semibold mb-6 text-white border-l-4 border-cyan-500 pl-3">
                            Contato
                        </h4>
                        <ul className="space-y-4">
                            {contactInfo.map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <li key={index} className="group">
                                        <a
                                            href={item.href}
                                            target={item.href !== "#" ? "_blank" : undefined}
                                            rel={item.href !== "#" ? "noopener noreferrer" : undefined}
                                            className="flex items-start space-x-3 p-2 rounded-lg transition-all duration-300 hover:bg-gray-800/30"
                                        >
                                            <Icon size={20} className={`${item.color} flex-shrink-0 mt-0.5`} />
                                            <div>
                                                <p className="text-white font-medium text-sm group-hover:text-cyan-400 transition-colors">
                                                    {item.text}
                                                </p>
                                                <p className="text-gray-500 text-xs">{item.subtext}</p>
                                            </div>
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </motion.div>
                </div>

                {/* Rodapé Inferior */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col md:flex-row justify-between items-center pt-6 space-y-4 md:space-y-0"
                >
                    {/* Direitos Autorais */}
                    <div className="text-center md:text-left">
                        <p className="text-gray-500 text-sm">
                            &copy; {new Date().getFullYear()} VitorCell. Todos os direitos reservados.
                        </p>
                        <p className="text-gray-600 text-xs mt-1">
                            Desenvolvido por @nuvion.tech
                        </p>
                    </div>

                    {/* Redes Sociais */}
                    <div className="flex space-x-4">
                        {socialLinks.map((social, index) => {
                            const Icon = social.icon;
                            return (
                                <motion.a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 bg-gray-800/50 border border-gray-700/50 rounded-lg text-gray-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-300"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Icon size={20} />
                                </motion.a>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Linha Decorativa */}
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent mt-8"
                />
            </div>
        </footer>
    );
}