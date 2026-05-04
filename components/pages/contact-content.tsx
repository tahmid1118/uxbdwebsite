"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Loader2, CheckCircle, Globe } from "lucide-react";
import SectionHeading from "@/components/shared/section-heading";
import { useTheme } from "@/components/providers/theme-provider";

interface FormState {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}

type Status = "idle" | "submitting" | "success" | "error";

const LAT = 23.780255721531017;
const LNG = 90.42583784376741;

export default function ContactPageContent() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const { theme } = useTheme();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus("success");
  };

  const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${LNG - 0.01},${LAT - 0.01},${LNG + 0.01},${LAT + 0.01}&layer=mapnik&marker=${LAT},${LNG}`;
  const mapsLink = `https://www.google.com/maps?q=${LAT},${LNG}`;

  const contacts = [
    {
      Icon: Mail,
      label: "Email",
      value: "info@ultraxbd.com",
      href: "mailto:info@ultraxbd.com",
      color: "red",
    },
    {
      Icon: Phone,
      label: "Phone",
      value: "+880 1700-000000",
      href: "tel:+8801700000000",
      color: "green",
    },
    {
      Icon: MapPin,
      label: "Location",
      value: "Dhaka, Bangladesh",
      href: mapsLink,
      color: "red",
    },
    {
      Icon: Globe,
      label: "Parent Company",
      value: "uxd.co.jp",
      href: "https://www.uxd.co.jp/",
      color: "green",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-[var(--bg-base)] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-red-600/8 rounded-full blur-[120px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-red-500 border border-red-500/20 bg-red-500/5 px-3 py-1.5 rounded-full mb-6 inline-block">
              Get in Touch
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-[var(--text-primary)] leading-tight mb-6">
              Let&apos;s Build{" "}
              <span className="gradient-text-red">Together</span>
            </h1>
            <p className="text-[var(--text-muted)] text-xl leading-relaxed max-w-2xl mx-auto">
              Have a project in mind? Want to partner with us? We&apos;d love to hear
              from you — in English or 日本語.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact info + form */}
      <section className="py-20 bg-[var(--bg-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Left: Contact info */}
            <div className="lg:col-span-2 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-2">Contact Information</h2>
                <p className="text-[var(--text-subtle)] text-sm leading-relaxed mb-8">
                  We typically respond within 24 hours. For urgent inquiries please
                  reach out via email.
                </p>
              </motion.div>

              {contacts.map(({ Icon, label, value, href, color }, idx) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 + 0.2, duration: 0.5 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] hover:border-[var(--border-medium)] transition-all duration-200 group"
                >
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      color === "red"
                        ? "bg-red-600/10 text-red-500 border border-red-600/20 group-hover:bg-red-600/20"
                        : "bg-green-600/10 text-green-500 border border-green-600/20 group-hover:bg-green-600/20"
                    } transition-colors`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[var(--text-subtle)] text-xs">{label}</p>
                    <p className="text-[var(--text-primary)] text-sm font-medium group-hover:text-[var(--text-secondary)] transition-colors">
                      {value}
                    </p>
                  </div>
                </motion.a>
              ))}

              {/* Languages note */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="p-4 rounded-xl bg-gradient-to-br from-red-600/6 to-green-600/6 border border-[var(--border)]"
              >
                <p className="text-[var(--text-muted)] text-sm">
                  <span className="text-[var(--text-primary)] font-semibold">Languages: </span>
                  English, Bengali (বাংলা), and Japanese (日本語) are all welcome.
                </p>
              </motion.div>
            </div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="lg:col-span-3"
            >
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center h-full py-20 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-600/10 border border-green-600/20 flex items-center justify-center mb-5">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-[var(--text-primary)] font-bold text-2xl mb-2">Message Sent!</h3>
                  <p className="text-[var(--text-muted)] text-base max-w-sm">
                    Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setStatus("idle");
                      setForm({ name: "", email: "", company: "", subject: "", message: "" });
                    }}
                    className="mt-8 px-6 py-3 bg-red-600 hover:bg-red-500 text-white rounded-xl font-semibold text-sm transition-colors"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border)] space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[var(--text-muted)] text-xs font-medium mb-2" htmlFor="name">>
                        Full Name *
                      </label>
                      <input
                        required
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Yamada Tarou"
                        className="w-full px-4 py-3 bg-[var(--overlay-soft)] border border-[var(--border)] rounded-xl text-[var(--text-primary)] placeholder-[var(--text-subtle)] text-sm focus:outline-none focus:border-red-500/50 focus:bg-[var(--overlay-medium)] transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[var(--text-muted)] text-xs font-medium mb-2" htmlFor="email">>
                        Email Address *
                      </label>
                      <input
                        required
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@company.co.jp"
                        className="w-full px-4 py-3 bg-[var(--overlay-soft)] border border-[var(--border)] rounded-xl text-[var(--text-primary)] placeholder-[var(--text-subtle)] text-sm focus:outline-none focus:border-red-500/50 focus:bg-[var(--overlay-medium)] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[var(--text-muted)] text-xs font-medium mb-2" htmlFor="company">>
                        Company
                      </label>
                      <input
                        id="company"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="株式会社〇〇"
                        className="w-full px-4 py-3 bg-[var(--overlay-soft)] border border-[var(--border)] rounded-xl text-[var(--text-primary)] placeholder-[var(--text-subtle)] text-sm focus:outline-none focus:border-red-500/50 focus:bg-[var(--overlay-medium)] transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[var(--text-muted)] text-xs font-medium mb-2" htmlFor="subject">>
                        Subject *
                      </label>
                      <select
                        required
                        id="subject"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[var(--overlay-soft)] border border-[var(--border)] rounded-xl text-[var(--text-primary)] text-sm focus:outline-none focus:border-red-500/50 focus:bg-[var(--overlay-medium)] transition-all appearance-none"
                      >
                        <option value="" className="bg-[var(--bg-card)]">Select a topic</option>
                        <option value="partnership" className="bg-[var(--bg-card)]">Partnership Inquiry</option>
                        <option value="project" className="bg-[var(--bg-card)]">New Project</option>
                        <option value="diagnostic" className="bg-[var(--bg-card)]">Diagnostic Tools</option>
                        <option value="erasure" className="bg-[var(--bg-card)]">Data Erasure</option>
                        <option value="other" className="bg-[var(--bg-card)]">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                      <label className="block text-[var(--text-muted)] text-xs font-medium mb-2" htmlFor="message">
                      Message *
                    </label>
                    <textarea
                      required
                      id="message"
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project or inquiry..."
                      className="w-full px-4 py-3 bg-[var(--overlay-soft)] border border-[var(--border)] rounded-xl text-[var(--text-primary)] placeholder-[var(--text-subtle)] text-sm focus:outline-none focus:border-red-500/50 focus:bg-[var(--overlay-medium)] transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-red-600 hover:bg-red-500 disabled:opacity-60 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-red-600/25 active:scale-95"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-20 bg-[var(--bg-base)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Find Us"
            title="Our Location"
            highlightedWord="Location"
            description="We're based in Dhaka, Bangladesh — serving clients in Japan and around the world."
            accentColor="green"
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-12 rounded-3xl overflow-hidden border border-[var(--border)] relative"
          >
            {/* Map overlay with address card */}
            <div className="absolute top-4 left-4 z-10 p-4 rounded-xl bg-[var(--bg-card)] backdrop-blur-sm border border-[var(--border-medium)] max-w-xs">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-4 h-4 text-red-500" />
                <span className="text-[var(--text-primary)] font-semibold text-sm">Ultra-X BD</span>
              </div>
              <p className="text-[var(--text-muted)] text-xs leading-relaxed">
                Dhaka, Bangladesh<br />
                23.7803° N, 90.4258° E
              </p>
              <a
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-xs text-red-400 hover:text-red-300 transition-colors"
              >
                Open in Google Maps →
              </a>
            </div>

            <iframe
              src={mapSrc}
              width="100%"
              height="450"
              style={{ border: 0, filter: theme === "dark" ? "invert(0.9) hue-rotate(180deg)" : "none" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ultra-X BD Location"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
