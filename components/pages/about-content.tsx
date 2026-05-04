"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Globe2, Users, Target, Zap } from "lucide-react";
import SectionHeading from "@/components/shared/section-heading";
import { teamMembers } from "@/data/company";

const values = [
  {
    icon: Target,
    title: "Precision Engineering",
    description:
      "We build tools that Japanese engineers trust with their most critical operations — zero tolerance for defects.",
    color: "red",
  },
  {
    icon: Globe2,
    title: "Cross-Border Collaboration",
    description:
      "Seamlessly integrating Bangladesh's talent with Japan's quality standards and business culture.",
    color: "green",
  },
  {
    icon: Zap,
    title: "Rapid Innovation",
    description:
      "Agile methodology meets deep systems expertise to deliver features faster without compromising quality.",
    color: "red",
  },
  {
    icon: Users,
    title: "People First",
    description:
      "Our engineers are our greatest asset — we invest in training, mentorship, and career growth.",
    color: "green",
  },
];

const milestones = [
  { year: "2019", event: "Ultra-X BD founded as Bangladesh development partner of Ultra-X Japan" },
  { year: "2020", event: "Delivered first major product: PC Checkup enhancements and Windows diagnostic suite" },
  { year: "2021", event: "Expanded to mobile — developed iOS and Android diagnostic modules" },
  { year: "2022", event: "Launched Mobile Pliers and NextErase, marking 20+ products shipped" },
  { year: "2023", event: "Team grew to 20+ engineers; shipped TENKAI OS Manager and UltraPOST" },
  { year: "2024", event: "Achieved 50+ project milestone with 100% client retention" },
  { year: "2025+", event: "Expanding into AI-powered diagnostics and cloud-based device management" },
];

export default function AboutPageContent() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-[var(--bg-base)] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-red-600/8 rounded-full blur-[120px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-red-500 border border-red-500/20 bg-red-500/5 px-3 py-1.5 rounded-full mb-6 inline-block">
              Our Story
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-[var(--text-primary)] leading-tight mb-6">
              Built in <span className="gradient-text-green">Bangladesh</span><br />
              for <span className="gradient-text-red">Japan</span>
            </h1>
            <p className="text-[var(--text-muted)] text-xl leading-relaxed max-w-2xl">
              Ultra-X BD was established in 2019 with a single mission: to engineer
              world-class IT software that meets Japan&apos;s legendary standards for
              quality and reliability — powered by Bangladesh&apos;s exceptional
              engineering talent.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company story */}
      <section className="py-20 bg-[var(--bg-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-6">Our Partnership</h2>
              <div className="space-y-4 text-[var(--text-muted)] leading-relaxed">
                <p>
                  We are the Bangladesh development arm of{" "}
                  <a
                    href="https://www.uxd.co.jp/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-400 hover:text-red-300 transition-colors"
                  >
                    株式会社ウルトラエックス (Ultra-X Inc. Japan)
                  </a>
                  , a Tokyo-headquartered technology company with over 30 years of
                  experience in the Japanese IT industry. Ultra-X Japan develops hardware
                  diagnostic tools, data erasure solutions, and OS deployment systems
                  that are used by PC manufacturers, reuse businesses, and enterprise IT
                  teams across Japan.
                </p>
                <p>
                  Our Bangladesh team handles the full software development lifecycle —
                  from design and architecture through coding, testing, and maintenance.
                  We work in close collaboration with the Japan team, following agile
                  sprints with Japanese-standard QA processes.
                </p>
                <p>
                  What makes Ultra-X BD unique is our deep specialization in systems
                  software: we work at the firmware level, in UEFI environments, with
                  Windows kernel APIs, and on mobile platforms — a rare combination that
                  allows us to deliver the complexity Japan demands.
                </p>
              </div>

              <div className="mt-8 p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border)]">
                <h3 className="text-[var(--text-primary)] font-semibold mb-4">By the Numbers</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Founded", value: "2019" },
                    { label: "Products", value: "50+" },
                    { label: "Engineers", value: "20+" },
                    { label: "Satisfaction", value: "100%" },
                  ].map(({ label, value }) => (
                    <div key={label} className="text-center">
                      <div className="text-2xl font-black gradient-text-red">{value}</div>
                      <div className="text-[var(--text-subtle)] text-xs">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-8">Our Journey</h2>
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-red-600/50 via-green-600/50 to-red-600/20" />
                <div className="space-y-6">
                  {milestones.map((milestone, idx) => (
                    <motion.div
                      key={milestone.year}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex gap-6 pl-12 relative"
                    >
                      <div
                        className={`absolute left-2.5 top-1.5 w-3 h-3 rounded-full border-2 ${
                          idx % 2 === 0
                            ? "border-red-500 bg-red-500/20"
                            : "border-green-500 bg-green-500/20"
                        }`}
                      />
                      <div>
                        <span
                          className={`text-sm font-bold ${
                            idx % 2 === 0 ? "text-red-400" : "text-green-400"
                          }`}
                        >
                          {milestone.year}
                        </span>
                        <p className="text-[var(--text-muted)] text-sm mt-1 leading-relaxed">
                          {milestone.event}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[var(--bg-base)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Values"
            title="What Drives Us"
            highlightedWord="Drives"
            description="The principles that guide every line of code we write."
            accentColor="red"
          />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((value, idx) => {
              const Icon = value.icon;
              const isRed = value.color === "red";
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border)] hover:border-[var(--border-medium)] transition-all duration-300 group"
                >
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${
                      isRed
                        ? "bg-red-600/10 text-red-500 border border-red-600/20"
                        : "bg-green-600/10 text-green-500 border border-green-600/20"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-[var(--text-primary)] font-semibold text-base mb-2">{value.title}</h3>
                  <p className="text-[var(--text-subtle)] text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-[var(--bg-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Team"
            title="The People Behind the Code"
            highlightedWord="People"
            description="Our engineers bring together systems expertise, Japanese business culture, and Bangladeshi innovation."
            accentColor="green"
          />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="group p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border)] hover:border-green-500/20 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-600/20 to-green-600/20 border border-[var(--border-medium)] flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-black text-[var(--text-primary)]">{member.initials}</span>
                </div>
                <h3 className="text-[var(--text-primary)] font-semibold text-base mb-0.5">{member.name}</h3>
                <p className="text-green-400 text-xs font-medium mb-3">{member.role}</p>
                <p className="text-[var(--text-subtle)] text-xs leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Japan partner note */}
      <section className="py-16 bg-[var(--bg-base)] border-t border-[var(--border-subtle)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-3xl bg-gradient-to-br from-red-600/8 via-transparent to-green-600/8 border border-[var(--border)]"
          >
            <div className="flex items-center justify-center gap-6 mb-6">
              <div className="flex flex-col items-center">
                <span className="text-4xl mb-2">🇧🇩</span>
                <span className="text-[var(--text-primary)] font-medium text-sm">Ultra-X BD</span>
                <span className="text-[var(--text-subtle)] text-xs">Dhaka, Bangladesh</span>
              </div>
              <div className="text-[var(--text-subtle)] text-2xl font-thin">⟷</div>
              <div className="flex flex-col items-center">
                <span className="text-4xl mb-2">🇯🇵</span>
                <span className="text-[var(--text-primary)] font-medium text-sm">Ultra-X Japan</span>
                <span className="text-[var(--text-subtle)] text-xs">Tokyo, Japan</span>
              </div>
            </div>
            <p className="text-[var(--text-muted)] text-sm leading-relaxed max-w-2xl mx-auto">
              Building a strong Japan–Bangladesh technology bridge since 2019. Visit our
              parent company at{" "}
              <a
                href="https://www.uxd.co.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-400 hover:text-red-300 transition-colors"
              >
                uxd.co.jp
              </a>
              {" "}to learn more about the products we help build.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
