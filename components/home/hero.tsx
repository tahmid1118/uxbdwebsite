"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronDown, Code2, Cpu, ShieldCheck, Zap } from "lucide-react";

const floatingIcons = [
  { Icon: Cpu, x: "10%", y: "20%", delay: 0, color: "text-red-500" },
  { Icon: ShieldCheck, x: "85%", y: "15%", delay: 0.3, color: "text-green-500" },
  { Icon: Code2, x: "75%", y: "65%", delay: 0.6, color: "text-red-400" },
  { Icon: Zap, x: "5%", y: "70%", delay: 0.9, color: "text-green-400" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[var(--bg-base)] grid-bg">
      {/* Background radial gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-red-600/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[400px] bg-green-600/6 rounded-full blur-[100px]" />
        <div className="absolute top-0 right-1/4 w-[400px] h-[300px] bg-red-800/6 rounded-full blur-[80px]" />
      </div>

      {/* Floating tech icons */}
      {floatingIcons.map(({ Icon, x, y, delay, color }, idx) => (
        <motion.div
          key={idx}
          className={`absolute hidden lg:flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--overlay-subtle)] border border-[var(--border)] backdrop-blur-sm ${color}`}
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: delay + 0.8, duration: 0.5 }}
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 3 + idx * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: delay,
            }}
          >
            <Icon className="w-5 h-5" />
          </motion.div>
        </motion.div>
      ))}

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-red-500/25 bg-red-500/8 backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span className="text-red-400 text-sm font-medium">
            Bangladesh&apos;s IT Partner for Japan since 2019
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.9] mb-6"
        >
          <span className="block text-[var(--text-primary)]">Powering Japan&apos;s</span>
          <span className="block gradient-text-red mt-2">IT Solutions</span>
          <span className="block text-[var(--text-primary)] mt-2">from Bangladesh</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-[var(--text-muted)] text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          We build cutting-edge hardware diagnostic, data erasure, and device
          management software that powers Japan&apos;s IT reuse industry — from
          Dhaka to Tokyo.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/portfolio"
            className="group flex items-center gap-2 px-7 py-3.5 bg-red-600 hover:bg-red-500 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-red-600/30 active:scale-95"
          >
            View Our Work
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/about"
            className="flex items-center gap-2 px-7 py-3.5 bg-[var(--overlay-soft)] hover:bg-[var(--overlay-strong)] text-[var(--text-primary)] font-semibold rounded-xl border border-[var(--border-medium)] hover:border-[var(--border-strong)] transition-all duration-200 active:scale-95"
          >
            Learn About Us
          </Link>
        </motion.div>

        {/* Tech stack pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-2"
        >
          {["C/C++", "React", "Next.js", "UEFI", ".NET", "Android SDK", "iOS", "Windows API"].map(
            (tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-medium text-[var(--text-subtle)] bg-[var(--overlay-subtle)] border border-[var(--border)] rounded-full hover:border-[var(--border-medium)] hover:text-[var(--text-secondary)] transition-colors"
              >
                {tech}
              </span>
            )
          )}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[var(--text-subtle)] text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-4 h-4 text-[var(--text-subtle)]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
