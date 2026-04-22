"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Will Helix train on my private code?",
      answer: "No. Security is our first priority. We do not use your private code to train our foundational models. Data is encrypted in transit and at rest, and we process PRs statelessly."
    },
    {
      question: "How long does a review typically take?",
      answer: "For an average PR (300-500 lines), Helix provides its full review within 12-15 seconds. It runs immediately when the PR is opened or updated."
    },
    {
      question: "Can I enforce our specific engineering guidelines?",
      answer: "Yes! Helix allows you to provide a custom instructions file (e.g., .helixrules.md) in your repo where you can specify naming conventions, forbidden patterns, and preferred architectures."
    },
    {
      question: "What languages do you support?",
      answer: "We support over 40 programming languages including JavaScript, TypeScript, Python, Go, Rust, Java, C++, Ruby, PHP, and more."
    }
  ];

  return (
    <section className="py-24 border-y border-border bg-surface/30">
      <div className="container mx-auto max-w-4xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Frequently asked questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className={cn(
                "border rounded-xl transition-colors duration-200 overflow-hidden",
                openIndex === i ? "border-brand/40 bg-surface" : "border-border bg-surface/50 hover:bg-surface"
              )}
            >
              <button
                className="w-full px-6 py-5 text-left flex items-center justify-between font-semibold"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                {faq.question}
                <ChevronDown className={cn("w-5 h-5 text-foreground/50 transition-transform duration-200", openIndex === i ? "rotate-180 text-brand" : "")} />
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-6 pb-6 text-foreground/60 leading-relaxed text-sm">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
