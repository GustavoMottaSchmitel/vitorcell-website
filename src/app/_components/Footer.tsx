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

export default function LightFooter() {
    return (
        <footer className="bg-gray-900 border-t border-gray-800 pt-12 pb-6 text-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">

                {/* Conteúdo Principal */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 border-b border-gray-800 pb-8 mb-6">

                    {/* Coluna 1: Logo e Descrição */}
                    <div className="lg:col-span-2">
                        <div className="space-y-3">
                            <a
                                href="#"
                                className="flex items-center space-x-3"
                            >
                                <div className="w-10 h-10 relative">
                                    <Image
                                        src="/logo-vitorcell.png"
                                        alt="VitorCell - Assistência Técnica"
                                        width={40}
                                        height={40}
                                        className="object-contain"
                                        priority
                                    />
                                </div>
                                <div>
                                    <span className="text-xl font-bold text-white">VitorCell</span>
                                    <span className="text-cyan-400 text-xs block">Assistência Técnica</span>
                                </div>
                            </a>
                            <p className="text-gray-400 max-w-md text-sm leading-relaxed">
                                Assistência técnica especializada em smartphones e acessórios premium.
                                Qualidade e confiança em cada reparo.
                            </p>
                        </div>
                    </div>

                    {/* Coluna 2: Navegação */}
                    <div>
                        <h4 className="text-base font-semibold mb-4 text-white">
                            Navegação
                        </h4>
                        <ul className="space-y-2">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Coluna 3: Contato */}
                    <div>
                        <h4 className="text-base font-semibold mb-4 text-white">
                            Contato
                        </h4>
                        <ul className="space-y-3">
                            {contactInfo.map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <li key={index}>
                                        <a
                                            href={item.href}
                                            target={item.href !== "#" ? "_blank" : undefined}
                                            rel={item.href !== "#" ? "noopener noreferrer" : undefined}
                                            className="flex items-start space-x-2 p-1 rounded transition-colors hover:bg-gray-800/20"
                                        >
                                            <Icon size={16} className={`${item.color} flex-shrink-0 mt-0.5`} />
                                            <div>
                                                <p className="text-white font-medium text-xs">
                                                    {item.text}
                                                </p>
                                                <p className="text-gray-500 text-xs">{item.subtext}</p>
                                            </div>
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>

                {/* Rodapé Inferior */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-4 space-y-3 md:space-y-0">
                    {/* Direitos Autorais */}
                    <div className="text-center md:text-left">
                        <p className="text-gray-500 text-xs">
                            &copy; {new Date().getFullYear()} VitorCell. Todos os direitos reservados.
                        </p>
                        <p className="text-gray-600 text-xs mt-1">
                            Desenvolvido por @nuvion.tech
                        </p>
                    </div>

                    {/* Redes Sociais */}
                    <div className="flex space-x-2">
                        {socialLinks.map((social) => {
                            const Icon = social.icon;
                            return (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-1.5 bg-gray-800 border border-gray-700 rounded text-gray-400 hover:text-cyan-400 hover:border-cyan-500 transition-colors"
                                >
                                    <Icon size={16} />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </footer>
    );
}