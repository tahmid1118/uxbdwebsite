import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/providers/theme-provider";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ultra-X BD | IT Software Development Bangladesh",
  description:
    "Ultra-X BD is a leading IT software development company in Bangladesh, developing cutting-edge hardware diagnostic, data erasure, and OS deployment tools for Japanese clients since 2019.",
  keywords: [
    "Ultra-X BD",
    "software development",
    "Bangladesh",
    "IT company",
    "hardware diagnostic",
    "data erasure",
  ],
  openGraph: {
    title: "Ultra-X BD | IT Software Development Bangladesh",
    description: "Powering Japan's IT Solutions from Bangladesh since 2019.",
    type: "website",
    images: [{ url: "/uxbd_logo_text.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
    >
      <head>
        <script
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="dark")document.documentElement.classList.add("dark");}catch(e){}})();`,
          }}
        />
      </head>
      <body suppressHydrationWarning className="antialiased">
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
