"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/Button";

export const FinalCTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-brand/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand/20 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto max-w-4xl px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="border border-brand/20 bg-surface/50 backdrop-blur-sm rounded-3xl p-12 md:p-20 shadow-2xl relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-brand/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
            Ready to ship <br className="hidden md:block"/> better code?
          </h2>
          <p className="text-lg text-foreground/60 mb-10 max-w-2xl mx-auto">
            Join thousands of engineers who use Helix to catch bugs before they merge. Start your 14-day free trial today.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="shine" size="lg" className="h-14 px-10 text-lg">
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg" className="h-14 px-10 text-lg bg-surface hover:bg-surface-hover">
              Read Documentation
            </Button>
          </div>
          <p className="text-xs text-foreground/40 mt-6">
            No credit card required. 14-day free trial.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
