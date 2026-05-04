"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Tag, ExternalLink, X } from "lucide-react";
import SectionHeading from "@/components/shared/section-heading";
import { portfolio } from "@/data/company";
import type { PortfolioItem } from "@/types";

const categories = ["All", "Diagnostic Tool", "Data Erasure", "Mobile Diagnostic", "OS Deployment", "Embedded Diagnostic"];

export default function PortfolioPageContent() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<PortfolioItem | null>(null);

  const filtered =
    filter === "All"
      ? portfolio
      : portfolio.filter((item) => item.category === filter);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-[var(--bg-base)] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-green-600/8 rounded-full blur-[120px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-green-500 border border-green-500/20 bg-green-500/5 px-3 py-1.5 rounded-full mb-6 inline-block">
              Our Work
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-[var(--text-primary)] leading-tight mb-6">
              Products Deployed in{" "}
              <span className="gradient-text-red">Japan</span>
            </h1>
            <p className="text-[var(--text-muted)] text-xl leading-relaxed max-w-3xl mx-auto">
              From firmware-level diagnostics to cloud-integrated mobile management tools
              — here&apos;s what we&apos;ve built and shipped.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-20 bg-[var(--bg-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 mb-14"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  filter === cat
                    ? "bg-red-600 text-white shadow-lg shadow-red-600/20"
                    : "bg-[var(--overlay-soft)] text-[var(--text-muted)] hover:text-[var(--text-primary)] border border-[var(--border)] hover:border-[var(--border-medium)]"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Portfolio grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <AnimatePresence>
              {filtered.map((item, idx) => {
                const isRed = item.color === "red";
                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ delay: idx * 0.05, duration: 0.35 }}
                    onClick={() => setSelected(item)}
                    className="group cursor-pointer p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border)] hover:border-[var(--border-medium)] transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
                  >
                    <div
                      className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                        isRed
                          ? "bg-gradient-to-br from-red-600/6"
                          : "bg-gradient-to-br from-green-600/6"
                      }`}
                    />

                    <div className="relative">
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

                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="text-[var(--text-primary)] font-bold text-xl">{item.title}</h3>
                        <ExternalLink className="w-4 h-4 text-[var(--text-subtle)] group-hover:text-[var(--text-muted)] transition-colors shrink-0 mt-1" />
                      </div>

                      <p className="text-[var(--text-subtle)] text-sm leading-relaxed mb-5">
                        {item.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5">
                        {item.tech.map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 text-xs text-[var(--text-subtle)] bg-[var(--overlay-subtle)] border border-[var(--border)] rounded"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-medium)] relative"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 p-2 rounded-lg bg-[var(--overlay-soft)] hover:bg-[var(--overlay-strong)] text-[var(--text-subtle)] hover:text-[var(--text-primary)] transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-3 mb-5">
                <span
                  className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                    selected.color === "red"
                      ? "bg-red-600/10 text-red-400 border border-red-600/20"
                      : "bg-green-600/10 text-green-400 border border-green-600/20"
                  }`}
                >
                  {selected.category}
                </span>
                <span className="text-[var(--text-subtle)] text-xs">{selected.year}</span>
              </div>

              <h2 className="text-[var(--text-primary)] font-black text-3xl mb-3">{selected.title}</h2>
              <p className="text-[var(--text-muted)] leading-relaxed mb-6">{selected.description}</p>

              <div>
                <p className="text-[var(--text-subtle)] text-xs uppercase tracking-wider mb-3">Technologies Used</p>
                <div className="flex flex-wrap gap-2">
                  {selected.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 text-sm text-[var(--text-secondary)] bg-[var(--overlay-soft)] border border-[var(--border-medium)] rounded-lg"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
