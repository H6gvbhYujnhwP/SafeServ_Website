import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Shield, Users, CheckCircle, Zap, Lock, AlertTriangle, Eye, Server, RotateCcw, Cloud, Headphones, Activity, Cpu, Monitor } from "lucide-react";

function ITGraphic() {
  const nodes = [
    { label: "Server", x: 220, y: 180, r: 32, main: true },
    { label: "Security", x: 100, y: 80, r: 22 },
    { label: "Cloud", x: 340, y: 80, r: 22 },
    { label: "Helpdesk", x: 380, y: 220, r: 22 },
    { label: "MOA", x: 320, y: 330, r: 22 },
    { label: "Monitor", x: 120, y: 330, r: 22 },
    { label: "Users", x: 60, y: 220, r: 22 },
  ];
  const centre = nodes[0];
  return (
    <div style={{ width: "100%", height: "420px" }}>
      <svg viewBox="0 0 440 420" style={{ width: "100%", height: "100%" }}>
        {[50, 75, 100].map((r, i) => (
          <motion.circle key={i} cx={centre.x} cy={centre.y} r={r} fill="none" stroke="#2DD4BF" strokeWidth="1"
            animate={{ opacity: [0.5, 0, 0.5], r: [r, r + 20, r] }} transition={{ duration: 3, repeat: Infinity, delay: i * 1, ease: "easeInOut" }} />
        ))}
        {nodes.slice(1).map((n, i) => (
          <motion.line key={i} x1={centre.x} y1={centre.y} x2={n.x} y2={n.y}
            stroke="#2DD4BF" strokeWidth="1.5" strokeDasharray="5 4"
            initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ duration: 1, delay: 0.3 + i * 0.15 }} />
        ))}
        {nodes.slice(1, 5).map((n, i) => (
          <motion.circle key={`pkt-${i}`} r={5} fill="#2DD4BF"
            animate={{ cx: [centre.x, n.x, centre.x], cy: [centre.y, n.y, centre.y] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.65, ease: "easeInOut" }} />
        ))}
        <motion.circle cx={centre.x} cy={centre.y} r={centre.r} fill="#2DD4BF" />
        <text x={centre.x} y={centre.y + 5} textAnchor="middle" fill="#0D2A25" fontSize="10" fontWeight="700" fontFamily="Space Grotesk, sans-serif">SERVER</text>
        {nodes.slice(1).map((n, i) => (
          <g key={`node-${i}`}>
            <motion.circle cx={n.x} cy={n.y} r={n.r} fill="rgba(45,212,191,0.12)" stroke="#2DD4BF" strokeWidth="1.5"
              initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 + i * 0.15 }} />
            <motion.text x={n.x} y={n.y + 4} textAnchor="middle" fill="#0D9488" fontSize="8" fontWeight="700" fontFamily="Space Grotesk, sans-serif"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 + i * 0.15 }}>{n.label}</motion.text>
          </g>
        ))}
        {[0,1,2,3,4,5,6,7,8].map((j) => (
          <motion.rect key={`bar-${j}`} x={100 + j * 28} y={390} width={14} rx={3} fill="#2DD4BF" fillOpacity="0.6"
            animate={{ height: [4, 6 + (j % 3) * 8, 4], y: [394, 388 - (j % 3) * 4, 394] }}
            transition={{ duration: 1.4, repeat: Infinity, delay: j * 0.14, ease: "easeInOut" }} />
        ))}
      </svg>
    </div>
  );
}

interface ITCard {
  title: string; tag: string; highlight?: boolean;
  image: string; imageAlt: string;
  gradient: string;
  icon: React.ElementType;
  desc: string;
  backTitle: string; backDesc: string; features: string[];
}

const itCards: ITCard[] = [
  {
    title: "Cyber Security", tag: "ESSENTIAL", highlight: true,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80",
    imageAlt: "Cyber security network protection",
    gradient: "linear-gradient(160deg, rgba(239,68,68,0.75) 0%, rgba(13,42,37,0.85) 100%)",
    icon: Shield,
    desc: "Multi-layered protection including endpoint security, firewalls, email filtering, and security awareness training.",
    backTitle: "Your Digital Fortress",
    backDesc: "Cyber threats evolve daily. SafeServ deploys enterprise-grade security layers that keep your business protected 24/7 — without the enterprise price tag.",
    features: ["Endpoint detection & response (EDR)", "Email filtering & anti-phishing", "Next-gen firewall management", "Security awareness training", "Dark web monitoring"],
  },
  {
    title: "Cloud Services", tag: "MICROSOFT 365",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80",
    imageAlt: "Cloud computing data centre",
    gradient: "linear-gradient(160deg, rgba(13,148,136,0.75) 0%, rgba(13,42,37,0.85) 100%)",
    icon: Cloud,
    desc: "Microsoft 365, Azure, and cloud migration. We move your business to the cloud safely and efficiently.",
    backTitle: "Work From Anywhere",
    backDesc: "Migrate to Microsoft 365 and Azure with zero downtime. We handle the entire transition — from planning and data migration to user training and ongoing management.",
    features: ["Microsoft 365 setup & licensing", "Azure cloud migration", "SharePoint & Teams deployment", "Cloud backup & disaster recovery", "Ongoing cloud management"],
  },
  {
    title: "Helpdesk Support", tag: "UK ENGINEERS",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80",
    imageAlt: "IT helpdesk support team",
    gradient: "linear-gradient(160deg, rgba(13,148,136,0.75) 0%, rgba(13,42,37,0.85) 100%)",
    icon: Headphones,
    desc: "Remote and on-site support from experienced UK engineers. Fast response times and clear communication.",
    backTitle: "Real People. Real Fast.",
    backDesc: "No call centres, no scripts. When something breaks, you speak directly to a UK-based engineer who knows your systems and fixes the problem — not just the ticket.",
    features: ["1-hour response SLA", "Remote & on-site support", "Dedicated account engineer", "Plain-English communication", "Out-of-hours emergency cover"],
  },
  {
    title: "Proactive Monitoring", tag: "24/7",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
    imageAlt: "Network monitoring dashboard",
    gradient: "linear-gradient(160deg, rgba(13,148,136,0.75) 0%, rgba(13,42,37,0.85) 100%)",
    icon: Activity,
    desc: "24/7 monitoring of your IT infrastructure. We fix problems before they affect your business.",
    backTitle: "Fix It Before You Feel It",
    backDesc: "Our monitoring agents watch your entire infrastructure around the clock. Most issues are detected and resolved automatically before you even know they existed.",
    features: ["Real-time infrastructure monitoring", "Automated self-healing scripts", "Predictive failure alerts", "Network performance tracking", "Monthly health reports"],
  },
  {
    title: "MOA — Managing Operating Agents", tag: "UK FIRST",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80",
    imageAlt: "AI artificial intelligence technology",
    gradient: "linear-gradient(160deg, rgba(245,158,11,0.75) 0%, rgba(13,42,37,0.85) 100%)",
    icon: Cpu,
    desc: "The UK's first AI-powered IT management layer. Intelligent automation that keeps your systems running at peak performance.",
    backTitle: "AI That Manages Your IT",
    backDesc: "MOA is included as standard with every SafeServ package. It doesn't just monitor your systems — it actively manages, heals, and optimises them in real time.",
    features: ["AI-driven anomaly detection", "Automated patch management", "Predictive hardware failure alerts", "Intelligent ticket routing", "Continuous compliance monitoring"],
  },
  {
    title: "Hardware & Software", tag: "PROCUREMENT",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
    imageAlt: "IT hardware procurement",
    gradient: "linear-gradient(160deg, rgba(13,148,136,0.75) 0%, rgba(13,42,37,0.85) 100%)",
    icon: Monitor,
    desc: "Procurement, setup, and lifecycle management for all your business hardware and software needs.",
    backTitle: "Right Kit. Right Price.",
    backDesc: "From laptops and servers to software licences and peripherals — we source, configure, and deploy everything your business needs. No markups, no hassle.",
    features: ["Hardware procurement & setup", "Software licensing management", "Asset lifecycle tracking", "Device refresh planning", "Warranty & repair management"],
  },
];

function ITFlipCards() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  return (
    <section style={{ backgroundColor: "#F9FAFB", paddingTop: "80px", paddingBottom: "80px" }}>
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <div className="inline-block mb-4 px-4 py-1 text-xs font-bold tracking-widest rounded-full" style={{ backgroundColor: "rgba(45,212,191,0.12)", color: "#0D9488" }}>WHAT WE COVER</div>
          <h2 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 700, color: "#111827", marginBottom: "12px" }}>Complete IT Coverage.</h2>
          <p style={{ color: "#6B7280", fontSize: "0.9rem" }}>Tap any card to explore what's included</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {itCards.map((card, i) => {
            const isFlipped = activeCard === i;
            const CardIcon = card.icon;
            return (
              <motion.div key={card.title}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                onClick={() => setActiveCard(prev => prev === i ? null : i)}
                style={{ cursor: "pointer", perspective: "1000px", height: "340px" }}>
                <div style={{
                  position: "relative", width: "100%", height: "100%",
                  transformStyle: "preserve-3d",
                  transition: "transform 0.65s cubic-bezier(0.4,0.2,0.2,1)",
                  transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                }}>
                  {/* FRONT */}
                  <div style={{
                    position: "absolute", inset: 0, backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                    borderRadius: "20px", overflow: "hidden",
                    border: card.highlight ? "2px solid #2DD4BF" : "1px solid #E5E7EB",
                    backgroundColor: "#FFFFFF",
                    display: "flex", flexDirection: "column",
                    boxShadow: card.highlight ? "0 4px 20px rgba(45,212,191,0.14)" : "0 2px 10px rgba(0,0,0,0.05)",
                  }}>
                    {/* Image strip */}
                    <div style={{ position: "relative", height: "145px", overflow: "hidden", flexShrink: 0 }}>
                      <img src={card.image} alt={card.imageAlt} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
                      <div style={{ position: "absolute", inset: 0, background: card.gradient, opacity: 0.72 }} />
                      {/* Frosted icon */}
                      <div style={{ position: "absolute", bottom: "14px", left: "20px", width: 44, height: 44, borderRadius: "12px", background: "rgba(255,255,255,0.18)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <CardIcon size={22} style={{ color: "#FFFFFF" }} />
                      </div>
                      {/* Tag */}
                      <div style={{ position: "absolute", top: "14px", right: "14px", fontSize: "0.6rem", fontWeight: 700, color: "#FFFFFF", backgroundColor: "rgba(0,0,0,0.28)", backdropFilter: "blur(6px)", padding: "3px 10px", borderRadius: "100px", letterSpacing: "0.08em" }}>{card.tag}</div>
                      {card.highlight && (
                        <div style={{ position: "absolute", top: "14px", left: "14px", fontSize: "0.6rem", fontWeight: 700, color: "#0D2A25", backgroundColor: "#EF4444", padding: "3px 10px", borderRadius: "100px", letterSpacing: "0.08em" }}>ESSENTIAL</div>
                      )}
                      {/* Flip hint */}
                      <div style={{ position: "absolute", bottom: "14px", right: "14px", display: "flex", alignItems: "center", gap: "4px", fontSize: "0.6rem", fontWeight: 600, color: "rgba(255,255,255,0.8)", letterSpacing: "0.06em" }}>
                        <RotateCcw size={10} style={{ color: "rgba(255,255,255,0.8)" }} /> TAP TO EXPLORE
                      </div>
                    </div>
                    {/* Card body */}
                    <div style={{ padding: "20px 22px 22px" }}>
                      <h3 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1rem", fontWeight: 700, color: "#111827", marginBottom: "8px" }}>{card.title}</h3>
                      <p style={{ fontSize: "0.83rem", color: "#6B7280", lineHeight: 1.6 }}>{card.desc}</p>
                    </div>
                  </div>
                  {/* BACK */}
                  <div style={{
                    position: "absolute", inset: 0, backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                    borderRadius: "20px", overflow: "hidden",
                    border: card.highlight ? "2px solid #EF4444" : "1px solid #2DD4BF",
                    background: "linear-gradient(160deg, #0D9488 0%, #0F766E 55%, #134E4A 100%)",
                    display: "flex", flexDirection: "column", padding: "24px",
                  }}>
                    <div className="flex items-center justify-between mb-3">
                      <div style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "0.95rem", fontWeight: 700, color: "#FFFFFF" }}>{card.backTitle}</div>
                      <CardIcon size={20} style={{ color: "#2DD4BF", flexShrink: 0 }} />
                    </div>
                    <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.82)", lineHeight: 1.6, marginBottom: "14px" }}>{card.backDesc}</p>
                    <div style={{ flex: 1 }}>
                      {card.features.map((f) => (
                        <div key={f} className="flex items-center gap-2 mb-2">
                          <div style={{ width: 16, height: 16, borderRadius: "50%", backgroundColor: "rgba(45,212,191,0.25)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                            <CheckCircle size={10} style={{ color: "#2DD4BF" }} />
                          </div>
                          <span style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.9)", fontWeight: 500 }}>{f}</span>
                        </div>
                      ))}
                    </div>
                    <Link href="/contact">
                      <motion.div
                        whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                        onClick={(e: React.MouseEvent) => e.stopPropagation()}
                        className="flex items-center justify-center gap-2 font-semibold mt-3"
                        style={{ backgroundColor: "#2DD4BF", color: "#0D2A25", padding: "10px 18px", borderRadius: "8px", fontSize: "0.8rem", fontFamily: "Space Grotesk, sans-serif", cursor: "pointer", textAlign: "center" }}
                      >
                        Get a Quote <ArrowRight size={13} />
                      </motion.div>
                    </Link>
                    <div style={{ textAlign: "center", marginTop: "8px", fontSize: "0.6rem", color: "rgba(255,255,255,0.4)", letterSpacing: "0.06em" }}>TAP TO FLIP BACK</div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CyberSecuritySection() {
  const threats = [
    { icon: AlertTriangle, label: "Ransomware", stat: "1 in 5 UK SMEs hit in 2024", color: "#EF4444" },
    { icon: Eye, label: "Phishing", stat: "91% of breaches start here", color: "#F59E0B" },
    { icon: Server, label: "Data Breach", stat: "Avg. cost: £3.4M per incident", color: "#EF4444" },
    { icon: Lock, label: "Insider Threat", stat: "34% of breaches are internal", color: "#F59E0B" },
  ];
  const layers = [
    { title: "Endpoint Detection & Response", desc: "AI-powered agents on every device detect and neutralise threats in milliseconds — before they spread across your network.", icon: Shield },
    { title: "Email Security & Anti-Phishing", desc: "Advanced filtering blocks malicious emails, impersonation attacks, and weaponised attachments before they reach your inbox.", icon: Lock },
    { title: "Next-Gen Firewall", desc: "Deep packet inspection, application-layer filtering, and intrusion prevention keep your perimeter locked down 24/7.", icon: Server },
    { title: "Security Awareness Training", desc: "Your people are your biggest vulnerability. We run regular simulated phishing campaigns and training to turn them into your strongest defence.", icon: Users },
    { title: "Dark Web Monitoring", desc: "Continuous scanning of dark web forums and marketplaces alerts you the moment your credentials or data appear for sale.", icon: Eye },
    { title: "Incident Response", desc: "When the worst happens, our team responds within the hour — containing the breach, preserving evidence, and restoring operations fast.", icon: AlertTriangle },
  ];
  return (
    <>
      <section style={{ backgroundColor: "#0D2A25", paddingTop: "80px", paddingBottom: "80px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -100, right: -100, width: 500, height: 500, borderRadius: "50%", background: "rgba(239,68,68,0.05)", pointerEvents: "none" }} />
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="inline-flex items-center gap-2 mb-5" style={{ background: "rgba(239,68,68,0.12)", border: "1px solid rgba(239,68,68,0.3)", borderRadius: "100px", padding: "6px 16px", color: "#EF4444", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em" }}>
                <Shield size={12} /> CYBER SECURITY
              </div>
              <h2 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 800, color: "#FFFFFF", lineHeight: 1.15, marginBottom: "20px" }}>
                The Threat Is Real.<br /><span style={{ color: "#EF4444" }}>Is Your Business Ready?</span>
              </h2>
              <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.8, marginBottom: "28px", fontSize: "0.95rem" }}>
                Cyber attacks on UK SMEs have tripled in three years. The average business loses over £25,000 per incident — and 60% of small businesses that suffer a major breach close within six months. SafeServ wraps your business in a multi-layered security stack that stops threats before they become disasters.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {threats.map((t, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                    style={{ backgroundColor: "rgba(255,255,255,0.04)", border: `1px solid ${t.color}25`, borderRadius: "14px", padding: "18px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                      <t.icon size={16} style={{ color: t.color }} />
                      <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "#FFFFFF", fontFamily: "Space Grotesk, sans-serif" }}>{t.label}</span>
                    </div>
                    <p style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.5 }}>{t.stat}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="hidden lg:flex justify-center items-center">
              <div style={{ position: "relative", width: "380px", height: "380px" }}>
                <svg viewBox="0 0 380 380" style={{ width: "100%", height: "100%" }}>
                  <motion.circle cx="190" cy="190" r="160" stroke="rgba(239,68,68,0.15)" strokeWidth="1" fill="none"
                    animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "190px 190px" }} />
                  <motion.circle cx="190" cy="190" r="120" stroke="rgba(239,68,68,0.1)" strokeWidth="1" fill="none"
                    animate={{ rotate: -360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "190px 190px" }} />
                  {[0,60,120,180,240,300].map((deg, i) => {
                    const rad = deg * Math.PI / 180;
                    const x = 190 + 155 * Math.cos(rad);
                    const y = 190 + 155 * Math.sin(rad);
                    return (
                      <motion.circle key={i} cx={x} cy={y} r={6}
                        fill={i % 2 === 0 ? "#EF4444" : "#F59E0B"}
                        animate={{ opacity: [0.4,1,0.4], r: [5,8,5] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.35 }} />
                    );
                  })}
                  {[0,60,120,180,240,300].map((deg, i) => {
                    const rad = deg * Math.PI / 180;
                    const x = 190 + 155 * Math.cos(rad);
                    const y = 190 + 155 * Math.sin(rad);
                    const sx = 190 + 60 * Math.cos(rad);
                    const sy = 190 + 60 * Math.sin(rad);
                    return (
                      <motion.line key={i} x1={x} y1={y} x2={sx} y2={sy}
                        stroke={i % 2 === 0 ? "rgba(239,68,68,0.3)" : "rgba(245,158,11,0.3)"}
                        strokeWidth="1" strokeDasharray="4 4"
                        animate={{ opacity: [0.3,0.7,0.3] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.35 }} />
                    );
                  })}
                  <motion.path d="M190 130 L230 150 L230 185 C230 208 212 225 190 232 C168 225 150 208 150 185 L150 150 Z"
                    fill="rgba(239,68,68,0.12)" stroke="#EF4444" strokeWidth="2.5"
                    animate={{ opacity: [0.8,1,0.8] }} transition={{ duration: 2.5, repeat: Infinity }} />
                  <motion.path d="M178 183 L187 192 L204 172" stroke="#EF4444" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.5 }} />
                  <text x="190" y="260" textAnchor="middle" fill="#EF4444" fontSize="11" fontWeight="800" fontFamily="Space Grotesk, sans-serif" letterSpacing="3">PROTECTED</text>
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "#FFFFFF", paddingTop: "80px", paddingBottom: "80px" }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <div className="inline-block mb-4 px-4 py-1 text-xs font-bold tracking-widest rounded-full" style={{ backgroundColor: "rgba(239,68,68,0.08)", color: "#EF4444" }}>6-LAYER PROTECTION</div>
            <h2 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 700, color: "#111827", marginBottom: "12px" }}>Security That Never Sleeps.</h2>
            <p style={{ color: "#6B7280", maxWidth: "480px", margin: "0 auto", fontSize: "0.95rem" }}>Every layer works together to give your business defence-in-depth — so if one layer is tested, five more are waiting.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {layers.map((layer, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                style={{ backgroundColor: "#FAFAFA", borderRadius: "16px", padding: "28px", border: "1px solid #F3F4F6", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, width: "3px", height: "100%", background: "linear-gradient(180deg, #EF4444, #F59E0B)" }} />
                <div style={{ width: 44, height: 44, borderRadius: "11px", backgroundColor: "rgba(239,68,68,0.08)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "14px" }}>
                  <layer.icon size={20} style={{ color: "#EF4444" }} />
                </div>
                <div style={{ fontSize: "0.6rem", fontWeight: 700, color: "#EF4444", letterSpacing: "0.1em", marginBottom: "6px" }}>LAYER {i + 1}</div>
                <h3 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1rem", fontWeight: 700, color: "#111827", marginBottom: "8px" }}>{layer.title}</h3>
                <p style={{ fontSize: "0.85rem", color: "#6B7280", lineHeight: 1.65 }}>{layer.desc}</p>
              </motion.div>
            ))}
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
            style={{ marginTop: "48px", background: "linear-gradient(135deg, #0D2A25 0%, #1a0a0a 100%)", borderRadius: "20px", padding: "40px 48px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "16px" }}>
            <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "#EF4444", letterSpacing: "0.12em" }}>FREE CYBER SECURITY AUDIT</div>
            <h3 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 700, color: "#FFFFFF", margin: 0 }}>Find Out Where Your Business Is Exposed</h3>
            <p style={{ color: "rgba(255,255,255,0.65)", maxWidth: "480px", fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>Our engineers will scan your network, review your current security posture, and deliver a plain-English report — completely free, no obligation.</p>
            <Link href="/contact">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
                style={{ backgroundColor: "#EF4444", color: "#FFFFFF", padding: "14px 32px", borderRadius: "8px", fontSize: "0.95rem", fontWeight: 700, fontFamily: "Space Grotesk, sans-serif", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: "8px" }}>
                Book My Free Audit <ArrowRight size={15} />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default function ITSupport() {
  return (
    <div style={{ backgroundColor: "#FFFFFF", minHeight: "100vh" }}>
      <section style={{ position: "relative", paddingTop: "100px", paddingBottom: "80px", background: "linear-gradient(135deg, #F0FDFB 0%, #E6FFFA 50%, #F0FDF4 100%)", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -100, right: -100, width: 500, height: 500, borderRadius: "50%", background: "rgba(45,212,191,0.07)", pointerEvents: "none" }} />
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="inline-flex items-center gap-2 mb-5" style={{ background: "rgba(45,212,191,0.12)", border: "1px solid rgba(45,212,191,0.3)", borderRadius: "100px", padding: "6px 16px", color: "#0D9488", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em", fontFamily: "Space Grotesk, sans-serif" }}>
                <Shield size={12} /> IT SUPPORT — MANAGED SERVICES
              </div>
              <h1 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800, color: "#111827", lineHeight: 1.1, marginBottom: "20px" }}>
                Managed IT.<br /><span style={{ color: "#0D9488" }}>No Headaches.</span>
              </h1>
              <p style={{ fontSize: "1.05rem", color: "#4B5563", lineHeight: 1.75, maxWidth: "480px", marginBottom: "32px" }}>
                SafeServ delivers fully managed IT support for UK businesses — including the UK's first MOA service as standard.
              </p>
              <Link href="/contact">
                <motion.button whileHover={{ scale: 1.05, boxShadow: "0 8px 30px rgba(45,212,191,0.45)" }} whileTap={{ scale: 0.97 }} className="flex items-center gap-2 font-semibold" style={{ backgroundColor: "#2DD4BF", color: "#0D2A25", padding: "14px 28px", borderRadius: "8px", fontSize: "0.95rem", fontFamily: "Space Grotesk, sans-serif", border: "none", cursor: "pointer" }}>
                  Get IT Support Quote <ArrowRight size={15} />
                </motion.button>
              </Link>
              <div className="flex flex-wrap gap-6 mt-8">
                {["No Lock-In", "UK Engineers", "24/7 Monitoring", "Fixed Monthly Cost"].map((badge) => (
                  <div key={badge} className="flex items-center gap-2" style={{ fontSize: "0.8rem", color: "#6B7280" }}>
                    <CheckCircle size={14} style={{ color: "#2DD4BF" }} />{badge}
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="hidden lg:flex justify-center items-center">
              <ITGraphic />
            </motion.div>
          </div>
        </div>
      </section>

      <ITFlipCards />
      <CyberSecuritySection />

      <section style={{ backgroundColor: "#FFFFFF", paddingTop: "80px", paddingBottom: "80px" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="inline-flex items-center gap-2 mb-5" style={{ background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.3)", borderRadius: "100px", padding: "6px 16px", color: "#F59E0B", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em" }}>
                <Zap size={12} /> UK'S FIRST — MOA
              </div>
              <h2 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 700, color: "#111827", lineHeight: 1.2, marginBottom: "16px" }}>
                MOA — <span style={{ color: "#0D9488" }}>Managing Operating Agents</span>
              </h2>
              <p style={{ color: "#4B5563", lineHeight: 1.75, marginBottom: "24px" }}>
                The UK's first AI-powered IT management layer, included as standard with every SafeServ IT support package. It doesn't just monitor your systems — it actively manages them.
              </p>
              {["AI-driven anomaly detection across your entire network", "Automated patch management and security updates", "Predictive failure alerts before hardware breaks down", "Intelligent ticket routing and self-healing scripts", "Real-time performance dashboards", "Continuous compliance monitoring"].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="flex items-start gap-3 mb-3" style={{ fontSize: "0.88rem", color: "#374151" }}>
                  <CheckCircle size={15} style={{ color: "#2DD4BF", flexShrink: 0, marginTop: 2 }} />{item}
                </motion.div>
              ))}
              <Link href="/contact">
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="flex items-center gap-2 font-semibold mt-6" style={{ backgroundColor: "#2DD4BF", color: "#0D2A25", padding: "14px 28px", borderRadius: "8px", fontSize: "0.95rem", fontFamily: "Space Grotesk, sans-serif", border: "none", cursor: "pointer" }}>
                  Ask About MOA <ArrowRight size={15} />
                </motion.button>
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <div style={{ backgroundColor: "#F9FAFB", borderRadius: "24px", padding: "36px", border: "1px solid #E5E7EB" }}>
                <div className="flex items-center gap-3 mb-6">
                  <div style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "#EF4444" }} />
                  <div style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "#2DD4BF" }} />
                  <div style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "#10B981" }} />
                  <span style={{ fontSize: "0.75rem", color: "#9CA3AF", marginLeft: "8px" }}>MOA Dashboard</span>
                  <motion.div animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1.5, repeat: Infinity }} style={{ marginLeft: "auto", width: 8, height: 8, borderRadius: "50%", backgroundColor: "#10B981" }} />
                </div>
                {[
                  { label: "Network Health", value: "99.8%", color: "#10B981" },
                  { label: "Threats Blocked", value: "247", color: "#2DD4BF" },
                  { label: "Patches Applied", value: "12", color: "#0D9488" },
                  { label: "Open Tickets", value: "2", color: "#2DD4BF" },
                  { label: "Uptime (30 days)", value: "100%", color: "#10B981" },
                ].map((row, i) => (
                  <div key={row.label} className="flex items-center justify-between" style={{ padding: "12px 0", borderBottom: i < 4 ? "1px solid #E5E7EB" : "none" }}>
                    <span style={{ fontSize: "0.82rem", color: "#374151" }}>{row.label}</span>
                    <span style={{ fontSize: "0.9rem", fontWeight: 700, color: row.color, fontFamily: "Space Grotesk, sans-serif" }}>{row.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section style={{ background: "linear-gradient(135deg, #0D9488 0%, #0F766E 100%)", paddingTop: "72px", paddingBottom: "72px" }}>
        <div className="container text-center">
          <h2 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 700, color: "#FFFFFF", marginBottom: "16px" }}>Ready for stress-free IT?</h2>
          <p style={{ color: "rgba(255,255,255,0.85)", maxWidth: "440px", margin: "0 auto 32px" }}>No lock-in contracts. No hidden fees. Just reliable IT support that works.</p>
          <Link href="/contact">
            <motion.button whileHover={{ scale: 1.05, boxShadow: "0 8px 30px rgba(0,0,0,0.2)" }} whileTap={{ scale: 0.97 }} className="flex items-center gap-2 font-semibold mx-auto" style={{ backgroundColor: "#FFFFFF", color: "#0D9488", padding: "15px 36px", borderRadius: "8px", fontSize: "1rem", fontFamily: "Space Grotesk, sans-serif", border: "none", cursor: "pointer" }}>
              Get a Free IT Audit <ArrowRight size={16} />
            </motion.button>
          </Link>
        </div>
      </section>
    </div>
  );
}
