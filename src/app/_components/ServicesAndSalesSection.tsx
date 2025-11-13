'use client'

import { motion, Variants } from "framer-motion";
import { 
    BatteryCharging, 
    Camera, 
    CaseSensitive, 
    Check, 
    CircuitBoard, 
    Code, 
    Headphones, 
    Monitor, 
    Plug, 
    PlugZap, 
    Shield, 
    Smartphone, 
    Square, 
    Volume2,
    Zap,
    ArrowRight
} from "lucide-react"

const categories = [
    {
        name: "Assistência Técnica & Reparos",
        description: "Diagnóstico preciso e reparos especializados em todos os modelos de smartphones.",
        icon: CircuitBoard,
        gradient: "from-blue-500 to-cyan-500",
        items: [
            { name: "Troca de Tela", icon: Monitor },
            { name: "Troca de Bateria", icon: BatteryCharging },
            { name: "Reparos de Placa", icon: CircuitBoard },
            { name: "Troca de Câmeras", icon: Camera },
            { name: "Troca Conectores de Carga", icon: PlugZap },
            { name: "Software (Otimização e Reparo)", icon: Code },
            { name: "Troca da Tampa Traseira", icon: Square },
        ]
    },
    {
        name: "Produtos & Acessórios Premium",
        description: "Os melhores acessórios e aparelhos novos com garantia e qualidade superior.",
        icon: Smartphone,
        gradient: "from-purple-500 to-pink-500",
        items: [
            { name: "Aparelhos iPhone e Xiaomi (Venda)", icon: Smartphone },
            { name: "Carregadores (Originais e Anatel)", icon: Plug },
            { name: "Capinhas para iPhone", icon: CaseSensitive },
            { name: "Fones de Ouvido", icon: Headphones },
            { name: "Películas de Vidro 3D", icon: Shield },
            { name: "Películas de Câmera", icon: Camera },
            { name: "Caixas de Som (JBL, FAM, KAIDI)", icon: Volume2 },
        ]
    }
];

const stats = [
    { value: "100+", label: "Clientes Satisfeitos" },
    { value: "24h", label: "Garantia em Serviços" },
    { value: "+ de 10 anos", label: "No Mercado" },
    { value: "100%", label: "Peças Originais" }
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
            delayChildren: 0.2
        }
    }
}

const cardVariants: Variants = {
    hidden: { 
        opacity: 0, 
        y: 60, 
        scale: 0.9,
        rotateX: -10
    },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
        transition: {
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1]
        }
    }
}

const itemVariants: Variants = {
    hidden: { 
        opacity: 0, 
        x: -20,
        scale: 0.95
    },
    show: { 
        opacity: 1, 
        x: 0,
        scale: 1,
        transition: { 
            duration: 0.4,
            ease: "easeOut"
        } 
    }
}

const statVariants: Variants = {
    hidden: { scale: 0, opacity: 0 },
    show: (i: number) => ({
        scale: 1,
        opacity: 1,
        transition: {
            delay: i * 0.1 + 0.8,
            duration: 0.5,
            ease: "backOut"
        }
    })
}

export default function PremiumServicesSection() {
    return (
        <section id="servicos" className="relative py-24 md:py-32 bg-gradient-to-b from-gray-950 to-black overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-1/2 -right-1/4 w-1/2 h-1/2 bg-blue-500/5 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-1/2 -left-1/4 w-1/2 h-1/2 bg-purple-500/5 rounded-full blur-3xl"></div>
                <div className="absolute top-1/4 left-1/2 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-20"
                >
                    {/* Decorative Top Line */}
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "80px" }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-8 rounded-full"
                    />

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                        Serviços & Produtos
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
                        Soluções completas em reparo e tecnologia. Do diagnóstico preciso aos 
                        acessórios premium, tudo com garantia e qualidade excepcional.
                    </p>
                </motion.div>

                {/* Stats Grid */}
                <motion.div
                    className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            custom={index}
                            variants={statVariants}
                            className="text-center p-6 bg-gray-900/40 backdrop-blur-sm border border-gray-800/50 rounded-2xl"
                        >
                            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                                {stat.value}
                            </div>
                            <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Services Grid - ALINHADOS */}
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {categories.map((category, categoryIndex) => {
                        const CategoryIcon = category.icon;
                        
                        // Altura mínima para alinhar os cards
                        const minHeightClass = "min-h-[520px]";
                        
                        return (
                            <motion.div
                                key={category.name}
                                variants={cardVariants}
                                whileHover={{ 
                                    y: -8,
                                    transition: { duration: 0.3 }
                                }}
                                className="group relative"
                            >
                                {/* Card Glow Effect */}
                                <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-10 blur-xl rounded-3xl transition-opacity duration-500`} />
                                
                                <div className={`relative p-8 bg-gradient-to-br from-gray-900/80 to-gray-950/80 backdrop-blur-sm border border-gray-800/50 rounded-3xl shadow-2xl ${minHeightClass} flex flex-col`}>
                                    {/* Card Header */}
                                    <div className="flex items-start space-x-6 mb-8 pb-8 border-b border-gray-800/50">
                                        <motion.div
                                            whileHover={{ 
                                                scale: 1.1,
                                                rotate: 5
                                            }}
                                            className={`p-4 bg-gradient-to-br ${category.gradient} rounded-2xl shadow-lg flex-shrink-0`}
                                        >
                                            <CategoryIcon size={32} className="text-white" />
                                        </motion.div>
                                        <div className="flex-1">
                                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                                                {category.name}
                                            </h3>
                                            <p className="text-gray-400 text-lg leading-relaxed">
                                                {category.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Services List */}
                                    <div className="flex-1">
                                        <motion.ul
                                            className="space-y-4"
                                            variants={{
                                                show: {
                                                    transition: {
                                                        staggerChildren: 0.1,
                                                        delayChildren: 0.3 + categoryIndex * 0.2
                                                    }
                                                }
                                            }}
                                        >
                                            {category.items.map((item, itemIndex) => {
                                                const ItemIcon = item.icon;
                                                return (
                                                    <motion.li
                                                        key={itemIndex}
                                                        variants={itemVariants}
                                                        whileHover={{ 
                                                            x: 8,
                                                            backgroundColor: "rgba(255,255,255,0.02)"
                                                        }}
                                                        className="flex items-center space-x-4 p-4 rounded-xl border border-transparent hover:border-gray-700/50 transition-all duration-300"
                                                    >
                                                        <div className={`p-2 rounded-lg bg-cyan-500/20 text-cyan-400`}>
                                                            <ItemIcon size={20} />
                                                        </div>
                                                        <span className="text-lg font-medium text-white">
                                                            {item.name}
                                                        </span>
                                                    </motion.li>
                                                );
                                            })}
                                        </motion.ul>
                                    </div>

                                    {/* Card Footer */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 1 }}
                                        className="mt-8 pt-6 border-t border-gray-800/50"
                                    >
                                        <div className="flex items-center justify-between text-gray-400">
                                            <div className="flex items-center space-x-2">
                                                <Zap size={16} className="text-cyan-400" />
                                                <span className="text-sm">Garantia incluída</span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <Check size={16} className="text-green-400" />
                                                <span className="text-sm">Peças originais</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Enhanced CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-center mt-20"
                >
                    {/* Brands Support */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="mb-12"
                    >
                        <p className="text-gray-500 text-lg mb-6">
                            Suporte especializado para as principais marcas do mercado
                        </p>
                        <div className="flex justify-center items-center space-x-8 text-gray-400">
                            {["Apple", "Samsung", "Xiaomi", "Motorola", "Asus"].map((brand, index) => (
                                <motion.div
                                    key={brand}
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.9 + index * 0.1 }}
                                    className="flex items-center space-x-2 text-lg font-semibold"
                                >
                                    <Check size={16} className="text-green-400" />
                                    <span>{brand}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Main CTA Button */}
                    <motion.a
                        href="#orcamento"
                        whileHover={{ 
                            scale: 1.05,
                            boxShadow: "0 20px 40px rgba(6, 182, 212, 0.3)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative inline-flex items-center px-12 py-5 text-xl font-bold rounded-2xl transition-all duration-300 bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-2xl shadow-cyan-500/25 overflow-hidden"
                    >
                        {/* Button Shine Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                        
                        <span className="relative">Solicitar Orçamento</span>
                        <ArrowRight size={20} className="ml-3 relative transition-transform group-hover:translate-x-1" />
                    </motion.a>

                    {/* Support Text */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="text-gray-500 text-lg mt-6"
                    >
                        Resposta em até 15 minutos • Orçamento gratuito
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
}