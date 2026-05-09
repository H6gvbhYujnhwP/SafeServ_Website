import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Quote } from "lucide-react";

const partners = [
  {
    name: "Sweetbyte",
    role: "IT Support & Cyber Security",
    desc: "25+ years of IT expertise. One of the first UK companies to introduce MOA (Managing Operating Agents) as standard. No lock-in contracts, no jargon — just great IT support.",
    url: "https://sweetbyte.co.uk",
    color: "#2DD4BF",
  },
  {
    name: "TheGreenAgents",
    role: "AI Automation & Web Development",
    desc: "The UK's leading AI business automation agency. From AI voice receptionists to full business workforces, custom websites to mobile apps — TheGreenAgents deliver the future of business operations.",
    url: "https://thegreenagents.com",
    color: "#F59E0B",
  },
  {
    name: "ClearerPaths",
    role: "Rapid Website Delivery",
    desc: "Specialists in rapid, commercially sharp website delivery. 7 pages, 48 hours, from £799. Serving businesses across Finance, Legal, Healthcare, Construction, and more.",
    url: "https://clearerpaths.co.uk",
    color: "#2DD4BF",
  },
  {
    name: "DWS / NTA / Gamma",
    role: "Connectivity Partners",
    desc: "SafeServ's network of trusted connectivity providers, delivering superfast broadband, leased lines, and SOGEA solutions across the UK with guaranteed SLAs.",
    url: "#",
    color: "#2DD4BF",
  },
];

export default function About() {
  return (
    <div style={{ backgroundColor: '#1A3352', paddingTop: '80px' }}>
      {/* Hero */}
      <section className="relative py-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #112744 0%, #1A3352 100%)' }}>
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: `url('/manus-storage/hero_bg_b8439bb6.jpg')`, backgroundSize: 'cover' }} />
        <div className="container relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-xs font-semibold tracking-widest mb-3" style={{ color: '#2DD4BF' }}>ABOUT SAFESERV</p>
            <h1 className="text-6xl lg:text-8xl font-black leading-none mb-6" style={{ fontFamily: 'Barlow Condensed, sans-serif', color: '#FFFFFF' }}>
              TECHNOLOGY<br />
              <span style={{ color: '#2DD4BF' }}>WITH A</span><br />
              CONSCIENCE.
            </h1>
            <p className="text-lg max-w-xl" style={{ color: '#94A3B8' }}>
              SafeServ was built on a simple belief: UK businesses deserve exceptional technology services without being locked into contracts that don't serve them.
            </p>
          </motion.div>
        </div>
      </section>

      {/* James's Story */}
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Portrait placeholder */}
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div
                className="rounded-2xl overflow-hidden relative"
                style={{
                  backgroundColor: '#1E3A5F',
                  border: '1px solid rgba(45, 212, 191, 0.2)',
                  minHeight: '480px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div className="text-center p-12">
                  <div
                    className="w-32 h-32 rounded-full mx-auto mb-6 flex items-center justify-center text-5xl font-black"
                    style={{ backgroundColor: 'rgba(45, 212, 191, 0.12)', color: '#2DD4BF', fontFamily: 'Barlow Condensed, sans-serif', border: '2px solid rgba(45, 212, 191, 0.3)' }}
                  >
                    JW
                  </div>
                  <h3 className="text-3xl font-black text-white mb-1" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>James Woodhouse</h3>
                  <p className="text-sm mb-2" style={{ color: '#2DD4BF' }}>Founder, SafeServ</p>
                  <p className="text-xs" style={{ color: '#475569' }}>15+ Years in Telecoms & IT Communications</p>
                  <div className="mt-8 grid grid-cols-2 gap-4">
                    <a href="tel:01245850140" className="text-sm py-2 px-4 rounded text-center transition-all hover:scale-105" style={{ backgroundColor: 'rgba(45, 212, 191, 0.1)', color: '#2DD4BF', border: '1px solid rgba(45, 212, 191, 0.2)' }}>
                      01245 850140
                    </a>
                    <a href="mailto:james@safeserv.co.uk" className="text-sm py-2 px-4 rounded text-center transition-all hover:scale-105" style={{ backgroundColor: 'rgba(45, 212, 191, 0.1)', color: '#2DD4BF', border: '1px solid rgba(45, 212, 191, 0.2)' }}>
                      Email James
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Story */}
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-xs font-semibold tracking-widest mb-3" style={{ color: '#2DD4BF' }}>MEET THE FOUNDER</p>
              <h2 className="text-5xl font-black mb-6 text-white" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
                JAMES<br />
                <span style={{ color: '#2DD4BF' }}>WOODHOUSE</span>
              </h2>

              <div
                className="p-6 rounded-xl mb-8 relative"
                style={{ backgroundColor: '#1E3A5F', border: '1px solid rgba(45, 212, 191, 0.15)' }}
              >
                <Quote size={24} style={{ color: '#2DD4BF', opacity: 0.4, marginBottom: '12px' }} />
                <p className="text-base italic leading-relaxed text-white">
                  "I'm more interested in helping your business than just profiting mine. If the service isn't exceptional, you shouldn't be paying for it."
                </p>
                <p className="text-sm mt-3" style={{ color: '#7A8FA6' }}>— James Woodhouse, Founder of SafeServ</p>
              </div>

              <p className="text-base leading-relaxed mb-5" style={{ color: '#94A3B8' }}>
                With over 15 years in telecoms and IT communications, James founded SafeServ with a clear mission: to give UK SMEs access to enterprise-grade technology services without the enterprise-grade complexity or lock-in contracts.
              </p>
              <p className="text-base leading-relaxed mb-5" style={{ color: '#94A3B8' }}>
                Having worked across the telecoms industry, James saw first-hand how businesses were being tied into long contracts for services that didn't deliver. SafeServ was his answer — a company built on trust, transparency, and genuine results.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{ color: '#94A3B8' }}>
                Today, SafeServ serves businesses across Essex and beyond, bringing together the UK's best technology partners under one roof — with James as your single point of contact for everything.
              </p>

              <Link href="/contact">
                <button
                  className="flex items-center gap-2 px-6 py-3 font-semibold rounded transition-all hover:scale-105"
                  style={{ border: '1px solid rgba(45, 212, 191, 0.4)', color: '#2DD4BF', fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '0.05em' }}
                >
                  TALK TO JAMES <ArrowRight size={14} />
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-24" style={{ backgroundColor: '#1E3A5F' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <p className="text-xs font-semibold tracking-widest mb-3" style={{ color: '#2DD4BF' }}>OUR ECOSYSTEM</p>
            <h2 className="text-5xl font-black text-white" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
              BEST-IN-CLASS<br />
              <span style={{ color: '#2DD4BF' }}>PARTNERS.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {partners.map((partner, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-xl"
                style={{ backgroundColor: '#1A3352', border: `1px solid ${partner.color}20` }}
              >
                <p className="text-xs font-semibold tracking-widest mb-2" style={{ color: partner.color }}>{partner.role.toUpperCase()}</p>
                <h3 className="text-2xl font-black mb-4 text-white" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>{partner.name}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#7A8FA6' }}>{partner.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-5xl font-black text-white" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
              THE SAFESERV<br />
              <span style={{ color: '#2DD4BF' }}>PROMISE.</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { word: "RELIABLE", desc: "We deliver what we promise, when we promise it. No excuses, no delays." },
              { word: "SECURE", desc: "Your data, your systems, and your business are protected at every level." },
              { word: "CONNECTED", desc: "One point of contact for every technology need. Always available, always responsive." },
            ].map((val, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-xl"
                style={{ backgroundColor: '#1E3A5F', border: '1px solid rgba(45, 212, 191, 0.15)' }}
              >
                <div className="text-4xl font-black mb-4" style={{ fontFamily: 'Barlow Condensed, sans-serif', color: '#2DD4BF' }}>{val.word}</div>
                <p className="text-sm leading-relaxed" style={{ color: '#7A8FA6' }}>{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
