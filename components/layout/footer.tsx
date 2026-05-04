import Link from "next/link";
import { Zap, MapPin, Mail, Globe, ExternalLink, Share2, Link2 } from "lucide-react";
import { navItems } from "@/data/company";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { label: "Hardware Diagnostics", href: "/services" },
    { label: "Data Erasure Tools", href: "/services" },
    { label: "OS Deployment", href: "/services" },
    { label: "Mobile Solutions", href: "/services" },
    { label: "Custom Software", href: "/services" },
  ];

  return (
    <footer className="bg-[var(--bg-footer)] border-t border-white/5">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-5 group">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Zap className="w-4 h-4 text-white fill-white" />
              </div>
              <span className="font-bold text-lg tracking-tight">
                <span className="text-white">ULTRA-X</span>
                <span className="text-red-500"> BD</span>
              </span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Bangladesh&apos;s premier IT software partner, delivering world-class diagnostic and data management solutions for Japanese clients since 2019.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3">
              {[
                { Icon: Globe, href: "https://www.uxd.co.jp/", label: "Website" },
                { Icon: ExternalLink, href: "#", label: "LinkedIn" },
                { Icon: Link2, href: "#", label: "GitHub" },
                { Icon: Share2, href: "#", label: "Twitter" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-red-600/20 hover:text-red-400 text-gray-500 flex items-center justify-center transition-all duration-200 border border-white/8 hover:border-red-600/30"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-500 hover:text-white text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-gray-500 hover:text-white text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-green-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-500">
                <MapPin className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                <span>
                  Dhaka, Bangladesh<br />
                  23.7803° N, 90.4258° E
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-500">
                <Mail className="w-4 h-4 text-red-500 shrink-0" />
                <a
                  href="mailto:info@ultraxbd.com"
                  className="hover:text-white transition-colors"
                >
                  info@ultraxbd.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-500">
                <Globe className="w-4 h-4 text-red-500 shrink-0" />
                <a
                  href="https://www.uxd.co.jp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  uxd.co.jp (Parent)
                </a>
              </li>
            </ul>

            {/* Partner badge */}
            <div className="mt-6 p-3 rounded-lg bg-white/3 border border-white/8">
              <p className="text-xs text-gray-600">Bangladesh Development Partner of</p>
              <p className="text-sm font-semibold text-white mt-0.5">株式会社ウルトラエックス</p>
              <p className="text-xs text-gray-600">Ultra-X Inc. Japan</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-xs">
            © {currentYear} Ultra-X BD. All rights reserved.
          </p>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-gray-600 text-xs">All systems operational</span>
          </div>
          <div className="flex items-center gap-4 text-xs text-gray-600">
            <Link href="/privacy" className="hover:text-gray-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gray-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
