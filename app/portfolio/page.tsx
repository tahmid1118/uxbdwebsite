import type { Metadata } from "next";
import PortfolioPageContent from "@/components/pages/portfolio-content";

export const metadata: Metadata = {
  title: "Portfolio | Ultra-X BD",
  description:
    "Browse Ultra-X BD's portfolio of software products deployed in Japan's IT industry — from diagnostic tools to data erasure solutions.",
};

export default function PortfolioPage() {
  return <PortfolioPageContent />;
}
