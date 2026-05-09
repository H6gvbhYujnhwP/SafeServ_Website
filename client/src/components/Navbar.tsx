import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/telephony", label: "VoIP" },
  { href: "/it-support", label: "IT Support" },
  { href: "/connectivity", label: "Comms" },
  { href: "/ai-solutions", label: "AI Solutions" },
  { href: "/digital", label: "Website Design" },
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
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.97)' : 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(12px)',
        borderBottom: scrolled ? '1px solid #E5E7EB' : '1px solid rgba(229,231,235,0.6)',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.08)' : 'none',
      }}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="SafeServ"
                className="h-10 lg:h-12 object-contain"
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className="px-2 py-1.5 text-xs font-medium transition-all duration-200 relative group whitespace-nowrap lg:text-xs xl:text-sm"
                  style={{
                    color: location === link.href ? '#0D9488' : '#4B5563',
                    fontFamily: 'Space Grotesk, DM Sans, sans-serif',
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
          <div className="hidden lg:flex items-center gap-2">
            <a
              href="tel:01245850140"
              className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-teal-600"
              style={{ color: '#0D9488' }}
            >
              <Phone size={14} />
              01245 850140
            </a>
            <Link href="/contact">
              <button
                className="px-3 py-2 text-xs font-semibold rounded-md transition-all duration-200 hover:scale-105 hover:shadow-lg whitespace-nowrap"
                style={{
                  backgroundColor: '#2DD4BF',
                  color: '#0D2A25',
                  fontFamily: 'Space Grotesk, sans-serif',
                  letterSpacing: '0.02em',
                  boxShadow: '0 2px 8px rgba(45,212,191,0.35)',
                }}
              >
                GET A FREE QUOTE
              </button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2"
            style={{ color: '#0D9488' }}
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
            style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid #E5E7EB' }}
          >
            <div className="container py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span
                    className="block px-4 py-3 text-base font-medium rounded-md transition-colors"
                    style={{
                      color: location === link.href ? '#0D9488' : '#4B5563',
                      backgroundColor: location === link.href ? 'rgba(45, 212, 191, 0.08)' : 'transparent',
                    }}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
              <div className="mt-3 pt-3" style={{ borderTop: '1px solid #E5E7EB' }}>
                <Link href="/contact">
                  <button
                    className="w-full py-3 font-semibold rounded-md"
                    style={{
                      backgroundColor: '#2DD4BF',
                      color: '#0D2A25',
                      fontFamily: 'Space Grotesk, sans-serif',
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
