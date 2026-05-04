"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Mail, MessageSquare } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="relative py-24 bg-[var(--bg-surface)] overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-red-600/8 rounded-full blur-[120px]" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-600/20 to-transparent" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-red-500/25 bg-red-500/8"
        >
          <Mail className="w-4 h-4 text-red-400" />
          <span className="text-red-400 text-sm font-medium">
            Ready to collaborate?
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-black text-[var(--text-primary)] mb-5 leading-tight"
        >
          Let&apos;s Build{" "}
          <span className="gradient-text-red">Something</span>{" "}
          <span className="gradient-text-green">Great</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-[var(--text-muted)] text-lg mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Whether you need enterprise software, embedded diagnostics, or a full
          product development partner — we bring Japanese-quality engineering
          from Bangladesh.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className="group flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-500 text-white font-bold rounded-xl transition-all duration-200 hover:shadow-2xl hover:shadow-red-600/30 text-base active:scale-95"
          >
            <MessageSquare className="w-5 h-5" />
            Start a Conversation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href="mailto:info@ultraxbd.com"
            className="flex items-center gap-2 px-8 py-4 bg-[var(--overlay-soft)] hover:bg-[var(--overlay-strong)] text-[var(--text-primary)] font-semibold rounded-xl border border-[var(--border-medium)] hover:border-[var(--border-strong)] transition-all duration-200 text-base"
          >
              <Mail className="w-5 h-5 text-[var(--text-subtle)]" />
            info@ultraxbd.com
          </a>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-6 text-[var(--text-subtle)] text-xs"
        >
          {[
            "✓ Japanese Quality Standards",
            "✓ Agile Development",
            "✓ On-time Delivery",
            "✓ 6+ Years Experience",
          ].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
