import AboutSection from "@/components/home/about-section";
import CtaSection from "@/components/home/cta-section";
import GallerySection from "@/components/home/gallery-section";
import Hero from "@/components/home/hero";
import PartnershipSection from "@/components/home/partnership-section";
import RepresentativesSection from "@/components/home/representatives-section";
import ServicesSection from "@/components/home/services-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <AboutSection />
      <PartnershipSection />
      <RepresentativesSection />
      <GallerySection />
      <CtaSection />
    </>
  );
}
