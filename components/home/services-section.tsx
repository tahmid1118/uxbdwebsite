"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Cpu, ShieldCheck, Server, Smartphone, Code2, Layers } from "lucide-react";
import SectionHeading from "@/components/shared/section-heading";
import { services } from "@/data/company";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Cpu,
  ShieldCheck,
  Server,
  Smartphone,
  Code2,
  Layers,
};

export default function ServicesSection() {
  return (
    <section className="relative py-24 bg-[var(--bg-base)]">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-green-600/4 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What We Build"
          title="Services We Deliver"
          highlightedWord="Services"
          description="We engineer precision tools trusted by Japan's IT industry — from hardware diagnostics to certified data erasure solutions."
          accentColor="red"
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, idx) => {
            const Icon = iconMap[service.icon];
            const isRed = service.color === "red";

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className="group relative p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border)] hover:border-[var(--border-medium)] transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                {/* Color accent in corner */}
                <div
                  className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                    isRed ? "bg-red-600/15" : "bg-green-600/15"
                  }`}
                />

                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${
                    isRed
                      ? "bg-red-600/10 text-red-500 border border-red-600/20"
                      : "bg-green-600/10 text-green-500 border border-green-600/20"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="text-[var(--text-primary)] font-semibold text-lg mb-2 group-hover:text-[var(--text-primary)] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[var(--text-subtle)] text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-1.5">
                  {service.features.slice(0, 3).map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-xs text-[var(--text-subtle)]">
                      <span
                        className={`w-1 h-1 rounded-full shrink-0 ${
                          isRed ? "bg-red-500" : "bg-green-500"
                        }`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[var(--border-medium)] hover:border-red-600/30 text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-sm font-medium transition-all duration-200 hover:bg-red-600/5"
          >
            Explore All Services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
