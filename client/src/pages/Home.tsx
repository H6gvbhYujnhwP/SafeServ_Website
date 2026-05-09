import { Link } from "wouter";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Phone, Wifi, Monitor, Brain, Globe, ChevronRight,
  Shield, Clock, Zap, Users, CheckCircle, ArrowRight
} from "lucide-react";

/* ─── OPTION 2: CRISP WHITE & TEAL ───
   BG: #FFFFFF / #F9FAFB / #F0FDFB
   Primary: #2B4A5C  Teal: #2DD4BF  Teal Dark: #0D9488
   Text: #111827 / #6B7280  Border: #E5E7EB
*/

const services = [
  { icon: Phone, title: "VoIP Telephony", desc: "D44, E50 & F60 IP phones. HD audio, 4 SIP accounts, PoE support. No lock-in contracts.", color: "#2DD4BF", href: "/telephony" },
  { icon: Monitor, title: "IT Support", desc: "Powered by Sweetbyte. The UK's first MOA (Managing Operating Agents) service included as standard.", color: "#0D9488", href: "/it-support" },
  { icon: Wifi, title: "Connectivity", desc: "Leased lines, FTTP, broadband, and SoGEA. Delivered via DWS, NTA, and Gamma networks.", color: "#2DD4BF", href: "/connectivity" },
  { icon: Brain, title: "AI Solutions", desc: "SafeServ Translate+ call transcription, AI voice receptionists, and automation tools via TheGreenAgents.", color: "#0D9488", href: "/ai-solutions" },
  { icon: Globe, title: "Digital & Web", desc: "7-page professional websites in 48hrs from £799 via ClearerPaths. Apps and digital marketing too.", color: "#2DD4BF", href: "/digital" },
  { icon: Shield, title: "Cyber Security", desc: "Endpoint protection, threat monitoring, and security audits. Powered by Sweetbyte's cyber team.", color: "#0D9488", href: "/it-support" },
];

const stats = [
  { num: "500+", label: "Clients Served" },
  { num: "24/7", label: "Support Available" },
  { num: "0", label: "Lock-In Contracts" },
  { num: "5★", label: "Service Rating" },
];

const phones = [
  { name: "D44", tag: "ENTRY LEVEL", img: "/manus-storage/VoIPPhoneD44-1_6f4c3e2a.png", features: ["4.3\" Colour LCD", "10 BLF Keys", "HD Audio", "PoE Support"], href: "/telephony" },
  { name: "E50", tag: "MOST POPULAR", img: "/manus-storage/VoIPPhoneE50_7b2d1f3c.png", features: ["4.3\" Colour LCD", "36 BLF Keys", "5-Way Conference", "Bluetooth & EHS"], href: "/telephony" },
  { name: "F60", tag: "FLAGSHIP", img: "/manus-storage/VoIPPhoneF60Safeservbrochure_9e5a2b1d.png", features: ["7\" Touchscreen", "20 SIP Accounts", "Video Calling", "Built-in Wi-Fi"], href: "/telephony" },
];

const whyUs = [
  { icon: Shield, title: "No Lock-In Contracts", desc: "Stay because you love the service, not because you're trapped. Every SafeServ agreement is flexible." },
  { icon: Clock, title: "24/7 UK Support", desc: "Real people, based in the UK, available around the clock. No offshore call centres." },
  { icon: Zap, title: "One Point of Contact", desc: "One number, one team, all your tech sorted. VoIP, IT, connectivity, AI — all under one roof." },
  { icon: Users, title: "Partner Ecosystem", desc: "Best-in-class partners: Sweetbyte for IT, TheGreenAgents for AI, ClearerPaths for web." },
];

export default function Home() {
  return (
    <div style={{ backgroundColor: '#FFFFFF', minHeight: '100vh' }}>
      <Navbar />

      {/* ── HERO ── */}
      <section
        style={{
          background: 'linear-gradient(135deg, #F0FDFB 0%, #E6F7F5 40%, #EFF9F8 70%, #F8FFFE 100%)',
          paddingTop: '80px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative teal blob */}
        <div style={{
          position: 'absolute', top: '-80px', right: '-80px',
          width: '500px', height: '500px',
          background: 'radial-gradient(circle, rgba(45,212,191,0.12) 0%, transparent 70%)',
          borderRadius: '50%', pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '-60px', left: '10%',
          width: '300px', height: '300px',
          background: 'radial-gradient(circle, rgba(45,212,191,0.07) 0%, transparent 70%)',
          borderRadius: '50%', pointerEvents: 'none',
        }} />

        <div className="container" style={{ paddingTop: '72px', paddingBottom: '80px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div
                className="inline-flex items-center gap-2 mb-6"
                style={{
                  background: 'rgba(45,212,191,0.12)',
                  border: '1px solid rgba(45,212,191,0.3)',
                  borderRadius: '100px',
                  padding: '6px 14px',
                  color: '#0D9488',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  fontFamily: 'Space Grotesk, sans-serif',
                }}
              >
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#2DD4BF', display: 'inline-block' }} />
                UK'S COMPLETE TECHNOLOGY PARTNER
              </div>

              <h1
                style={{
                  fontFamily: 'Space Grotesk, DM Sans, sans-serif',
                  fontSize: 'clamp(2.8rem, 5vw, 4.2rem)',
                  fontWeight: 700,
                  lineHeight: 1.08,
                  color: '#111827',
                  marginBottom: '20px',
                }}
              >
                Reliable.<br />
                <span style={{ color: '#0D9488' }}>Secure.</span><br />
                Connected.
              </h1>

              <p style={{ fontSize: '1.05rem', color: '#6B7280', lineHeight: 1.7, maxWidth: '480px', marginBottom: '32px' }}>
                SafeServ brings together the UK's best technology services — VoIP, IT support, connectivity, AI, and digital — under one roof. No lock-in contracts. Just exceptional service.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link href="/contact">
                  <button
                    className="flex items-center gap-2 font-semibold transition-all duration-200 hover:scale-105"
                    style={{
                      backgroundColor: '#2DD4BF',
                      color: '#0D2A25',
                      padding: '14px 28px',
                      borderRadius: '8px',
                      fontSize: '0.95rem',
                      fontFamily: 'Space Grotesk, sans-serif',
                      boxShadow: '0 4px 16px rgba(45,212,191,0.4)',
                      border: 'none',
                    }}
                  >
                    Get a Free Quote <ArrowRight size={16} />
                  </button>
                </Link>
                <a href="tel:01245850140">
                  <button
                    className="flex items-center gap-2 font-semibold transition-all duration-200"
                    style={{
                      backgroundColor: 'transparent',
                      color: '#2B4A5C',
                      padding: '14px 28px',
                      borderRadius: '8px',
                      fontSize: '0.95rem',
                      fontFamily: 'Space Grotesk, sans-serif',
                      border: '1.5px solid #D1D5DB',
                    }}
                  >
                    <Phone size={16} style={{ color: '#0D9488' }} />
                    01245 850140
                  </button>
                </a>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center gap-5 mt-8">
                {['No Lock-In', 'UK Based', '24/7 Support', 'Free Quote'].map((badge) => (
                  <div key={badge} className="flex items-center gap-2" style={{ color: '#6B7280', fontSize: '0.82rem' }}>
                    <CheckCircle size={14} style={{ color: '#2DD4BF' }} />
                    {badge}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Hero right — phone image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hidden lg:flex items-center justify-center"
            >
              <div style={{ position: 'relative' }}>
                <div style={{
                  position: 'absolute', inset: '-20px',
                  background: 'radial-gradient(circle, rgba(45,212,191,0.15) 0%, transparent 70%)',
                  borderRadius: '50%',
                }} />
                <img
                  src="/manus-storage/VoIPPhoneF60Safeservbrochure_9e5a2b1d.png"
                  alt="SafeServ F60 IP Phone"
                  style={{ width: '420px', maxWidth: '100%', objectFit: 'contain', position: 'relative', zIndex: 1 }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section style={{ backgroundColor: '#2B4A5C' }}>
        <div className="container py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '2rem', fontWeight: 700, color: '#2DD4BF' }}>{s.num}</div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.06em', marginTop: '4px' }}>{s.label.toUpperCase()}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="py-24" style={{ backgroundColor: '#F9FAFB' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-xs font-semibold tracking-widest mb-3" style={{ color: '#0D9488', fontFamily: 'Space Grotesk, sans-serif' }}>WHAT WE DO</p>
            <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#111827', lineHeight: 1.15 }}>
              Everything your<br />
              <span style={{ color: '#0D9488' }}>business needs.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link href={svc.href}>
                  <div
                    className="group p-8 rounded-xl h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    style={{
                      backgroundColor: '#FFFFFF',
                      border: '1px solid #E5E7EB',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = `${svc.color}60`;
                      (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 30px ${svc.color}20`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = '#E5E7EB';
                      (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                    }}
                  >
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: `${svc.color}15` }}>
                      <svc.icon size={22} style={{ color: svc.color }} />
                    </div>
                    <h3 className="text-lg font-semibold mb-3" style={{ color: '#111827', fontFamily: 'Space Grotesk, sans-serif' }}>
                      {svc.title}
                    </h3>
                    <p className="text-sm leading-relaxed mb-5" style={{ color: '#6B7280' }}>{svc.desc}</p>
                    <div className="flex items-center gap-2 text-sm font-semibold transition-all group-hover:gap-3" style={{ color: svc.color }}>
                      Learn more <ChevronRight size={14} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHONE SHOWCASE ── */}
      <section className="py-24" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-xs font-semibold tracking-widest mb-3" style={{ color: '#0D9488', fontFamily: 'Space Grotesk, sans-serif' }}>VOIP RANGE</p>
            <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#111827', lineHeight: 1.15 }}>
              Phones built for<br />
              <span style={{ color: '#0D9488' }}>modern business.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {phones.map((phone, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
              >
                <Link href={phone.href}>
                  <div
                    className="group rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                    style={{
                      backgroundColor: '#F0FDFB',
                      border: '1px solid rgba(45,212,191,0.25)',
                    }}
                  >
                    {phone.tag === 'MOST POPULAR' && (
                      <div style={{ backgroundColor: '#2DD4BF', color: '#0D2A25', textAlign: 'center', padding: '6px', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', fontFamily: 'Space Grotesk, sans-serif' }}>
                        ★ MOST POPULAR
                      </div>
                    )}
                    <div style={{ padding: '32px 24px 16px', textAlign: 'center', background: 'linear-gradient(180deg, #F0FDFB 0%, #E6F7F5 100%)' }}>
                      <img
                        src={phone.img}
                        alt={`SafeServ ${phone.name}`}
                        style={{ height: '180px', objectFit: 'contain', margin: '0 auto' }}
                      />
                    </div>
                    <div style={{ padding: '20px 24px 28px' }}>
                      <div style={{ fontSize: '0.65rem', color: '#0D9488', fontWeight: 700, letterSpacing: '0.1em', marginBottom: '4px', fontFamily: 'Space Grotesk, sans-serif' }}>{phone.tag}</div>
                      <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.4rem', fontWeight: 700, color: '#111827', marginBottom: '12px' }}>{phone.name} IP Phone</div>
                      <ul className="space-y-1">
                        {phone.features.map((f, j) => (
                          <li key={j} className="flex items-center gap-2" style={{ fontSize: '0.8rem', color: '#6B7280' }}>
                            <CheckCircle size={12} style={{ color: '#2DD4BF', flexShrink: 0 }} />
                            {f}
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center gap-2 mt-4 text-sm font-semibold group-hover:gap-3 transition-all" style={{ color: '#0D9488' }}>
                        View specs <ChevronRight size={14} />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY SAFESERV ── */}
      <section className="py-24" style={{ backgroundColor: '#F0FDFB' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-xs font-semibold tracking-widest mb-3" style={{ color: '#0D9488', fontFamily: 'Space Grotesk, sans-serif' }}>WHY SAFESERV</p>
            <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#111827', lineHeight: 1.15 }}>
              The SafeServ<br />
              <span style={{ color: '#0D9488' }}>difference.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUs.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5" style={{ backgroundColor: 'rgba(45,212,191,0.12)', border: '1px solid rgba(45,212,191,0.25)' }}>
                  <item.icon size={24} style={{ color: '#0D9488' }} />
                </div>
                <h3 className="font-semibold mb-3" style={{ color: '#111827', fontFamily: 'Space Grotesk, sans-serif', fontSize: '1rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.85rem', color: '#6B7280', lineHeight: 1.6 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARTNER ECOSYSTEM ── */}
      <section className="py-24" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-xs font-semibold tracking-widest mb-3" style={{ color: '#0D9488', fontFamily: 'Space Grotesk, sans-serif' }}>OUR ECOSYSTEM</p>
            <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#111827', lineHeight: 1.15 }}>
              Best-in-class<br />
              <span style={{ color: '#0D9488' }}>partners.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Sweetbyte",
                role: "IT Support & Cyber Security",
                desc: "25+ years of IT expertise. The UK's first MOA (Managing Operating Agents) service included as standard with every IT support contract.",
                color: "#2DD4BF",
                href: "https://sweetbyte.co.uk",
              },
              {
                name: "TheGreenAgents",
                role: "AI Automation & Web Development",
                desc: "AI voice receptionists, marketing automation, custom websites, and mobile apps. The future of business operations, available today.",
                color: "#0D9488",
                href: "https://thegreenagents.com",
              },
              {
                name: "ClearerPaths",
                role: "Rapid Website Delivery",
                desc: "7-page professional websites delivered in under 48 hours from £799. Copywriting, images, and hosting included.",
                color: "#2DD4BF",
                href: "https://clearerpaths.co.uk",
              },
            ].map((partner, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl"
                style={{
                  backgroundColor: '#F9FAFB',
                  border: `1px solid ${partner.color}30`,
                }}
              >
                <div className="text-xs font-semibold tracking-widest mb-2" style={{ color: partner.color, fontFamily: 'Space Grotesk, sans-serif' }}>
                  {partner.role.toUpperCase()}
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#111827', fontFamily: 'Space Grotesk, sans-serif' }}>{partner.name}</h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: '#6B7280' }}>{partner.desc}</p>
                <a
                  href={partner.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold"
                  style={{ color: partner.color }}
                >
                  Visit website <ChevronRight size={14} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-20" style={{ backgroundColor: '#2B4A5C' }}>
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-semibold tracking-widest mb-4" style={{ color: '#2DD4BF', fontFamily: 'Space Grotesk, sans-serif' }}>READY TO GET STARTED?</p>
            <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#FFFFFF', lineHeight: 1.2, marginBottom: '16px' }}>
              One call. Every tech need.<br />
              <span style={{ color: '#2DD4BF' }}>No lock-in.</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', marginBottom: '36px', maxWidth: '480px', margin: '0 auto 36px' }}>
              Get a free, no-obligation quote for any or all of our services. We'll put together a bespoke package for your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <button
                  className="flex items-center gap-2 font-semibold transition-all duration-200 hover:scale-105"
                  style={{
                    backgroundColor: '#2DD4BF',
                    color: '#0D2A25',
                    padding: '14px 32px',
                    borderRadius: '8px',
                    fontSize: '0.95rem',
                    fontFamily: 'Space Grotesk, sans-serif',
                    boxShadow: '0 4px 16px rgba(45,212,191,0.4)',
                    border: 'none',
                  }}
                >
                  Get a Free Quote <ArrowRight size={16} />
                </button>
              </Link>
              <a href="tel:01245850140">
                <button
                  className="flex items-center gap-2 font-semibold transition-all"
                  style={{
                    backgroundColor: 'transparent',
                    color: '#FFFFFF',
                    padding: '14px 32px',
                    borderRadius: '8px',
                    fontSize: '0.95rem',
                    fontFamily: 'Space Grotesk, sans-serif',
                    border: '1.5px solid rgba(255,255,255,0.3)',
                  }}
                >
                  <Phone size={16} />
                  01245 850140
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
