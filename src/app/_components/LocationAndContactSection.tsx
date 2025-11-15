'use client';

import { motion } from 'framer-motion';
import { Send, MessageCircle, MapPin, Phone, Clock, Mail } from 'lucide-react';

import { contactInfo, benefits, COMPANY_INFO } from '@/app/data/contactData';
import { useContactForm } from '@/app/hooks/useContactForm';
import { containerVariants, itemVariants, cardVariants, formInputVariants, getMapsUrl } from '@/app/utils/contactHelpers';

// Componente Principal
export default function LightContactSection() {
  const { status, handleSubmit } = useContactForm();

  return (
    <section id="orcamento" className="relative py-16 bg-gradient-to-b from-gray-950 to-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Título da Seção Simplificado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "50px" }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="h-1 bg-cyan-500 mx-auto mb-4 rounded-full"
          />

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Fale Conosco
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm">
            Visite nossa loja ou solicite um orçamento rápido
          </p>
        </motion.div>

        {/* Benefits Cards Simplificados */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12"
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
                className="group p-4 bg-gray-900/20 border border-gray-700/20 rounded-lg text-center hover:border-cyan-500/10 transition-all duration-200"
              >
                <div className="inline-flex p-2 rounded-lg bg-cyan-500/10 text-cyan-400 mb-3">
                  <BenefitIcon size={20} />
                </div>
                <h3 className="text-base font-semibold text-white mb-1">
                  {benefit.text}
                </h3>
                <p className="text-gray-400 text-xs">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          
          {/* COLUNA 1: Formulário de Orçamento Simplificado */}
          <div>
            <motion.div variants={cardVariants}>
              <form onSubmit={handleSubmit} className="p-6 bg-gray-900/20 border border-gray-700/20 rounded-xl space-y-4">
                {/* Header do Form */}
                <div className="text-center mb-4">
                  <div className="inline-flex p-2 rounded-lg bg-cyan-500/10 text-cyan-400 mb-3">
                    <MessageCircle size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    Orçamento Rápido
                  </h3>
                  <p className="text-gray-400 text-sm">Preencha e vamos te atender no WhatsApp</p>
                </div>

                {/* Campos do Formulário */}
                <div className="space-y-3">
                  <motion.input
                    {...formInputVariants}
                    name="name"
                    type="text"
                    placeholder="Seu Nome"
                    required
                    className="w-full p-3 bg-gray-800/20 border border-gray-600/20 rounded-lg text-white text-sm focus:border-cyan-500/50 transition-colors"
                  />
                  <motion.input
                    {...formInputVariants}
                    name="phone"
                    type="tel"
                    placeholder="WhatsApp (XX) XXXXX-XXXX"
                    required
                    className="w-full p-3 bg-gray-800/20 border border-gray-600/20 rounded-lg text-white text-sm focus:border-cyan-500/50 transition-colors"
                  />
                  <motion.input
                    {...formInputVariants}
                    name="model"
                    type="text"
                    placeholder="Modelo do Aparelho"
                    required
                    className="w-full p-3 bg-gray-800/20 border border-gray-600/20 rounded-lg text-white text-sm focus:border-cyan-500/50 transition-colors"
                  />
                  <motion.textarea
                    {...formInputVariants}
                    name="problem"
                    placeholder="Descreva o problema"
                    rows={3}
                    required
                    className="w-full p-3 bg-gray-800/20 border border-gray-600/20 rounded-lg text-white text-sm focus:border-cyan-500/50 transition-colors resize-none"
                  />
                </div>

                {/* Botão de Envio */}
                <motion.button
                  type="submit"
                  disabled={status === 'loading'}
                  whileHover={{ scale: status === 'idle' ? 1.02 : 1 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold rounded-lg transition-all duration-200 
                             bg-cyan-600 text-white hover:bg-cyan-500 disabled:bg-gray-600"
                >
                  {status === 'loading' ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>Enviar e Abrir WhatsApp</span>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>

          {/* COLUNA 2: Informações de Contato e Mapa Simplificados */}
          <motion.div variants={itemVariants} className="space-y-6">
            {/* Bloco de Contatos Simplificado */}
            <motion.div variants={cardVariants}>
              <div className="p-6 bg-gray-900/20 border border-gray-700/20 rounded-xl">
                <h3 className="text-xl font-bold text-white mb-4">
                  Nossos Contatos
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <motion.div
                        key={index}
                        whileHover={{ x: 4 }}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-800/20 transition-colors"
                      >
                        <div className="p-2 rounded-md bg-cyan-500/10 text-cyan-400">
                          <Icon size={16} />
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-400 text-xs">{info.text}</p>
                          <p className="text-white text-sm font-medium">{info.detail}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Bloco do Mapa Simplificado */}
            <motion.div variants={cardVariants}>
              <div className="p-6 bg-gray-900/20 border border-gray-700/20 rounded-xl">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <MapPin className="text-cyan-400" size={18} />
                  <span>Nossa Localização</span>
                </h3>

                <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden border border-gray-600/20 mb-3">
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-cyan-500/5 to-blue-500/5">
                    <div className="text-center text-cyan-400">
                      <MapPin size={32} className="mx-auto mb-2 opacity-60" />
                      <p className="text-sm font-semibold text-white">{COMPANY_INFO.address}</p>
                      <p className="text-gray-400 text-xs">Parque Res. Laranjeiras, Serra - ES</p>
                    </div>
                  </div>
                </div>

                <motion.a
                  id='localizacao'
                  href={getMapsUrl(COMPANY_INFO.mapsQuery)}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  className="block w-full text-center px-4 py-2 bg-cyan-600 text-white text-sm rounded-lg font-medium hover:bg-cyan-500 transition-colors"
                >
                  Abrir no Google Maps
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}