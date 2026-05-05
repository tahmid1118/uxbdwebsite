"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const photos = [
  {
    src: "/assets/images/20260102_151038.jpg",
    alt: "Ultra-X BD Office Trip",
  },
  {
    src: "/assets/images/623656545_26006659008958037_1859982643663716500_n.png",
    alt: "Our Honorable CEO with BD Manager",
  },
  {
    src: "/assets/images/IMG_0242.jpg",
    alt: "Project Award",
  },
  {
    src: "/assets/images/IMG_0247.jpg",
    alt: "Project Award",
  },
];

export default function GallerySection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + photos.length) % photos.length);
  }, []);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % photos.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
  };

  return (
    <section className="py-12 bg-[var(--bg-base)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="text-xs font-semibold tracking-widest uppercase text-red-500">
            Gallery
          </span>
          <h2 className="mt-2 text-3xl font-bold text-[var(--text-primary)]">
            Our Moments
          </h2>
        </div>
        <div
          className="relative overflow-hidden"
          style={{ height: "clamp(280px, 60vw, 600px)" }}
        >
          <AnimatePresence custom={direction} mode="popLayout">
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={photos[current].src}
                alt={photos[current].alt}
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </AnimatePresence>

          {/* Prev / Next buttons */}
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-[var(--overlay-strong)] hover:bg-[var(--overlay-medium)] dark:bg-black/40 dark:hover:bg-black/70 text-[var(--text-primary)] dark:text-white rounded-full p-2 transition-colors border border-[var(--border)]"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-[var(--overlay-strong)] hover:bg-[var(--overlay-medium)] dark:bg-black/40 dark:hover:bg-black/70 text-[var(--text-primary)] dark:text-white rounded-full p-2 transition-colors border border-[var(--border)]"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Caption */}
        <p className="text-center text-sm font-medium text-[var(--text-secondary)] mt-3">
          {photos[current].alt}
        </p>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-4">
          {photos.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > current ? 1 : -1);
                setCurrent(idx);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === current ? "bg-red-500 w-6" : "bg-[var(--border)]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
