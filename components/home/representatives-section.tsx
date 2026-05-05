"use client";

import SectionHeading from "@/components/shared/section-heading";
import { representatives } from "@/data/company";
import { motion } from "framer-motion";
import { UserRound } from "lucide-react";
import Image from "next/image";

export default function RepresentativesSection() {
  return (
    <section className="relative py-24 bg-[var(--bg-base)]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-1/4 w-[500px] h-[400px] bg-red-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Leadership"
          title="Our Representatives"
          highlightedWord="Representatives"
          description="The dedicated leaders driving Ultra-X BD's mission to deliver world-class IT solutions."
          accentColor="red"
        />

        <div className="mt-16 flex flex-wrap justify-center gap-8">
          {representatives.map((rep, idx) => {
            const isRed = rep.color === "red";
            return (
              <motion.div
                key={rep.role}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.12, duration: 0.5 }}
                className="group flex flex-col items-center text-center w-64"
              >
                {/* Avatar */}
                <div
                  className={`relative w-44 h-44 rounded-full mb-5 overflow-hidden border-4 shadow-xl ${
                    isRed
                      ? "border-red-500/40 shadow-red-500/10"
                      : "border-green-500/40 shadow-green-500/10"
                  }`}
                >
                  {rep.photo ? (
                    <Image
                      src={rep.photo}
                      alt={rep.name}
                      fill
                      className="object-contain scale-[1.2] object-bottom"
                    />
                  ) : (
                    <div
                      className={`w-full h-full flex items-center justify-center ${
                        isRed
                          ? "bg-gradient-to-br from-red-600/10 to-red-800/20"
                          : "bg-gradient-to-br from-green-600/10 to-green-800/20"
                      }`}
                    >
                      <UserRound
                        className={`w-20 h-20 ${
                          isRed ? "text-red-400" : "text-green-400"
                        }`}
                        strokeWidth={1.2}
                      />
                    </div>
                  )}
                </div>

                {/* Info */}
                <h3 className="text-[var(--text-primary)] font-semibold text-lg leading-snug">
                  {rep.name}
                </h3>
                <p
                  className={`text-sm font-medium mt-1 ${
                    isRed ? "text-red-500" : "text-green-500"
                  }`}
                >
                  {rep.title}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
