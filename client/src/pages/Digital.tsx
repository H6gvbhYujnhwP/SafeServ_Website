import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Globe, Smartphone, ShoppingCart, Code2, CheckCircle, Clock, Search, Share2 } from "lucide-react";

function WebDesignGraphic() {
  const steps = [
    { label: "Brief", x: 60, y: 210, icon: "📋" },
    { label: "Design", x: 180, y: 120, icon: "🎨" },
    { label: "Build", x: 300, y: 120, icon: "⚡" },
    { label: "SEO", x: 180, y: 300, icon: "🔍" },
    { label: "Mobile", x: 300, y: 300, icon: "📱" },
    { label: "Live!", x: 390, y: 210, icon: "🚀" },
  ];
  const pipes = [[0,1],[0,3],[1,2],[3,4],[2,5],[4,5]];
  return (
    <div style={{ width: "100%", height: "420px" }}>
      <svg viewBox="0 0 450 420" style={{ width: "100%", height: "100%" }} xmlns="http://www.w3.org/2000/svg">
        {/* Browser chrome at top */}
        <rect x="30" y="20" width="390" height="60" rx="10" fill="rgba(45,212,191,0.08)" stroke="#2DD4BF" strokeWidth="1.5" />
        <circle cx="55" cy="50" r="7" fill="#F87171" />
        <circle cx="78" cy="50" r="7" fill="#FBBF24" />
        <circle cx="101" cy="50" r="7" fill="#34D399" />
        <rect x="120" y="40" width="240" height="20" rx="10" fill="rgba(45,212,191,0.15)" stroke="#2DD4BF" strokeWidth="1" />
        <text x="240" y="54" textAnchor="middle" fill="#0D9488" fontSize="9" fontWeight="600" fontFamily="Space Grotesk, sans-serif">www.yourclientsite.co.uk</text>
        {/* Pipeline connections */}
        {pipes.map(([a, b], i) => (
          <motion.line key={i}
            x1={steps[a].x} y1={steps[a].y}
            x2={steps[b].x} y2={steps[b].y}
            stroke="#2DD4BF" strokeWidth="2" strokeDasharray="6 4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ duration: 1, delay: 0.4 + i * 0.18 }}
          />
        ))}
        {/* Travelling build packets */}
        {pipes.slice(0, 4).map(([a, b], i) => (
          <motion.circle key={`pkt-${i}`} r={5} fill="#2DD4BF"
            animate={{ cx: [steps[a].x, steps[b].x, steps[a].x], cy: [steps[a].y, steps[b].y, steps[a].y] }}
            transition={{ duration: 2.0, repeat: Infinity, delay: i * 0.55, ease: "easeInOut" }}
          />
        ))}
        {/* Step nodes */}
        {steps.map((s, i) => (
          <g key={`s-${i}`}>
            <motion.circle cx={s.x} cy={s.y} r={i === 5 ? 30 : 24}
              fill={i === 5 ? "#2DD4BF" : "rgba(45,212,191,0.12)"}
              stroke="#2DD4BF" strokeWidth="2"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
            />
            <motion.text x={s.x} y={s.y + 4} textAnchor="middle"
              fill={i === 5 ? "#0D2A25" : "#0D9488"}
              fontSize={i === 5 ? "10" : "9"} fontWeight="700" fontFamily="Space Grotesk, sans-serif"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 + i * 0.15 }}
            >{s.label}</motion.text>
          </g>
        ))}
        {/* 48hr badge */}
        <motion.rect x="340" y="360" width="80" height="30" rx="15"
          fill="#2DD4BF"
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <text x="380" y="380" textAnchor="middle" fill="#0D2A25" fontSize="10" fontWeight="800" fontFamily="Space Grotesk, sans-serif">48 HRS</text>
      </svg>
    </div>
  );
}

// Portfolio images for the scrolling strip — device mockups showing website designs
const portfolioImages = [
  { src: "/portfolio_1.jpg", label: "Finance", sector: "FINANCIAL SERVICES" },
  { src: "/portfolio_2.jpg", label: "Corporate", sector: "CORPORATE" },
  { src: "/portfolio_3.webp", label: "Professional", sector: "PROFESSIONAL SERVICES" },
  { src: "/portfolio_4.png", label: "Creative", sector: "CREATIVE AGENCY" },
  { src: "/portfolio_5.jpg", label: "Multi-Device", sector: "RESPONSIVE DESIGN" },
  { src: "/portfolio_6.jpg", label: "Modern", sector: "MODERN BUSINESS" },
  // Duplicate for seamless loop
  { src: "/portfolio_1.jpg", label: "Finance", sector: "FINANCIAL SERVICES" },
  { src: "/portfolio_2.jpg", label: "Corporate", sector: "CORPORATE" },
  { src: "/portfolio_3.webp", label: "Professional", sector: "PROFESSIONAL SERVICES" },
  { src: "/portfolio_4.png", label: "Creative", sector: "CREATIVE AGENCY" },
  { src: "/portfolio_5.jpg", label: "Multi-Device", sector: "RESPONSIVE DESIGN" },
  { src: "/portfolio_6.jpg", label: "Modern", sector: "MODERN BUSINESS" },
];

const webServices = [
  { icon: Globe, title: "Rapid Website Delivery", partner: "ClearerPaths", desc: "Professional websites delivered in under 48 hours. Copywriting, images, and hosting included.", tag: "48 HOURS" },
  { icon: Code2, title: "Custom Website Development", partner: "TheGreenAgents", desc: "Bespoke website design and development for businesses that need a fully custom digital solution.", tag: "BESPOKE" },
  { icon: Smartphone, title: "Mobile App Development", partner: "TheGreenAgents", desc: "iOS and Android app development for businesses ready to go mobile. From concept to App Store launch.", tag: "iOS & ANDROID" },
  { icon: ShoppingCart, title: "E-commerce Solutions", partner: "TheGreenAgents", desc: "Fully integrated online stores with payment processing, inventory management, and customer portals.", tag: "SELL ONLINE" },
  { icon: Search, title: "SEO and Digital Marketing", partner: "TheGreenAgents", desc: "Get found on Google. Technical SEO, content strategy, and paid search campaigns that drive real leads.", tag: "GROW TRAFFIC" },
  { icon: Share2, title: "Social Media Management", partner: "TheGreenAgents", desc: "Consistent, on-brand social media presence managed for you by TheGreenAgents AI tools.", tag: "MANAGED" },
];

const sectors = ["Finance", "Legal", "Manufacturing", "Creative", "Property", "Healthcare", "Recruitment", "Construction", "Hospitality", "Technology", "Retail", "Education"];

function ScrollingStrip() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animationId: number;
    let position = 0;
    const speed = 0.6; // px per frame

    const animate = () => {
      position -= speed;
      // Reset when first half has scrolled fully off screen
      const halfWidth = track.scrollWidth / 2;
      if (Math.abs(position) >= halfWidth) {
        position = 0;
      }
      track.style.transform = `translateX(${position}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    // Pause on hover
    const pause = () => cancelAnimationFrame(animationId);
    const resume = () => { animationId = requestAnimationFrame(animate); };
    track.parentElement?.addEventListener("mouseenter", pause);
    track.parentElement?.addEventListener("mouseleave", resume);

    return () => {
      cancelAnimationFrame(animationId);
      track.parentElement?.removeEventListener("mouseenter", pause);
      track.parentElement?.removeEventListener("mouseleave", resume);
    };
  }, []);

  return (
    <section style={{ overflow: "hidden", backgroundColor: "#F9FAFB", paddingTop: "0", paddingBottom: "0" }}>
      {/* Section header */}
      <div className="container pt-16 pb-10 text-center">
        <div className="inline-block mb-4 px-4 py-1 text-xs font-bold tracking-widest rounded-full" style={{ backgroundColor: "rgba(45,212,191,0.12)", color: "#0D9488" }}>OUR PORTFOLIO</div>
        <h2 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 700, color: "#111827", marginBottom: "12px" }}>
          Websites Built at Speed.
        </h2>
        <p style={{ color: "#6B7280", maxWidth: "480px", margin: "0 auto", fontSize: "0.95rem", lineHeight: 1.7 }}>
          From solicitors to manufacturers — every website delivered mobile-first, SEO-optimised, and live within 48 hours.
        </p>
      </div>

      {/* Full-bleed scrolling strip */}
      <div
        style={{
          position: "relative",
          width: "100%",
          overflow: "hidden",
          paddingBottom: "48px",
          cursor: "grab",
        }}
      >
        {/* Fade edges */}
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "120px", background: "linear-gradient(to right, #F9FAFB, transparent)", zIndex: 2, pointerEvents: "none" }} />
        <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "120px", background: "linear-gradient(to left, #F9FAFB, transparent)", zIndex: 2, pointerEvents: "none" }} />

        <div ref={trackRef} style={{ display: "flex", gap: "24px", width: "max-content", willChange: "transform" }}>
          {portfolioImages.map((img, i) => (
            <div
              key={i}
              style={{
                position: "relative",
                width: "min(420px, 85vw)",
                height: "280px",
                borderRadius: "16px",
                overflow: "hidden",
                flexShrink: 0,
                boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                border: "1px solid #E5E7EB",
              }}
            >
              <img
                src={img.src}
                alt={img.label}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
              {/* Overlay label */}
              <div style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "20px 20px 16px",
                background: "linear-gradient(to top, rgba(13,148,136,0.85) 0%, transparent 100%)",
              }}>
                <div style={{ fontSize: "0.6rem", fontWeight: 700, color: "rgba(255,255,255,0.7)", letterSpacing: "0.12em", marginBottom: "4px" }}>{img.sector}</div>
                <div style={{ fontSize: "1rem", fontWeight: 700, color: "#FFFFFF", fontFamily: "Space Grotesk, sans-serif" }}>WEBSITES AT SPEED</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Digital() {
  return (
    <div style={{ backgroundColor: "#FFFFFF", minHeight: "100vh" }}>
      {/* Hero */}
      <section style={{ position: "relative", paddingTop: "100px", paddingBottom: "80px", background: "linear-gradient(135deg, #F0FDFB 0%, #E6FFFA 50%, #F0FDF4 100%)", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -100, right: -100, width: 500, height: 500, borderRadius: "50%", background: "rgba(45,212,191,0.07)", pointerEvents: "none" }} />
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="inline-flex items-center gap-2 mb-5" style={{ background: "rgba(45,212,191,0.12)", border: "1px solid rgba(45,212,191,0.3)", borderRadius: "100px", padding: "6px 16px", color: "#0D9488", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em" }}>
                <Globe size={12} /> WEBSITE DESIGN
              </div>
              <h1 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800, color: "#111827", lineHeight: 1.1, marginBottom: "20px" }}>
                Your Website.<br /><span style={{ color: "#0D9488" }}>Built Fast.</span>
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
                {["48-Hour Delivery", "Mobile-First", "SEO Optimised", "No Lock-In"].map((badge) => (
                  <div key={badge} className="flex items-center gap-2" style={{ fontSize: "0.8rem", color: "#6B7280" }}>
                    <CheckCircle size={14} style={{ color: "#2DD4BF" }} />{badge}
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.0, delay: 0.4 }} className="hidden lg:flex justify-center items-center">
              <WebDesignGraphic />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Scrolling Portfolio Strip */}
      <ScrollingStrip />

      {/* ClearerPaths Feature — no pricing card */}
      <section style={{ backgroundColor: "#FFFFFF", paddingTop: "80px", paddingBottom: "80px" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="inline-flex items-center gap-2 mb-5" style={{ background: "rgba(45,212,191,0.12)", border: "1px solid rgba(45,212,191,0.3)", borderRadius: "100px", padding: "6px 16px", color: "#0D9488", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em" }}>
                <Clock size={12} /> CLEARERPATHS PARTNERSHIP
              </div>
              <h2 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 700, color: "#111827", lineHeight: 1.2, marginBottom: "16px" }}>
                Professional Website.<br /><span style={{ color: "#0D9488" }}>Delivered in 48 Hours.</span>
              </h2>
              <p style={{ color: "#4B5563", lineHeight: 1.75, marginBottom: "24px" }}>
                Through our ClearerPaths partnership, we deliver a fully professional, mobile-first website in just 48 hours — no lengthy agency processes, no months of waiting. Just a great website, fast.
              </p>
              {["Professional 7-page website", "Delivered in 48 hours from brief to live", "Mobile-first, SEO-optimised design", "Professional copywriting included", "Google Analytics and Search Console setup", "30-day post-launch support included"].map((item, i) => (
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
              <div style={{ backgroundColor: "#F9FAFB", borderRadius: "20px", padding: "40px", border: "1px solid #E5E7EB" }}>
                <div className="inline-block mb-4 px-4 py-1 text-xs font-bold tracking-widest rounded-full" style={{ backgroundColor: "rgba(45,212,191,0.12)", color: "#0D9488" }}>WHAT'S INCLUDED</div>
                {["Home page", "About us", "Services / Products", "Testimonials", "Blog / News", "Contact page", "Privacy & Terms"].map((page, i) => (
                  <div key={i} className="flex items-center justify-between" style={{ padding: "14px 0", borderBottom: i < 6 ? "1px solid #E5E7EB" : "none" }}>
                    <span style={{ fontSize: "0.9rem", color: "#374151", fontWeight: 500 }}>{page}</span>
                    <CheckCircle size={15} style={{ color: "#2DD4BF" }} />
                  </div>
                ))}
                <Link href="/contact">
                  <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} style={{ width: "100%", marginTop: "24px", backgroundColor: "#2DD4BF", color: "#0D2A25", padding: "14px", borderRadius: "8px", fontSize: "0.95rem", fontWeight: 700, fontFamily: "Space Grotesk, sans-serif", border: "none", cursor: "pointer" }}>
                    Request a Quote
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ backgroundColor: "#F9FAFB", paddingTop: "80px", paddingBottom: "80px" }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <div className="inline-block mb-4 px-4 py-1 text-xs font-bold tracking-widest rounded-full" style={{ backgroundColor: "rgba(45,212,191,0.12)", color: "#0D9488" }}>FULL DIGITAL SERVICES</div>
            <h2 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 700, color: "#111827" }}>Beyond the Website.</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {webServices.map((svc, i) => (
              <motion.div key={svc.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} whileHover={{ y: -5, boxShadow: "0 12px 32px rgba(45,212,191,0.15)" }} style={{ backgroundColor: "#FFFFFF", borderRadius: "16px", padding: "32px", border: "1px solid #E5E7EB" }}>
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
      <section style={{ backgroundColor: "#FFFFFF", paddingTop: "60px", paddingBottom: "60px" }}>
        <div className="container text-center">
          <div className="inline-block mb-6 px-4 py-1 text-xs font-bold tracking-widest rounded-full" style={{ backgroundColor: "rgba(45,212,191,0.12)", color: "#0D9488" }}>SECTORS WE SERVE</div>
          <div className="flex flex-wrap justify-center gap-3">
            {sectors.map((sector, i) => (
              <motion.span key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} style={{ backgroundColor: "#F9FAFB", border: "1px solid #E5E7EB", borderRadius: "100px", padding: "8px 20px", fontSize: "0.82rem", color: "#374151", fontWeight: 500 }}>
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
          <p style={{ color: "rgba(255,255,255,0.85)", maxWidth: "440px", margin: "0 auto 32px" }}>Your new website could be live by tomorrow. Get in touch for a no-obligation quote.</p>
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
