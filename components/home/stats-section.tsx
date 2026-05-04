"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "@/components/shared/animated-counter";

interface StatItem {
  value: number;
  label: string;
  suffix?: string;
  color: "red" | "green";
}

const statItems: StatItem[] = [
  { value: 2019, label: "Founded", color: "red" },
  { value: 50, label: "Projects Delivered", suffix: "+", color: "green" },
  { value: 5, label: "Core Products", suffix: "+", color: "red" },
  { value: 100, label: "Client Satisfaction", suffix: "%", color: "green" },
];

export default function StatsSection() {
  return (
    <section className="relative py-16 bg-[var(--bg-shade)] border-y border-[var(--border-subtle)]">
      {/* Decorative line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-600/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-[var(--border-subtle)]">
          {statItems.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="flex flex-col items-center justify-center py-6 lg:py-4 px-4 text-center group"
            >
              <div
                className={`text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight ${
                  stat.color === "red" ? "gradient-text-red" : "gradient-text-green"
                }`}
              >
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  duration={2000}
                />
              </div>
              <p className="text-[var(--text-subtle)] text-sm mt-2 font-medium group-hover:text-[var(--text-secondary)] transition-colors">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-green-600/30 to-transparent" />
    </section>
  );
}
