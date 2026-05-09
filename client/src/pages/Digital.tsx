import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Globe, Smartphone, ShoppingCart, Code2, CheckCircle, Clock, Search, Share2 } from "lucide-react";

const webServices = [
  { icon: Globe, title: "Rapid Website Delivery", partner: "ClearerPaths", desc: "7-page professional websites delivered in under 48 hours from £799. Copywriting, images, and hosting included.", tag: "FROM £799" },
  { icon: Code2, title: "Custom Website Development", partner: "TheGreenAgents", desc: "Bespoke website design and development for businesses that need a fully custom digital solution.", tag: "BESPOKE" },
  { icon: Smartphone, title: "Mobile App Development", partner: "TheGreenAgents", desc: "iOS and Android app development for businesses ready to go mobile. From concept to App Store launch.", tag: "iOS & ANDROID" },
  { icon: ShoppingCart, title: "E-commerce Solutions", partner: "TheGreenAgents", desc: "Fully integrated online stores with payment processing, inventory management, and customer portals.", tag: "SELL ONLINE" },
  { icon: Search, title: "SEO and Digital Marketing", partner: "TheGreenAgents", desc: "Get found on Google. Technical SEO, content strategy, and paid search campaigns that drive real leads.", tag: "GROW TRAFFIC" },
  { icon: Share2, title: "Social Media Management", partner: "TheGreenAgents", desc: "Consistent, on-brand social media presence managed for you by TheGreenAgents AI tools.", tag: "MANAGED" },
];

const sectors = ["Finance", "Legal", "Manufacturing", "Creative", "Property", "Healthcare", "Recruitment", "Construction", "Hospitality", "Technology", "Retail", "Education"];

export default function Digital() {
  return (
    <div style={{ backgroundColor: "#FFFFFF", minHeight: "100vh" }}>
      {/* Hero */}
      <section style={{ position: "relative", paddingTop: "100px", paddingBottom: "80px", background: "linear-gradient(135deg, #F0FDFB 0%, #E6FFFA 50%, #F0FDF4 100%)", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -100, right: -100, width: 500, height: 500, borderRadius: "50%", background: "rgba(45,212,191,0.07)", pointerEvents: "none" }} />
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 mb-5" style={{ background: "rgba(45,212,191,0.12)", border: "1px solid rgba(45,212,191,0.3)", borderRadius: "100px", padding: "6px 16px", color: "#0D9488", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em" }}>
              <Globe size={12} /> DIGITAL AND WEB
            </div>
            <h1 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800, color: "#111827", lineHeight: 1.1, marginBottom: "20px" }}>
              Your Digital<br /><span style={{ color: "#0D9488" }}>Presence, Built.</span>
            </h1>
            <p style={{ fontSize: "1.05rem", color: "#4B5563", lineHeight: 1.75, maxWidth: "480px", marginBottom: "32px" }}>
              From a professional website in 48 hours to full digital marketing — SafeServ and our <strong style={{ color: "#0D9488" }}>ClearerPaths</strong> partnership handle your entire digital presence.
            </p>
            <Link href="/contact">
              <motion.button whileHover={{ scale: 1.05, boxShadow: "0 8px 30px rgba(45,212,191,0.45)" }} whileTap={{ scale: 0.97 }} className="flex items-center gap-2 font-semibold" style={{ backgroundColor: "#2DD4BF", color: "#0D2A25", padding: "14px 28px", borderRadius: "8px", fontSize: "0.95rem", fontFamily: "Space Grotesk, sans-serif", border: "none", cursor: "pointer" }}>
                Get a Website Quote <ArrowRight size={15} />
              </motion.button>
            </Link>
            <div className="flex flex-wrap gap-6 mt-8">
              {["From £799", "48-Hour Delivery", "Mobile-First", "SEO Optimised"].map((badge) => (
                <div key={badge} className="flex items-center gap-2" style={{ fontSize: "0.8rem", color: "#6B7280" }}>
                  <CheckCircle size={14} style={{ color: "#2DD4BF" }} />{badge}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ClearerPaths Feature */}
      <section style={{ backgroundColor: "#F9FAFB", paddingTop: "80px", paddingBottom: "80px" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="inline-flex items-center gap-2 mb-5" style={{ background: "rgba(45,212,191,0.12)", border: "1px solid rgba(45,212,191,0.3)", borderRadius: "100px", padding: "6px 16px", color: "#0D9488", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em" }}>
                <Clock size={12} /> CLEARERPATHS PARTNERSHIP
              </div>
              <h2 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 700, color: "#111827", lineHeight: 1.2, marginBottom: "16px" }}>
                Professional Website.<br /><span style={{ color: "#0D9488" }}>48 Hours. £799.</span>
              </h2>
              <p style={{ color: "#4B5563", lineHeight: 1.75, marginBottom: "24px" }}>
                Through our ClearerPaths partnership, we deliver a fully professional, mobile-first website in just 48 hours — starting from £799. No lengthy agency processes. No months of waiting.
              </p>
              {["Professional 7-page website from £799", "Delivered in 48 hours from brief to live", "Mobile-first, SEO-optimised design", "Professional copywriting included", "Google Analytics and Search Console setup", "30-day post-launch support included"].map((item, i) => (
                <div key={i} className="flex items-start gap-3 mb-3" style={{ fontSize: "0.88rem", color: "#374151" }}>
                  <CheckCircle size={15} style={{ color: "#2DD4BF", flexShrink: 0, marginTop: 2 }} />{item}
                </div>
              ))}
              <Link href="/contact">
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="flex items-center gap-2 font-semibold mt-6" style={{ backgroundColor: "#2DD4BF", color: "#0D2A25", padding: "14px 28px", borderRadius: "8px", fontSize: "0.95rem", fontFamily: "Space Grotesk, sans-serif", border: "none", cursor: "pointer" }}>
                  Get My Website <ArrowRight size={15} />
                </motion.button>
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <div style={{ backgroundColor: "#FFFFFF", borderRadius: "20px", padding: "40px", border: "1px solid #E5E7EB", boxShadow: "0 16px 48px rgba(45,212,191,0.1)" }}>
                <div style={{ textAlign: "center", marginBottom: "28px" }}>
                  <div style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "3.5rem", fontWeight: 800, color: "#0D9488", lineHeight: 1 }}>£799</div>
                  <div style={{ fontSize: "0.8rem", color: "#6B7280", marginTop: "6px" }}>Complete 7-page website, live in 48 hours</div>
                </div>
                {["Home page", "About us", "Services / Products", "Testimonials", "Blog / News", "Contact page", "Privacy & Terms"].map((page, i) => (
                  <div key={i} className="flex items-center justify-between" style={{ padding: "12px 0", borderBottom: i < 6 ? "1px solid #F3F4F6" : "none" }}>
                    <span style={{ fontSize: "0.85rem", color: "#374151" }}>{page}</span>
                    <CheckCircle size={14} style={{ color: "#2DD4BF" }} />
                  </div>
                ))}
                <Link href="/contact">
                  <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} style={{ width: "100%", marginTop: "24px", backgroundColor: "#2DD4BF", color: "#0D2A25", padding: "14px", borderRadius: "8px", fontSize: "0.95rem", fontWeight: 700, fontFamily: "Space Grotesk, sans-serif", border: "none", cursor: "pointer" }}>
                    Claim Your Website
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ backgroundColor: "#FFFFFF", paddingTop: "80px", paddingBottom: "80px" }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <div className="inline-block mb-4 px-4 py-1 text-xs font-bold tracking-widest rounded-full" style={{ backgroundColor: "rgba(45,212,191,0.12)", color: "#0D9488" }}>FULL DIGITAL SERVICES</div>
            <h2 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 700, color: "#111827" }}>Beyond the Website.</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {webServices.map((svc, i) => (
              <motion.div key={svc.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} whileHover={{ y: -5, boxShadow: "0 12px 32px rgba(45,212,191,0.15)" }} style={{ backgroundColor: "#F9FAFB", borderRadius: "16px", padding: "32px", border: "1px solid #E5E7EB" }}>
                <div className="flex items-start justify-between mb-4">
                  <div style={{ width: 48, height: 48, borderRadius: "12px", backgroundColor: "rgba(45,212,191,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svc.icon size={22} style={{ color: "#0D9488" }} />
                  </div>
                  <div className="text-right">
                    <span style={{ fontSize: "0.6rem", fontWeight: 700, color: "#0D9488", backgroundColor: "rgba(45,212,191,0.1)", padding: "3px 10px", borderRadius: "100px", display: "block", marginBottom: "4px" }}>{svc.tag}</span>
                    <span style={{ fontSize: "0.65rem", color: "#9CA3AF" }}>via {svc.partner}</span>
                  </div>
                </div>
                <h3 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.05rem", fontWeight: 700, color: "#111827", marginBottom: "10px" }}>{svc.title}</h3>
                <p style={{ fontSize: "0.875rem", color: "#6B7280", lineHeight: 1.65 }}>{svc.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section style={{ backgroundColor: "#F9FAFB", paddingTop: "60px", paddingBottom: "60px" }}>
        <div className="container text-center">
          <div className="inline-block mb-6 px-4 py-1 text-xs font-bold tracking-widest rounded-full" style={{ backgroundColor: "rgba(45,212,191,0.12)", color: "#0D9488" }}>SECTORS WE SERVE</div>
          <div className="flex flex-wrap justify-center gap-3">
            {sectors.map((sector, i) => (
              <motion.span key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} style={{ backgroundColor: "#FFFFFF", border: "1px solid #E5E7EB", borderRadius: "100px", padding: "8px 20px", fontSize: "0.82rem", color: "#374151", fontWeight: 500 }}>
                {sector}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "linear-gradient(135deg, #0D9488 0%, #0F766E 100%)", paddingTop: "72px", paddingBottom: "72px" }}>
        <div className="container text-center">
          <h2 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 700, color: "#FFFFFF", marginBottom: "16px" }}>Ready to transform your digital presence?</h2>
          <p style={{ color: "rgba(255,255,255,0.85)", maxWidth: "440px", margin: "0 auto 32px" }}>Your new website could be live by tomorrow. Starting from £799.</p>
          <Link href="/contact">
            <motion.button whileHover={{ scale: 1.05, boxShadow: "0 8px 30px rgba(0,0,0,0.2)" }} whileTap={{ scale: 0.97 }} className="flex items-center gap-2 font-semibold mx-auto" style={{ backgroundColor: "#FFFFFF", color: "#0D9488", padding: "15px 36px", borderRadius: "8px", fontSize: "1rem", fontFamily: "Space Grotesk, sans-serif", border: "none", cursor: "pointer" }}>
              Start Your Project <ArrowRight size={16} />
            </motion.button>
          </Link>
        </div>
      </section>
    </div>
  );
}
