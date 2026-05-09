import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Wifi, Zap, Globe, Shield, CheckCircle2 } from "lucide-react";

const solutions = [
  { icon: Zap, title: "Superfast Broadband", desc: "FTTC and FTTP broadband solutions for businesses that need reliable, fast internet without the enterprise price tag.", speed: "Up to 900Mbps" },
  { icon: Globe, title: "Leased Lines", desc: "Dedicated, symmetric bandwidth with guaranteed speeds and SLAs. The gold standard for businesses that can't afford downtime.", speed: "10Mbps – 10Gbps" },
  { icon: Wifi, title: "SOGEA", desc: "Single Order Generic Ethernet Access — broadband without the need for a traditional phone line. Modern, efficient, cost-effective.", speed: "Up to 80Mbps" },
  { icon: Shield, title: "SD-WAN", desc: "Software-defined wide area networking for multi-site businesses. Intelligent traffic management and failover protection.", speed: "Scalable" },
];

export default function Connectivity() {
  return (
    <div style={{ backgroundColor: '#0D1B2A', paddingTop: '80px' }}>
      {/* Hero */}
      <section
        className="relative py-24 overflow-hidden"
        style={{
          backgroundImage: `url('/manus-storage/connectivity_hero_f731c946.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(13, 27, 42, 0.80)' }} />
        <div className="container relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-xs font-semibold tracking-widest mb-3" style={{ color: '#2DD4BF' }}>CONNECTIVITY</p>
            <h1 className="text-6xl lg:text-8xl font-black leading-none mb-6" style={{ fontFamily: 'Barlow Condensed, sans-serif', color: '#FFFFFF' }}>
              ALWAYS<br />
              <span style={{ color: '#2DD4BF' }}>CONNECTED.</span><br />
              ALWAYS ON.
            </h1>
            <p className="text-lg max-w-xl mb-8" style={{ color: '#94A3B8' }}>
              Superfast broadband, leased lines, and SOGEA solutions for UK businesses. Delivered through our trusted network partners DWS, NTA, and Gamma.
            </p>
            <Link href="/contact">
              <button
                className="flex items-center gap-2 px-8 py-4 font-bold rounded transition-all hover:scale-105"
                style={{ backgroundColor: '#F59E0B', color: '#0D1B2A', fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '0.05em', fontSize: '1.05rem' }}
              >
                CHECK AVAILABILITY <ArrowRight size={16} />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-24">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <p className="text-xs font-semibold tracking-widest mb-3" style={{ color: '#2DD4BF' }}>CONNECTIVITY SOLUTIONS</p>
            <h2 className="text-5xl font-black text-white" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
              THE RIGHT CONNECTION<br />
              <span style={{ color: '#2DD4BF' }}>FOR YOUR BUSINESS.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((sol, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-xl"
                style={{ backgroundColor: '#0F2336', border: '1px solid rgba(45, 212, 191, 0.15)' }}
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'rgba(45, 212, 191, 0.12)' }}>
                    <sol.icon size={22} style={{ color: '#2DD4BF' }} />
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: 'rgba(45, 212, 191, 0.1)', color: '#2DD4BF' }}>
                    {sol.speed}
                  </span>
                </div>
                <h3 className="text-2xl font-black mb-3 text-white" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>{sol.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#64748B' }}>{sol.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Connectivity Matters */}
      <section className="py-24" style={{ backgroundColor: '#0F2336' }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-xs font-semibold tracking-widest mb-3" style={{ color: '#2DD4BF' }}>WHY IT MATTERS</p>
              <h2 className="text-5xl font-black mb-6 text-white" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
                YOUR INTERNET IS<br />
                <span style={{ color: '#2DD4BF' }}>YOUR BUSINESS.</span>
              </h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: '#94A3B8' }}>
                In today's world, a slow or unreliable internet connection doesn't just frustrate your team — it costs you customers, damages your reputation, and limits your growth.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{ color: '#94A3B8' }}>
                SafeServ works with the UK's leading connectivity providers — DWS, NTA, and Gamma — to deliver the right solution for your business at the right price, with the right SLA.
              </p>
              {["Guaranteed uptime SLAs", "Dedicated account management", "Fast fault resolution", "Scalable as you grow", "Competitive pricing"].map((item, i) => (
                <div key={i} className="flex items-center gap-3 mb-3">
                  <CheckCircle2 size={14} style={{ color: '#2DD4BF' }} />
                  <span className="text-sm text-white">{item}</span>
                </div>
              ))}
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="grid grid-cols-1 gap-4">
                {["DWS", "NTA", "Gamma"].map((partner, i) => (
                  <div
                    key={i}
                    className="p-6 rounded-xl flex items-center justify-between"
                    style={{ backgroundColor: '#0D1B2A', border: '1px solid rgba(45, 212, 191, 0.12)' }}
                  >
                    <div>
                      <p className="text-2xl font-black text-white" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>{partner}</p>
                      <p className="text-xs" style={{ color: '#64748B' }}>Network Partner</p>
                    </div>
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#2DD4BF', boxShadow: '0 0 8px #2DD4BF' }} />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container text-center">
          <h2 className="text-5xl font-black mb-4 text-white" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
            LET'S FIND YOUR PERFECT CONNECTION.
          </h2>
          <p className="text-lg mb-8" style={{ color: '#64748B' }}>Tell us your postcode and requirements — we'll find the best solution at the best price.</p>
          <Link href="/contact">
            <button
              className="px-10 py-4 font-bold text-lg rounded transition-all hover:scale-105"
              style={{ backgroundColor: '#F59E0B', color: '#0D1B2A', fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '0.05em', boxShadow: '0 0 30px rgba(245, 158, 11, 0.3)' }}
            >
              CHECK AVAILABILITY
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
