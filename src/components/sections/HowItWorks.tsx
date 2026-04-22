"use client";

import { motion } from "framer-motion";
import { Terminal, GitBranch, GitMerge } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      icon: <GitBranch className="w-8 h-8 text-foreground" />,
      title: "1. Connect your repo",
      description: "Install the Helix GitHub App with one click. No code changes required.",
      color: "bg-surface-hover"
    },
    {
      icon: <Terminal className="w-8 h-8 text-brand" />,
      title: "2. Open a Pull Request",
      description: "Write code as you normally do. When you open a PR, Helix wakes up.",
      color: "bg-brand/10 border-brand/30"
    },
    {
      icon: <GitMerge className="w-8 h-8 text-success" />,
      title: "3. Merge with confidence",
      description: "Review suggestions natively in GitHub, accept fixes, and merge 3x faster.",
      color: "bg-success/10 border-success/30"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-surface/30 border-y border-border">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Works where you work.</h2>
          <p className="text-lg text-foreground/60">
            Helix is designed to be invisible until you need it. We integrate directly into your existing git workflow.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-[60px] left-[10%] right-[10%] h-[2px] bg-border z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.2 }}
                className="flex flex-col items-center text-center"
              >
                <div className={`w-32 h-32 rounded-full border border-border flex items-center justify-center mb-8 shadow-xl ${step.color}`}>
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-foreground/60">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
