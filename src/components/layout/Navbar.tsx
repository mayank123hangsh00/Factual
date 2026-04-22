"use client";

import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { Button } from "../ui/Button";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-surface/80 backdrop-blur-md border-b border-border" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand to-accent flex items-center justify-center font-bold text-white shadow-lg shadow-brand/20">
            H
          </div>
          <span className="font-bold text-xl tracking-tight">Helix</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground/80">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-white transition-colors">How it Works</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden sm:inline-flex">Log in</Button>
          <Button variant="shine">Start Free Trial</Button>
        </div>
      </div>
    </motion.header>
  );
};
