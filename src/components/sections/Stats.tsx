"use client";

import { AnimatedCounter } from "../ui/AnimatedCounter";

export const Stats = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-brand/10 blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto max-w-6xl px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center divide-x divide-border/50">
          <div className="flex flex-col">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">
              <AnimatedCounter to={3} suffix="x" />
            </div>
            <div className="text-foreground/60 text-sm font-medium">Faster PR Cycles</div>
          </div>
          <div className="flex flex-col">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">
              <AnimatedCounter to={40} suffix="+" />
            </div>
            <div className="text-foreground/60 text-sm font-medium">Supported Languages</div>
          </div>
          <div className="flex flex-col">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">
              <AnimatedCounter to={99} suffix="%" />
            </div>
            <div className="text-foreground/60 text-sm font-medium">Bugs Caught</div>
          </div>
          <div className="flex flex-col">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">
              <AnimatedCounter to={10} suffix="k+" />
            </div>
            <div className="text-foreground/60 text-sm font-medium">Engs using Helix</div>
          </div>
        </div>
      </div>
    </section>
  );
};
