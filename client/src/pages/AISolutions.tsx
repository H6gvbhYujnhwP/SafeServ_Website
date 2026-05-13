import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Brain, Mic, Users, CheckCircle, Bot, BarChart3, Mail, Smartphone, Workflow, Clock, TrendingUp, Layers, Zap, RotateCcw, Code2 } from "lucide-react";

function AIGraphic() {
  const neurons = [
    { id: 0, x: 60, y: 100, layer: 0 }, { id: 1, x: 60, y: 180, layer: 0 },
    { id: 2, x: 60, y: 260, layer: 0 }, { id: 3, x: 60, y: 340, layer: 0 },
    { id: 4, x: 170, y: 130, layer: 1 }, { id: 5, x: 170, y: 215, layer: 1 },
    { id: 6, x: 170, y: 300, layer: 1 },
    { id: 7, x: 280, y: 150, layer: 2 }, { id: 8, x: 280, y: 240, layer: 2 },
    { id: 9, x: 280, y: 330, layer: 2 },
    { id: 10, x: 390, y: 170, layer: 3 }, { id: 11, x: 390, y: 260, layer: 3 },
  ];
  const connections = [
    [0,4],[0,5],[1,4],[1,5],[1,6],[2,5],[2,6],[3,6],
    [4,7],[4,8],[5,7],[5,8],[5,9],[6,8],[6,9],
    [7,10],[7,11],[8,10],[8,11],[9,11],
  ];
  const labels = ["Translate+", "AI Voice", "Email AI", "Workforce", "", "", "", "", "", "", "Insights", "Actions"];
  return (
    <div style={{ width: "100%", height: "420px" }}>
      <svg viewBox="0 0 450 420" style={{ width: "100%", height: "100%" }} xmlns="http://www.w3.org/2000/svg">
        {connections.map(([a, b], i) => (
          <motion.line key={i} x1={neurons[a].x} y1={neurons[a].y} x2={neurons[b].x} y2={neurons[b].y}
            stroke="#2DD4BF" strokeWidth="1" strokeOpacity="0.35"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, delay: i * 0.04 }}
          />
        ))}
        {connections.slice(0, 8).map(([a, b], i) => (
          <motion.circle key={`fire-${i}`} r={4} fill="#2DD4BF"
            animate={{ cx: [neurons[a].x, neurons[b].x, neurons[a].x], cy: [neurons[a].y, neurons[b].y, neurons[a].y], opacity: [0, 1, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.35, ease: "easeInOut" }}
          />
        ))}
        {neurons.map((n, i) => (
          <g key={`n-${i}`}>
            <motion.circle cx={n.x} cy={n.y} r={n.layer === 0 || n.layer === 3 ? 20 : 16}
              fill={n.layer === 0 || n.layer === 3 ? "#2DD4BF" : "rgba(45,212,191,0.15)"}
              stroke="#2DD4BF" strokeWidth="1.5"
              initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
            />
            {labels[i] && (
              <motion.text x={n.x} y={n.y + 4} textAnchor="middle"
                fill={n.layer === 0 || n.layer === 3 ? "#0D2A25" : "#0D9488"}
                fontSize="7" fontWeight="700" fontFamily="Space Grotesk, sans-serif"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 + i * 0.08 }}
              >{labels[i]}</motion.text>
            )}
          </g>
        ))}
        {[{x:60,t:"INPUT"},{x:170,t:"PROCESS"},{x:280,t:"LEARN"},{x:390,t:"OUTPUT"}].map((l,i)=>(
          <text key={i} x={l.x} y={390} textAnchor="middle" fill="#9CA3AF" fontSize="8" fontWeight="600" fontFamily="Space Grotesk, sans-serif">{l.t}</text>
        ))}
      </svg>
    </div>
  );
}

// Animated SVG mini-graphics for card backs
function TranslateSVG() {
  return (
    <svg viewBox="0 0 80 40" width="72" height="36">
      {[0,1,2,3].map((i) => (
        <motion.rect key={i} x={6 + i * 18} y={8} width={12} rx={3} fill="#2DD4BF" fillOpacity={0.4 + i * 0.15}
          animate={{ height: [10 + i * 4, 28 - i * 2, 10 + i * 4], y: [22 - i * 2, 12 + i, 22 - i * 2] }}
          transition={{ duration: 1.3, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
        />
      ))}
      <motion.line x1="4" y1="36" x2="76" y2="36" stroke="rgba(45,212,191,0.4)" strokeWidth="1"
        animate={{ scaleX: [1, 1.02, 1] }} transition={{ duration: 2, repeat: Infinity }} />
    </svg>
  );
}
function VoiceSVG() {
  return (
    <svg viewBox="0 0 80 40" width="72" height="36">
      <motion.circle cx={40} cy={20} r={14} fill="none" stroke="#2DD4BF" strokeWidth="1.5"
        animate={{ r: [14, 18, 14], opacity: [1, 0.4, 1] }} transition={{ duration: 1.8, repeat: Infinity }} />
      <motion.circle cx={40} cy={20} r={7} fill="#2DD4BF"
        animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.2, repeat: Infinity }} />
      {[0,1,2].map((i) => (
        <motion.line key={i} x1={40} y1={20} x2={40 + Math.cos((i * 120 * Math.PI) / 180) * 24} y2={20 + Math.sin((i * 120 * Math.PI) / 180) * 24}
          stroke="#2DD4BF" strokeWidth="1.2" strokeDasharray="3 3"
          animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.3 }} />
      ))}
    </svg>
  );
}
function EmailSVG() {
  return (
    <svg viewBox="0 0 80 40" width="72" height="36">
      {[0,1,2].map((i) => (
        <motion.rect key={i} x={8} y={6 + i * 11} width={50} height={8} rx={4}
          fill="rgba(45,212,191,0.15)" stroke="#2DD4BF" strokeWidth="1"
          animate={{ x: [8, 14, 8], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.3 }} />
      ))}
      <motion.circle cx={68} cy={20} r={8} fill="#0D9488"
        animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 1.4, repeat: Infinity }} />
      <text x={68} y={24} textAnchor="middle" fill="#fff" fontSize="8" fontWeight="700">£</text>
    </svg>
  );
}
function WorkforceSVG() {
  return (
    <svg viewBox="0 0 80 40" width="72" height="36">
      {[15, 40, 65].map((x, i) => (
        <g key={i}>
          <motion.circle cx={x} cy={14} r={7} fill="#2DD4BF" fillOpacity={0.3 + i * 0.2}
            stroke="#2DD4BF" strokeWidth="1.2"
            animate={{ y: [0, -3, 0] }} transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.25 }} />
          <motion.rect x={x - 10} y={24} width={20} height={10} rx={5}
            fill="rgba(45,212,191,0.2)" stroke="#2DD4BF" strokeWidth="1"
            animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.3 }} />
        </g>
      ))}
    </svg>
  );
}
function AnalyticsSVG() {
  return (
    <svg viewBox="0 0 80 40" width="72" height="36">
      <motion.polyline points="5,35 20,22 35,28 50,12 65,18 75,8"
        fill="none" stroke="#2DD4BF" strokeWidth="2" strokeLinecap="round"
        animate={{ pathLength: [0, 1, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }} />
      {[5,20,35,50,65,75].map((x, i) => (
        <motion.circle key={i} cx={x} cy={[35,22,28,12,18,8][i]} r={3} fill="#0D9488"
          animate={{ scale: [1, 1.4, 1] }} transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }} />
      ))}
    </svg>
  );
}
function WorkflowSVG() {
  return (
    <svg viewBox="0 0 80 40" width="72" height="36">
      {[10, 35, 60].map((x, i) => (
        <motion.rect key={i} x={x} y={12} width={18} height={16} rx={4}
          fill="rgba(45,212,191,0.2)" stroke="#2DD4BF" strokeWidth="1.5"
          animate={{ scale: [1, 1.08, 1] }} transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.3 }} />
      ))}
      {[28, 53].map((x, i) => (
        <motion.line key={i} x1={x} y1={20} x2={x + 7} y2={20}
          stroke="#2DD4BF" strokeWidth="1.5" markerEnd="url(#arr)"
          animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.4 }} />
      ))}
    </svg>
  );
}

interface AITool {
  icon: React.ElementType;
  title: string;
  desc: string;
  tag: string;
  gradient: string;
  image: string;
  backTitle: string;
  backDesc: string;
  features: string[];
  BackSVG: React.ElementType;
}

const aiTools: AITool[] = [
  {
    icon: Mic,
    title: "SafeServ Translate+",
    desc: "Live call transcription with speaker identification, sentiment analysis, and searchable archives.",
    tag: "EXCLUSIVE",
    gradient: "linear-gradient(135deg, #0D9488 0%, #2DD4BF 100%)",
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=600&q=80",
    backTitle: "SafeServ Translate+",
    backDesc: "Every call transcribed in real time. Compliance-ready, searchable, and integrated directly with your SafeServ phone system.",
    features: ["Real-time transcription during live calls", "Automatic summaries & action points", "Sentiment analysis & keyword flagging", "Compliance-ready call archiving", "Multi-language & GDPR compliant"],
    BackSVG: TranslateSVG,
  },
  {
    icon: Bot,
    title: "AI Voice Receptionist",
    desc: "A 24/7 AI receptionist that answers calls, qualifies leads, and books appointments.",
    tag: "24/7",
    gradient: "linear-gradient(135deg, #0F766E 0%, #14B8A6 100%)",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&q=80",
    backTitle: "AI Voice Receptionist",
    backDesc: "Never miss a call again. Your AI receptionist handles inbound calls around the clock — qualifying, routing, and booking without human intervention.",
    features: ["Answers & qualifies every inbound call", "Books appointments into your calendar", "Handles FAQs & objections naturally", "Escalates complex queries to humans", "Integrates with CRM & scheduling tools"],
    BackSVG: VoiceSVG,
  },
  {
    icon: Mail,
    title: "Email & Marketing Automation",
    desc: "Automated email sequences, follow-ups, and marketing campaigns. £30-40 return per £1 spent.",
    tag: "ROI: 30-40x",
    gradient: "linear-gradient(135deg, #0D9488 0%, #06B6D4 100%)",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600&q=80",
    backTitle: "Email & Marketing Automation",
    backDesc: "Automated sequences that nurture leads, re-engage dormant customers, and drive repeat business — all running 24/7 without lifting a finger.",
    features: ["Drip sequences & lead nurturing", "Behavioural trigger campaigns", "A/B testing & performance analytics", "CRM-integrated contact scoring", "£30-40 return per £1 spent"],
    BackSVG: EmailSVG,
  },
  {
    icon: Users,
    title: "AI Business Workforce",
    desc: "A complete team of AI agents handling customer service, data analysis, and admin.",
    tag: "AI WORKFORCE",
    gradient: "linear-gradient(135deg, #115E59 0%, #0D9488 100%)",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80",
    backTitle: "AI Business Workforce",
    backDesc: "Deploy a full AI workforce from SafeServ — agents that handle customer service, social media, admin, and data, working in parallel around the clock.",
    features: ["Customer service & live chat agents", "Social media management agents", "Admin & scheduling automation", "Data entry & CRM population", "Scales instantly — no hiring needed"],
    BackSVG: WorkforceSVG,
  },
  {
    icon: BarChart3,
    title: "Data & Analytics Agents",
    desc: "AI agents that monitor your business data, generate reports, and surface actionable insights.",
    tag: "INTELLIGENCE",
    gradient: "linear-gradient(135deg, #0F766E 0%, #14B8A6 100%)",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    backTitle: "Data & Analytics Agents",
    backDesc: "Stop guessing. AI agents continuously monitor your KPIs, surface anomalies, and deliver plain-English reports to your inbox every morning.",
    features: ["Real-time KPI monitoring & alerts", "Automated daily/weekly reports", "Anomaly detection & trend analysis", "Connects to your existing data sources", "Plain-English insight summaries"],
    BackSVG: AnalyticsSVG,
  },
  {
    icon: Brain,
    title: "Custom AI Workflows",
    desc: "Bespoke AI automations built around your specific business processes and goals.",
    tag: "BESPOKE",
    gradient: "linear-gradient(135deg, #1E3A5F 0%, #0D9488 100%)",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80",
    backTitle: "Custom AI Workflows",
    backDesc: "Every business is different. We map your exact processes and build AI automations that slot in seamlessly — eliminating bottlenecks and manual effort.",
    features: ["Process mapping & workflow audit", "Multi-system integration (CRM, ERP, etc.)", "Approval chains & escalation logic", "Human-in-the-loop checkpoints", "Ongoing optimisation & support"],
    BackSVG: WorkflowSVG,
  },
];

// 3D Flip Card
function AIFlipCard({ tool, index, flipped, onFlip }: { tool: AITool; index: number; flipped: boolean; onFlip: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      style={{ perspective: "1000px", height: "320px", cursor: "pointer" }}
      onClick={onFlip}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
        style={{ position: "relative", width: "100%", height: "100%", transformStyle: "preserve-3d" }}
      >
        {/* FRONT */}
        <div style={{
          position: "absolute", inset: 0,
          backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden",
          backgroundColor: "#F9FAFB", borderRadius: "20px", overflow: "hidden",
          border: "1px solid #E5E7EB", boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
        }}>
          {/* Gradient header band */}
          <div style={{ height: "6px", background: tool.gradient }} />
          <div style={{ padding: "24px 26px 20px" }}>
            <div className="flex items-start justify-between mb-5">
              <div style={{ width: 52, height: 52, borderRadius: "14px", background: tool.gradient, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 14px rgba(13,148,136,0.25)" }}>
                <tool.icon size={24} style={{ color: "#FFFFFF" }} />
              </div>
              <span style={{ fontSize: "0.6rem", fontWeight: 700, color: "#0D9488", backgroundColor: "rgba(45,212,191,0.12)", padding: "3px 10px", borderRadius: "100px", letterSpacing: "0.08em" }}>{tool.tag}</span>
            </div>
            <h3 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.05rem", fontWeight: 700, color: "#111827", marginBottom: "10px" }}>{tool.title}</h3>
            <p style={{ fontSize: "0.85rem", color: "#6B7280", lineHeight: 1.65 }}>{tool.desc}</p>
          </div>
          <div style={{ position: "absolute", bottom: "14px", right: "18px", display: "flex", alignItems: "center", gap: "4px", fontSize: "0.6rem", fontWeight: 600, color: "#9CA3AF", letterSpacing: "0.06em" }}>
            <RotateCcw size={10} /> TAP TO EXPLORE
          </div>
        </div>

        {/* BACK */}
        <div style={{
          position: "absolute", inset: 0,
          backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden",
          transform: "rotateY(180deg)",
          borderRadius: "20px", overflow: "hidden",
          background: "linear-gradient(160deg, #0D9488 0%, #0F766E 55%, #134E4A 100%)",
          display: "flex", flexDirection: "column", padding: "22px 24px",
        }}>
          <div className="flex items-center justify-between mb-3">
            <div style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "0.92rem", fontWeight: 700, color: "#FFFFFF" }}>{tool.backTitle}</div>
            <tool.BackSVG />
          </div>
          <p style={{ fontSize: "0.76rem", color: "rgba(255,255,255,0.82)", lineHeight: 1.6, marginBottom: "12px" }}>{tool.backDesc}</p>
          <div style={{ flex: 1 }}>
            {tool.features.map((f) => (
              <div key={f} className="flex items-center gap-2 mb-2">
                <div style={{ width: 15, height: 15, borderRadius: "50%", backgroundColor: "rgba(45,212,191,0.25)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <CheckCircle size={9} style={{ color: "#2DD4BF" }} />
                </div>
                <span style={{ fontSize: "0.76rem", color: "rgba(255,255,255,0.9)", fontWeight: 500 }}>{f}</span>
              </div>
            ))}
          </div>
          <Link href="/contact">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              onClick={(e) => e.stopPropagation()}
              className="flex items-center justify-center gap-2 font-semibold mt-3"
              style={{ backgroundColor: "#2DD4BF", color: "#0D2A25", padding: "9px 16px", borderRadius: "8px", fontSize: "0.78rem", fontFamily: "Space Grotesk, sans-serif", cursor: "pointer", textAlign: "center" }}
            >
              Get Started <ArrowRight size={12} />
            </motion.div>
          </Link>
          <div style={{ textAlign: "center", marginTop: "7px", fontSize: "0.58rem", color: "rgba(255,255,255,0.35)", letterSpacing: "0.06em" }}>TAP TO FLIP BACK</div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// App Dev animated graphic
function AppDevGraphic() {
  const steps = [
    { label: "Your Process", x: 60, y: 200 },
    { label: "Map & Design", x: 180, y: 120 },
    { label: "Build & Integrate", x: 300, y: 200 },
    { label: "Deploy & Train", x: 420, y: 120 },
    { label: "Live App", x: 540, y: 200 },
  ];
  return (
    <div style={{ width: "100%", height: "280px" }}>
      <svg viewBox="0 0 600 280" style={{ width: "100%", height: "100%" }}>
        {steps.slice(0, -1).map((s, i) => (
          <motion.line key={i} x1={s.x} y1={s.y} x2={steps[i + 1].x} y2={steps[i + 1].y}
            stroke="#2DD4BF" strokeWidth="2" strokeDasharray="6 4"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 0.3 + i * 0.3 }}
          />
        ))}
        {/* Travelling pulse */}
        {steps.slice(0, -1).map((s, i) => (
          <motion.circle key={`p-${i}`} r={5} fill="#2DD4BF"
            animate={{ cx: [s.x, steps[i+1].x, s.x], cy: [s.y, steps[i+1].y, s.y] }}
            transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.6, ease: "easeInOut" }}
          />
        ))}
        {steps.map((s, i) => (
          <g key={`step-${i}`}>
            <motion.circle cx={s.x} cy={s.y} r={28}
              fill={i === 4 ? "#2DD4BF" : "rgba(45,212,191,0.12)"}
              stroke="#2DD4BF" strokeWidth="2"
              initial={{ scale: 0 }} animate={{ scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.3 }}
            />
            <motion.text x={s.x} y={s.y + 4} textAnchor="middle"
              fill={i === 4 ? "#0D2A25" : "#0D9488"} fontSize="7" fontWeight="700" fontFamily="Space Grotesk, sans-serif"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 + i * 0.3 }}
            >{s.label.split(" ").map((w, wi) => (
              <tspan key={wi} x={s.x} dy={wi === 0 ? (s.label.split(" ").length > 1 ? "-5" : "0") : "12"}>{w}</tspan>
            ))}</motion.text>
            <motion.text x={s.x} y={s.y + 52} textAnchor="middle"
              fill="#9CA3AF" fontSize="9" fontWeight="600" fontFamily="Space Grotesk, sans-serif"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 + i * 0.3 }}
            >STEP {i + 1}</motion.text>
          </g>
        ))}
        {/* Decorative rings on the live app node */}
        {[38, 52].map((r, i) => (
          <motion.circle key={`ring-${i}`} cx={540} cy={200} r={r}
            fill="none" stroke="#2DD4BF" strokeWidth="1"
            animate={{ opacity: [0.6, 0, 0.6], r: [r, r + 10, r] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.7 }}
          />
        ))}
      </svg>
    </div>
  );
}

export default function AISolutions() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <div style={{ backgroundColor: "#FFFFFF", minHeight: "100vh" }}>
      {/* Hero */}
      <section style={{ position: "relative", paddingTop: "100px", paddingBottom: "80px", background: "linear-gradient(135deg, #F0FDFB 0%, #E6FFFA 50%, #F0FDF4 100%)", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -100, right: -100, width: 500, height: 500, borderRadius: "50%", background: "rgba(45,212,191,0.07)", pointerEvents: "none" }} />
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="inline-flex items-center gap-2 mb-5" style={{ background: "rgba(45,212,191,0.12)", border: "1px solid rgba(45,212,191,0.3)", borderRadius: "100px", padding: "6px 16px", color: "#0D9488", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em" }}>
                <Brain size={12} /> AI SOLUTIONS
              </div>
              <h1 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800, color: "#111827", lineHeight: 1.1, marginBottom: "20px" }}>
                AI That Works<br /><span style={{ color: "#0D9488" }}>For Your Business.</span>
              </h1>
              <p style={{ fontSize: "1.05rem", color: "#4B5563", lineHeight: 1.75, maxWidth: "520px", marginBottom: "32px" }}>
                Two powerful AI platforms — <strong style={{ color: "#0D9488" }}>SafeServ Translate+</strong> for live call transcription and <strong style={{ color: "#0D9488" }}>SafeServ AI Workforce</strong> for intelligent business automation. Practical AI that delivers real results.
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
            <motion.div initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.0, delay: 0.4 }} className="hidden lg:flex justify-center items-center">
              <AIGraphic />
            </motion.div>
          </div>
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

      {/* AI Tools Grid — 3D Flip Cards */}
      <section style={{ backgroundColor: "#FFFFFF", paddingTop: "80px", paddingBottom: "80px" }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <div className="inline-block mb-4 px-4 py-1 text-xs font-bold tracking-widest rounded-full" style={{ backgroundColor: "rgba(45,212,191,0.12)", color: "#0D9488" }}>AI SOLUTIONS BY SAFESERV</div>
            <h2 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 700, color: "#111827", marginBottom: "12px" }}>Your Complete AI Workforce.</h2>
            <p style={{ color: "#6B7280", maxWidth: "500px", margin: "0 auto", fontSize: "1rem", lineHeight: 1.7 }}>Tap any card to explore what each AI tool does for your business.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiTools.map((tool, i) => (
              <AIFlipCard
                key={tool.title}
                tool={tool}
                index={i}
                flipped={activeCard === i}
                onFlip={() => setActiveCard(activeCard === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Bespoke App Development */}
      <section style={{ backgroundColor: "#F9FAFB", paddingTop: "96px", paddingBottom: "96px", position: "relative", overflow: "hidden" }}>
        {/* Background decorative circles */}
        <div style={{ position: "absolute", top: -120, right: -120, width: 480, height: 480, borderRadius: "50%", background: "rgba(45,212,191,0.05)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -80, left: -80, width: 320, height: 320, borderRadius: "50%", background: "rgba(13,148,136,0.06)", pointerEvents: "none" }} />
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          {/* Section header */}
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-5" style={{ background: "rgba(45,212,191,0.12)", border: "1px solid rgba(45,212,191,0.3)", borderRadius: "100px", padding: "6px 18px", color: "#0D9488", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em" }}>
              <Code2 size={12} /> BESPOKE APP DEVELOPMENT
            </div>
            <h2 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 800, color: "#111827", lineHeight: 1.15, marginBottom: "20px" }}>
              Your Business. Your App.<br /><span style={{ color: "#0D9488" }}>Your Time Back.</span>
            </h2>
            <p style={{ color: "#4B5563", maxWidth: "600px", margin: "0 auto", fontSize: "1.05rem", lineHeight: 1.8 }}>
              Stop wrestling with off-the-shelf software that almost fits. SafeServ builds bespoke business applications that mirror your exact workflows — eliminating manual effort, reducing human error, and returning hours to your team every single day.
            </p>
          </motion.div>

          {/* Graphic + intro */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <AppDevGraphic />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
              <h3 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 700, color: "#111827", marginBottom: "16px", lineHeight: 1.3 }}>
                From spreadsheet chaos to<br /><span style={{ color: "#0D9488" }}>intelligent automation.</span>
              </h3>
              <p style={{ color: "#4B5563", lineHeight: 1.8, marginBottom: "20px" }}>
                Most businesses are running on a patchwork of spreadsheets, WhatsApp threads, and disconnected software. Every manual handoff is a delay. Every re-keyed data entry is a potential error. Every process that lives in someone's head is a liability.
              </p>
              <p style={{ color: "#4B5563", lineHeight: 1.8, marginBottom: "28px" }}>
                We map your exact business flows — from lead intake to invoicing, from job scheduling to compliance reporting — and build a single, unified application that does it all automatically. Your team stops doing admin. They start doing the work that actually matters.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Clock, stat: "12+ hrs", label: "Reclaimed per employee per week" },
                  { icon: TrendingUp, stat: "94%", label: "Reduction in manual data entry errors" },
                  { icon: Zap, stat: "3x", label: "Faster process cycle times on average" },
                  { icon: Layers, stat: "100%", label: "Built around your exact business logic" },
                ].map((item, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                    style={{ backgroundColor: "#FFFFFF", borderRadius: "14px", padding: "18px", border: "1px solid #E5E7EB" }}>
                    <div className="flex items-center gap-2 mb-2">
                      <item.icon size={16} style={{ color: "#0D9488" }} />
                      <span style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.4rem", fontWeight: 800, color: "#0D9488" }}>{item.stat}</span>
                    </div>
                    <p style={{ fontSize: "0.78rem", color: "#6B7280", lineHeight: 1.5 }}>{item.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Feature pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Workflow,
                title: "Process Digitisation",
                desc: "We translate your paper-based, spreadsheet-driven, or verbal processes into structured digital workflows. Every step tracked, every handoff automated, every bottleneck eliminated.",
                bullets: ["End-to-end workflow mapping", "Multi-stage approval chains", "Automated task assignment", "Real-time status visibility"],
              },
              {
                icon: Smartphone,
                title: "Mobile-First Business Apps",
                desc: "Field teams, remote workers, and on-the-go managers get purpose-built mobile apps that connect directly to your back-office systems — no more phoning in updates or carrying clipboards.",
                bullets: ["iOS & Android compatible", "Offline-capable for remote sites", "GPS tracking & time stamping", "Photo capture & digital sign-off"],
              },
              {
                icon: Brain,
                title: "AI-Augmented Automation",
                desc: "We embed AI decision-making directly into your app flows — so routine decisions happen automatically, exceptions are flagged intelligently, and your team only intervenes when it genuinely matters.",
                bullets: ["Intelligent routing & triage", "Predictive workload balancing", "Anomaly detection & alerts", "Natural language data entry"],
              },
              {
                icon: Layers,
                title: "System Integration & API Mesh",
                desc: "Your new app doesn't live in isolation. We connect it to your CRM, accounting software, comms tools, and third-party APIs — creating a single source of truth across your entire operation.",
                bullets: ["CRM, ERP & accounting connectors", "REST & webhook integrations", "Real-time data synchronisation", "Legacy system bridging"],
              },
              {
                icon: TrendingUp,
                title: "Live Dashboards & Reporting",
                desc: "Replace weekly spreadsheet exports with live operational dashboards. Every KPI, every job status, every team metric — visible in real time, accessible from any device.",
                bullets: ["Customisable KPI dashboards", "Automated report scheduling", "Role-based data access", "Export to PDF, Excel & CSV"],
              },
              {
                icon: Zap,
                title: "Rapid Deployment Methodology",
                desc: "We don't disappear for six months and come back with something that doesn't quite fit. Our iterative delivery model means you see working software in weeks, not quarters.",
                bullets: ["Working prototype in 2–4 weeks", "Iterative sprint delivery", "User testing at every stage", "Full training & documentation"],
              },
            ].map((pillar, i) => (
              <motion.div key={pillar.title} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                style={{ backgroundColor: "#FFFFFF", borderRadius: "20px", padding: "32px", border: "1px solid #E5E7EB", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
                <div style={{ width: 50, height: 50, borderRadius: "14px", background: "linear-gradient(135deg, #0D9488 0%, #2DD4BF 100%)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "18px", boxShadow: "0 4px 14px rgba(13,148,136,0.22)" }}>
                  <pillar.icon size={22} style={{ color: "#FFFFFF" }} />
                </div>
                <h4 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1rem", fontWeight: 700, color: "#111827", marginBottom: "10px" }}>{pillar.title}</h4>
                <p style={{ fontSize: "0.84rem", color: "#6B7280", lineHeight: 1.7, marginBottom: "16px" }}>{pillar.desc}</p>
                {pillar.bullets.map((b) => (
                  <div key={b} className="flex items-center gap-2 mb-2">
                    <CheckCircle size={13} style={{ color: "#2DD4BF", flexShrink: 0 }} />
                    <span style={{ fontSize: "0.8rem", color: "#374151" }}>{b}</span>
                  </div>
                ))}
              </motion.div>
            ))}
          </div>

          {/* App dev CTA banner */}
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ background: "linear-gradient(135deg, #0D9488 0%, #0F766E 60%, #134E4A 100%)", borderRadius: "24px", padding: "56px 48px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: -60, right: -60, width: 240, height: 240, borderRadius: "50%", background: "rgba(255,255,255,0.04)" }} />
            <div style={{ position: "absolute", bottom: -40, left: -40, width: 180, height: 180, borderRadius: "50%", background: "rgba(255,255,255,0.03)" }} />
            <div className="inline-flex items-center gap-2 mb-5" style={{ background: "rgba(255,255,255,0.12)", borderRadius: "100px", padding: "6px 16px", color: "rgba(255,255,255,0.9)", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em" }}>
              <Smartphone size={12} /> FREE DISCOVERY SESSION
            </div>
            <h3 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 800, color: "#FFFFFF", marginBottom: "16px", lineHeight: 1.2 }}>
              What would your business look like<br />with 12 hours a week back?
            </h3>
            <p style={{ color: "rgba(255,255,255,0.82)", maxWidth: "520px", lineHeight: 1.75, marginBottom: "32px", fontSize: "1rem" }}>
              Book a free 45-minute discovery session. We'll map one of your core business processes, identify the automation opportunities, and show you exactly what a bespoke app could do for your team — no obligation, no jargon.
            </p>
            <Link href="/contact">
              <motion.button whileHover={{ scale: 1.05, boxShadow: "0 8px 30px rgba(0,0,0,0.25)" }} whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 font-semibold"
                style={{ backgroundColor: "#2DD4BF", color: "#0D2A25", padding: "16px 36px", borderRadius: "10px", fontSize: "1rem", fontFamily: "Space Grotesk, sans-serif", border: "none", cursor: "pointer" }}>
                Book a Free Discovery Session <ArrowRight size={16} />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ backgroundColor: "#FFFFFF", paddingTop: "60px", paddingBottom: "60px" }}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { value: "£30-40", label: "Return per £1 on email automation" },
              { value: "10+ hrs", label: "Saved per week per business" },
              { value: "80%", label: "Increase in lead consistency" },
            ].map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} style={{ backgroundColor: "#F9FAFB", borderRadius: "16px", padding: "36px", border: "1px solid #E5E7EB" }}>
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
