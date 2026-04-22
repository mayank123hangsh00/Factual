"use client";


import { GlowCard } from "../ui/GlowCard";
import { Button } from "../ui/Button";
import { Check } from "lucide-react";

export const Pricing = () => {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Simple, transparent pricing.</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Pay for the value you receive. No complex tiers, no hidden fees. Start free and scale up when your team grows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Starter Plan */}
          <GlowCard className="p-8 md:p-10">
            <h3 className="text-2xl font-bold mb-2">Starter</h3>
            <p className="text-foreground/60 mb-6 text-sm">Perfect for indie hackers and small startups.</p>
            <div className="mb-8 font-bold text-5xl">
              $0<span className="text-lg text-foreground/40 font-normal">/mo</span>
            </div>
            <ul className="space-y-4 mb-8 text-sm">
              <li className="flex items-center gap-3"><Check className="w-4 h-4 text-brand" /> Up to 3 users</li>
              <li className="flex items-center gap-3"><Check className="w-4 h-4 text-brand" /> 50 PR reviews/month</li>
              <li className="flex items-center gap-3"><Check className="w-4 h-4 text-brand" /> Standard rule engine</li>
              <li className="flex items-center gap-3"><Check className="w-4 h-4 text-brand" /> Community support</li>
            </ul>
            <Button className="w-full" variant="outline">Start for free</Button>
          </GlowCard>

          {/* Pro Plan */}
          <GlowCard className="relative p-8 md:p-10 border-brand/50 shadow-[0_0_40px_-10px_rgba(108,99,255,0.2)]">
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-brand to-accent" />
            <div className="absolute top-4 right-4 bg-brand/10 text-brand text-xs px-3 py-1 rounded-full font-bold border border-brand/20">
              Most Popular
            </div>
            <h3 className="text-2xl font-bold mb-2 text-white">Pro</h3>
            <p className="text-foreground/60 mb-6 text-sm">For growing engineering teams.</p>
            <div className="mb-8 font-bold text-5xl text-white">
              $19<span className="text-lg text-foreground/40 font-normal">/user/mo</span>
            </div>
            <ul className="space-y-4 mb-8 text-sm text-white font-medium">
              <li className="flex items-center gap-3"><Check className="w-4 h-4 text-accent" /> Unlimited users</li>
              <li className="flex items-center gap-3"><Check className="w-4 h-4 text-accent" /> Unlimited PR reviews</li>
              <li className="flex items-center gap-3"><Check className="w-4 h-4 text-accent" /> Custom rule engine</li>
              <li className="flex items-center gap-3"><Check className="w-4 h-4 text-accent" /> Private Slack channel</li>
            </ul>
            <Button className="w-full" variant="shine">Start 14-day free trial</Button>
          </GlowCard>
        </div>
      </div>
    </section>
  );
};
