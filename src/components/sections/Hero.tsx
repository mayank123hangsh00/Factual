"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { ArrowRight, CheckCircle2, ChevronRight, Play } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-brand/20 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto max-w-6xl px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border text-sm text-foreground/80 mb-8"
        >
          <span className="flex h-2 w-2 rounded-full bg-success"></span>
          Helix 2.0 is now live
          <ChevronRight className="w-4 h-4 text-foreground/50" />
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 max-w-4xl mx-auto leading-tight"
        >
          Ship better code, <br className="hidden md:block" />
          <span className="text-gradient-brand">3x faster.</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-foreground/70 mb-10 max-w-2xl mx-auto"
        >
          Helix is the AI-powered code review platform that catches bugs, enforces standards, and speeds up PR cycles without adding process overhead.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Button variant="shine" size="lg" className="w-full sm:w-auto text-base h-12 px-8 gap-2 group">
            Start free trial
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto text-base h-12 px-8 gap-2">
            <Play className="w-4 h-4" />
            Watch demo
          </Button>
        </motion.div>

        {/* Hero Image/Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="relative mx-auto max-w-5xl rounded-xl border border-border bg-surface p-2 shadow-2xl relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-brand to-accent rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative rounded-lg overflow-hidden bg-[#0A0A0F] border border-border flex flex-col h-[400px] md:h-[600px]">
            {/* Window Header */}
            <div className="h-10 bg-surface flex items-center px-4 gap-2 border-b border-border">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
              <div className="flex-1 flex justify-center">
                <div className="px-3 py-1 rounded bg-[#1A1A24] text-xs text-foreground/50 flex items-center gap-2">
                  <span>github.com/helix/core</span>
                </div>
              </div>
            </div>
            {/* Fake IDE Content */}
            <div className="flex-1 p-6 relative font-mono text-sm leading-relaxed overflow-hidden text-left">
              <div className="text-brand">function</div> <div className="inline">processPayment(amount: number, user: User) {"{"} </div>
              <div className="pl-6 text-foreground/50">{`// TODO: Add validation`}</div>
              <div className="pl-6">if (amount {"<="} 0) throw new Error(&quot;Invalid amount&quot;);</div>
              <br />
              <div className="pl-6 text-accent animate-pulse">const tx = await db.transaction.create({"{"}</div>
              <div className="pl-12 text-accent">amount,</div>
              <div className="pl-12 text-accent">userId: user.id</div>
              <div className="pl-6 text-accent">{"}"});</div>
              <br />
              <div className="pl-6">return tx;</div>
              <div>{"}"}</div>

              {/* AI Hover Popover */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.3 }}
                className="absolute top-32 left-1/4 bg-surface border border-brand/30 rounded-lg p-4 shadow-xl max-w-xs shadow-brand/10 backdrop-blur-md"
              >
                <div className="flex items-center gap-2 mb-2 text-brand text-xs font-sans font-bold">
                  ✨ Helix AI Suggestion
                </div>
                <div className="text-xs text-foreground/80 font-sans mb-3">
                  Missing Idempotency Key! Payments should include an idempotency key to prevent double charges on retries.
                </div>
                <div className="flex gap-2">
                  <Button size="sm" className="h-6 text-[10px] w-full" variant="shine">Accept Fix</Button>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Feature List Below Image */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 md:gap-12 text-sm text-foreground/60 font-medium">
          <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand" /> Zero config setup</div>
          <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand" /> Supports 40+ languages</div>
          <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand" /> SOC2 Type II Certified</div>
        </div>
      </div>
    </section>
  );
};
