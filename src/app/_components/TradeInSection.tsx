'use client';

import { motion } from 'framer-motion';
import { Smartphone, ArrowRight, RefreshCw, DollarSign, Shield, Zap } from 'lucide-react';

export default function TradeInSection() {
    return (
        <section className="relative py-16 md:py-20 bg-gradient-to-br from-gray-900 to-gray-950 overflow-hidden">

            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-20 -right-20 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
 
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <div className="h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-6 mx-auto w-16" />

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                        Troque seu iPhone usado
                        <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                            por um novo
                        </span>
                    </h2>

                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        Atualize seu iPhone com facilidade e <span className="text-cyan-400 font-semibold">você só paga a diferença</span>
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {[
                        {
                            icon: RefreshCw,
                            title: "Troca Fácil",
                            description: "Avaliamos seu iPhone e você escolhe o novo"
                        },
                        {
                            icon: DollarSign,
                            title: "Só Paga a Diferença",
                            description: "Valor justo pelo seu aparelho + diferença do novo"
                        },
                        {
                            icon: Shield,
                            title: "Garantia Incluída",
                            description: "Todos os iPhones novos com garantia de 1 ano"
                        }
                    ].map((benefit, index) => {
                        const Icon = benefit.icon;
                        return (
                            <div
                                key={index}
                                className="p-6 bg-gray-800/30 backdrop-blur-sm border border-gray-700/30 rounded-xl text-center hover:border-cyan-500/30 transition-all duration-200"
                            >
                                <div className="inline-flex p-3 rounded-xl bg-cyan-500/10 text-cyan-400 mb-4 border border-cyan-500/20">
                                    <Icon size={24} />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">
                                    {benefit.title}
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    {benefit.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-8 md:p-10 backdrop-blur-sm"
                >
                    <div className="inline-flex p-3 rounded-2xl bg-cyan-500/20 text-cyan-400 mb-4 border border-cyan-500/30">
                        <Zap size={28} />
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        Confira abaixo os iPhones que você pode trocar pelo seu
                    </h3>

                    <p className="text-lg text-cyan-400 font-semibold mb-6">
                        📱 Você só paga a diferença!
                    </p>

                    <a
                        href="#produtos"
                        className="inline-flex items-center gap-3 px-8 py-4 text-lg font-bold rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:from-cyan-500 hover:to-blue-500 transition-all duration-200 shadow-lg shadow-cyan-600/25"
                    >
                        <Smartphone size={20} />
                        <span>Ver iPhones Disponíveis</span>
                        <ArrowRight size={18} />
                    </a>

                    <p className="text-gray-400 text-sm mt-4">
                        Role para baixo e confira todos os modelos disponíveis para troca
                    </p>
                </motion.div>

                <div className="text-center mt-8">
                    <div className="inline-flex flex-col items-center text-cyan-400/60">
                        <span className="text-sm mb-2">Role para ver os produtos</span>
                        <ArrowRight size={20} className="rotate-90" />
                    </div>
                </div>
            </div>
        </section>
    );
}