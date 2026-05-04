"use client";

import { motion } from "framer-motion";
import { Cpu, ShieldCheck, Server, Smartphone, Code2, Layers } from "lucide-react";
import SectionHeading from "@/components/shared/section-heading";
import { services } from "@/data/company";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Cpu, ShieldCheck, Server, Smartphone, Code2, Layers,
};

const techStack = [
  { category: "Systems & Embedded", items: ["C/C++", "UEFI", "Firmware SDK", "Windows API", "Win32", "DirectX"] },
  { category: "Mobile Platforms", items: ["Android SDK", "iOS API", "React Native", "Swift", "Kotlin"] },
  { category: "Desktop Applications", items: [".NET / C#", "WPF", "WinForms", "WindowsPE", "DISM"] },
  { category: "Web & Backend", items: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "REST API"] },
  { category: "DevOps & Tools", items: ["Git", "CI/CD", "Docker", "PowerShell", "Python", "Bash"] },
];

export default function ServicesPageContent() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-[var(--bg-base)] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-green-600/8 rounded-full blur-[120px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-green-500 border border-green-500/20 bg-green-500/5 px-3 py-1.5 rounded-full mb-6 inline-block">
              What We Do
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-[var(--text-primary)] leading-tight mb-6">
              Engineering at the{" "}
              <span className="gradient-text-green">Edge</span>
            </h1>
            <p className="text-[var(--text-muted)] text-xl leading-relaxed max-w-3xl mx-auto">
              We specialize in systems software that operates at the deepest layers
              of the hardware stack — from UEFI firmware to mobile SDKs — delivering
              tools trusted by Japan&apos;s IT industry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 bg-[var(--bg-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Services"
            title="What We Build For You"
            highlightedWord="Build"
            description="Six core service areas covering the full device lifecycle management ecosystem."
            accentColor="green"
          />
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {services.map((service, idx) => {
              const Icon = iconMap[service.icon];
              const isRed = service.color === "red";
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="group p-7 rounded-2xl bg-[var(--bg-card)] border border-[var(--border)] hover:border-[var(--border-medium)] transition-all duration-300 overflow-hidden relative"
                >
                  <div
                    className={`absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                      isRed ? "bg-red-600/10" : "bg-green-600/10"
                    }`}
                  />
                  <div className="relative flex gap-5">
                    <div
                      className={`shrink-0 inline-flex items-center justify-center w-14 h-14 rounded-xl ${
                        isRed
                          ? "bg-red-600/10 text-red-500 border border-red-600/20"
                          : "bg-green-600/10 text-green-500 border border-green-600/20"
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-[var(--text-primary)] font-bold text-xl mb-2">{service.title}</h3>
                      <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-5">
                        {service.description}
                      </p>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {service.features.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-center gap-2 text-xs text-[var(--text-subtle)]"
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                                isRed ? "bg-red-500" : "bg-green-500"
                              }`}
                            />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="py-20 bg-[var(--bg-base)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Technology Stack"
            title="Our Technical Expertise"
            highlightedWord="Technical"
            description="We're fluent across the full technology spectrum — from bare metal to the browser."
            accentColor="red"
          />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {techStack.map((stack, idx) => (
              <motion.div
                key={stack.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className="p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border)]"
              >
                <h3
                  className={`text-xs font-bold uppercase tracking-wider mb-4 ${
                    idx % 2 === 0 ? "text-red-400" : "text-green-400"
                  }`}
                >
                  {stack.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {stack.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs text-[var(--text-subtle)] bg-[var(--overlay-soft)] border border-[var(--border)] px-2.5 py-1 rounded-md hover:text-[var(--text-secondary)] hover:border-[var(--border-medium)] transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-[var(--bg-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="How We Work"
            title="Our Development Process"
            highlightedWord="Development"
            description="A structured, transparent process that ensures quality delivery every sprint."
            accentColor="green"
          />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { step: "01", title: "Discovery & Spec", desc: "Deep dive into requirements, technical constraints, and Japanese client expectations.", color: "red" },
              { step: "02", title: "Architecture", desc: "System design, technology selection, and API contracts established before a single line of code.", color: "green" },
              { step: "03", title: "Agile Build", desc: "2-week sprints with daily standups, continuous integration, and milestone demos.", color: "red" },
              { step: "04", title: "QA & Delivery", desc: "Japanese-standard quality assurance, stress testing, and final sign-off before deployment.", color: "green" },
            ].map((step, idx) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="relative p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border)]"
              >
                <div
                  className={`text-6xl font-black mb-4 ${
                    step.color === "red" ? "gradient-text-red" : "gradient-text-green"
                  } opacity-25`}
                >
                  {step.step}
                </div>
                <h3 className="text-[var(--text-primary)] font-semibold text-base mb-2">{step.title}</h3>
                <p className="text-[var(--text-subtle)] text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
