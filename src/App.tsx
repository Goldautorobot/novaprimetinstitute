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
        staggerChildren: 0.05, // Faster staggering
        delayChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3, // Faster duration
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-blue-500 selection:text-white overflow-x-hidden">
      {/* Optimized Background - No external assets */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02]" 
           style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} 
      />
      
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-green-600/5 blur-[120px] rounded-full" />
      </div>

      <main className="relative z-10 max-w-2xl mx-auto px-6 pt-16 pb-20">
        {/* Header Section */}
        <motion.header 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-green-500/20 bg-green-500/5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-green-400">Live Signals Active</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-display font-black tracking-tighter mb-2">
            NOVA <span className="text-blue-500">PRIME</span>
          </h1>
          <p className="text-zinc-500 font-mono text-[10px] tracking-[0.3em] uppercase">Trading Institute</p>
        </motion.header>

        {/* Links Section - Ultra Fast Rendering */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-3 mb-12"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileTap={{ scale: 0.98 }}
              className={`group relative flex items-center p-4 rounded-xl border transition-all duration-200 ${
                link.prominent 
                ? "bg-blue-600 border-blue-500 shadow-lg shadow-blue-900/20" 
                : "bg-white/[0.03] border-white/10 hover:bg-white/[0.06]"
              }`}
            >
              {link.prominent && (
                <div className="absolute top-0 right-0 px-2 py-0.5 bg-white text-blue-600 text-[9px] font-black rounded-bl-lg">
                  {link.badge}
                </div>
              )}
              
              <div className={`flex items-center justify-center w-12 h-12 rounded-lg ${link.prominent ? "bg-white/20" : link.color} text-white`}>
                {link.icon}
              </div>
              
              <div className="ml-4 flex-grow">
                <div className="flex items-center gap-1.5">
                  <h2 className="text-base font-bold text-white">{link.name}</h2>
                  {link.prominent && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
                </div>
                <p className={`text-xs ${link.prominent ? "text-blue-100" : "text-zinc-500"}`}>
                  {link.description}
                </p>
              </div>
              
              <ArrowRight className={`w-4 h-4 ${link.prominent ? "text-white" : "text-zinc-500"}`} />
            </motion.a>
          ))}
        </motion.div>

        {/* Quick Stats */}
        <div className="grid grid-cols-4 gap-2 mb-12">
          {[
            { label: "Win Rate", value: "90%" },
            { label: "Signals", value: "Daily" },
            { label: "Support", value: "24/7" },
            { label: "Members", value: "1K+" }
          ].map((stat, i) => (
            <div key={i} className="py-3 rounded-lg bg-white/[0.02] border border-white/5 text-center">
              <div className="text-[9px] font-mono text-zinc-600 uppercase mb-0.5">{stat.label}</div>
              <div className="text-sm font-bold text-zinc-300">{stat.value}</div>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <a
            href="https://whatsapp.com/channel/0029VajaEpw9MF8ygmxtD11E"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-black text-sm tracking-tight hover:bg-zinc-200 transition-colors"
          >
            JOIN FREE CHANNEL NOW
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        <footer className="mt-20 text-center opacity-30">
          <p className="text-[9px] font-mono tracking-widest uppercase">Nova Prime Institute &copy; 2026</p>
        </footer>
      </main>

      {/* Simplified Support Button */}
      <a
        href="https://wa.me/923471394290"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-xl"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
}
