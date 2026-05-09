import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Shield, Cpu, Users, Clock, CheckCircle, Zap, Monitor } from "lucide-react";

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
      <svg viewBox="0 0 440 420" style={{ width: "100%", height: "100%" }} xmlns="http://www.w3.org/2000/svg">
        {/* Pulse rings on server */}
        {[50, 75, 100].map((r, i) => (
          <motion.circle key={i} cx={centre.x} cy={centre.y} r={r}
            fill="none" stroke="#2DD4BF" strokeWidth="1"
            animate={{ opacity: [0.5, 0, 0.5], r: [r, r + 20, r] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 1, ease: "easeInOut" }}
          />
        ))}
        {/* Connection lines */}
        {nodes.slice(1).map((n, i) => (
          <motion.line key={i} x1={centre.x} y1={centre.y} x2={n.x} y2={n.y}
            stroke="#2DD4BF" strokeWidth="1.5" strokeDasharray="5 4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ duration: 1, delay: 0.3 + i * 0.15 }}
          />
        ))}
        {/* Travelling data packets */}
        {nodes.slice(1, 5).map((n, i) => (
          <motion.circle key={`pkt-${i}`} r={5} fill="#2DD4BF"
            animate={{ cx: [centre.x, n.x, centre.x], cy: [centre.y, n.y, centre.y] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.65, ease: "easeInOut" }}
          />
        ))}
        {/* Server node */}
        <motion.circle cx={centre.x} cy={centre.y} r={centre.r}
          fill="#2DD4BF"
          animate={{ boxShadow: ["0 0 0px #2DD4BF", "0 0 20px #2DD4BF", "0 0 0px #2DD4BF"] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <text x={centre.x} y={centre.y + 5} textAnchor="middle" fill="#0D2A25" fontSize="10" fontWeight="700" fontFamily="Space Grotesk, sans-serif">SERVER</text>
        {/* Outer nodes */}
        {nodes.slice(1).map((n, i) => (
          <g key={`node-${i}`}>
            <motion.circle cx={n.x} cy={n.y} r={n.r}
              fill="rgba(45,212,191,0.12)" stroke="#2DD4BF" strokeWidth="1.5"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.15 }}
            />
            <motion.text x={n.x} y={n.y + 4} textAnchor="middle" fill="#0D9488" fontSize="8" fontWeight="700" fontFamily="Space Grotesk, sans-serif"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 + i * 0.15 }}
            >{n.label}</motion.text>
          </g>
        ))}
        {/* Monitoring pulse line at bottom */}
        {[0,1,2,3,4,5,6,7,8].map((j) => (
          <motion.rect key={`bar-${j}`} x={100 + j * 28} y={390} width={14} rx={3}
            fill="#2DD4BF" fillOpacity="0.6"
            animate={{ height: [4, 6 + (j % 3) * 8, 4], y: [394, 388 - (j % 3) * 4, 394] }}
            transition={{ duration: 1.4, repeat: Infinity, delay: j * 0.14, ease: "easeInOut" }}
          />
        ))}
      </svg>
    </div>
  );
}

const services = [
  { icon: Shield, title: "Cyber Security", desc: "Multi-layered protection including endpoint security, firewalls, email filtering, and security awareness training." },
  { icon: Cpu, title: "Cloud Services", desc: "Microsoft 365, Azure, and cloud migration. We move your business to the cloud safely and efficiently." },
  { icon: Users, title: "Helpdesk Support", desc: "Remote and on-site support from experienced UK engineers. Fast response times and clear communication." },
  { icon: Clock, title: "Proactive Monitoring", desc: "24/7 monitoring of your IT infrastructure. We fix problems before they affect your business." },
  { icon: Zap, title: "MOA — Managing Operating Agents", desc: "The UK's first AI-powered IT management layer. Intelligent automation that keeps your systems running at peak performance." },
  { icon: Monitor, title: "Hardware and Software", desc: "Procurement, setup, and lifecycle management for all your business hardware and software needs." },
];

export default function ITSupport() {
  return (
    <div style={{ backgroundColor: "#FFFFFF", minHeight: "100vh" }}>
      {/* Hero */}
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

      {/* Services Grid */}
      <section style={{ backgroundColor: "#F9FAFB", paddingTop: "80px", paddingBottom: "80px" }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <div className="inline-block mb-4 px-4 py-1 text-xs font-bold tracking-widest rounded-full" style={{ backgroundColor: "rgba(45,212,191,0.12)", color: "#0D9488" }}>WHAT WE COVER</div>
            <h2 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 700, color: "#111827", marginBottom: "12px" }}>Complete IT Coverage.</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <motion.div key={svc.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} whileHover={{ y: -5, boxShadow: "0 12px 32px rgba(45,212,191,0.15)" }} style={{ backgroundColor: "#FFFFFF", borderRadius: "16px", padding: "32px", border: "1px solid #E5E7EB" }}>
                <div style={{ width: 48, height: 48, borderRadius: "12px", backgroundColor: "rgba(45,212,191,0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
                  <svc.icon size={22} style={{ color: "#0D9488" }} />
                </div>
                <h3 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.05rem", fontWeight: 700, color: "#111827", marginBottom: "10px" }}>{svc.title}</h3>
                <p style={{ fontSize: "0.875rem", color: "#6B7280", lineHeight: 1.65 }}>{svc.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MOA Section */}
      <section style={{ backgroundColor: "#FFFFFF", paddingTop: "80px", paddingBottom: "80px" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="inline-flex items-center gap-2 mb-5" style={{ background: "rgba(45,212,191,0.12)", border: "1px solid rgba(45,212,191,0.3)", borderRadius: "100px", padding: "6px 16px", color: "#0D9488", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em" }}>
                <Zap size={12} /> THE UK'S FIRST
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

      {/* CTA */}
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
