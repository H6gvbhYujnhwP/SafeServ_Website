import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Wifi, Zap, Globe, Shield, CheckCircle, Activity, Satellite, Send, Building2, MapPin, ChevronDown, RotateCcw } from "lucide-react";

function ConnectivityGraphic() {
  const branches = [
    { label: "FTTP", x: 220, y: 60 },
    { label: "Leased", x: 370, y: 130 },
    { label: "5G", x: 390, y: 270 },
    { label: "SD-WAN", x: 280, y: 370 },
    { label: "SIP", x: 120, y: 370 },
    { label: "Wi-Fi", x: 50, y: 270 },
    { label: "4G", x: 70, y: 130 },
  ];
  const cx = 220, cy = 215;
  return (
    <div style={{ width: "100%", height: "420px" }}>
      <svg viewBox="0 0 440 420" style={{ width: "100%", height: "100%" }} xmlns="http://www.w3.org/2000/svg">
        {[55, 85, 115, 145].map((r, i) => (
          <motion.circle key={i} cx={cx} cy={cy} r={r}
            fill="none" stroke="#2DD4BF" strokeWidth="1"
            animate={{ opacity: [0.7, 0, 0.7], r: [r, r + 15, r] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.6, ease: "easeOut" }}
          />
        ))}
        {branches.map((b, i) => (
          <motion.line key={i} x1={cx} y1={cy} x2={b.x} y2={b.y}
            stroke="#2DD4BF" strokeWidth="1.5" strokeDasharray="5 4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.55 }}
            transition={{ duration: 1.1, delay: 0.3 + i * 0.12 }}
          />
        ))}
        {branches.slice(0, 5).map((b, i) => (
          <motion.circle key={`sig-${i}`} r={5} fill="#2DD4BF"
            animate={{ cx: [cx, b.x, cx], cy: [cy, b.y, cy] }}
            transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.5, ease: "easeInOut" }}
          />
        ))}
        <circle cx={cx} cy={cy} r={32} fill="#2DD4BF" />
        <text x={cx} y={cy - 4} textAnchor="middle" fill="#0D2A25" fontSize="9" fontWeight="700" fontFamily="Space Grotesk, sans-serif">SAFE</text>
        <text x={cx} y={cy + 9} textAnchor="middle" fill="#0D2A25" fontSize="9" fontWeight="700" fontFamily="Space Grotesk, sans-serif">SERV</text>
        {branches.map((b, i) => (
          <g key={`bn-${i}`}>
            <motion.circle cx={b.x} cy={b.y} r={22}
              fill="rgba(45,212,191,0.12)" stroke="#2DD4BF" strokeWidth="1.5"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.12 }}
            />
            <motion.text x={b.x} y={b.y + 4} textAnchor="middle" fill="#0D9488" fontSize="8" fontWeight="700" fontFamily="Space Grotesk, sans-serif"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 + i * 0.12 }}
            >{b.label}</motion.text>
          </g>
        ))}
        {[0,1,2,3,4].map((j) => (
          <motion.rect key={`spd-${j}`} x={160 + j * 26} y={400} width={16} rx={4}
            fill="#2DD4BF" fillOpacity="0.65"
            animate={{ height: [6, 10 + j * 5, 6], y: [406, 400 - j * 2, 406] }}
            transition={{ duration: 1.6, repeat: Infinity, delay: j * 0.2, ease: "easeInOut" }}
          />
        ))}
      </svg>
    </div>
  );
}

// Small inline SVG graphics for card backs
function BroadbandSVG() {
  return (
    <svg viewBox="0 0 80 40" width="80" height="40">
      {[0,1,2,3,4].map((i) => (
        <motion.rect key={i} x={8 + i * 14} y={40 - (i + 1) * 7} width={10} rx={3}
          height={(i + 1) * 7} fill="#2DD4BF" fillOpacity={0.5 + i * 0.1}
          animate={{ scaleY: [1, 1.15, 1] }}
          transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.18, ease: "easeInOut" }}
          style={{ transformOrigin: "bottom" }}
        />
      ))}
    </svg>
  );
}
function LeasedSVG() {
  return (
    <svg viewBox="0 0 80 40" width="80" height="40">
      <motion.line x1="5" y1="20" x2="75" y2="20" stroke="#2DD4BF" strokeWidth="2.5" strokeDasharray="6 4"
        animate={{ strokeDashoffset: [0, -20] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
      />
      {[15, 40, 65].map((x, i) => (
        <motion.circle key={i} cx={x} cy={20} r={5} fill="#0D9488"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.3 }}
        />
      ))}
    </svg>
  );
}
function BackupSVG() {
  return (
    <svg viewBox="0 0 80 40" width="80" height="40">
      <motion.path d="M5 20 Q20 5 40 20 Q60 35 75 20" fill="none" stroke="#2DD4BF" strokeWidth="2"
        animate={{ pathLength: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.circle cx={40} cy={20} r={6} fill="#0D9488"
        animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
    </svg>
  );
}
function WifiSVG() {
  return (
    <svg viewBox="0 0 80 50" width="80" height="50">
      {[28, 20, 12].map((r, i) => (
        <motion.path key={i}
          d={`M ${40 - r} ${30 - r * 0.5} A ${r} ${r} 0 0 1 ${40 + r} ${30 - r * 0.5}`}
          fill="none" stroke="#2DD4BF" strokeWidth="2.5" strokeLinecap="round"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.3 }}
        />
      ))}
      <circle cx={40} cy={36} r={4} fill="#0D9488" />
    </svg>
  );
}
function SipSVG() {
  return (
    <svg viewBox="0 0 80 40" width="80" height="40">
      {[0,1,2].map((i) => (
        <motion.rect key={i} x={10 + i * 22} y={10} width={16} height={20} rx={4}
          fill="rgba(45,212,191,0.2)" stroke="#2DD4BF" strokeWidth="1.5"
          animate={{ y: [10, 6, 10] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.25 }}
        />
      ))}
      <motion.line x1="18" y1="30" x2="62" y2="30" stroke="#0D9488" strokeWidth="1.5"
        animate={{ scaleX: [1, 1.05, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
    </svg>
  );
}
function SatelliteSVG() {
  return (
    <svg viewBox="0 0 80 50" width="80" height="50">
      <motion.ellipse cx={40} cy={35} rx={28} ry={8} fill="none" stroke="#2DD4BF" strokeWidth="1.5" strokeDasharray="4 3"
        animate={{ rotate: 360 }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "40px 35px" }}
      />
      <motion.circle cx={40} cy={12} r={7} fill="#0D9488"
        animate={{ y: [0, 3, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      {[0,1,2].map((i) => (
        <motion.line key={i} x1={40} y1={35} x2={40 + (i - 1) * 20} y2={48}
          stroke="#2DD4BF" strokeWidth="1.2" strokeDasharray="3 3"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.2 }}
        />
      ))}
    </svg>
  );
}

interface Solution {
  icon: React.ElementType;
  title: string;
  desc: string;
  tag: string;
  gradient: string;
  image: string;
  imageAlt: string;
  highlight?: boolean;
  backTitle: string;
  backDesc: string;
  features: string[];
  BackSVG: React.ElementType;
}

const solutions: Solution[] = [
  {
    icon: Zap,
    title: "Ultrafast Broadband",
    desc: "FTTP, FTTC, and SOGEA connections via DWS and NTA. Speeds from 40Mbps to 1Gbps.",
    tag: "UP TO 1GBPS",
    gradient: "linear-gradient(135deg, #0D9488 0%, #2DD4BF 100%)",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
    imageAlt: "Fibre optic cables glowing teal",
    backTitle: "Ultrafast Broadband",
    backDesc: "Business-grade fibre broadband delivered via the UK's leading wholesale networks — DWS and NTA.",
    features: ["FTTP speeds up to 1Gbps", "SOGEA & FTTC from 40Mbps", "Static IP available", "Same-day provisioning quotes", "No lock-in contracts"],
    BackSVG: BroadbandSVG,
  },
  {
    icon: Globe,
    title: "Leased Lines & SD-WAN",
    desc: "Dedicated uncontended fibre with guaranteed SLA, combined with intelligent SD-WAN traffic management.",
    tag: "ENTERPRISE GRADE",
    gradient: "linear-gradient(135deg, #0F766E 0%, #14B8A6 100%)",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=80",
    imageAlt: "Data centre server racks with teal lighting",
    backTitle: "Leased Lines & SD-WAN",
    backDesc: "Uncontended dedicated fibre from 100Mbps to 10Gbps, with SD-WAN overlaid for intelligent multi-site traffic control.",
    features: ["100Mbps–10Gbps symmetric", "99.9% uptime SLA guaranteed", "SD-WAN traffic prioritisation", "Multi-site management", "4-hour engineer response"],
    BackSVG: LeasedSVG,
  },
  {
    icon: Activity,
    title: "4G / 5G Backup",
    desc: "Automatic failover to 4G or 5G if your primary connection drops. Always online.",
    tag: "ALWAYS ON",
    gradient: "linear-gradient(135deg, #0D9488 0%, #06B6D4 100%)",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80",
    imageAlt: "5G mobile network tower",
    backTitle: "4G / 5G Backup",
    backDesc: "Never lose connectivity. Our automatic failover solution switches to mobile in seconds if your primary line goes down.",
    features: ["Sub-60 second failover", "4G & 5G multi-carrier SIM", "Hardware included", "Monitoring & alerting", "Ideal for any connection type"],
    BackSVG: BackupSVG,
  },
  {
    icon: Wifi,
    title: "Business Wi-Fi",
    desc: "Enterprise-grade wireless networks with full coverage and centralised management.",
    tag: "FULL COVERAGE",
    gradient: "linear-gradient(135deg, #0D9488 0%, #2DD4BF 100%)",
    image: "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=600&q=80",
    imageAlt: "Modern office with wireless network",
    backTitle: "Business Wi-Fi",
    backDesc: "Enterprise access points, centralised cloud management, and guest network isolation — designed for offices, warehouses, and multi-floor buildings.",
    features: ["Enterprise Cisco / Ubiquiti APs", "Cloud-managed dashboard", "Guest network isolation", "Seamless roaming", "Full site survey included"],
    BackSVG: WifiSVG,
  },
  {
    icon: Globe,
    title: "SIP Trunking",
    desc: "Replace ISDN lines with flexible, cost-effective SIP trunks via Gamma network.",
    tag: "ISDN REPLACEMENT",
    gradient: "linear-gradient(135deg, #0F766E 0%, #14B8A6 100%)",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80",
    imageAlt: "Business phone system and network",
    backTitle: "SIP Trunking",
    backDesc: "Migrate from legacy ISDN to modern SIP trunks via the Gamma network — lower cost, more channels, and full number portability.",
    features: ["Gamma network backbone", "Keep your existing numbers", "Unlimited concurrent calls", "DDI ranges available", "Pairs with any PBX or VoIP system"],
    BackSVG: SipSVG,
  },
  {
    icon: Satellite,
    title: "Satellite Internet",
    desc: "High-speed satellite connectivity for remote sites, rural locations, and anywhere terrestrial broadband can't reach.",
    tag: "REMOTE LOCATIONS",
    gradient: "linear-gradient(135deg, #1E3A5F 0%, #0D9488 100%)",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=600&q=80",
    imageAlt: "Satellite dish against night sky",
    highlight: true,
    backTitle: "Satellite Internet",
    backDesc: "When no cable reaches, satellite does. We deploy high-speed satellite solutions for farms, construction sites, remote offices, and pop-up locations.",
    features: ["Speeds up to 300Mbps", "UK-wide & global coverage", "Low-latency LEO options", "Rapid deployment — days not weeks", "Ideal for temporary or permanent sites"],
    BackSVG: SatelliteSVG,
  },
];

// 3D Flip Card Component
function FlipCard({ sol, index }: { sol: Solution; index: number }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      style={{ perspective: "1000px", height: "340px", cursor: "pointer" }}
      onClick={() => setFlipped(!flipped)}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          transformStyle: "preserve-3d",
        }}
      >
        {/* FRONT */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            backgroundColor: "#FFFFFF",
            borderRadius: "20px",
            overflow: "hidden",
            border: sol.highlight ? "2px solid #2DD4BF" : "1px solid #E5E7EB",
            boxShadow: sol.highlight ? "0 4px 24px rgba(45,212,191,0.14)" : "0 2px 10px rgba(0,0,0,0.05)",
          }}
        >
          {/* Image strip */}
          <div style={{ position: "relative", height: "145px", overflow: "hidden" }}>
            <img src={sol.image} alt={sol.imageAlt} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
            <div style={{ position: "absolute", inset: 0, background: sol.gradient, opacity: 0.72 }} />
            <div style={{ position: "absolute", bottom: "14px", left: "20px", width: 44, height: 44, borderRadius: "12px", background: "rgba(255,255,255,0.18)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <sol.icon size={22} style={{ color: "#FFFFFF" }} />
            </div>
            <div style={{ position: "absolute", top: "14px", right: "14px", fontSize: "0.6rem", fontWeight: 700, color: "#FFFFFF", backgroundColor: "rgba(0,0,0,0.28)", backdropFilter: "blur(6px)", padding: "3px 10px", borderRadius: "100px", letterSpacing: "0.08em" }}>{sol.tag}</div>
            {sol.highlight && (
              <div style={{ position: "absolute", top: "14px", left: "14px", fontSize: "0.6rem", fontWeight: 700, color: "#0D2A25", backgroundColor: "#2DD4BF", padding: "3px 10px", borderRadius: "100px", letterSpacing: "0.08em" }}>NEW</div>
            )}
            {/* Flip hint */}
            <div style={{ position: "absolute", bottom: "14px", right: "14px", display: "flex", alignItems: "center", gap: "4px", fontSize: "0.6rem", fontWeight: 600, color: "rgba(255,255,255,0.8)", letterSpacing: "0.06em" }}>
              <RotateCcw size={10} style={{ color: "rgba(255,255,255,0.8)" }} /> TAP TO EXPLORE
            </div>
          </div>
          {/* Card body */}
          <div style={{ padding: "20px 22px 22px" }}>
            <h3 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1rem", fontWeight: 700, color: "#111827", marginBottom: "8px" }}>{sol.title}</h3>
            <p style={{ fontSize: "0.83rem", color: "#6B7280", lineHeight: 1.6 }}>{sol.desc}</p>
          </div>
        </div>

        {/* BACK */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            borderRadius: "20px",
            overflow: "hidden",
            border: sol.highlight ? "2px solid #2DD4BF" : "1px solid #2DD4BF",
            background: "linear-gradient(160deg, #0D9488 0%, #0F766E 55%, #134E4A 100%)",
            display: "flex",
            flexDirection: "column",
            padding: "24px",
          }}
        >
          {/* Back header */}
          <div className="flex items-center justify-between mb-3">
            <div style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "0.95rem", fontWeight: 700, color: "#FFFFFF" }}>{sol.backTitle}</div>
            <sol.BackSVG />
          </div>
          <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.82)", lineHeight: 1.6, marginBottom: "14px" }}>{sol.backDesc}</p>
          {/* Feature list */}
          <div style={{ flex: 1 }}>
            {sol.features.map((f) => (
              <div key={f} className="flex items-center gap-2 mb-2">
                <div style={{ width: 16, height: 16, borderRadius: "50%", backgroundColor: "rgba(45,212,191,0.25)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <CheckCircle size={10} style={{ color: "#2DD4BF" }} />
                </div>
                <span style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.9)", fontWeight: 500 }}>{f}</span>
              </div>
            ))}
          </div>
          {/* CTA */}
          <Link href="/contact">
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={(e) => e.stopPropagation()}
              className="flex items-center justify-center gap-2 font-semibold mt-3"
              style={{ backgroundColor: "#2DD4BF", color: "#0D2A25", padding: "10px 18px", borderRadius: "8px", fontSize: "0.8rem", fontFamily: "Space Grotesk, sans-serif", cursor: "pointer", textAlign: "center" }}
            >
              Get a Quote <ArrowRight size={13} />
            </motion.div>
          </Link>
          {/* Flip back hint */}
          <div style={{ textAlign: "center", marginTop: "8px", fontSize: "0.6rem", color: "rgba(255,255,255,0.4)", letterSpacing: "0.06em" }}>TAP TO FLIP BACK</div>
        </div>
      </motion.div>
    </motion.div>
  );
}

const tableData = [
  { type: "SOGEA / FTTC", speed: "40–80 Mbps", sla: "Best effort", price: "£", bestFor: "Small offices, home workers" },
  { type: "FTTP (Full Fibre)", speed: "100Mbps–1Gbps", sla: "Best effort / enhanced", price: "££", bestFor: "Growing SMEs, cloud-heavy teams" },
  { type: "Leased Line", speed: "100Mbps–10Gbps", sla: "99.9% guaranteed", price: "£££", bestFor: "Large offices, data centres, critical ops" },
  { type: "4G / 5G Failover", speed: "20–300 Mbps", sla: "Best effort backup", price: "£", bestFor: "Resilience & backup for any business" },
  { type: "Satellite", speed: "50–300 Mbps", sla: "Best effort", price: "££", bestFor: "Remote sites, rural locations, pop-ups" },
];

const connectionTypes = [
  "SOGEA / FTTC Broadband",
  "FTTP Full Fibre",
  "Leased Line",
  "4G / 5G Backup",
  "Satellite Internet",
  "SD-WAN",
  "Business Wi-Fi",
  "SIP Trunking",
  "Not sure — advise me",
];

export default function Connectivity() {
  const [formData, setFormData] = useState({
    businessName: "",
    postcode: "",
    connectionType: "",
    currentProvider: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ backgroundColor: "#FFFFFF", minHeight: "100vh" }}>
      {/* Hero */}
      <section style={{ position: "relative", paddingTop: "100px", paddingBottom: "80px", background: "linear-gradient(135deg, #F0FDFB 0%, #E6FFFA 50%, #F0FDF4 100%)", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -100, right: -100, width: 500, height: 500, borderRadius: "50%", background: "rgba(45,212,191,0.07)", pointerEvents: "none" }} />
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="inline-flex items-center gap-2 mb-5" style={{ background: "rgba(45,212,191,0.12)", border: "1px solid rgba(45,212,191,0.3)", borderRadius: "100px", padding: "6px 16px", color: "#0D9488", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em" }}>
                <Wifi size={12} /> COMMS SOLUTIONS
              </div>
              <h1 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800, color: "#111827", lineHeight: 1.1, marginBottom: "20px" }}>
                Fast. Reliable.<br /><span style={{ color: "#0D9488" }}>Always Connected.</span>
              </h1>
              <p style={{ fontSize: "1.05rem", color: "#4B5563", lineHeight: 1.75, maxWidth: "480px", marginBottom: "32px" }}>
                From ultrafast broadband to dedicated leased lines and satellite — SafeServ delivers the connectivity your business depends on via the UK's leading network providers.
              </p>
              <a href="#quote-form">
                <motion.button whileHover={{ scale: 1.05, boxShadow: "0 8px 30px rgba(45,212,191,0.45)" }} whileTap={{ scale: 0.97 }} className="flex items-center gap-2 font-semibold" style={{ backgroundColor: "#2DD4BF", color: "#0D2A25", padding: "14px 28px", borderRadius: "8px", fontSize: "0.95rem", fontFamily: "Space Grotesk, sans-serif", border: "none", cursor: "pointer" }}>
                  Get a Comms Quote <ArrowRight size={15} />
                </motion.button>
              </a>
              <div className="flex flex-wrap gap-6 mt-8">
                {["No Lock-In", "99.9% SLA", "4G Backup", "Same-Day Quotes"].map((badge) => (
                  <div key={badge} className="flex items-center gap-2" style={{ fontSize: "0.8rem", color: "#6B7280" }}>
                    <CheckCircle size={14} style={{ color: "#2DD4BF" }} />{badge}
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.0, delay: 0.4 }} className="hidden lg:flex justify-center items-center">
              <ConnectivityGraphic />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions Grid — 3D Flip Cards */}
      <section style={{ backgroundColor: "#F9FAFB", paddingTop: "80px", paddingBottom: "80px" }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <div className="inline-block mb-4 px-4 py-1 text-xs font-bold tracking-widest rounded-full" style={{ backgroundColor: "rgba(45,212,191,0.12)", color: "#0D9488" }}>COMMS SOLUTIONS</div>
            <h2 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 700, color: "#111827", marginBottom: "12px" }}>The Right Connection for Your Business.</h2>
            <p style={{ color: "#6B7280", maxWidth: "520px", margin: "0 auto", fontSize: "1rem", lineHeight: 1.7 }}>From city-centre fibre to remote satellite links — tap any card to explore what's included.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((sol, i) => (
              <FlipCard key={sol.title} sol={sol} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section style={{ backgroundColor: "#FFFFFF", paddingTop: "80px", paddingBottom: "80px" }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <div className="inline-block mb-4 px-4 py-1 text-xs font-bold tracking-widest rounded-full" style={{ backgroundColor: "rgba(45,212,191,0.12)", color: "#0D9488" }}>COMPARE SOLUTIONS</div>
            <h2 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 700, color: "#111827", marginBottom: "12px" }}>Which Connection Is Right for You?</h2>
            <p style={{ color: "#6B7280", maxWidth: "500px", margin: "0 auto", fontSize: "1rem", lineHeight: 1.7 }}>Compare our connectivity products side by side to find the best fit for your business size, location, and budget.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ overflowX: "auto", borderRadius: "20px", boxShadow: "0 4px 32px rgba(0,0,0,0.07)", border: "1px solid #E5E7EB" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "Space Grotesk, sans-serif", minWidth: "640px" }}>
              <thead>
                <tr style={{ background: "linear-gradient(135deg, #0D9488 0%, #0F766E 100%)" }}>
                  {["Connection Type", "Speed", "SLA", "Price Tier", "Best For"].map((h) => (
                    <th key={h} style={{ padding: "18px 20px", textAlign: "left", color: "#FFFFFF", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, i) => (
                  <motion.tr
                    key={row.type}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    style={{ backgroundColor: i % 2 === 0 ? "#FFFFFF" : "#F9FAFB", borderBottom: "1px solid #E5E7EB" }}
                  >
                    <td style={{ padding: "16px 20px", fontWeight: 700, color: "#111827", fontSize: "0.9rem" }}>
                      <div className="flex items-center gap-2">
                        {row.type === "Satellite" && <span style={{ fontSize: "0.6rem", fontWeight: 700, color: "#0D9488", backgroundColor: "rgba(45,212,191,0.12)", padding: "2px 8px", borderRadius: "100px" }}>REMOTE</span>}
                        {row.type}
                      </div>
                    </td>
                    <td style={{ padding: "16px 20px", color: "#0D9488", fontWeight: 600, fontSize: "0.875rem" }}>{row.speed}</td>
                    <td style={{ padding: "16px 20px", color: "#4B5563", fontSize: "0.875rem" }}>{row.sla}</td>
                    <td style={{ padding: "16px 20px" }}>
                      <span style={{ fontWeight: 700, color: row.price === "£££" ? "#0D9488" : row.price === "££" ? "#14B8A6" : "#6B7280", fontSize: "1rem" }}>{row.price}</span>
                    </td>
                    <td style={{ padding: "16px 20px", color: "#6B7280", fontSize: "0.875rem" }}>{row.bestFor}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
          <p style={{ textAlign: "center", color: "#9CA3AF", fontSize: "0.78rem", marginTop: "16px" }}>Prices and speeds are indicative. Contact us for a tailored quote based on your exact location and requirements.</p>
        </div>
      </section>

      {/* Partners */}
      <section style={{ backgroundColor: "#F9FAFB", paddingTop: "80px", paddingBottom: "80px" }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <div className="inline-block mb-4 px-4 py-1 text-xs font-bold tracking-widest rounded-full" style={{ backgroundColor: "rgba(45,212,191,0.12)", color: "#0D9488" }}>NETWORK PARTNERS</div>
            <h2 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 700, color: "#111827" }}>Powered by the UK's Best Networks.</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "DWS", desc: "Delivering ultrafast broadband and leased lines across the UK with business-grade reliability." },
              { name: "NTA", desc: "A leading UK network provider with extensive fibre infrastructure and competitive pricing." },
              { name: "Gamma", desc: "One of the UK's largest voice and data providers powering SIP trunks for thousands of businesses." },
            ].map((p, i) => (
              <motion.div key={p.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} style={{ backgroundColor: "#FFFFFF", borderRadius: "16px", padding: "36px", border: "1px solid #E5E7EB", textAlign: "center" }}>
                <div style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.8rem", fontWeight: 800, color: "#0D9488", marginBottom: "12px" }}>{p.name}</div>
                <p style={{ fontSize: "0.875rem", color: "#6B7280", lineHeight: 1.65 }}>{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section id="quote-form" style={{ background: "linear-gradient(135deg, #F0FDFB 0%, #E6FFFA 60%, #F0FDF4 100%)", paddingTop: "96px", paddingBottom: "96px" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="inline-block mb-5 px-4 py-1 text-xs font-bold tracking-widest rounded-full" style={{ backgroundColor: "rgba(45,212,191,0.12)", color: "#0D9488" }}>GET A QUOTE</div>
              <h2 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, color: "#111827", lineHeight: 1.2, marginBottom: "20px" }}>
                Tell us what you need.<br /><span style={{ color: "#0D9488" }}>We'll find the best solution.</span>
              </h2>
              <p style={{ color: "#4B5563", lineHeight: 1.75, marginBottom: "36px", maxWidth: "420px" }}>
                Whether you're upgrading from ADSL, moving to a new premises, or connecting a remote site via satellite — we'll get you a same-day quote with no obligation.
              </p>
              <div className="flex flex-col gap-5">
                {[
                  { icon: CheckCircle, text: "Same-day quotes on all connection types" },
                  { icon: CheckCircle, text: "No lock-in contracts — cancel anytime" },
                  { icon: CheckCircle, text: "UK-based account management" },
                  { icon: CheckCircle, text: "Satellite solutions for remote locations" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <item.icon size={18} style={{ color: "#2DD4BF", flexShrink: 0 }} />
                    <span style={{ color: "#374151", fontSize: "0.9rem", fontWeight: 500 }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
              {submitted ? (
                <div style={{ backgroundColor: "#FFFFFF", borderRadius: "24px", padding: "56px 40px", textAlign: "center", border: "1px solid #E5E7EB", boxShadow: "0 8px 40px rgba(45,212,191,0.12)" }}>
                  <div style={{ width: 64, height: 64, borderRadius: "50%", background: "linear-gradient(135deg, #0D9488, #2DD4BF)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                    <CheckCircle size={28} style={{ color: "#FFFFFF" }} />
                  </div>
                  <h3 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.4rem", fontWeight: 700, color: "#111827", marginBottom: "12px" }}>Quote Request Sent!</h3>
                  <p style={{ color: "#6B7280", lineHeight: 1.7 }}>Thanks — we'll be in touch within one business day with a tailored connectivity quote.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ backgroundColor: "#FFFFFF", borderRadius: "24px", padding: "40px", border: "1px solid #E5E7EB", boxShadow: "0 8px 40px rgba(45,212,191,0.1)" }}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "#374151", marginBottom: "6px", letterSpacing: "0.04em" }}>BUSINESS NAME *</label>
                      <div style={{ position: "relative" }}>
                        <Building2 size={15} style={{ position: "absolute", left: "13px", top: "50%", transform: "translateY(-50%)", color: "#9CA3AF" }} />
                        <input type="text" required placeholder="Acme Ltd" value={formData.businessName}
                          onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                          style={{ width: "100%", paddingLeft: "38px", paddingRight: "14px", paddingTop: "11px", paddingBottom: "11px", border: "1.5px solid #E5E7EB", borderRadius: "10px", fontSize: "0.875rem", color: "#111827", fontFamily: "Space Grotesk, sans-serif", outline: "none", backgroundColor: "#FAFAFA" }}
                          onFocus={(e) => (e.target.style.borderColor = "#2DD4BF")}
                          onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                        />
                      </div>
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "#374151", marginBottom: "6px", letterSpacing: "0.04em" }}>POSTCODE *</label>
                      <div style={{ position: "relative" }}>
                        <MapPin size={15} style={{ position: "absolute", left: "13px", top: "50%", transform: "translateY(-50%)", color: "#9CA3AF" }} />
                        <input type="text" required placeholder="CM1 1AA" value={formData.postcode}
                          onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                          style={{ width: "100%", paddingLeft: "38px", paddingRight: "14px", paddingTop: "11px", paddingBottom: "11px", border: "1.5px solid #E5E7EB", borderRadius: "10px", fontSize: "0.875rem", color: "#111827", fontFamily: "Space Grotesk, sans-serif", outline: "none", backgroundColor: "#FAFAFA" }}
                          onFocus={(e) => (e.target.style.borderColor = "#2DD4BF")}
                          onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mb-5">
                    <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "#374151", marginBottom: "6px", letterSpacing: "0.04em" }}>CONNECTION TYPE NEEDED *</label>
                    <div style={{ position: "relative" }}>
                      <select required value={formData.connectionType}
                        onChange={(e) => setFormData({ ...formData, connectionType: e.target.value })}
                        style={{ width: "100%", padding: "11px 38px 11px 14px", border: "1.5px solid #E5E7EB", borderRadius: "10px", fontSize: "0.875rem", color: formData.connectionType ? "#111827" : "#9CA3AF", fontFamily: "Space Grotesk, sans-serif", outline: "none", appearance: "none", backgroundColor: "#FAFAFA", cursor: "pointer" }}
                        onFocus={(e) => (e.target.style.borderColor = "#2DD4BF")}
                        onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                      >
                        <option value="" disabled>Select a connection type…</option>
                        {connectionTypes.map((ct) => <option key={ct} value={ct}>{ct}</option>)}
                      </select>
                      <ChevronDown size={15} style={{ position: "absolute", right: "13px", top: "50%", transform: "translateY(-50%)", color: "#9CA3AF", pointerEvents: "none" }} />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "#374151", marginBottom: "6px", letterSpacing: "0.04em" }}>CURRENT PROVIDER</label>
                      <input type="text" placeholder="BT, Virgin, Sky…" value={formData.currentProvider}
                        onChange={(e) => setFormData({ ...formData, currentProvider: e.target.value })}
                        style={{ width: "100%", padding: "11px 14px", border: "1.5px solid #E5E7EB", borderRadius: "10px", fontSize: "0.875rem", color: "#111827", fontFamily: "Space Grotesk, sans-serif", outline: "none", backgroundColor: "#FAFAFA" }}
                        onFocus={(e) => (e.target.style.borderColor = "#2DD4BF")}
                        onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                      />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "#374151", marginBottom: "6px", letterSpacing: "0.04em" }}>MONTHLY BUDGET</label>
                      <select value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        style={{ width: "100%", padding: "11px 14px", border: "1.5px solid #E5E7EB", borderRadius: "10px", fontSize: "0.875rem", color: formData.budget ? "#111827" : "#9CA3AF", fontFamily: "Space Grotesk, sans-serif", outline: "none", appearance: "none", backgroundColor: "#FAFAFA" }}
                        onFocus={(e) => (e.target.style.borderColor = "#2DD4BF")}
                        onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                      >
                        <option value="">Any budget</option>
                        <option value="Under £50/mo">Under £50/mo</option>
                        <option value="£50–£150/mo">£50–£150/mo</option>
                        <option value="£150–£500/mo">£150–£500/mo</option>
                        <option value="£500+/mo">£500+/mo</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-6">
                    <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "#374151", marginBottom: "6px", letterSpacing: "0.04em" }}>ADDITIONAL DETAILS</label>
                    <textarea rows={3} placeholder="Tell us about your site, number of users, or any specific requirements…"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{ width: "100%", padding: "11px 14px", border: "1.5px solid #E5E7EB", borderRadius: "10px", fontSize: "0.875rem", color: "#111827", fontFamily: "Space Grotesk, sans-serif", outline: "none", resize: "vertical", backgroundColor: "#FAFAFA", lineHeight: 1.6 }}
                      onFocus={(e) => (e.target.style.borderColor = "#2DD4BF")}
                      onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                    />
                  </div>
                  <motion.button type="submit" whileHover={{ scale: 1.02, boxShadow: "0 8px 30px rgba(45,212,191,0.4)" }} whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2 font-semibold"
                    style={{ background: "linear-gradient(135deg, #0D9488 0%, #2DD4BF 100%)", color: "#FFFFFF", padding: "15px 28px", borderRadius: "10px", fontSize: "0.95rem", fontFamily: "Space Grotesk, sans-serif", border: "none", cursor: "pointer", letterSpacing: "0.02em" }}
                  >
                    <Send size={16} /> Send Quote Request
                  </motion.button>
                  <p style={{ textAlign: "center", color: "#9CA3AF", fontSize: "0.75rem", marginTop: "12px" }}>No obligation. We'll respond within one business day.</p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
