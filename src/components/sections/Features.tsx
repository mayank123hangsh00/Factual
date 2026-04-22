"use client";


import { GlowCard } from "../ui/GlowCard";
import { Bot, Zap, Shield, GitPullRequest, Code2, LineChart } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: <Bot className="w-6 h-6 text-brand" />,
      title: "Context-Aware AI Review",
      description: "Helix doesn't just read lines; it understands your entire repository graph to spot architectural flaws."
    },
    {
      icon: <Zap className="w-6 h-6 text-accent" />,
      title: "Instant Feedback",
      description: "Get actionable comments on PRs within seconds. No more waiting days for peer reviews."
    },
    {
      icon: <Shield className="w-6 h-6 text-success" />,
      title: "Security By Default",
      description: "Automatically catches OWASP vulnerabilities, secrets in code, and dangerous dep injections."
    },
    {
      icon: <GitPullRequest className="w-6 h-6 text-brand" />,
      title: "Native PR Integration",
      description: "Operates entirely within GitHub, GitLab, and Bitbucket. Zero new tabs required."
    },
    {
      icon: <Code2 className="w-6 h-6 text-accent" />,
      title: "Custom Rule Engine",
      description: "Enforce your specific team practices, naming conventions, and code styles automatically."
    },
    {
      icon: <LineChart className="w-6 h-6 text-success" />,
      title: "Team Metrics",
      description: "Track PR velocity, review times, and code quality trends across your entire engineering org."
    }
  ];

  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto max-w-6xl px-6 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Everything you need to ship faster, <span className="text-gradient">safely.</span>
          </h2>
          <p className="text-lg text-foreground/60">
            Helix acts as a senior engineer looking over your shoulder, offering helpful suggestions before you even open a PR.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <GlowCard key={i} delay={i * 0.1}>
              <div className="w-12 h-12 rounded-lg bg-surface-hover flex items-center justify-center border border-border mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-foreground/60 leading-relaxed text-sm">
                {feature.description}
              </p>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};
