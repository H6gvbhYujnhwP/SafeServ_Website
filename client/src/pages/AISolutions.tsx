import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Bot, Mic, Mail, BarChart3, MessageSquare, Headphones, CheckCircle2 } from "lucide-react";

const aiTools = [
  { icon: Mic, title: "AI Voice Receptionist", desc: "A 24/7 AI receptionist that answers calls, qualifies leads, books appointments, and handles FAQs — indistinguishable from a human.", tag: "24/7 AVAILABILITY" },
  { icon: MessageSquare, title: "AI Call Transcription", desc: "SafeServ Translate+ automatically transcribes every call in real-time, with speaker identification, sentiment analysis, and searchable archives.", tag: "SAFESERV TRANSLATE+" },
  { icon: Mail, title: "Email & Marketing Automation", desc: "Automated email sequences, follow-ups, and marketing campaigns. £30-40 return per £1 spent on email automation.", tag: "ROI: 30-40x" },
  { icon: Bot, title: "AI Business Workforce", desc: "A complete team of AI agents handling customer service, data analysis, social media, and admin — freeing your human team for high-value work.", tag: "THEGREENAGENTS" },
  { icon: BarChart3, title: "Data & Analytics Agents", desc: "AI agents that monitor your business data, generate reports, identify trends, and surface actionable insights automatically.", tag: "INTELLIGENCE" },
  { icon: Headphones, title: "Customer Service Automation", desc: "AI-powered customer service that handles enquiries, resolves common issues, and escalates complex cases to your team seamlessly.", tag: "ALWAYS ON" },
];

const translateFeatures = [
  "Real-time call transcription",
  "Multi-language support",
  "Speaker identification",
  "Sentiment analysis",
  "Searchable call archives",
  "CRM integration ready",
  "GDPR compliant",
  "Instant call summaries",
];

export default function AISolutions() {
  return (
    <div style={{ backgroundColor: '#F9FAFB', paddingTop: '80px' }}>
      {/* Hero */}
      <section
        className="relative py-24 overflow-hidden"
        style={{
          backgroundImage: `url('/manus-storage/ai_hero_3fdf28b4.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(13, 27, 42, 0.80)' }} />
        <div className="container relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-xs font-semibold tracking-widest mb-3" style={{ color: '#F59E0B' }}>AI SOLUTIONS</p>
            <h1 className="text-6xl lg:text-8xl font-black leading-none mb-6" style={{ fontFamily: 'Barlow Condensed, sans-serif', color: '#111827' }}>
              YOUR AI-POWERED<br />
              <span style={{ color: '#F59E0B' }}>BUSINESS</span><br />
              WORKFORCE.
            </h1>
            <p className="text-lg max-w-xl mb-8" style={{ color: '#6B7280' }}>
              SafeServ's AI solutions — powered by SafeServ Translate+ and TheGreenAgents — automate your entire business operation. From call transcription to full AI workforces.
            </p>
            <Link href="/contact">
              <button
                className="flex items-center gap-2 px-8 py-4 font-bold rounded transition-all hover:scale-105"
                style={{ backgroundColor: '#F59E0B', color: '#112744', fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '0.05em', fontSize: '1.05rem', boxShadow: '0 0 30px rgba(245, 158, 11, 0.35)' }}
              >
                EXPLORE AI SOLUTIONS <ArrowRight size={16} />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SafeServ Translate+ Feature */}
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6 tracking-widest" style={{ backgroundColor: 'rgba(245, 158, 11, 0.12)', border: '1px solid rgba(245, 158, 11, 0.3)', color: '#F59E0B' }}>
                SAFESERV EXCLUSIVE
              </div>
              <h2 className="text-5xl font-black mb-6 text-white" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
                SAFESERV<br />
                <span style={{ color: '#F59E0B' }}>TRANSLATE+</span>
              </h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: '#6B7280' }}>
                SafeServ Translate+ is our proprietary AI call transcription and translation service. Every call your business makes or receives is automatically transcribed in real-time, with full speaker identification and sentiment analysis.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{ color: '#6B7280' }}>
                Never miss a detail from a client call again. Search your entire call history in seconds. Understand how your customers feel about your service. All GDPR compliant and securely stored.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {translateFeatures.map((f, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 size={13} style={{ color: '#F59E0B', flexShrink: 0 }} />
                    <span className="text-sm" style={{ color: '#6B7280' }}>{f}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div
                className="p-8 rounded-2xl"
                style={{
                  background: 'linear-gradient(135deg, #1a1200 0%, #112744 100%)',
                  border: '1px solid rgba(245, 158, 11, 0.3)',
                  boxShadow: '0 0 60px rgba(245, 158, 11, 0.08)',
                }}
              >
                {/* Mock transcription UI */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#F59E0B' }} />
                  <span className="text-xs font-semibold tracking-widest" style={{ color: '#F59E0B' }}>LIVE TRANSCRIPTION</span>
                </div>
                <div className="space-y-4">
                  {[
                    { speaker: "CALLER", text: "Hi, I'm calling about upgrading our phone system...", sentiment: "positive" },
                    { speaker: "AGENT", text: "Absolutely! I'd love to help. How many users do you have?", sentiment: "positive" },
                    { speaker: "CALLER", text: "We have about 15 staff across two offices.", sentiment: "neutral" },
                    { speaker: "AGENT", text: "Perfect. Our E50 range would be ideal for your setup.", sentiment: "positive" },
                  ].map((line, i) => (
                    <div key={i} className="flex gap-3">
                      <span className="text-xs font-semibold shrink-0 pt-0.5" style={{ color: line.speaker === 'CALLER' ? '#2DD4BF' : '#F59E0B', minWidth: '50px' }}>
                        {line.speaker}
                      </span>
                      <p className="text-sm" style={{ color: '#6B7280' }}>{line.text}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 flex items-center justify-between" style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                  <span className="text-xs" style={{ color: '#475569' }}>Overall Sentiment</span>
                  <span className="text-xs font-semibold px-2 py-1 rounded" style={{ backgroundColor: 'rgba(45, 212, 191, 0.12)', color: '#0D9488' }}>POSITIVE — 94%</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Tools Grid */}
      <section className="py-24" style={{ backgroundColor: '#F0FDFB' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <p className="text-xs font-semibold tracking-widest mb-3" style={{ color: '#F59E0B' }}>IN PARTNERSHIP WITH THEGREENAGENTS</p>
            <h2 className="text-5xl font-black text-white" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
              YOUR COMPLETE<br />
              <span style={{ color: '#F59E0B' }}>AI WORKFORCE.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiTools.map((tool, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-8 rounded-xl"
                style={{ backgroundColor: '#F9FAFB', border: '1px solid rgba(245, 158, 11, 0.12)' }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'rgba(245, 158, 11, 0.12)' }}>
                    <tool.icon size={18} style={{ color: '#F59E0B' }} />
                  </div>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded" style={{ backgroundColor: 'rgba(245, 158, 11, 0.08)', color: '#F59E0B' }}>
                    {tool.tag}
                  </span>
                </div>
                <h3 className="text-xl font-black mb-3 text-white" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>{tool.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>{tool.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { value: "£30-40", label: "Return per £1 on email automation" },
              { value: "10+ hrs", label: "Saved per week per business" },
              { value: "80%", label: "Increase in lead consistency" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-xl"
                style={{ backgroundColor: '#F0FDFB', border: '1px solid rgba(245, 158, 11, 0.2)' }}
              >
                <div className="text-5xl font-black mb-2" style={{ fontFamily: 'Barlow Condensed, sans-serif', color: '#F59E0B' }}>{stat.value}</div>
                <p className="text-sm" style={{ color: '#6B7280' }}>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: '#F0FDFB', borderTop: '1px solid rgba(245, 158, 11, 0.15)' }}>
        <div className="container text-center">
          <h2 className="text-5xl font-black mb-4 text-white" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
            READY TO BUILD YOUR AI WORKFORCE?
          </h2>
          <p className="text-lg mb-8" style={{ color: '#6B7280' }}>Book a free AI consultation and discover what's possible for your business.</p>
          <Link href="/contact">
            <button
              className="px-10 py-4 font-bold text-lg rounded transition-all hover:scale-105"
              style={{ backgroundColor: '#F59E0B', color: '#112744', fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '0.05em', boxShadow: '0 0 30px rgba(245, 158, 11, 0.3)' }}
            >
              BOOK FREE AI CONSULTATION
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
