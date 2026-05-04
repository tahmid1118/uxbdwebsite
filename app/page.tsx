import Hero from "@/components/home/hero";
import StatsSection from "@/components/home/stats-section";
import ServicesSection from "@/components/home/services-section";
import AboutSection from "@/components/home/about-section";
import PortfolioSection from "@/components/home/portfolio-section";
import CtaSection from "@/components/home/cta-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsSection />
      <ServicesSection />
      <AboutSection />
      <PortfolioSection />
      <CtaSection />
    </>
  );
}

