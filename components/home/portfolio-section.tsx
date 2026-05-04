"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import SectionHeading from "@/components/shared/section-heading";
import { portfolio } from "@/data/company";

export default function PortfolioSection() {
  const featured = portfolio.slice(0, 4);

  return (
    <section className="relative py-24 bg-[var(--bg-base)]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-red-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Portfolio"
          title="Products We've Built"
          highlightedWord="Products"
          description="Real tools deployed in Japan's thriving IT reuse and device lifecycle management ecosystem."
          accentColor="green"
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-5">
          {featured.map((item, idx) => {
            const isRed = item.color === "red";
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="group relative p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border)] hover:border-[var(--border-medium)] transition-all duration-300 overflow-hidden"
              >
                {/* Hover glow */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                    isRed
                      ? "bg-gradient-to-br from-red-600/6 via-transparent to-transparent"
                      : "bg-gradient-to-br from-green-600/6 via-transparent to-transparent"
                  }`}
                />

                {/* Number indicator */}
                <div className="absolute top-4 right-4 text-6xl font-black text-[var(--watermark)] tabular-nums">
                  {String(idx + 1).padStart(2, "0")}
                </div>

                <div className="relative">
                  {/* Category + Year */}
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className={`flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full ${
                        isRed
                          ? "bg-red-600/10 text-red-400 border border-red-600/20"
                          : "bg-green-600/10 text-green-400 border border-green-600/20"
                      }`}
                    >
                      <Tag className="w-3 h-3" />
                      {item.category}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-[var(--text-subtle)]">
                      <Calendar className="w-3 h-3" />
                      {item.year}
                    </span>
                  </div>

                  <h3 className="text-[var(--text-primary)] font-bold text-xl mb-2 group-hover:text-[var(--text-primary)] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[var(--text-subtle)] text-sm leading-relaxed mb-5">
                    {item.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {item.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-xs text-[var(--text-subtle)] bg-[var(--overlay-subtle)] border border-[var(--border)] rounded-md hover:text-[var(--text-secondary)] hover:border-[var(--border-medium)] transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-600/10 hover:bg-green-600/20 border border-green-600/20 hover:border-green-600/30 text-green-400 hover:text-green-300 text-sm font-medium transition-all duration-200"
          >
            View Full Portfolio
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
