import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Shield, Cpu, Users, Clock, CheckCircle2, Zap } from "lucide-react";

const services = [
  { icon: Shield, title: "Cyber Security", desc: "Multi-layered protection including endpoint security, firewalls, email filtering, and security awareness training." },
  { icon: Cpu, title: "Cloud Services", desc: "Microsoft 365, Azure, and cloud migration services. We move your business to the cloud safely and efficiently." },
  { icon: Users, title: "Helpdesk Support", desc: "Remote and on-site support from experienced engineers. Fast response times and clear communication." },
  { icon: Clock, title: "Proactive Monitoring", desc: "24/7 monitoring of your IT infrastructure. We fix problems before they affect your business." },
  { icon: Zap, title: "MOA — Managing Operating Agents", desc: "The UK's first AI-powered IT management layer, included as standard. Intelligent automation that keeps your systems running at peak performance." },
  { icon: CheckCircle2, title: "No Lock-In Contracts", desc: "Use us when you want. If you don't like it, leave. We earn your business every single month." },
];

export default function ITSupport() {
  return (
    <div style={{ backgroundColor: '#F9FAFB', paddingTop: '80px' }}>
      {/* Hero */}
      <section
        className="relative py-24 overflow-hidden"
        style={{
          backgroundImage: `url('/manus-storage/it_support_hero_445d801e.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(43, 74, 92, 0.72)' }} />
        <div className="container relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-xs font-semibold tracking-widest mb-3" style={{ color: '#0D9488' }}>IT SUPPORT — IN PARTNERSHIP WITH SWEETBYTE</p>
            <h1 className="text-6xl lg:text-8xl font-black leading-none mb-6" style={{ fontFamily: 'Barlow Condensed, sans-serif', color: '#111827' }}>
              IT SUPPORT<br />
              <span style={{ color: '#0D9488' }}>DONE</span><br />
              DIFFERENTLY.
            </h1>
            <p className="text-lg max-w-xl mb-8" style={{ color: '#6B7280' }}>
              25+ years of IT expertise, delivered through SafeServ's partnership with Sweetbyte. Including the UK's first MOA (Managing Operating Agents) service — as standard.
            </p>
            <Link href="/contact">
              <button
                className="flex items-center gap-2 px-8 py-4 font-bold rounded transition-all hover:scale-105"
                style={{ backgroundColor: '#F59E0B', color: '#112744', fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '0.05em', fontSize: '1.05rem' }}
              >
                GET IT SUPPORT <ArrowRight size={16} />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Sweetbyte Partnership */}
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <p className="text-xs font-semibold tracking-widest mb-3" style={{ color: '#0D9488' }}>OUR IT PARTNER</p>
              <h2 className="text-5xl font-black mb-6 text-white" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
                POWERED BY<br />
                <span style={{ color: '#0D9488' }}>SWEETBYTE</span>
              </h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: '#6B7280' }}>
                Sweetbyte has been delivering exceptional IT support for over 25 years. They're not your typical IT company — they believe in building long-term relationships, not locking businesses into contracts they can't escape.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{ color: '#6B7280' }}>
                Their philosophy is simple: <span className="text-white font-semibold">"IT support done differently."</span> No jargon. No unnecessary upsells. Just honest, reliable IT support that keeps your business running.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {["25+ years experience", "No lock-in contracts", "Remote & on-site support", "MOA included as standard"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 size={14} style={{ color: '#0D9488', flexShrink: 0 }} />
                    <span className="text-sm" style={{ color: '#6B7280' }}>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* MOA Highlight */}
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <div
                className="p-10 rounded-2xl"
                style={{
                  background: 'linear-gradient(135deg, #1A3352 0%, #112744 100%)',
                  border: '1px solid rgba(45, 212, 191, 0.3)',
                  boxShadow: '0 0 60px rgba(45, 212, 191, 0.08)',
                }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'rgba(45, 212, 191, 0.25)' }}>
                    <Zap size={20} style={{ color: '#0D9488' }} />
                  </div>
                  <div>
                    <p className="text-xs tracking-widest" style={{ color: '#0D9488' }}>UK FIRST</p>
                    <h3 className="text-2xl font-black text-white" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>MOA SERVICE</h3>
                  </div>
                </div>
                <p className="text-sm font-semibold mb-2 text-white">Managing Operating Agents</p>
                <p className="text-sm leading-relaxed mb-6" style={{ color: '#6B7280' }}>
                  Sweetbyte is one of the first IT companies in the UK to introduce MOA — an intelligent layer of AI-powered management agents that monitor, maintain, and optimise your IT infrastructure automatically.
                </p>
                <p className="text-sm leading-relaxed mb-6" style={{ color: '#6B7280' }}>
                  This isn't just AI for AI's sake. MOA means fewer outages, faster resolution times, and a proactive approach to IT that traditional support simply can't match. And it's included as standard with every IT support contract.
                </p>
                <div className="pt-6" style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                  <p className="text-xs tracking-widest mb-3" style={{ color: '#0D9488' }}>WHAT MOA DELIVERS</p>
                  {["Proactive issue detection & resolution", "Automated patch management", "Performance optimisation", "Intelligent security monitoring"].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 mb-2">
                      <div className="w-1 h-1 rounded-full" style={{ backgroundColor: '#2DD4BF' }} />
                      <span className="text-sm" style={{ color: '#6B7280' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24" style={{ backgroundColor: '#F0FDFB' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <p className="text-xs font-semibold tracking-widest mb-3" style={{ color: '#0D9488' }}>WHAT'S INCLUDED</p>
            <h2 className="text-5xl font-black text-white" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
              COMPLETE IT COVERAGE
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-8 rounded-xl"
                style={{ backgroundColor: '#F9FAFB', border: '1px solid rgba(45, 212, 191, 0.12)' }}
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(45, 212, 191, 0.12)' }}>
                  <svc.icon size={18} style={{ color: '#0D9488' }} />
                </div>
                <h3 className="text-xl font-black mb-3 text-white" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>{svc.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>{svc.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container text-center">
          <h2 className="text-5xl font-black mb-4 text-white" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
            READY FOR IT SUPPORT THAT ACTUALLY WORKS?
          </h2>
          <p className="text-lg mb-8" style={{ color: '#6B7280' }}>No contracts. No lock-in. Just exceptional IT support from day one.</p>
          <Link href="/contact">
            <button
              className="px-10 py-4 font-bold text-lg rounded transition-all hover:scale-105"
              style={{ backgroundColor: '#F59E0B', color: '#112744', fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '0.05em', boxShadow: '0 0 30px rgba(245, 158, 11, 0.3)' }}
            >
              GET A FREE IT AUDIT
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
