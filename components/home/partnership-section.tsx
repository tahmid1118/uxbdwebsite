"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function PartnershipSection() {
  return (
    <section className="relative py-20 bg-[var(--bg-surface)] overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-red-600/6 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-[var(--border)] bg-[var(--bg-card)] p-8 sm:p-12"
        >
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-8">
            <div className="flex items-center gap-4">
              <span className="text-5xl">🇯🇵</span>
              <div className="h-12 w-px bg-[var(--border)]" />
              <span className="text-5xl">🇧🇩</span>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-red-500 mb-1">
                Technology Partnership
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] leading-tight">
                Powered by{" "}
                <span className="text-red-500">株式会社ウルトラエックス</span>
              </h2>
              <p className="text-[var(--text-muted)] text-sm mt-1">
                Ultra-X Asia Pacific · Since 2019
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="text-[var(--text-muted)] leading-relaxed mb-8 max-w-2xl">
            Ultra-X BD is the dedicated Bangladesh development arm of{" "}
            <a
              href="https://www.uxd.co.jp/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-400 hover:text-red-300 transition-colors font-medium"
            >
              株式会社ウルトラエックス (Ultra-X Asia Pacific)
            </a>
            , a leading Japanese IT company specialising in hardware
            diagnostics, data erasure, and OS deployment solutions. Together we
            bridge Japan's world-class engineering standards with Bangladesh's
            exceptional development talent.
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap gap-6 mb-8">
            {[
              { label: "Partnership Since", value: "2019" },
              { label: "Founded", value: "2000" },
              { label: "Years of Expertise", value: "26+" },
              { label: "Primary Market", value: "Japan" },
            ].map(({ label, value }) => (
              <div key={label} className="flex flex-col">
                <span className="text-2xl font-black text-red-500">
                  {value}
                </span>
                <span className="text-[var(--text-subtle)] text-xs mt-0.5">
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-wrap gap-4">
            <a
              href="https://www.uxd.co.jp/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-red-600/25"
            >
              Visit Ultra-X Japan
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[var(--border-medium)] hover:border-[var(--border-strong)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-sm font-semibold transition-all duration-200"
            >
              Learn About Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
