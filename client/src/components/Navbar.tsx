import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/telephony", label: "VoIP" },
  { href: "/it-support", label: "IT Support" },
  { href: "/connectivity", label: "Connectivity" },
  { href: "/ai-solutions", label: "AI Solutions" },
  { href: "/digital", label: "Digital" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'rgba(13, 27, 42, 0.97)' : 'rgba(13, 27, 42, 0.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: scrolled ? '1px solid rgba(45, 212, 191, 0.15)' : '1px solid transparent',
        boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.4)' : 'none',
      }}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-2">
              <img
                src="/manus-storage/Safeserv_Logo_3cfdca1b.png"
                alt="SafeServ"
                className="h-8 lg:h-10 object-contain"
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className="px-3 py-2 text-sm font-medium transition-all duration-200 relative group"
                  style={{
                    color: location === link.href ? '#2DD4BF' : '#94A3B8',
                    fontFamily: 'DM Sans, sans-serif',
                  }}
                >
                  {link.label}
                  <span
                    className="absolute bottom-0 left-0 right-0 h-0.5 transition-all duration-200"
                    style={{
                      backgroundColor: '#2DD4BF',
                      transform: location === link.href ? 'scaleX(1)' : 'scaleX(0)',
                      transformOrigin: 'left',
                    }}
                  />
                </span>
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:01245850140"
              className="flex items-center gap-2 text-sm font-medium transition-colors"
              style={{ color: '#2DD4BF' }}
            >
              <Phone size={14} />
              01245 850140
            </a>
            <Link href="/contact">
              <button
                className="px-5 py-2 text-sm font-semibold rounded transition-all duration-200 hover:scale-105"
                style={{
                  backgroundColor: '#F59E0B',
                  color: '#0D1B2A',
                  fontFamily: 'Barlow Condensed, sans-serif',
                  letterSpacing: '0.05em',
                  fontSize: '0.9rem',
                }}
              >
                GET A FREE QUOTE
              </button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2"
            style={{ color: '#2DD4BF' }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            style={{ backgroundColor: 'rgba(13, 27, 42, 0.98)', borderTop: '1px solid rgba(45, 212, 191, 0.15)' }}
          >
            <div className="container py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span
                    className="block px-4 py-3 text-base font-medium rounded transition-colors"
                    style={{
                      color: location === link.href ? '#2DD4BF' : '#94A3B8',
                      backgroundColor: location === link.href ? 'rgba(45, 212, 191, 0.08)' : 'transparent',
                    }}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
              <div className="mt-3 pt-3" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                <Link href="/contact">
                  <button
                    className="w-full py-3 font-semibold rounded"
                    style={{
                      backgroundColor: '#F59E0B',
                      color: '#0D1B2A',
                      fontFamily: 'Barlow Condensed, sans-serif',
                      letterSpacing: '0.05em',
                    }}
                  >
                    GET A FREE QUOTE
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
