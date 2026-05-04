import type { Metadata } from "next";
import ServicesPageContent from "@/components/pages/services-content";

export const metadata: Metadata = {
  title: "Services | Ultra-X BD",
  description:
    "Explore our software development services — hardware diagnostics, data erasure, OS deployment, mobile tools, and custom enterprise software.",
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}
