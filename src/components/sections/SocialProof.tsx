"use client";

import { motion } from "framer-motion";

export const SocialProof = () => {
  const logos = [
    { name: "Acme Corp", icon: "🏢" },
    { name: "GlobalTech", icon: "🌐" },
    { name: "Nebula", icon: "☁️" },
    { name: "PiedPiper", icon: "🟢" },
    { name: "Hooli", icon: "🔷" },
    { name: "Initech", icon: "⚙️" },
  ];

  return (
    <section className="py-10 border-y border-border bg-surface/50">
      <div className="container mx-auto px-6 overflow-hidden">
        <p className="text-center text-sm font-medium text-foreground/50 mb-6 uppercase tracking-wider">
          Trusted by engineering teams at
        </p>
        
        <div className="relative flex max-w-5xl mx-auto">
          {/* Fading Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
          
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ 
              repeat: Infinity, 
              ease: "linear", 
              duration: 20 
            }}
            className="flex gap-16 items-center whitespace-nowrap px-8"
          >
            {[...logos, ...logos, ...logos].map((logo, i) => (
              <div key={i} className="flex items-center gap-2 text-xl font-bold text-foreground/40 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                <span>{logo.icon}</span>
                <span>{logo.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
