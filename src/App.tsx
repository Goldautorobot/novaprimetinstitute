/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Instagram, 
  MessageCircle, 
  Send, 
  Music2, 
  ArrowRight,
  ShieldCheck,
  Zap,
  TrendingUp,
  Activity,
  Globe,
  CheckCircle2
} from "lucide-react";

export default function App() {
  const socialLinks = [
    {
      name: "WhatsApp Channel",
      url: "https://whatsapp.com/channel/0029VajaEpw9MF8ygmxtD11E",
      icon: <Send className="w-6 h-6" />,
      color: "bg-[#25D366]",
      description: "Get 90% Free Accurate Signals",
      prominent: true,
      badge: "HOT"
    },
    {
      name: "WhatsApp Support",
      url: "https://wa.me/923471394290",
      icon: <MessageCircle className="w-6 h-6" />,
      color: "bg-[#075E54]",
      description: "Direct Support for Traders",
      prominent: false
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/nova.prime.institute?igsh=MXh6Y2VoZHU0eWRrag==",
      icon: <Instagram className="w-6 h-6" />,
      color: "bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]",
      description: "Daily Market Analysis & Tips",
      prominent: false
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@naveedalam_?_r=1&_t=ZS-95Orcx9M4Ic",
      icon: <Music2 className="w-6 h-6" />,
      color: "bg-black",
      description: "Educational Trading Content",
      prominent: false
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-blue-500 selection:text-white overflow-x-hidden">
      {/* Trading Grid Background */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03]" 
           style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />
      
      {/* Background Glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-600/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-green-600/10 blur-[150px] rounded-full" />
      </div>

      {/* Top Ticker Bar */}
      <div className="relative z-20 bg-white/5 border-b border-white/10 backdrop-blur-md py-2 overflow-hidden">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap gap-12 text-[10px] font-mono tracking-widest uppercase text-zinc-500"
        >
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex gap-8">
              <span className="flex items-center gap-2">BTC/USD <span className="text-green-500">+2.45%</span></span>
              <span className="flex items-center gap-2">ETH/USD <span className="text-green-500">+1.12%</span></span>
              <span className="flex items-center gap-2">GOLD <span className="text-red-500">-0.45%</span></span>
              <span className="flex items-center gap-2">EUR/USD <span className="text-green-500">+0.15%</span></span>
            </div>
          ))}
        </motion.div>
      </div>

      <main className="relative z-10 max-w-3xl mx-auto px-6 pt-12 pb-24">
        {/* Header Section */}
        <motion.header 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-1 rounded-full border border-green-500/20 bg-green-500/5 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-green-400">Live Market Analysis</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-display font-black tracking-tighter mb-4">
            NOVA <span className="text-blue-500 italic">PRIME</span>
          </h1>
          <p className="text-zinc-500 font-mono text-xs tracking-widest uppercase mb-8">Professional Trading Institute</p>
        </motion.header>

        {/* Links Section - MOVED UP */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-4 mb-16"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ scale: 1.02, x: 4 }}
              whileTap={{ scale: 0.98 }}
              className={`group relative flex items-center p-4 rounded-2xl border transition-all duration-300 overflow-hidden ${
                link.prominent 
                ? "bg-gradient-to-r from-blue-600/20 to-green-600/20 border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.15)]" 
                : "bg-white/[0.03] border-white/10 hover:border-white/20"
              }`}
            >
              {link.prominent && (
                <div className="absolute top-0 right-0 px-3 py-1 bg-blue-500 text-[10px] font-black tracking-tighter rounded-bl-xl">
                  {link.badge}
                </div>
              )}
              
              <div className={`relative z-10 flex items-center justify-center w-14 h-14 rounded-xl ${link.color} text-white shadow-xl group-hover:scale-110 transition-transform`}>
                {link.icon}
              </div>
              
              <div className="relative z-10 ml-5 flex-grow">
                <div className="flex items-center gap-2">
                  <h2 className={`text-lg font-bold ${link.prominent ? "text-white" : "text-zinc-200"}`}>{link.name}</h2>
                  {link.prominent && <CheckCircle2 className="w-4 h-4 text-blue-400" />}
                </div>
                <p className={`text-sm font-medium ${link.prominent ? "text-green-400" : "text-zinc-500"}`}>
                  {link.description}
                </p>
              </div>
              
              <div className="relative z-10 opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0 pr-2">
                <ArrowRight className={`w-5 h-5 ${link.prominent ? "text-blue-400" : "text-zinc-400"}`} />
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Trading Stats/Features */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {[
            { icon: <TrendingUp className="w-4 h-4" />, label: "Accuracy", value: "90%+" },
            { icon: <Activity className="w-4 h-4" />, label: "Signals", value: "Daily" },
            { icon: <Globe className="w-4 h-4" />, label: "Markets", value: "Global" },
            { icon: <ShieldCheck className="w-4 h-4" />, label: "Support", value: "24/7" }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              variants={itemVariants}
              className="p-4 rounded-xl border border-white/5 bg-white/[0.02] text-center"
            >
              <div className="flex justify-center mb-2 text-blue-500 opacity-50">{stat.icon}</div>
              <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1">{stat.label}</div>
              <div className="text-lg font-display font-bold">{stat.value}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Signal Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          className="p-8 rounded-3xl bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-center relative overflow-hidden group"
        >
          {/* Replaced external texture with a CSS-based pattern */}
          <div className="absolute inset-0 opacity-10" 
               style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '24px 24px' }} 
          />
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-black mb-4 tracking-tighter">
              READY TO DOMINATE THE MARKET?
            </h3>
            <p className="text-blue-100 mb-6 font-medium">
              Join our WhatsApp channel now and get 90% free accurate signals daily.
            </p>
            <motion.a
              href="https://whatsapp.com/channel/0029VajaEpw9MF8ygmxtD11E"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-700 rounded-full font-bold shadow-2xl hover:bg-blue-50 transition-colors"
            >
              GET FREE SIGNALS NOW
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>

        {/* Footer */}
        <footer className="mt-24 pt-12 border-t border-white/5 text-center">
          <div className="font-mono text-[10px] text-zinc-600 tracking-[0.3em] uppercase mb-4">
            Nova Prime Institute &copy; 2026
          </div>
          <p className="text-zinc-700 text-[10px] max-w-md mx-auto leading-relaxed">
            Trading involves risk. Our signals are for educational purposes. Past performance does not guarantee future results.
          </p>
        </footer>
      </main>

      {/* Support FAB */}
      <motion.a
        href="https://wa.me/923471394290"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-50 flex items-center gap-3 px-6 py-4 bg-[#25D366] text-white rounded-full shadow-2xl shadow-green-500/40 font-bold border border-white/20"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="hidden md:inline">TRADER SUPPORT</span>
      </motion.a>
    </div>
  );
}
