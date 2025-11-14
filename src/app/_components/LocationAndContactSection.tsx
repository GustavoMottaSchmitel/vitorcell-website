'use client';

import { motion, Variants } from 'framer-motion';
import { Mail, MapPin, Phone, Clock, Send, MessageCircle, Users, Shield, Zap } from 'lucide-react';
import React, { useState } from 'react';

// Dados de Contato REAIS da Vitor cell
const contactInfo = [
    { 
        icon: MapPin, 
        text: "Endereço da Loja", 
        detail: "R. Humberto de Campos, 307 - Parque Res. Laranjeiras, Serra - ES, 29165-310"
    },
    { 
        icon: Phone, 
        text: "Telefone e WhatsApp", 
        detail: "+55 27 99614-4142"
    },
    { 
        icon: Clock, 
        text: "Horário de Atendimento", 
        detail: "Seg - Sex: 9h às 18h | Sáb: 9h às 13h"
    },
    { 
        icon: Mail, 
        text: "E-mail para Contato", 
        detail: "assistenciavitorcel@gmail.com"
    },
];

const benefits = [
    {
        icon: Zap,
        text: "Resposta Rápida",
        description: "Nossa equipe responde rapidamente"
    },
    {
        icon: Shield,
        text: "Orçamento Gratuito",
        description: "Sem custo para avaliação"
    },
    {
        icon: Users,
        text: "Suporte Especializado",
        description: "Técnicos certificados"
    }
];

// Variantes de animação
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
        opacity: 1, 
        y: 0, 
        transition: { 
            duration: 0.6, 
            ease: "easeOut" 
        } 
    }
};

const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    show: { 
        opacity: 1, 
        scale: 1, 
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

// Componente para o Formulário de Orçamento
const QuoteForm = () => {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        const form = e.currentTarget as HTMLFormElement; 
        const inputName = (form.elements.item(0) as HTMLInputElement)?.value || 'Cliente Desconhecido';
        const inputModel = (form.elements.item(2) as HTMLInputElement)?.value || 'Não Informado';
        const inputProblem = (form.elements.item(3) as HTMLTextAreaElement)?.value || 'Não Especificado';

        setStatus('loading');
        
        setTimeout(() => {
            setStatus('success');
            const whatsappNumber = '5527999765211'; 
            const defaultMessage = `Olá, gostaria de um orçamento rápido para o meu aparelho.
Modelo: ${inputModel}
Problema: ${inputProblem}
Meu nome é ${inputName}.`;
            
            window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`, '_blank');
            form.reset(); 
            setStatus('idle'); 
        }, 1500);
    };

    return (
        <motion.div
            variants={cardVariants}
            className="relative group"
        >
            {/* Efeito de brilho sutil no card */}
            <div className="absolute inset-0 bg-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
            
            <form onSubmit={handleSubmit} className="relative p-8 bg-gradient-to-br from-gray-900/50 to-gray-950/50 backdrop-blur-sm border border-gray-700/30 rounded-2xl shadow-2xl space-y-6">
                {/* Header do Form */}
                <div className="text-center mb-2">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="inline-flex p-3 rounded-2xl bg-cyan-500/20 text-cyan-400 mb-4 border border-cyan-500/30"
                    >
                        <MessageCircle size={28} />
                    </motion.div>
                    <h3 className="text-3xl font-bold text-white mb-2">
                        Orçamento Rápido
                    </h3>
                    <p className="text-gray-400">Preencha os dados e vamos te atender no WhatsApp</p>
                </div>
                
                {/* Campos do Formulário */}
                <div className="space-y-4">
                    <motion.input 
                        whileFocus={{ scale: 1.02 }}
                        type="text" 
                        placeholder="Seu Nome" 
                        required 
                        className="w-full p-4 bg-gray-800/30 border border-gray-600/30 rounded-xl text-white focus:ring-1 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all duration-300 backdrop-blur-sm"
                    />
                    <motion.input 
                        whileFocus={{ scale: 1.02 }}
                        type="tel" 
                        placeholder="WhatsApp (XX) XXXXX-XXXX" 
                        required 
                        className="w-full p-4 bg-gray-800/30 border border-gray-600/30 rounded-xl text-white focus:ring-1 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all duration-300 backdrop-blur-sm"
                    />
                    <motion.input 
                        whileFocus={{ scale: 1.02 }}
                        type="text" 
                        placeholder="Modelo do Aparelho (Ex: iPhone 11)" 
                        required 
                        className="w-full p-4 bg-gray-800/30 border border-gray-600/30 rounded-xl text-white focus:ring-1 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all duration-300 backdrop-blur-sm"
                    />
                    <motion.textarea 
                        whileFocus={{ scale: 1.02 }}
                        placeholder="Descreva o problema (Ex: Tela trincada)" 
                        rows={4}
                        required 
                        className="w-full p-4 bg-gray-800/30 border border-gray-600/30 rounded-xl text-white focus:ring-1 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all duration-300 resize-none backdrop-blur-sm"
                    />
                </div>

                {/* Botão de Envio */}
                <motion.button 
                    type="submit"
                    disabled={status === 'loading'}
                    whileHover={{ scale: status === 'idle' ? 1.02 : 1 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center space-x-3 px-8 py-4 text-lg font-bold rounded-xl transition-all duration-300 
                               bg-cyan-600 text-white shadow-lg shadow-cyan-600/20 
                               hover:bg-cyan-500 hover:shadow-cyan-500/30 disabled:bg-gray-600 disabled:shadow-none"
                >
                    {status === 'loading' ? (
                        <>
                            <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                            <span>Enviando...</span>
                        </>
                    ) : (
                        <>
                            <Send size={20} />
                            <span>Enviar e Abrir WhatsApp</span>
                        </>
                    )}
                </motion.button>
            </form>
        </motion.div>
    );
};

export default function PremiumLocationAndContactSection() {
    return (
        <section id="orcamento" className="relative py-24 md:py-32 bg-gradient-to-b from-gray-950 to-black overflow-hidden">
            {/* Background Elements Sutis */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-1/2 -right-1/4 w-1/2 h-1/2 bg-cyan-500/3 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-1/2 -left-1/4 w-1/2 h-1/2 bg-blue-500/3 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                
                {/* Título da Seção */}
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-20"
                >
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "80px" }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="h-1 bg-cyan-500 mx-auto mb-8 rounded-full"
                    />

                    <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                        Fale Conosco
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Visite nossa loja ou solicite um orçamento rápido. Estamos prontos para te atender!
                    </p>
                </motion.div>

                {/* Benefits Cards Sutis */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {benefits.map((benefit, index) => {
                        const BenefitIcon = benefit.icon;
                        return (
                            <motion.div
                                key={benefit.text}
                                variants={itemVariants}
                                whileHover={{ y: -5 }}
                                className="group p-6 bg-gray-900/30 backdrop-blur-sm border border-gray-700/30 rounded-xl text-center hover:border-cyan-500/20 transition-all duration-300"
                            >
                                <div className="inline-flex p-3 rounded-xl bg-cyan-500/10 text-cyan-400 mb-4 border border-cyan-500/20">
                                    <BenefitIcon size={24} />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">
                                    {benefit.text}
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    {benefit.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {/* COLUNA 1: Formulário de Orçamento */}
                    <div>
                        <QuoteForm />
                    </div>

                    {/* COLUNA 2: Informações de Contato e Mapa */}
                    <motion.div variants={itemVariants} className="space-y-8">
                        {/* Bloco de Contatos */}
                        <motion.div
                            variants={cardVariants}
                            className="group relative"
                        >
                            <div className="absolute inset-0 bg-cyan-500/3 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                            
                            <div className="relative p-8 bg-gradient-to-br from-gray-900/50 to-gray-950/50 backdrop-blur-sm border border-gray-700/30 rounded-2xl shadow-2xl">
                                <h3 className="text-3xl font-bold text-white mb-8">
                                    Nossos Contatos
                                </h3>
                                <div className="space-y-6">
                                    {contactInfo.map((info, index) => {
                                        const Icon = info.icon;
                                        return (
                                            <motion.div 
                                                key={index}
                                                whileHover={{ x: 8 }}
                                                className="flex items-start space-x-4 p-4 rounded-xl border border-transparent hover:border-gray-600/30 hover:bg-gray-800/20 transition-all duration-300"
                                            >
                                                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                                                    <Icon size={20} />
                                                </div>
                                                <div className="flex-1">
                                                    <p className="text-gray-400 font-medium text-sm">{info.text}</p>
                                                    <p className="text-lg text-white font-semibold">{info.detail}</p>
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </div>
                        </motion.div>

                        {/* Bloco do Mapa */}
                        <motion.div
                            variants={cardVariants}
                            className="group relative"
                        >
                            <div className="absolute inset-0 bg-cyan-500/3 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                            
                            <div className="relative p-8 bg-gradient-to-br from-gray-900/50 to-gray-950/50 backdrop-blur-sm border border-gray-700/30 rounded-2xl shadow-2xl">
                                <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
                                    <MapPin className="text-cyan-400" size={24} />
                                    <span>Nossa Localização</span>
                                </h3>
                                
                                <div className="aspect-video bg-gray-800 rounded-xl overflow-hidden border border-gray-600/30 shadow-lg">
                                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-cyan-500/5 to-blue-500/5">
                                        <div className="text-center text-cyan-400">
                                            <MapPin size={48} className="mx-auto mb-4 opacity-60" />
                                            <p className="text-lg font-semibold text-white">R. Humberto de Campos, 307</p>
                                            <p className="text-gray-400">Parque Res. Laranjeiras, Serra - ES</p>
                                            <motion.a
                                                href="https://www.google.com/maps/search/?api=1&query=R.+Humberto+de+Campos,+307,+Serra+-+ES"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ scale: 1.05 }}
                                                className="inline-block mt-4 px-6 py-2 bg-cyan-600 text-white rounded-lg font-semibold hover:bg-cyan-500 transition-colors"
                                            >
                                                Abrir no Google Maps
                                            </motion.a>
                                        </div>
                                    </div>
                                </div>
                                
                                <p className="text-sm text-gray-500 mt-4 text-center">
                                    Estamos te esperando para um atendimento personalizado!
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}