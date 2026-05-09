import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Shield, Cpu, Users, Clock, CheckCircle, Zap, Monitor, Lock, AlertTriangle, Eye, Server } from "lucide-react";

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
  title: string; tag: string; tagColor: string; accentColor: string;
  bgGradient: string; stripColor: string; desc: string;
  backTitle: string; backDesc: string; features: string[];
}

const itCards: ITCard[] = [
  {
    title: "Cyber Security", tag: "ESSENTIAL", tagColor: "#EF4444", accentColor: "#EF4444",
    bgGradient: "linear-gradient(135deg, #1a0a0a 0%, #2a1010 100%)", stripColor: "rgba(239,68,68,0.18)",
    desc: "Multi-layered protection including endpoint security, firewalls, email filtering, and security awareness training.",
    backTitle: "Your Digital Fortress",
    backDesc: "Cyber threats evolve daily. SafeServ deploys enterprise-grade security layers that keep your business protected 24/7 — without the enterprise price tag.",
    features: ["Endpoint detection & response (EDR)", "Email filtering & anti-phishing", "Next-gen firewall management", "Security awareness training", "Dark web monitoring"],
  },
  {
    title: "Cloud Services", tag: "MICROSOFT 365", tagColor: "#0D9488", accentColor: "#2DD4BF",
    bgGradient: "linear-gradient(135deg, #0D2A25 0%, #0f3530 100%)", stripColor: "rgba(45,212,191,0.18)",
    desc: "Microsoft 365, Azure, and cloud migration. We move your business to the cloud safely and efficiently.",
    backTitle: "Work From Anywhere",
    backDesc: "Migrate to Microsoft 365 and Azure with zero downtime. We handle the entire transition — from planning and data migration to user training and ongoing management.",
    features: ["Microsoft 365 setup & licensing", "Azure cloud migration", "SharePoint & Teams deployment", "Cloud backup & disaster recovery", "Ongoing cloud management"],
  },
  {
    title: "Helpdesk Support", tag: "UK ENGINEERS", tagColor: "#0D9488", accentColor: "#2DD4BF",
    bgGradient: "linear-gradient(135deg, #0D2A25 0%, #112e28 100%)", stripColor: "rgba(45,212,191,0.15)",
    desc: "Remote and on-site support from experienced UK engineers. Fast response times and clear communication.",
    backTitle: "Real People. Real Fast.",
    backDesc: "No call centres, no scripts. When something breaks, you speak directly to a UK-based engineer who knows your systems and fixes the problem — not just the ticket.",
    features: ["1-hour response SLA", "Remote & on-site support", "Dedicated account engineer", "Plain-English communication", "Out-of-hours emergency cover"],
  },
  {
    title: "Proactive Monitoring", tag: "24/7", tagColor: "#0D9488", accentColor: "#2DD4BF",
    bgGradient: "linear-gradient(135deg, #0D2A25 0%, #0e2e28 100%)", stripColor: "rgba(45,212,191,0.15)",
    desc: "24/7 monitoring of your IT infrastructure. We fix problems before they affect your business.",
    backTitle: "Fix It Before You Feel It",
    backDesc: "Our monitoring agents watch your entire infrastructure around the clock. Most issues are detected and resolved automatically before you even know they existed.",
    features: ["Real-time infrastructure monitoring", "Automated self-healing scripts", "Predictive failure alerts", "Network performance tracking", "Monthly health reports"],
  },
  {
    title: "MOA — Managing Operating Agents", tag: "UK FIRST", tagColor: "#F59E0B", accentColor: "#F59E0B",
    bgGradient: "linear-gradient(135deg, #1a2a10 0%, #1e3015 100%)", stripColor: "rgba(245,158,11,0.18)",
    desc: "The UK's first AI-powered IT management layer. Intelligent automation that keeps your systems running at peak performance.",
    backTitle: "AI That Manages Your IT",
    backDesc: "MOA is included as standard with every SafeServ package. It doesn't just monitor your systems — it actively manages, heals, and optimises them in real time.",
    features: ["AI-driven anomaly detection", "Automated patch management", "Predictive hardware failure alerts", "Intelligent ticket routing", "Continuous compliance monitoring"],
  },
  {
    title: "Hardware & Software", tag: "PROCUREMENT", tagColor: "#0D9488", accentColor: "#2DD4BF",
    bgGradient: "linear-gradient(135deg, #0D2A25 0%, #0f2e2a 100%)", stripColor: "rgba(45,212,191,0.15)",
    desc: "Procurement, setup, and lifecycle management for all your business hardware and software needs.",
    backTitle: "Right Kit. Right Price.",
    backDesc: "From laptops and servers to software licences and peripherals — we source, configure, and deploy everything your business needs. No markups, no hassle.",
    features: ["Hardware procurement & setup", "Software licensing management", "Asset lifecycle tracking", "Device refresh planning", "Warranty & repair management"],
  },
];

function CardSVG({ title, accentColor }: { title: string; accentColor: string }) {
  if (title === "Cyber Security") return (
    <svg width="44" height="44" viewBox="0 0 48 48" fill="none">
      <motion.path d="M24 4 L40 12 L40 26 C40 34 32 41 24 44 C16 41 8 34 8 26 L8 12 Z"
        stroke="#EF4444" strokeWidth="2" fill="rgba(239,68,68,0.12)"
        animate={{ opacity: [0.7,1,0.7] }} transition={{ duration: 2, repeat: Infinity }} />
      <motion.path d="M17 24 L22 29 L31 19" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8, delay: 0.2 }} />
    </svg>
  );
  if (title === "Cloud Services") return (
    <svg width="44" height="44" viewBox="0 0 48 48" fill="none">
      <motion.ellipse cx="24" cy="20" rx="16" ry="10" stroke={accentColor} strokeWidth="2" fill="rgba(45,212,191,0.08)"
        animate={{ scaleX: [1,1.05,1] }} transition={{ duration: 3, repeat: Infinity }} />
      <motion.path d="M12 20 L12 30 C12 35 17 38 24 38 C31 38 36 35 36 30 L36 20" stroke={accentColor} strokeWidth="2" fill="none" />
      <motion.line x1="24" y1="10" x2="24" y2="38" stroke="rgba(45,212,191,0.4)" strokeWidth="1" strokeDasharray="3 3"
        animate={{ opacity: [0.4,0.8,0.4] }} transition={{ duration: 2, repeat: Infinity }} />
    </svg>
  );
  if (title === "Helpdesk Support") return (
    <svg width="44" height="44" viewBox="0 0 48 48" fill="none">
      <motion.circle cx="24" cy="16" r="8" stroke={accentColor} strokeWidth="2" fill="rgba(45,212,191,0.08)"
        animate={{ scale: [1,1.08,1] }} transition={{ duration: 2.5, repeat: Infinity }} />
      <motion.path d="M10 40 C10 32 16 28 24 28 C32 28 38 32 38 40" stroke={accentColor} strokeWidth="2" fill="none" strokeLinecap="round" />
      <motion.circle cx="36" cy="36" r="5" fill="#10B981" animate={{ opacity: [0.6,1,0.6] }} transition={{ duration: 1.5, repeat: Infinity }} />
    </svg>
  );
  if (title === "Proactive Monitoring") return (
    <svg width="44" height="44" viewBox="0 0 48 48" fill="none">
      <motion.circle cx="24" cy="24" r="16" stroke={accentColor} strokeWidth="2" fill="rgba(45,212,191,0.06)" />
      <motion.line x1="24" y1="24" x2="24" y2="12" stroke={accentColor} strokeWidth="2.5" strokeLinecap="round"
        animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "24px 24px" }} />
      <motion.line x1="24" y1="24" x2="32" y2="24" stroke={accentColor} strokeWidth="2" strokeLinecap="round"
        animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "24px 24px" }} />
    </svg>
  );
  if (title === "MOA — Managing Operating Agents") return (
    <svg width="44" height="44" viewBox="0 0 48 48" fill="none">
      <motion.rect x="14" y="14" width="20" height="20" rx="4" stroke="#F59E0B" strokeWidth="2" fill="rgba(245,158,11,0.08)"
        animate={{ rotate: [0,5,-5,0] }} transition={{ duration: 4, repeat: Infinity }} style={{ transformOrigin: "24px 24px" }} />
      <motion.circle cx="24" cy="24" r="4" fill="#F59E0B" animate={{ scale: [1,1.3,1] }} transition={{ duration: 1.5, repeat: Infinity }} />
    </svg>
  );
  return (
    <svg width="44" height="44" viewBox="0 0 48 48" fill="none">
      <motion.rect x="8" y="10" width="32" height="22" rx="3" stroke={accentColor} strokeWidth="2" fill="rgba(45,212,191,0.08)" />
      <motion.line x1="16" y1="32" x2="32" y2="32" stroke={accentColor} strokeWidth="2" />
      <motion.rect x="18" y="32" width="12" height="4" rx="1" fill="rgba(45,212,191,0.2)" stroke={accentColor} strokeWidth="1" />
      <motion.rect x="12" y="15" width="8" height="6" rx="1" fill="rgba(45,212,191,0.15)" stroke={accentColor} strokeWidth="1"
        animate={{ opacity: [0.5,1,0.5] }} transition={{ duration: 2, repeat: Infinity }} />
    </svg>
  );
}

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
            return (
              <motion.div key={card.title}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                onClick={() => setActiveCard(prev => prev === i ? null : i)}
                style={{ cursor: "pointer", perspective: "1000px", height: "400px" }}>
                <div style={{
                  position: "relative", width: "100%", height: "100%",
                  transformStyle: "preserve-3d",
                  transition: "transform 0.65s cubic-bezier(0.4,0.2,0.2,1)",
                  transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                }}>
                  {/* FRONT */}
                  <div style={{
                    position: "absolute", inset: 0, backfaceVisibility: "hidden",
                    borderRadius: "18px", overflow: "hidden",
                    border: "1px solid #E5E7EB", backgroundColor: "#FFFFFF",
                    display: "flex", flexDirection: "column",
                  }}>
                    <div style={{ height: "100px", background: card.bgGradient, position: "relative", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <div style={{ position: "absolute", inset: 0, background: card.stripColor }} />
                      <div style={{ position: "relative", zIndex: 1 }}><CardSVG title={card.title} accentColor={card.accentColor} /></div>
                      <div style={{ position: "absolute", top: 12, right: 14, fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.1em", color: card.tagColor, backgroundColor: `${card.tagColor}20`, padding: "3px 10px", borderRadius: "100px", border: `1px solid ${card.tagColor}40` }}>{card.tag}</div>
                    </div>
                    <div style={{ padding: "24px", flex: 1, display: "flex", flexDirection: "column" }}>
                      <h3 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.05rem", fontWeight: 700, color: "#111827", marginBottom: "10px" }}>{card.title}</h3>
                      <p style={{ fontSize: "0.85rem", color: "#6B7280", lineHeight: 1.65, flex: 1 }}>{card.desc}</p>
                      <div style={{ marginTop: "16px", display: "flex", alignItems: "center", gap: "6px", fontSize: "0.75rem", color: card.accentColor, fontWeight: 600 }}>
                        <span>Tap to explore</span><ArrowRight size={12} />
                      </div>
                    </div>
                  </div>
                  {/* BACK */}
                  <div style={{
                    position: "absolute", inset: 0, backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                    borderRadius: "18px", overflow: "hidden",
                    background: card.bgGradient,
                    border: `1px solid ${card.accentColor}30`,
                    display: "flex", flexDirection: "column", padding: "20px 24px",
                  }}>
                    <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: `linear-gradient(90deg, ${card.accentColor}, transparent)` }} />
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                      <div style={{ width: 40, height: 40, borderRadius: "10px", background: `${card.accentColor}18`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <CardSVG title={card.title} accentColor={card.accentColor} />
                      </div>
                      <div>
                        <div style={{ fontSize: "0.6rem", fontWeight: 700, color: card.accentColor, letterSpacing: "0.1em", marginBottom: "2px" }}>{card.tag}</div>
                        <h3 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "0.95rem", fontWeight: 700, color: "#FFFFFF", lineHeight: 1.2 }}>{card.backTitle}</h3>
                      </div>
                    </div>
                    <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.55, marginBottom: "10px" }}>{card.backDesc}</p>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, flex: 1 }}>
                      {card.features.map((f, fi) => (
                        <li key={fi} style={{ display: "flex", alignItems: "center", gap: "8px", padding: "4px 0", borderBottom: fi < card.features.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none", fontSize: "0.72rem", color: "rgba(255,255,255,0.8)" }}>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={card.accentColor} strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact" onClick={(e: React.MouseEvent) => e.stopPropagation()}>
                      <div style={{ marginTop: "10px", backgroundColor: card.accentColor, color: "#0D2A25", padding: "9px 16px", borderRadius: "8px", fontSize: "0.75rem", fontWeight: 700, fontFamily: "Space Grotesk, sans-serif", display: "flex", alignItems: "center", gap: "6px", width: "fit-content" }}>
                        Get a Quote <ArrowRight size={12} />
                      </div>
                    </Link>
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
                <Shield size={12} /> IT SUPPORT — IN PARTNERSHIP WITH SWEETBYTE
              </div>
              <h1 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800, color: "#111827", lineHeight: 1.1, marginBottom: "20px" }}>
                Managed IT.<br /><span style={{ color: "#0D9488" }}>No Headaches.</span>
              </h1>
              <p style={{ fontSize: "1.05rem", color: "#4B5563", lineHeight: 1.75, maxWidth: "480px", marginBottom: "32px" }}>
                SafeServ partners with <strong style={{ color: "#0D9488" }}>Sweetbyte</strong> to deliver fully managed IT support for UK businesses — including the UK's first MOA service as standard.
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
