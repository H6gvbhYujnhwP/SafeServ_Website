import { Link } from "wouter";
import { Phone, Mail, Globe, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#2B4A5C', borderTop: '3px solid #2DD4BF' }}>
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src="/logo.png"
              alt="SafeServ"
              className="h-[70px] object-contain mb-4"
            />
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Your complete technology partner for UK SMEs. VoIP, IT support, connectivity, AI solutions, and digital services — all under one roof, with no lock-in contracts.
            </p>
            <p className="text-xs font-semibold tracking-widest" style={{ color: '#2DD4BF' }}>
              RELIABLE. SECURE. CONNECTED.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold tracking-widest mb-5" style={{ color: '#2DD4BF', fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '0.1em' }}>
              SERVICES
            </h4>
            <ul className="space-y-2">
              {[
                { href: '/telephony', label: 'VoIP Telephony' },
                { href: '/it-support', label: 'IT Support' },
                { href: '/connectivity', label: 'Connectivity' },
                { href: '/ai-solutions', label: 'AI Solutions' },
                { href: '/digital', label: 'Digital & Web' },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>
                    <span className="text-sm transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.6)' }}>
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold tracking-widest mb-5" style={{ color: '#2DD4BF', fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '0.1em' }}>
              COMPANY
            </h4>
            <ul className="space-y-2">
              {[
                { href: '/about', label: 'About James' },
                { href: '/about', label: 'Our Partners' },
                { href: '/contact', label: 'Contact Us' },
                { href: '/contact', label: 'Get a Quote' },
              ].map((item, i) => (
                <li key={i}>
                  <Link href={item.href}>
                    <span className="text-sm transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.6)' }}>
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold tracking-widest mb-5" style={{ color: '#2DD4BF', fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '0.1em' }}>
              GET IN TOUCH
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:01245850140" className="flex items-center gap-3 text-sm transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.6)' }}>
                  <Phone size={14} style={{ color: '#2DD4BF', flexShrink: 0 }} />
                  01245 850140
                </a>
              </li>
              <li>
                <a href="mailto:hello@safeserv.co.uk" className="flex items-center gap-3 text-sm transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.6)' }}>
                  <Mail size={14} style={{ color: '#2DD4BF', flexShrink: 0 }} />
                  hello@safeserv.co.uk
                </a>
              </li>
              <li>
                <a href="https://www.safeserv.co.uk" className="flex items-center gap-3 text-sm transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.6)' }}>
                  <Globe size={14} style={{ color: '#2DD4BF', flexShrink: 0 }} />
                  www.safeserv.co.uk
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
                  <MapPin size={14} style={{ color: '#2DD4BF', flexShrink: 0, marginTop: 2 }} />
                  Essex, United Kingdom
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>
            © {new Date().getFullYear()} SafeServ Ltd. All rights reserved. Registered in England & Wales.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>Partners:</span>
            <span className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>Sweetbyte</span>
            <span className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>TheGreenAgents</span>
            <span className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>ClearerPaths</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
