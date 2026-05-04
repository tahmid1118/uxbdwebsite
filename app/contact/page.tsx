import type { Metadata } from "next";
import ContactPageContent from "@/components/pages/contact-content";

export const metadata: Metadata = {
  title: "Contact | Ultra-X BD",
  description:
    "Get in touch with Ultra-X BD. We're based in Dhaka, Bangladesh and partner with Japanese clients globally.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
