"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlightedWord?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  accentColor?: "red" | "green";
}

export default function SectionHeading({
  eyebrow,
  title,
  highlightedWord,
  description,
  align = "center",
  className,
  accentColor = "red",
}: SectionHeadingProps) {
  const accentClass =
    accentColor === "red" ? "gradient-text-red" : "gradient-text-green";
  const eyebrowColor =
    accentColor === "red"
      ? "text-red-500 border-red-500/20 bg-red-500/5"
      : "text-green-500 border-green-500/20 bg-green-500/5";

  // Split title to highlight specific word
  const renderTitle = () => {
    if (!highlightedWord) {
      return <span>{title}</span>;
    }
    const parts = title.split(highlightedWord);
    return (
      <>
        {parts[0]}
        <span className={accentClass}>{highlightedWord}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full border",
            eyebrowColor
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] leading-tight">
        {renderTitle()}
      </h2>
      {description && (
        <p className="text-[var(--text-muted)] text-base sm:text-lg leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </motion.div>
  );
}
