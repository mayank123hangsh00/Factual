"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const GlowCard = ({ children, className, delay = 0 }: GlowCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        "group relative rounded-xl border border-border bg-surface p-6 overflow-hidden transition-all duration-300 hover:border-brand/50 hover:shadow-[0_0_30px_-5px_rgba(108,99,255,0.15)]",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};
