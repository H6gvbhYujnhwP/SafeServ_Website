import { Link } from "wouter";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  Phone, Wifi, Monitor, Brain, Globe, ArrowRight,
  CheckCircle, Shield, Clock, Users, Star, ChevronRight
} from "lucide-react";

/* OPTION 2: CRISP WHITE & TEAL — Home Page */
/* Hero: /hero_main.jpg */

// Animated counter hook
function useCounter(end: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, end, duration]);

  return { count, ref };
}

const services = [
  {
    icon: Phone,
    title: "VoIP Telephony",
    desc: "HD voice phones with no lock-in. D44, E50 & F60 IP phones with PoE, Bluetooth, and 5-way conferencing.",
    href: "/telephony",
    color: "#2DD4BF",
    bg: "#F0FDFB",
  },
  {
    icon: Monitor,
    title: "IT Support",
    desc: "Fully managed IT services from SafeServ. Proactive monitoring, helpdesk, and on-site support from UK engineers.",
    href: "/it-support",
    color: "#0D9488",
    bg: "#F0FDFB",
  },
  {
    icon: Wifi,
    title: "Connectivity",
    desc: "Ultrafast broadband, leased lines, and 4G/5G backup. Delivered by DWS, NTA, and Gamma networks.",
    href: "/connectivity",
    color: "#2DD4BF",
    bg: "#F0FDFB",
  },
  {
    icon: Brain,
    title: "AI Solutions",
    desc: "SafeServ Translate+ for live call transcription. AI workforce tools and automation built for modern UK businesses.",
    href: "/ai-solutions",
    color: "#0D9488",
    bg: "#F0FDFB",
  },
  {
    icon: Globe,
    title: "Digital & Web",
    desc: "Professional websites delivered in 48 hours by SafeServ. Apps, SEO, and social media management included.",
    href: "/digital",
    color: "#2DD4BF",
    bg: "#F0FDFB",
  },
];

const phones = [
  {
    name: "D44",
    tag: "ENTRY LEVEL",
    img: "/VoIPPhoneD44-1.png",
    features: ["4.3\" Colour LCD", "10 BLF Keys", "HD Audio", "PoE Support"],
    href: "/telephony",
  },
  {
    name: "E50",
    tag: "MOST POPULAR",
    img: "/VoIPPhoneE50.png",
    features: ["4.3\" Colour LCD", "36 BLF Keys", "5-Way Conference", "Bluetooth & EHS"],
    href: "/telephony",
  },
  {
    name: "F60",
    tag: "FLAGSHIP",
    img: "/VoIPPhoneF60.png",
    features: ["7\" Touchscreen", "20 SIP Accounts", "Video Calling", "Built-in Wi-Fi"],
    href: "/telephony",
  },
];

const partners = [
  { name: "UK Engineers", role: "IT Support", color: "#2DD4BF" },
  { name: "AI Automation", role: "Smart Workflows", color: "#0D9488" },
  { name: "Web & Digital", role: "Design & Build", color: "#2DD4BF" },
  { name: "DWS", role: "Connectivity", color: "#0D9488" },
  { name: "Gamma", role: "Voice & Data", color: "#2DD4BF" },
];

// Floating particle component
function FloatingParticle({ x, y, size, delay, duration }: { x: number; y: number; size: number; delay: number; duration: number }) {
  return (
    <motion.div
      style={{
        position: "absolute",
        left: `${x}%`,
        top: `${y}%`,
        width: size,
        height: size,
        borderRadius: "50%",
        background: "rgba(45, 212, 191, 0.35)",
        pointerEvents: "none",
      }}
      animate={{
        y: [0, -30, 0],
        opacity: [0.3, 0.8, 0.3],
        scale: [1, 1.3, 1],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatType: "loop",
      }}
    />
  );
}

const particles = [
  { x: 10, y: 20, size: 8, delay: 0, duration: 4 },
  { x: 25, y: 60, size: 5, delay: 0.8, duration: 5 },
  { x: 45, y: 35, size: 10, delay: 1.5, duration: 3.5 },
  { x: 65, y: 70, size: 6, delay: 0.3, duration: 4.5 },
  { x: 80, y: 25, size: 9, delay: 1.2, duration: 3.8 },
  { x: 90, y: 55, size: 5, delay: 0.6, duration: 5.2 },
  { x: 15, y: 80, size: 7, delay: 2.0, duration: 4.2 },
  { x: 55, y: 15, size: 6, delay: 1.8, duration: 3.2 },
];

/* ── ANIMATED NETWORK GRAPHIC ── */
function NetworkGraphic() {
  // Node positions: [cx, cy, label, isHub]
  const nodes = [
    { cx: 240, cy: 240, r: 28, label: "SafeServ", hub: true },
    { cx: 100, cy: 100, r: 18, label: "VoIP", hub: false },
    { cx: 380, cy: 90, r: 18, label: "IT", hub: false },
    { cx: 420, cy: 260, r: 18, label: "AI", hub: false },
    { cx: 350, cy: 390, r: 18, label: "Web", hub: false },
    { cx: 100, cy: 370, r: 18, label: "Net", hub: false },
    { cx: 60, cy: 230, r: 14, label: "PoE", hub: false },
    { cx: 240, cy: 60, r: 14, label: "SIP", hub: false },
    { cx: 450, cy: 160, r: 14, label: "TLS", hub: false },
  ];
  const edges = [
    [0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],
    [1,6],[1,7],[2,7],[2,8],[3,8],[3,4],[4,5],[5,6],
  ];
  const pulseNodes = [1,2,3,4,5];

  return (
    <div style={{ position: "relative", width: "480px", height: "480px" }}>
      {/* Radial glow behind the whole graphic */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse at 50% 50%, rgba(45,212,191,0.18) 0%, transparent 70%)",
        borderRadius: "50%",
        pointerEvents: "none",
      }} />
      <svg width="480" height="480" viewBox="0 0 480 480" style={{ position: "absolute", inset: 0 }}>
        <defs>
          <radialGradient id="hubGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#2DD4BF" />
            <stop offset="100%" stopColor="#0D9488" />
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        {/* Edges */}
        {edges.map(([a, b], i) => (
          <line
            key={i}
            x1={nodes[a].cx} y1={nodes[a].cy}
            x2={nodes[b].cx} y2={nodes[b].cy}
            stroke="rgba(45,212,191,0.25)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
        ))}
        {/* Nodes */}
        {nodes.map((n, i) => (
          <g key={i}>
            {n.hub && (
              <circle cx={n.cx} cy={n.cy} r={n.r + 12}
                fill="none" stroke="rgba(45,212,191,0.2)" strokeWidth="1" />
            )}
            <circle
              cx={n.cx} cy={n.cy} r={n.r}
              fill={n.hub ? "url(#hubGrad)" : "rgba(45,212,191,0.12)"}
              stroke={n.hub ? "#2DD4BF" : "rgba(45,212,191,0.5)"}
              strokeWidth={n.hub ? 2.5 : 1.5}
              filter={n.hub ? "url(#glow)" : undefined}
            />
            <text
              x={n.cx} y={n.cy + (n.hub ? 5 : 4)}
              textAnchor="middle"
              fill={n.hub ? "#fff" : "#0D9488"}
              fontSize={n.hub ? 9 : 8}
              fontWeight={n.hub ? 700 : 600}
              fontFamily="Space Grotesk, sans-serif"
              letterSpacing="0.04em"
            >
              {n.label}
            </text>
          </g>
        ))}
      </svg>
      {/* Animated pulse rings on key nodes */}
      {pulseNodes.map((ni, i) => (
        <motion.div
          key={ni}
          style={{
            position: "absolute",
            left: nodes[ni].cx - nodes[ni].r - 8,
            top: nodes[ni].cy - nodes[ni].r - 8,
            width: (nodes[ni].r + 8) * 2,
            height: (nodes[ni].r + 8) * 2,
            borderRadius: "50%",
            border: "1.5px solid rgba(45,212,191,0.5)",
            pointerEvents: "none",
          }}
          animate={{ scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 2.5 + i * 0.4, repeat: Infinity, delay: i * 0.5 }}
        />
      ))}
      {/* Travelling dot along an edge */}
      <motion.div
        style={{
          position: "absolute",
          width: 8, height: 8,
          borderRadius: "50%",
          background: "#2DD4BF",
          boxShadow: "0 0 8px #2DD4BF",
          pointerEvents: "none",
          top: 0, left: 0,
        }}
        animate={{
          x: [nodes[0].cx - 4, nodes[3].cx - 4, nodes[4].cx - 4, nodes[0].cx - 4],
          y: [nodes[0].cy - 4, nodes[3].cy - 4, nodes[4].cy - 4, nodes[0].cy - 4],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        style={{
          position: "absolute",
          width: 6, height: 6,
          borderRadius: "50%",
          background: "#0D9488",
          boxShadow: "0 0 6px #0D9488",
          pointerEvents: "none",
          top: 0, left: 0,
        }}
        animate={{
          x: [nodes[0].cx - 3, nodes[1].cx - 3, nodes[6].cx - 3, nodes[0].cx - 3],
          y: [nodes[0].cy - 3, nodes[1].cy - 3, nodes[6].cy - 3, nodes[0].cy - 3],
        }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "linear", delay: 1 }}
      />
    </div>
  );
}

export default function Home() {
  const stat1 = useCounter(500);
  const stat2 = useCounter(99);
  const stat3 = useCounter(48);
  const stat4 = useCounter(5);

  return (
    <div style={{ backgroundColor: "#FFFFFF", minHeight: "100vh" }}>

      {/* ── HERO ── */}
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          backgroundImage: `url('/hero_main.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          paddingTop: "120px",
          paddingBottom: "80px",
        }}
      >
        {/* Light overlay so text is readable */}
        <div style={{ position: "absolute", inset: 0, background: "rgba(255,255,255,0.72)" }} />

        {/* Floating particles */}
        {particles.map((p, i) => (
          <FloatingParticle key={i} {...p} />
        ))}

        <div className="container" style={{ position: "relative", zIndex: 10 }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Copy */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 mb-6"
                style={{
                  background: "rgba(45,212,191,0.15)",
                  border: "1px solid rgba(45,212,191,0.4)",
                  borderRadius: "100px",
                  padding: "6px 16px",
                  color: "#0D9488",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  fontFamily: "Space Grotesk, sans-serif",
                }}
              >
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#2DD4BF", display: "inline-block" }} />
                UK'S COMPLETE TECHNOLOGY PARTNER
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontSize: "clamp(3rem, 6vw, 5rem)",
                  fontWeight: 800,
                  color: "#111827",
                  lineHeight: 1.05,
                  marginBottom: "24px",
                  letterSpacing: "-0.02em",
                }}
              >
                Reliable.<br />
                <span style={{ color: "#0D9488" }}>Secure.</span><br />
                Connected.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                style={{
                  fontSize: "1.1rem",
                  color: "#4B5563",
                  lineHeight: 1.75,
                  maxWidth: "480px",
                  marginBottom: "36px",
                }}
              >
                SafeServ brings together the UK's best technology services — VoIP, IT support, connectivity, AI, and digital — all under one roof. <strong style={{ color: "#0D9488" }}>No lock-in contracts.</strong> Just exceptional service.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex flex-wrap gap-4"
              >
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 8px 30px rgba(45,212,191,0.5)" }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-2 font-semibold"
                    style={{
                      backgroundColor: "#2DD4BF",
                      color: "#0D2A25",
                      padding: "15px 32px",
                      borderRadius: "8px",
                      fontSize: "0.95rem",
                      fontFamily: "Space Grotesk, sans-serif",
                      boxShadow: "0 4px 20px rgba(45,212,191,0.4)",
                      border: "none",
                    }}
                  >
                    Get a Free Quote <ArrowRight size={16} />
                  </motion.button>
                </Link>
                <a href="tel:01245850140">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-2 font-semibold"
                    style={{
                      backgroundColor: "transparent",
                      color: "#2B4A5C",
                      padding: "15px 32px",
                      borderRadius: "8px",
                      fontSize: "0.95rem",
                      fontFamily: "Space Grotesk, sans-serif",
                      border: "2px solid #2B4A5C",
                    }}
                  >
                    <Phone size={16} /> 01245 850140
                  </motion.button>
                </a>
              </motion.div>

              {/* Trust badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0, duration: 0.6 }}
                className="flex flex-wrap gap-6 mt-8"
              >
                {["No Lock-In", "UK Based", "24/7 Support", "Free Quote"].map((badge) => (
                  <div key={badge} className="flex items-center gap-2" style={{ fontSize: "0.8rem", color: "#6B7280", fontFamily: "Space Grotesk, sans-serif" }}>
                    <CheckCircle size={14} style={{ color: "#2DD4BF" }} />
                    {badge}
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right: Animated SVG Network Graphic */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.0, delay: 0.4 }}
              className="hidden lg:flex justify-center items-center"
              style={{ position: "relative", height: "480px", width: "100%" }}
            >
              <NetworkGraphic />
            </motion.div>
          </div>
        </div>

        {/* Bottom wave */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block" }}>
            <path d="M0,40 C360,0 1080,80 1440,20 L1440,60 L0,60 Z" fill="#FFFFFF" />
          </svg>
        </div>
      </section>

      {/* ── ANIMATED STATS BAR ── */}
      <section style={{ backgroundColor: "#FFFFFF", paddingTop: "60px", paddingBottom: "60px" }}>
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { ref: stat1.ref, count: stat1.count, suffix: "+", label: "Clients Served", icon: Users },
              { ref: stat2.ref, count: stat2.count, suffix: "%", label: "Uptime SLA", icon: Shield },
              { ref: stat3.ref, count: stat3.count, suffix: "hr", label: "Website Delivery", icon: Clock },
              { ref: stat4.ref, count: stat4.count, suffix: " Services", label: "Under One Roof", icon: Star },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{ padding: "24px" }}
              >
                <stat.icon size={28} style={{ color: "#2DD4BF", margin: "0 auto 12px" }} />
                <div style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "2.5rem", fontWeight: 800, color: "#111827", lineHeight: 1 }}>
                  <span ref={stat.ref}>{stat.count}</span>{stat.suffix}
                </div>
                <div style={{ fontSize: "0.8rem", color: "#6B7280", marginTop: "6px", fontFamily: "Space Grotesk, sans-serif" }}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section style={{ backgroundColor: "#F9FAFB", paddingTop: "80px", paddingBottom: "80px" }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="inline-block mb-4 px-4 py-1 text-xs font-bold tracking-widest rounded-full" style={{ backgroundColor: "rgba(45,212,191,0.12)", color: "#0D9488", fontFamily: "Space Grotesk, sans-serif" }}>
              EVERYTHING YOUR BUSINESS NEEDS
            </div>
            <h2 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#111827", marginBottom: "16px" }}>
              One Partner. Five Pillars.
            </h2>
            <p style={{ color: "#6B7280", maxWidth: "520px", margin: "0 auto", lineHeight: 1.7 }}>
              From your phone system to your website — SafeServ handles every layer of your business technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link href={svc.href}>
                  <motion.div
                    whileHover={{ y: -6, boxShadow: `0 16px 40px rgba(45,212,191,0.18)` }}
                    transition={{ duration: 0.25 }}
                    style={{
                      backgroundColor: "#FFFFFF",
                      borderRadius: "16px",
                      padding: "32px",
                      border: "1px solid #E5E7EB",
                      cursor: "pointer",
                      height: "100%",
                    }}
                  >
                    <div style={{ width: 52, height: 52, borderRadius: "12px", backgroundColor: svc.bg, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px", border: `1px solid ${svc.color}30` }}>
                      <svc.icon size={24} style={{ color: svc.color }} />
                    </div>
                    <h3 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.15rem", fontWeight: 700, color: "#111827", marginBottom: "10px" }}>{svc.title}</h3>
                    <p style={{ fontSize: "0.875rem", color: "#6B7280", lineHeight: 1.65, marginBottom: "20px" }}>{svc.desc}</p>
                    <div className="flex items-center gap-1" style={{ color: svc.color, fontSize: "0.82rem", fontWeight: 600, fontFamily: "Space Grotesk, sans-serif" }}>
                      Learn more <ChevronRight size={14} />
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}

            {/* No lock-in card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.45 }}
              style={{
                background: "linear-gradient(135deg, #0D9488 0%, #0F766E 100%)",
                borderRadius: "16px",
                padding: "32px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Shield size={32} style={{ color: "#2DD4BF", marginBottom: "16px" }} />
              <h3 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.25rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "12px" }}>No Lock-In Contracts</h3>
              <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.65, marginBottom: "20px" }}>
                We earn your business every month. Stay because the service is excellent — not because you're trapped.
              </p>
              <Link href="/about">
                <div className="flex items-center gap-1" style={{ color: "#2DD4BF", fontSize: "0.82rem", fontWeight: 600, fontFamily: "Space Grotesk, sans-serif" }}>
                  Our philosophy <ChevronRight size={14} />
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PHONE SHOWCASE ── */}
      <section
        style={{
          position: "relative",
          paddingTop: "80px",
          paddingBottom: "80px",
          backgroundImage: `url('/voip_section.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", inset: 0, background: "rgba(255,255,255,0.88)" }} />
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="inline-block mb-4 px-4 py-1 text-xs font-bold tracking-widest rounded-full" style={{ backgroundColor: "rgba(45,212,191,0.12)", color: "#0D9488", fontFamily: "Space Grotesk, sans-serif" }}>
              VOIP TELEPHONY
            </div>
            <h2 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#111827", marginBottom: "16px" }}>
              HD Voice for Every Desk.
            </h2>
            <p style={{ color: "#6B7280", maxWidth: "480px", margin: "0 auto", lineHeight: 1.7 }}>
              Three phones. One range. All with HD audio, PoE, and enterprise features — with no lock-in.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {phones.map((phone, i) => (
              <motion.div
                key={phone.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <Link href={phone.href}>
                  <motion.div
                    whileHover={{ y: -8, boxShadow: "0 20px 50px rgba(45,212,191,0.2)" }}
                    transition={{ duration: 0.3 }}
                    style={{
                      backgroundColor: "#FFFFFF",
                      borderRadius: "20px",
                      padding: "32px 24px",
                      textAlign: "center",
                      border: "1px solid #E5E7EB",
                      cursor: "pointer",
                    }}
                  >
                    <div className="inline-block mb-4 px-3 py-1 text-xs font-bold tracking-widest rounded" style={{ backgroundColor: "rgba(45,212,191,0.12)", color: "#0D9488", fontFamily: "Space Grotesk, sans-serif" }}>
                      {phone.tag}
                    </div>
                    <motion.div
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 3 + i * 0.5, repeat: Infinity, repeatType: "loop" }}
                      style={{ marginBottom: "20px" }}
                    >
                      <img
                        src={phone.img}
                        alt={`SafeServ ${phone.name} IP Phone`}
                        style={{ height: "180px", objectFit: "contain", margin: "0 auto", filter: "drop-shadow(0 8px 20px rgba(45,212,191,0.2))" }}
                      />
                    </motion.div>
                    <h3 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.5rem", fontWeight: 700, color: "#111827", marginBottom: "16px" }}>
                      {phone.name} <span style={{ color: "#0D9488" }}>IP Phone</span>
                    </h3>
                    <ul className="space-y-2 text-left">
                      {phone.features.map((f, j) => (
                        <li key={j} className="flex items-center gap-2" style={{ fontSize: "0.82rem", color: "#4B5563" }}>
                          <CheckCircle size={13} style={{ color: "#2DD4BF", flexShrink: 0 }} />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-center gap-1 mt-5" style={{ color: "#0D9488", fontSize: "0.82rem", fontWeight: 600, fontFamily: "Space Grotesk, sans-serif" }}>
                      View full specs <ChevronRight size={14} />
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI SECTION ── */}
      <section
        style={{
          position: "relative",
          paddingTop: "80px",
          paddingBottom: "80px",
          backgroundImage: `url('/ai_section.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", inset: 0, background: "rgba(255,255,255,0.85)" }} />
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-block mb-4 px-4 py-1 text-xs font-bold tracking-widest rounded-full" style={{ backgroundColor: "rgba(45,212,191,0.12)", color: "#0D9488", fontFamily: "Space Grotesk, sans-serif" }}>
                AI SOLUTIONS
              </div>
              <h2 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 700, color: "#111827", lineHeight: 1.2, marginBottom: "16px" }}>
                SafeServ <span style={{ color: "#0D9488" }}>Translate+</span><br />Live Call Transcription.
              </h2>
              <p style={{ color: "#4B5563", lineHeight: 1.75, marginBottom: "24px" }}>
                Every call, transcribed in real time. Never miss a detail — compliance, training, and customer insight all in one AI-powered platform.
              </p>
              <ul className="space-y-3 mb-8">
                {["Real-time transcription during live calls", "Automatic call summaries and action points", "Compliance-ready call archiving", "Integrates with your existing phone system"].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3"
                    style={{ fontSize: "0.9rem", color: "#374151" }}
                  >
                    <CheckCircle size={16} style={{ color: "#2DD4BF", flexShrink: 0, marginTop: 2 }} />
                    {item}
                  </motion.li>
                ))}
              </ul>
              <Link href="/ai-solutions">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 8px 30px rgba(45,212,191,0.4)" }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 font-semibold"
                  style={{ backgroundColor: "#2DD4BF", color: "#0D2A25", padding: "14px 28px", borderRadius: "8px", fontSize: "0.95rem", fontFamily: "Space Grotesk, sans-serif", border: "none", boxShadow: "0 4px 16px rgba(45,212,191,0.35)" }}
                >
                  Explore AI Solutions <ArrowRight size={16} />
                </motion.button>
              </Link>
            </motion.div>

            {/* Animated transcript mockup */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div style={{ backgroundColor: "#FFFFFF", borderRadius: "20px", padding: "28px", border: "1px solid #E5E7EB", boxShadow: "0 16px 48px rgba(45,212,191,0.12)" }}>
                <div className="flex items-center gap-3 mb-5">
                  <div style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "#EF4444" }} />
                  <div style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "#2DD4BF" }} />
                  <div style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "#10B981" }} />
                  <span style={{ fontSize: "0.75rem", color: "#9CA3AF", marginLeft: "8px", fontFamily: "Space Grotesk, sans-serif" }}>SafeServ Translate+ — Live</span>
                  <motion.div
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    style={{ marginLeft: "auto", width: 8, height: 8, borderRadius: "50%", backgroundColor: "#10B981" }}
                  />
                </div>
                {[
                  { speaker: "Agent", text: "Good morning, thanks for calling SafeServ. How can I help?", delay: 0 },
                  { speaker: "Customer", text: "Hi, I'd like to know more about your VoIP packages.", delay: 0.5 },
                  { speaker: "Agent", text: "Of course! We have three options — the D44, E50, and F60...", delay: 1.0 },
                  { speaker: "AI Summary", text: "📋 Customer interested in VoIP. Recommended: D44 or E50.", delay: 1.5 },
                ].map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: line.delay + 0.3 }}
                    style={{ marginBottom: "14px" }}
                  >
                    <div style={{ fontSize: "0.65rem", fontWeight: 700, color: line.speaker === "AI Summary" ? "#0D9488" : "#9CA3AF", letterSpacing: "0.08em", marginBottom: "4px", fontFamily: "Space Grotesk, sans-serif" }}>
                      {line.speaker.toUpperCase()}
                    </div>
                    <div style={{
                      fontSize: "0.82rem",
                      color: "#374151",
                      backgroundColor: line.speaker === "AI Summary" ? "rgba(45,212,191,0.08)" : "#F9FAFB",
                      padding: "10px 14px",
                      borderRadius: "10px",
                      border: line.speaker === "AI Summary" ? "1px solid rgba(45,212,191,0.25)" : "1px solid #E5E7EB",
                      lineHeight: 1.5,
                    }}>
                      {line.text}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PARTNER ECOSYSTEM ── */}
      <section style={{ backgroundColor: "#F9FAFB", paddingTop: "80px", paddingBottom: "80px" }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="inline-block mb-4 px-4 py-1 text-xs font-bold tracking-widest rounded-full" style={{ backgroundColor: "rgba(45,212,191,0.12)", color: "#0D9488", fontFamily: "Space Grotesk, sans-serif" }}>
              PARTNER ECOSYSTEM
            </div>
            <h2 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#111827", marginBottom: "16px" }}>
              Best-in-Class Partners.
            </h2>
            <p style={{ color: "#6B7280", maxWidth: "480px", margin: "0 auto", lineHeight: 1.7 }}>
              We work with the UK's leading technology providers so you always get the best solution.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {partners.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ scale: 1.05, boxShadow: `0 8px 24px ${p.color}25` }}
                style={{
                  backgroundColor: "#FFFFFF",
                  border: `1px solid ${p.color}30`,
                  borderRadius: "12px",
                  padding: "20px 28px",
                  textAlign: "center",
                  minWidth: "160px",
                }}
              >
                <div style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1rem", fontWeight: 700, color: "#111827", marginBottom: "4px" }}>{p.name}</div>
                <div style={{ fontSize: "0.72rem", color: p.color, fontWeight: 600, letterSpacing: "0.06em" }}>{p.role}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section
        style={{
          position: "relative",
          paddingTop: "80px",
          paddingBottom: "80px",
          backgroundImage: `url('/connectivity_section.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", inset: 0, background: "rgba(43,74,92,0.88)" }} />
        <div className="container text-center" style={{ position: "relative", zIndex: 2 }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 700, color: "#FFFFFF", marginBottom: "20px", lineHeight: 1.2 }}>
              Ready to simplify your<br /><span style={{ color: "#2DD4BF" }}>business technology?</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.75)", maxWidth: "480px", margin: "0 auto 36px", lineHeight: 1.7 }}>
              Get a free, no-obligation quote today. No lock-in contracts. No hidden fees. Just honest, expert advice.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 8px 30px rgba(45,212,191,0.5)" }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 font-semibold"
                  style={{ backgroundColor: "#2DD4BF", color: "#0D2A25", padding: "15px 36px", borderRadius: "8px", fontSize: "1rem", fontFamily: "Space Grotesk, sans-serif", border: "none", boxShadow: "0 4px 20px rgba(45,212,191,0.4)" }}
                >
                  Get a Free Quote <ArrowRight size={16} />
                </motion.button>
              </Link>
              <a href="tel:01245850140">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 font-semibold"
                  style={{ backgroundColor: "transparent", color: "#FFFFFF", padding: "15px 36px", borderRadius: "8px", fontSize: "1rem", fontFamily: "Space Grotesk, sans-serif", border: "2px solid rgba(255,255,255,0.5)" }}
                >
                  <Phone size={16} /> Call 01245 850140
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
