import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Quote, Users, Shield, Wifi, Globe } from "lucide-react";

function PartnershipGraphic() {
  const nodes = [
    { id: 0, x: 220, y: 200, label: "SafeServ", r: 36, primary: true },
    { id: 1, x: 100, y: 90, label: "IT & Cyber", r: 26 },
    { id: 2, x: 340, y: 90, label: "AI Tools", r: 26 },
    { id: 3, x: 100, y: 310, label: "Web & Apps", r: 26 },
    { id: 4, x: 340, y: 310, label: "DWS/NTA", r: 26 },
    { id: 5, x: 220, y: 60, label: "IT", r: 18 },
    { id: 6, x: 380, y: 200, label: "AI", r: 18 },
    { id: 7, x: 60, y: 200, label: "VoIP", r: 18 },
    { id: 8, x: 220, y: 360, label: "Web", r: 18 },
  ];
  const edges = [[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[1,5],[2,6],[3,8],[4,6]];
  return (
    <div style={{ width: "100%", height: "420px" }}>
      <svg viewBox="0 0 440 420" style={{ width: "100%", height: "100%" }} xmlns="http://www.w3.org/2000/svg">
        {/* Edges */}
        {edges.map(([a, b], i) => (
          <motion.line key={i}
            x1={nodes[a].x} y1={nodes[a].y}
            x2={nodes[b].x} y2={nodes[b].y}
            stroke="#2DD4BF" strokeWidth="1.2" strokeOpacity="0.4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.0, delay: i * 0.1 }}
          />
        ))}
        {/* Trust pulses travelling along edges */}
        {edges.slice(0, 6).map(([a, b], i) => (
          <motion.circle key={`tp-${i}`} r={5} fill="#2DD4BF"
            animate={{ cx: [nodes[a].x, nodes[b].x, nodes[a].x], cy: [nodes[a].y, nodes[b].y, nodes[a].y], opacity: [0, 1, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.4, ease: "easeInOut" }}
          />
        ))}
        {/* Nodes */}
        {nodes.map((n, i) => (
          <g key={`nd-${i}`}>
            <motion.circle cx={n.x} cy={n.y} r={n.r}
              fill={n.primary ? "#2DD4BF" : "rgba(45,212,191,0.12)"}
              stroke="#2DD4BF" strokeWidth={n.primary ? 0 : 1.5}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
            />
            <motion.text x={n.x} y={n.y + (n.primary ? 5 : 4)} textAnchor="middle"
              fill={n.primary ? "#0D2A25" : "#0D9488"}
              fontSize={n.primary ? "10" : "7"} fontWeight="700" fontFamily="Space Grotesk, sans-serif"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 + i * 0.1 }}
            >{n.label}</motion.text>
          </g>
        ))}
        {/* "No Lock-In" badge */}
        <motion.rect x="140" y="385" width="160" height="26" rx="13"
          fill="rgba(45,212,191,0.15)" stroke="#2DD4BF" strokeWidth="1"
          animate={{ opacity: [0.7, 1, 0.7] }} transition={{ duration: 2.5, repeat: Infinity }}
        />
        <text x="220" y="402" textAnchor="middle" fill="#0D9488" fontSize="9" fontWeight="700" fontFamily="Space Grotesk, sans-serif">NO LOCK-IN CONTRACTS</text>
      </svg>
    </div>
  );
}

const partners = [
  { icon: Shield, name: "IT Support & Cyber Security", role: "Managed IT Services", desc: "Fully managed IT support including proactive monitoring, helpdesk, cloud services, and enterprise-grade cyber security. MOA as standard — the UK's first AI-powered IT management layer.", url: "/it-support" },
  { icon: Users, name: "AI Solutions", role: "Automation & Intelligence", desc: "SafeServ AI tools including Translate+, AI Voice Receptionist, Email Automation, and bespoke AI workflow development. Practical AI that delivers measurable ROI for UK businesses.", url: "/ai-solutions" },
  { icon: Globe, name: "Digital & Web", role: "Websites, Apps & E-Commerce", desc: "Professional websites delivered in 48 hours, bespoke app development, e-commerce stores, and customer portal solutions. Everything built and supported in-house by SafeServ.", url: "/digital" },
  { icon: Wifi, name: "DWS / NTA / Gamma", role: "Connectivity Network", desc: "SafeServ's network of trusted connectivity providers, delivering superfast broadband, leased lines, and SOGEA solutions across the UK with guaranteed SLAs.", url: "/connectivity" },
];

export default function About() {
  return (
    <div style={{ backgroundColor: "#FFFFFF", minHeight: "100vh" }}>
      {/* Hero */}
      <section style={{ position: "relative", paddingTop: "100px", paddingBottom: "80px", background: "linear-gradient(135deg, #F0FDFB 0%, #E6FFFA 50%, #F0FDF4 100%)", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -100, right: -100, width: 500, height: 500, borderRadius: "50%", background: "rgba(45,212,191,0.07)", pointerEvents: "none" }} />
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="inline-flex items-center gap-2 mb-5" style={{ background: "rgba(45,212,191,0.12)", border: "1px solid rgba(45,212,191,0.3)", borderRadius: "100px", padding: "6px 16px", color: "#0D9488", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em" }}>
                ABOUT SAFESERV
              </div>
              <h1 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800, color: "#111827", lineHeight: 1.1, marginBottom: "20px" }}>
                Technology with<br /><span style={{ color: "#0D9488" }}>a Conscience.</span>
              </h1>
              <p style={{ fontSize: "1.05rem", color: "#4B5563", lineHeight: 1.75, maxWidth: "520px" }}>
                SafeServ was built on a simple belief: UK businesses deserve exceptional technology services without being locked into contracts that don't serve them.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.0, delay: 0.4 }} className="hidden lg:flex justify-center items-center">
              <PartnershipGraphic />
            </motion.div>
          </div>
        </div>
      </section>

      {/* James's Story */}
      <section style={{ backgroundColor: "#FFFFFF", paddingTop: "80px", paddingBottom: "80px" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div style={{ backgroundColor: "#F9FAFB", borderRadius: "24px", border: "1px solid #E5E7EB", minHeight: "480px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div className="text-center p-12">
                  <div style={{ width: 120, height: 120, borderRadius: "50%", backgroundColor: "rgba(45,212,191,0.12)", border: "2px solid rgba(45,212,191,0.3)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", fontSize: "2.5rem", fontWeight: 800, color: "#0D9488", fontFamily: "Space Grotesk, sans-serif" }}>
                    JW
                  </div>
                  <h3 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.4rem", fontWeight: 800, color: "#111827", marginBottom: "4px" }}>James Woodhouse</h3>
                  <p style={{ fontSize: "0.8rem", color: "#0D9488", fontWeight: 600, marginBottom: "4px" }}>Founder, SafeServ</p>
                  <p style={{ fontSize: "0.75rem", color: "#9CA3AF", marginBottom: "28px" }}>15+ Years in Telecoms & IT Communications</p>
                  <div className="grid grid-cols-2 gap-3">
                    <a href="tel:01245850140" style={{ fontSize: "0.8rem", padding: "10px 16px", borderRadius: "8px", textAlign: "center", backgroundColor: "rgba(45,212,191,0.1)", color: "#0D9488", border: "1px solid rgba(45,212,191,0.2)", textDecoration: "none", fontWeight: 600 }}>
                      01245 850140
                    </a>
                    <a href="mailto:james@safeserv.co.uk" style={{ fontSize: "0.8rem", padding: "10px 16px", borderRadius: "8px", textAlign: "center", backgroundColor: "rgba(45,212,191,0.1)", color: "#0D9488", border: "1px solid rgba(45,212,191,0.2)", textDecoration: "none", fontWeight: 600 }}>
                      Email James
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="inline-block mb-4 px-4 py-1 text-xs font-bold tracking-widest rounded-full" style={{ backgroundColor: "rgba(45,212,191,0.12)", color: "#0D9488" }}>MEET THE FOUNDER</div>
              <h2 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 700, color: "#111827", lineHeight: 1.2, marginBottom: "20px" }}>
                James <span style={{ color: "#0D9488" }}>Woodhouse</span>
              </h2>
              <div style={{ backgroundColor: "#F0FDFB", borderRadius: "16px", padding: "24px", border: "1px solid rgba(45,212,191,0.2)", marginBottom: "24px" }}>
                <Quote size={22} style={{ color: "#0D9488", opacity: 0.5, marginBottom: "10px" }} />
                <p style={{ fontSize: "0.95rem", fontStyle: "italic", color: "#374151", lineHeight: 1.7 }}>
                  "I'm more interested in helping your business than just profiting mine. If the service isn't exceptional, you shouldn't be paying for it."
                </p>
                <p style={{ fontSize: "0.8rem", color: "#9CA3AF", marginTop: "10px" }}>— James Woodhouse, Founder of SafeServ</p>
              </div>
              <p style={{ color: "#4B5563", lineHeight: 1.75, marginBottom: "16px" }}>
                With over 15 years in telecoms and IT communications, James founded SafeServ with a clear mission: to give UK SMEs access to enterprise-grade technology services without the enterprise-grade complexity or lock-in contracts.
              </p>
              <p style={{ color: "#4B5563", lineHeight: 1.75, marginBottom: "16px" }}>
                Having worked across the telecoms industry, James saw first-hand how businesses were being tied into long contracts for services that didn't deliver. SafeServ was his answer — a company built on trust, transparency, and genuine results.
              </p>
              <p style={{ color: "#4B5563", lineHeight: 1.75, marginBottom: "28px" }}>
                Today, SafeServ serves businesses across Essex and beyond, bringing together the UK's best technology partners under one roof — with James as your single point of contact for everything.
              </p>
              <Link href="/contact">
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="flex items-center gap-2 font-semibold" style={{ backgroundColor: "#2DD4BF", color: "#0D2A25", padding: "14px 28px", borderRadius: "8px", fontSize: "0.95rem", fontFamily: "Space Grotesk, sans-serif", border: "none", cursor: "pointer" }}>
                  Talk to James <ArrowRight size={15} />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section style={{ backgroundColor: "#F9FAFB", paddingTop: "80px", paddingBottom: "80px" }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <div className="inline-block mb-4 px-4 py-1 text-xs font-bold tracking-widest rounded-full" style={{ backgroundColor: "rgba(45,212,191,0.12)", color: "#0D9488" }}>OUR ECOSYSTEM</div>
            <h2 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 700, color: "#111827" }}>Best-in-Class Partners.</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {partners.map((partner, i) => (
              <motion.div key={partner.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(45,212,191,0.12)" }} style={{ backgroundColor: "#FFFFFF", borderRadius: "16px", padding: "32px", border: "1px solid #E5E7EB" }}>
                <div className="flex items-start gap-4">
                  <div style={{ width: 48, height: 48, borderRadius: "12px", backgroundColor: "rgba(45,212,191,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <partner.icon size={22} style={{ color: "#0D9488" }} />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.65rem", fontWeight: 700, color: "#0D9488", letterSpacing: "0.1em", marginBottom: "4px" }}>{partner.role.toUpperCase()}</div>
                    <h3 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.1rem", fontWeight: 700, color: "#111827", marginBottom: "10px" }}>{partner.name}</h3>
                    <p style={{ fontSize: "0.875rem", color: "#6B7280", lineHeight: 1.65 }}>{partner.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ backgroundColor: "#FFFFFF", paddingTop: "80px", paddingBottom: "80px" }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 700, color: "#111827" }}>The SafeServ Promise.</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { word: "Reliable", desc: "We deliver what we promise, when we promise it. No excuses, no delays." },
              { word: "Secure", desc: "Your data, your systems, and your business are protected at every level." },
              { word: "Connected", desc: "One point of contact for every technology need. Always available, always responsive." },
            ].map((val, i) => (
              <motion.div key={val.word} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} style={{ backgroundColor: "#F9FAFB", borderRadius: "16px", padding: "40px 32px", border: "1px solid #E5E7EB" }}>
                <div style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.6rem", fontWeight: 800, color: "#0D9488", marginBottom: "12px" }}>{val.word}</div>
                <p style={{ fontSize: "0.875rem", color: "#6B7280", lineHeight: 1.65 }}>{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "linear-gradient(135deg, #0D9488 0%, #0F766E 100%)", paddingTop: "72px", paddingBottom: "72px" }}>
        <div className="container text-center">
          <h2 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 700, color: "#FFFFFF", marginBottom: "16px" }}>Ready to work with SafeServ?</h2>
          <p style={{ color: "rgba(255,255,255,0.85)", maxWidth: "440px", margin: "0 auto 32px" }}>No lock-in contracts. No hidden fees. Just technology that works for your business.</p>
          <Link href="/contact">
            <motion.button whileHover={{ scale: 1.05, boxShadow: "0 8px 30px rgba(0,0,0,0.2)" }} whileTap={{ scale: 0.97 }} className="flex items-center gap-2 font-semibold mx-auto" style={{ backgroundColor: "#FFFFFF", color: "#0D9488", padding: "15px 36px", borderRadius: "8px", fontSize: "1rem", fontFamily: "Space Grotesk, sans-serif", border: "none", cursor: "pointer" }}>
              Get in Touch <ArrowRight size={16} />
            </motion.button>
          </Link>
        </div>
      </section>
    </div>
  );
}
