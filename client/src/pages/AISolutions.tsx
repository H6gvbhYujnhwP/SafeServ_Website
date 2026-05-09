import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Brain, Mic, Users, CheckCircle, Bot, BarChart3, Mail } from "lucide-react";

const aiTools = [
  { icon: Mic, title: "SafeServ Translate+", desc: "Live call transcription with speaker identification, sentiment analysis, and searchable archives.", tag: "EXCLUSIVE" },
  { icon: Bot, title: "AI Voice Receptionist", desc: "A 24/7 AI receptionist that answers calls, qualifies leads, and books appointments.", tag: "24/7" },
  { icon: Mail, title: "Email & Marketing Automation", desc: "Automated email sequences, follow-ups, and marketing campaigns. £30-40 return per £1 spent.", tag: "ROI: 30-40x" },
  { icon: Users, title: "AI Business Workforce", desc: "A complete team of AI agents handling customer service, data analysis, and admin.", tag: "THEGREENAGENTS" },
  { icon: BarChart3, title: "Data & Analytics Agents", desc: "AI agents that monitor your business data, generate reports, and surface actionable insights.", tag: "INTELLIGENCE" },
  { icon: Brain, title: "Custom AI Workflows", desc: "Bespoke AI automations built around your specific business processes and goals.", tag: "BESPOKE" },
];

export default function AISolutions() {
  return (
    <div style={{ backgroundColor: "#FFFFFF", minHeight: "100vh" }}>
      {/* Hero */}
      <section style={{ position: "relative", paddingTop: "100px", paddingBottom: "80px", background: "linear-gradient(135deg, #F0FDFB 0%, #E6FFFA 50%, #F0FDF4 100%)", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -100, right: -100, width: 500, height: 500, borderRadius: "50%", background: "rgba(45,212,191,0.07)", pointerEvents: "none" }} />
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 mb-5" style={{ background: "rgba(45,212,191,0.12)", border: "1px solid rgba(45,212,191,0.3)", borderRadius: "100px", padding: "6px 16px", color: "#0D9488", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em" }}>
              <Brain size={12} /> AI SOLUTIONS
            </div>
            <h1 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800, color: "#111827", lineHeight: 1.1, marginBottom: "20px" }}>
              AI That Works<br /><span style={{ color: "#0D9488" }}>For Your Business.</span>
            </h1>
            <p style={{ fontSize: "1.05rem", color: "#4B5563", lineHeight: 1.75, maxWidth: "520px", marginBottom: "32px" }}>
              Two powerful AI platforms — <strong style={{ color: "#0D9488" }}>SafeServ Translate+</strong> for live call transcription and <strong style={{ color: "#0D9488" }}>TheGreenAgents</strong> for AI workforce tools. Practical AI that delivers real results.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <motion.button whileHover={{ scale: 1.05, boxShadow: "0 8px 30px rgba(45,212,191,0.45)" }} whileTap={{ scale: 0.97 }} className="flex items-center gap-2 font-semibold" style={{ backgroundColor: "#2DD4BF", color: "#0D2A25", padding: "14px 28px", borderRadius: "8px", fontSize: "0.95rem", fontFamily: "Space Grotesk, sans-serif", border: "none", cursor: "pointer" }}>
                  Explore AI Solutions <ArrowRight size={15} />
                </motion.button>
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 mt-8">
              {["Live Transcription", "AI Workforce", "Email Automation", "Custom Workflows"].map((badge) => (
                <div key={badge} className="flex items-center gap-2" style={{ fontSize: "0.8rem", color: "#6B7280" }}>
                  <CheckCircle size={14} style={{ color: "#2DD4BF" }} />{badge}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Translate+ Feature */}
      <section style={{ backgroundColor: "#F9FAFB", paddingTop: "80px", paddingBottom: "80px" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="inline-flex items-center gap-2 mb-5" style={{ background: "rgba(45,212,191,0.12)", border: "1px solid rgba(45,212,191,0.3)", borderRadius: "100px", padding: "6px 16px", color: "#0D9488", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em" }}>
                <Mic size={12} /> SAFESERV TRANSLATE+
              </div>
              <h2 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 700, color: "#111827", lineHeight: 1.2, marginBottom: "16px" }}>
                Live Call <span style={{ color: "#0D9488" }}>Transcription.</span>
              </h2>
              <p style={{ color: "#4B5563", lineHeight: 1.75, marginBottom: "24px" }}>
                Every call transcribed in real time. Compliance, training, and customer insight all in one AI-powered platform that integrates directly with your SafeServ phone system.
              </p>
              {["Real-time transcription during live calls", "Automatic call summaries and action points", "Compliance-ready call archiving", "Sentiment analysis and keyword flagging", "Integrates with your existing phone system", "Multi-language support — GDPR compliant"].map((item, i) => (
                <div key={i} className="flex items-start gap-3 mb-3" style={{ fontSize: "0.88rem", color: "#374151" }}>
                  <CheckCircle size={15} style={{ color: "#2DD4BF", flexShrink: 0, marginTop: 2 }} />{item}
                </div>
              ))}
              <Link href="/contact">
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="flex items-center gap-2 font-semibold mt-6" style={{ backgroundColor: "#2DD4BF", color: "#0D2A25", padding: "14px 28px", borderRadius: "8px", fontSize: "0.95rem", fontFamily: "Space Grotesk, sans-serif", border: "none", cursor: "pointer" }}>
                  Get Translate+ <ArrowRight size={15} />
                </motion.button>
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <div style={{ backgroundColor: "#FFFFFF", borderRadius: "20px", padding: "28px", border: "1px solid #E5E7EB", boxShadow: "0 16px 48px rgba(45,212,191,0.1)" }}>
                <div className="flex items-center gap-3 mb-5">
                  <div style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "#EF4444" }} />
                  <div style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "#2DD4BF" }} />
                  <div style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "#10B981" }} />
                  <span style={{ fontSize: "0.75rem", color: "#9CA3AF", marginLeft: "8px" }}>SafeServ Translate+ Live</span>
                  <motion.div animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1.5, repeat: Infinity }} style={{ marginLeft: "auto", width: 8, height: 8, borderRadius: "50%", backgroundColor: "#10B981" }} />
                </div>
                {[
                  { speaker: "AGENT", text: "Good morning, thanks for calling SafeServ. How can I help?" },
                  { speaker: "CUSTOMER", text: "Hi, I'd like to know more about your VoIP packages." },
                  { speaker: "AGENT", text: "Of course! We have three options — the D44, E50, and F60..." },
                  { speaker: "AI SUMMARY", text: "Customer interested in VoIP. Recommended: D44 or E50.", ai: true },
                ].map((line, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} style={{ marginBottom: "14px" }}>
                    <div style={{ fontSize: "0.65rem", fontWeight: 700, color: line.ai ? "#0D9488" : "#9CA3AF", letterSpacing: "0.08em", marginBottom: "4px" }}>{line.speaker}</div>
                    <div style={{ fontSize: "0.82rem", color: "#374151", backgroundColor: line.ai ? "rgba(45,212,191,0.08)" : "#F9FAFB", padding: "10px 14px", borderRadius: "10px", border: line.ai ? "1px solid rgba(45,212,191,0.25)" : "1px solid #E5E7EB" }}>{line.text}</div>
                  </motion.div>
                ))}
                <div style={{ marginTop: "16px", paddingTop: "16px", borderTop: "1px solid #E5E7EB", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "0.75rem", color: "#9CA3AF" }}>Overall Sentiment</span>
                  <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#0D9488", backgroundColor: "rgba(45,212,191,0.1)", padding: "3px 10px", borderRadius: "100px" }}>POSITIVE — 94%</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Tools Grid */}
      <section style={{ backgroundColor: "#FFFFFF", paddingTop: "80px", paddingBottom: "80px" }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <div className="inline-block mb-4 px-4 py-1 text-xs font-bold tracking-widest rounded-full" style={{ backgroundColor: "rgba(45,212,191,0.12)", color: "#0D9488" }}>IN PARTNERSHIP WITH THEGREENAGENTS</div>
            <h2 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 700, color: "#111827" }}>Your Complete AI Workforce.</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiTools.map((tool, i) => (
              <motion.div key={tool.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} whileHover={{ y: -5, boxShadow: "0 12px 32px rgba(45,212,191,0.15)" }} style={{ backgroundColor: "#F9FAFB", borderRadius: "16px", padding: "32px", border: "1px solid #E5E7EB" }}>
                <div className="flex items-start justify-between mb-4">
                  <div style={{ width: 48, height: 48, borderRadius: "12px", backgroundColor: "rgba(45,212,191,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <tool.icon size={22} style={{ color: "#0D9488" }} />
                  </div>
                  <span style={{ fontSize: "0.6rem", fontWeight: 700, color: "#0D9488", backgroundColor: "rgba(45,212,191,0.1)", padding: "3px 10px", borderRadius: "100px" }}>{tool.tag}</span>
                </div>
                <h3 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.05rem", fontWeight: 700, color: "#111827", marginBottom: "10px" }}>{tool.title}</h3>
                <p style={{ fontSize: "0.875rem", color: "#6B7280", lineHeight: 1.65 }}>{tool.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ backgroundColor: "#F9FAFB", paddingTop: "60px", paddingBottom: "60px" }}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { value: "£30-40", label: "Return per £1 on email automation" },
              { value: "10+ hrs", label: "Saved per week per business" },
              { value: "80%", label: "Increase in lead consistency" },
            ].map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} style={{ backgroundColor: "#FFFFFF", borderRadius: "16px", padding: "36px", border: "1px solid #E5E7EB" }}>
                <div style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "2.5rem", fontWeight: 800, color: "#0D9488", marginBottom: "8px" }}>{stat.value}</div>
                <p style={{ fontSize: "0.875rem", color: "#6B7280" }}>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "linear-gradient(135deg, #0D9488 0%, #0F766E 100%)", paddingTop: "72px", paddingBottom: "72px" }}>
        <div className="container text-center">
          <h2 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 700, color: "#FFFFFF", marginBottom: "16px" }}>Ready to put AI to work?</h2>
          <p style={{ color: "rgba(255,255,255,0.85)", maxWidth: "440px", margin: "0 auto 32px" }}>Book a free AI consultation. We'll show you exactly how these tools can save your team time and grow your business.</p>
          <Link href="/contact">
            <motion.button whileHover={{ scale: 1.05, boxShadow: "0 8px 30px rgba(0,0,0,0.2)" }} whileTap={{ scale: 0.97 }} className="flex items-center gap-2 font-semibold mx-auto" style={{ backgroundColor: "#FFFFFF", color: "#0D9488", padding: "15px 36px", borderRadius: "8px", fontSize: "1rem", fontFamily: "Space Grotesk, sans-serif", border: "none", cursor: "pointer" }}>
              Book AI Consultation <ArrowRight size={16} />
            </motion.button>
          </Link>
        </div>
      </section>
    </div>
  );
}
