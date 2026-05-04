import type { Metadata } from "next";
import AboutPageContent from "@/components/pages/about-content";

export const metadata: Metadata = {
  title: "About Us | Ultra-X BD",
  description:
    "Learn about Ultra-X BD — Bangladesh's premier IT software development company, partnering with Ultra-X Japan since 2019.",
};

export default function AboutPage() {
  return <AboutPageContent />;
}
