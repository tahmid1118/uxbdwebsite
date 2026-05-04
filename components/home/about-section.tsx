"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Globe2 } from "lucide-react";
import SectionHeading from "@/components/shared/section-heading";

const highlights = [
  "Software development partner of Ultra-X Japan since 2019",
  "Specialized in systems-level and embedded software",
  "Cross-platform solutions for Windows, Mac, iOS & Android",
  "Agile delivery with Japanese quality standards",
  "50+ products and tools shipped to Japanese market",
];

export default function AboutSection() {
  return (
    <section className="relative py-24 bg-[var(--bg-surface)]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-red-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SectionHeading
              eyebrow="About Ultra-X BD"
              title="Where Bangladesh"
              highlightedWord="Bangladesh"
              description=""
              align="left"
              accentColor="red"
            />
            <p className="text-3xl sm:text-4xl font-bold text-[var(--text-secondary)] -mt-2 mb-6">
              Meets Japanese Excellence
            </p>

            <p className="text-[var(--text-muted)] leading-relaxed mb-6 text-base">
              Founded in 2019, Ultra-X BD is the Bangladesh development arm of{" "}
              <a
                href="https://www.uxd.co.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-400 hover:text-red-300 transition-colors"
              >
                株式会社ウルトラエックス (Ultra-X Inc. Japan)
              </a>{" "}
              — a Tokyo-based technology leader with 30+ years of expertise in
              hardware diagnostics, data erasure, and IT device management.
            </p>
            <p className="text-[var(--text-muted)] leading-relaxed mb-8 text-base">
              Our Dhaka-based team engineers world-class software that supports
              Japan&apos;s PC manufacturers, reuse businesses, and enterprise IT
              operations — combining Bangladesh&apos;s talent with Japan&apos;s
              exacting quality standards.
            </p>

            <ul className="space-y-3 mb-10">
              {highlights.map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-3 text-sm text-[var(--text-secondary)]"
                >
                  <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>

            <Link
              href="/about"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-500 text-white rounded-xl font-semibold text-sm transition-all duration-200 hover:shadow-lg hover:shadow-red-600/25"
            >
              Our Full Story
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Right: Visual card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            {/* Connection visual */}
            <div className="relative rounded-3xl overflow-hidden border border-[var(--border)] bg-[var(--bg-card)] p-8">
              {/* Globe decoration */}
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-600/20 to-green-800/20 border border-green-600/20 flex items-center justify-center">
                    <span className="text-3xl">🇧🇩</span>
                  </div>
                  <span className="text-[var(--text-primary)] font-semibold text-sm">Bangladesh</span>
                  <span className="text-[var(--text-subtle)] text-xs">Development Hub</span>
                </div>

                <div className="flex flex-col items-center gap-1 flex-1">
                  <Globe2 className="w-6 h-6 text-[var(--text-subtle)]" />
                  <div className="flex items-center gap-1 w-full">
                    <div className="h-px flex-1 bg-gradient-to-r from-green-600/40 to-red-600/40" />
                    <span className="text-[var(--text-subtle)] text-xs">Partner</span>
                    <div className="h-px flex-1 bg-gradient-to-r from-red-600/40 to-green-600/40" />
                  </div>
                  <span className="text-[var(--text-subtle)] text-xs">Since 2019</span>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-red-600/20 to-red-800/20 border border-red-600/20 flex items-center justify-center">
                    <span className="text-3xl">🇯🇵</span>
                  </div>
                  <span className="text-[var(--text-primary)] font-semibold text-sm">Japan</span>
                  <span className="text-[var(--text-subtle)] text-xs">Client Market</span>
                </div>
              </div>

              {/* Metrics grid */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Products Shipped", value: "50+", color: "red" },
                  { label: "Years Active", value: "6+", color: "green" },
                  { label: "Technologies", value: "15+", color: "green" },
                  { label: "Team Members", value: "20+", color: "red" },
                ].map(({ label, value, color }) => (
                  <div
                    key={label}
                    className={`p-4 rounded-xl ${
                      color === "red"
                        ? "bg-red-600/5 border border-red-600/15"
                        : "bg-green-600/5 border border-green-600/15"
                    }`}
                  >
                    <div
                      className={`text-2xl font-black ${
                        color === "red" ? "gradient-text-red" : "gradient-text-green"
                      }`}
                    >
                      {value}
                    </div>
                    <div className="text-[var(--text-subtle)] text-xs mt-1">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Japanese text badge */}
            <div className="absolute -top-4 -right-4 px-4 py-2 bg-[var(--bg-card)] border border-red-600/20 rounded-xl shadow-sm">
              <p className="text-red-400 font-medium text-sm">株式会社ウルトラエックス</p>
              <p className="text-[var(--text-subtle)] text-xs">Japan Technology Partner</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
