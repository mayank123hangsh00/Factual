"use client";

import { motion } from "framer-motion";
import { GlowCard } from "../ui/GlowCard";

export const Testimonials = () => {
  const testimonials = [
    {
      quote: "Helix caught a race condition in our payment processing logic that 3 senior engineers missed during manual review. It paid for itself in day one.",
      author: "Sarah Jenkins",
      role: "VP Engineering @ FinTech",
      avatar: "SJ"
    },
    {
      quote: "Our PR merge time went from 2.5 days to 4 hours. The team is shipping faster and nobody feels drowned in code review duty anymore.",
      author: "Marcus Chen",
      role: "Lead Developer @ DataPlatform",
      avatar: "MC"
    },
    {
      quote: "The ability to enforce our custom architectural guidelines automatically is incredible. It's like having a dedicated staff engineer on every PR.",
      author: "Elena Rodriguez",
      role: "CTO @ HealthTech Startup",
      avatar: "ER"
    }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Loved by engineering teams</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <GlowCard key={i} className="flex flex-col justify-between">
              <div className="mb-8">
                <div className="flex text-brand mb-4">
                  {"★★★★★"}
                </div>
                <p className="text-foreground/80 leading-relaxed">"{t.quote}"</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-surface-hover border border-border flex items-center justify-center font-bold text-xs">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-bold text-sm">{t.author}</div>
                  <div className="text-xs text-foreground/50">{t.role}</div>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};
