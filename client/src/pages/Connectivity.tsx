import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Wifi, Zap, Globe, Shield, CheckCircle, Activity } from "lucide-react";

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
        {/* Concentric signal rings */}
        {[55, 85, 115, 145].map((r, i) => (
          <motion.circle key={i} cx={cx} cy={cy} r={r}
            fill="none" stroke="#2DD4BF" strokeWidth="1"
            animate={{ opacity: [0.7, 0, 0.7], r: [r, r + 15, r] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.6, ease: "easeOut" }}
          />
        ))}
        {/* Branch lines */}
        {branches.map((b, i) => (
          <motion.line key={i} x1={cx} y1={cy} x2={b.x} y2={b.y}
            stroke="#2DD4BF" strokeWidth="1.5" strokeDasharray="5 4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.55 }}
            transition={{ duration: 1.1, delay: 0.3 + i * 0.12 }}
          />
        ))}
        {/* Travelling signal pulses */}
        {branches.slice(0, 5).map((b, i) => (
          <motion.circle key={`sig-${i}`} r={5} fill="#2DD4BF"
            animate={{ cx: [cx, b.x, cx], cy: [cy, b.y, cy] }}
            transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.5, ease: "easeInOut" }}
          />
        ))}
        {/* Central router hub */}
        <circle cx={cx} cy={cy} r={32} fill="#2DD4BF" />
        <text x={cx} y={cy - 4} textAnchor="middle" fill="#0D2A25" fontSize="9" fontWeight="700" fontFamily="Space Grotesk, sans-serif">SAFE</text>
        <text x={cx} y={cy + 9} textAnchor="middle" fill="#0D2A25" fontSize="9" fontWeight="700" fontFamily="Space Grotesk, sans-serif">SERV</text>
        {/* Branch nodes */}
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
        {/* Speed indicator bars */}
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

const solutions = [
  { icon: Zap, title: "Ultrafast Broadband", desc: "FTTP, FTTC, and SOGEA connections via DWS and NTA. Speeds from 40Mbps to 1Gbps.", tag: "UP TO 1GBPS" },
  { icon: Globe, title: "Leased Lines", desc: "Dedicated, uncontended fibre with guaranteed speeds and 99.9% SLA uptime.", tag: "DEDICATED FIBRE" },
  { icon: Activity, title: "4G / 5G Backup", desc: "Automatic failover to 4G or 5G if your primary connection drops. Always online.", tag: "ALWAYS ON" },
  { icon: Shield, title: "SD-WAN", desc: "Intelligent traffic management across multiple connections. Prioritise critical applications.", tag: "INTELLIGENT" },
  { icon: Wifi, title: "Business Wi-Fi", desc: "Enterprise-grade wireless networks with full coverage and centralised management.", tag: "FULL COVERAGE" },
  { icon: Globe, title: "SIP Trunking", desc: "Replace ISDN lines with flexible, cost-effective SIP trunks via Gamma network.", tag: "ISDN REPLACEMENT" },
];

export default function Connectivity() {
  return (
    <div style={{ backgroundColor: "#FFFFFF", minHeight: "100vh" }}>
      {/* Hero */}
      <section style={{ position: "relative", paddingTop: "100px", paddingBottom: "80px", background: "linear-gradient(135deg, #F0FDFB 0%, #E6FFFA 50%, #F0FDF4 100%)", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -100, right: -100, width: 500, height: 500, borderRadius: "50%", background: "rgba(45,212,191,0.07)", pointerEvents: "none" }} />
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="inline-flex items-center gap-2 mb-5" style={{ background: "rgba(45,212,191,0.12)", border: "1px solid rgba(45,212,191,0.3)", borderRadius: "100px", padding: "6px 16px", color: "#0D9488", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em" }}>
                <Wifi size={12} /> CONNECTIVITY SOLUTIONS
              </div>
              <h1 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800, color: "#111827", lineHeight: 1.1, marginBottom: "20px" }}>
                Fast. Reliable.<br /><span style={{ color: "#0D9488" }}>Always Connected.</span>
              </h1>
              <p style={{ fontSize: "1.05rem", color: "#4B5563", lineHeight: 1.75, maxWidth: "480px", marginBottom: "32px" }}>
                From ultrafast broadband to dedicated leased lines — SafeServ delivers the connectivity your business depends on via the UK's leading network providers.
              </p>
              <Link href="/contact">
                <motion.button whileHover={{ scale: 1.05, boxShadow: "0 8px 30px rgba(45,212,191,0.45)" }} whileTap={{ scale: 0.97 }} className="flex items-center gap-2 font-semibold" style={{ backgroundColor: "#2DD4BF", color: "#0D2A25", padding: "14px 28px", borderRadius: "8px", fontSize: "0.95rem", fontFamily: "Space Grotesk, sans-serif", border: "none", cursor: "pointer" }}>
                  Check Availability <ArrowRight size={15} />
                </motion.button>
              </Link>
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

      {/* Solutions Grid */}
      <section style={{ backgroundColor: "#F9FAFB", paddingTop: "80px", paddingBottom: "80px" }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <div className="inline-block mb-4 px-4 py-1 text-xs font-bold tracking-widest rounded-full" style={{ backgroundColor: "rgba(45,212,191,0.12)", color: "#0D9488" }}>CONNECTIVITY SOLUTIONS</div>
            <h2 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 700, color: "#111827", marginBottom: "12px" }}>The Right Connection for Your Business.</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((sol, i) => (
              <motion.div key={sol.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} whileHover={{ y: -5, boxShadow: "0 12px 32px rgba(45,212,191,0.15)" }} style={{ backgroundColor: "#FFFFFF", borderRadius: "16px", padding: "32px", border: "1px solid #E5E7EB" }}>
                <div className="flex items-start justify-between mb-4">
                  <div style={{ width: 48, height: 48, borderRadius: "12px", backgroundColor: "rgba(45,212,191,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <sol.icon size={22} style={{ color: "#0D9488" }} />
                  </div>
                  <span style={{ fontSize: "0.6rem", fontWeight: 700, color: "#0D9488", backgroundColor: "rgba(45,212,191,0.1)", padding: "3px 10px", borderRadius: "100px" }}>{sol.tag}</span>
                </div>
                <h3 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.05rem", fontWeight: 700, color: "#111827", marginBottom: "10px" }}>{sol.title}</h3>
                <p style={{ fontSize: "0.875rem", color: "#6B7280", lineHeight: 1.65 }}>{sol.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section style={{ backgroundColor: "#FFFFFF", paddingTop: "80px", paddingBottom: "80px" }}>
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
              <motion.div key={p.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} style={{ backgroundColor: "#F9FAFB", borderRadius: "16px", padding: "36px", border: "1px solid #E5E7EB", textAlign: "center" }}>
                <div style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.8rem", fontWeight: 800, color: "#0D9488", marginBottom: "12px" }}>{p.name}</div>
                <p style={{ fontSize: "0.875rem", color: "#6B7280", lineHeight: 1.65 }}>{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "linear-gradient(135deg, #0D9488 0%, #0F766E 100%)", paddingTop: "72px", paddingBottom: "72px" }}>
        <div className="container text-center">
          <h2 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 700, color: "#FFFFFF", marginBottom: "16px" }}>Check availability at your address.</h2>
          <p style={{ color: "rgba(255,255,255,0.85)", maxWidth: "440px", margin: "0 auto 32px" }}>Get a free quote today. We'll find the fastest, most reliable connection at your location.</p>
          <Link href="/contact">
            <motion.button whileHover={{ scale: 1.05, boxShadow: "0 8px 30px rgba(0,0,0,0.2)" }} whileTap={{ scale: 0.97 }} className="flex items-center gap-2 font-semibold mx-auto" style={{ backgroundColor: "#FFFFFF", color: "#0D9488", padding: "15px 36px", borderRadius: "8px", fontSize: "1rem", fontFamily: "Space Grotesk, sans-serif", border: "none", cursor: "pointer" }}>
              Check Availability <ArrowRight size={16} />
            </motion.button>
          </Link>
        </div>
      </section>
    </div>
  );
}
