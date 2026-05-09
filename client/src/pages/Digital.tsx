import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Globe, Smartphone, ShoppingCart, Code2, CheckCircle2, Clock } from "lucide-react";

const webServices = [
  { icon: Globe, title: "Rapid Website Delivery", partner: "ClearerPaths", desc: "7-page professional websites delivered in under 48 hours from £799. Copywriting, images, and hosting included. First 10 clients receive a free domain name.", tag: "FROM £799 | 48 HOURS", color: "#2DD4BF" },
  { icon: Code2, title: "Custom Website Development", partner: "TheGreenAgents", desc: "Bespoke website design and development for businesses that need a fully custom digital solution. Built with commercial intent and modern design standards.", tag: "BESPOKE", color: "#2DD4BF" },
  { icon: Smartphone, title: "Mobile App Development", partner: "TheGreenAgents", desc: "iOS and Android app development for businesses ready to go mobile. From concept to App Store launch, we handle everything.", tag: "iOS & ANDROID", color: "#F59E0B" },
  { icon: ShoppingCart, title: "E-commerce Solutions", partner: "TheGreenAgents", desc: "Fully integrated online stores with payment processing, inventory management, and customer account portals.", tag: "SELL ONLINE", color: "#F59E0B" },
];

const sectors = ["Finance", "Legal", "Manufacturing", "Creative", "Property", "Healthcare", "Recruitment", "Construction", "Hospitality", "Technology", "Retail", "Education"];

export default function Digital() {
  return (
    <div style={{ backgroundColor: '#1A3352', paddingTop: '80px' }}>
      {/* Hero */}
      <section className="relative py-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #112744 0%, #1A3352 50%, #112744 100%)' }}>
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url('/manus-storage/hero_bg_b8439bb6.jpg')`, backgroundSize: 'cover' }} />
        <div className="container relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-xs font-semibold tracking-widest mb-3" style={{ color: '#2DD4BF' }}>DIGITAL & WEB</p>
            <h1 className="text-6xl lg:text-8xl font-black leading-none mb-6" style={{ fontFamily: 'Barlow Condensed, sans-serif', color: '#FFFFFF' }}>
              YOUR DIGITAL<br />
              <span style={{ color: '#2DD4BF' }}>PRESENCE,</span><br />
              TRANSFORMED.
            </h1>
            <p className="text-lg max-w-xl mb-8" style={{ color: '#94A3B8' }}>
              A dated website costs you clients every single day. Through SafeServ's partnerships with ClearerPaths and TheGreenAgents, UK SMEs can have a stunning website live within 48 hours.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <button
                  className="flex items-center gap-2 px-8 py-4 font-bold rounded transition-all hover:scale-105"
                  style={{ backgroundColor: '#F59E0B', color: '#112744', fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '0.05em', fontSize: '1.05rem', boxShadow: '0 0 30px rgba(245, 158, 11, 0.35)' }}
                >
                  GET YOUR WEBSITE <ArrowRight size={16} />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ClearerPaths Feature */}
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6 tracking-widest" style={{ backgroundColor: 'rgba(45, 212, 191, 0.12)', border: '1px solid rgba(45, 212, 191, 0.3)', color: '#2DD4BF' }}>
                IN PARTNERSHIP WITH CLEARERPATHS
              </div>
              <h2 className="text-5xl font-black mb-6 text-white" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
                7 PAGES.<br />
                <span style={{ color: '#2DD4BF' }}>48 HOURS.</span><br />
                FROM £799.
              </h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: '#94A3B8' }}>
                ClearerPaths has perfected the art of rapid website delivery. A complete 7-page professional website — with copywriting, images, and hosting — delivered and live in under 48 hours.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{ color: '#94A3B8' }}>
                No long agency delays. No endless revision cycles. No waiting weeks for something that should take days. Just a commercially sharp, professionally designed website that starts working for your business immediately.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {["Professional copywriting", "Custom imagery", "Hosting included", "Mobile responsive", "SEO optimised", "Free domain (first 10 clients)"].map((f, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 size={13} style={{ color: '#2DD4BF', flexShrink: 0 }} />
                    <span className="text-sm" style={{ color: '#94A3B8' }}>{f}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Pricing card */}
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div
                className="p-10 rounded-2xl"
                style={{
                  background: 'linear-gradient(135deg, #1A3352 0%, #112744 100%)',
                  border: '1px solid rgba(45, 212, 191, 0.3)',
                  boxShadow: '0 0 60px rgba(45, 212, 191, 0.08)',
                }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <Clock size={16} style={{ color: '#2DD4BF' }} />
                  <span className="text-xs font-semibold tracking-widest" style={{ color: '#2DD4BF' }}>RAPID DELIVERY</span>
                </div>
                <div className="text-6xl font-black mb-1 text-white" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>£799</div>
                <p className="text-sm mb-8" style={{ color: '#7A8FA6' }}>Complete 7-page website, live in 48 hours</p>

                <div className="space-y-3 mb-8">
                  {[
                    "Home page",
                    "About us",
                    "Services / Products",
                    "Testimonials",
                    "Blog / News",
                    "Contact page",
                    "Privacy & Terms",
                  ].map((page, i) => (
                    <div key={i} className="flex items-center justify-between py-2" style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                      <span className="text-sm" style={{ color: '#94A3B8' }}>{page}</span>
                      <CheckCircle2 size={14} style={{ color: '#2DD4BF' }} />
                    </div>
                  ))}
                </div>

                <Link href="/contact">
                  <button
                    className="w-full py-4 font-bold rounded transition-all hover:scale-105"
                    style={{ backgroundColor: '#F59E0B', color: '#112744', fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '0.05em', boxShadow: '0 0 20px rgba(245, 158, 11, 0.3)' }}
                  >
                    CLAIM YOUR WEBSITE
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24" style={{ backgroundColor: '#1E3A5F' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <p className="text-xs font-semibold tracking-widest mb-3" style={{ color: '#2DD4BF' }}>FULL DIGITAL SERVICES</p>
            <h2 className="text-5xl font-black text-white" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
              BEYOND THE WEBSITE.
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {webServices.map((svc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-xl"
                style={{ backgroundColor: '#1A3352', border: `1px solid ${svc.color}20` }}
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${svc.color}12` }}>
                    <svc.icon size={22} style={{ color: svc.color }} />
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded block mb-1" style={{ backgroundColor: `${svc.color}10`, color: svc.color }}>{svc.tag}</span>
                    <span className="text-xs" style={{ color: '#475569' }}>via {svc.partner}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-black mb-3 text-white" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>{svc.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#7A8FA6' }}>{svc.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-24">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest mb-3" style={{ color: '#2DD4BF' }}>SECTORS WE SERVE</p>
            <h2 className="text-5xl font-black text-white" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
              WE BUILD FOR EVERY INDUSTRY.
            </h2>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-3">
            {sectors.map((sector, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="px-4 py-2 rounded-full text-sm font-medium"
                style={{ backgroundColor: '#1E3A5F', border: '1px solid rgba(45, 212, 191, 0.2)', color: '#94A3B8' }}
              >
                {sector}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: '#1E3A5F', borderTop: '1px solid rgba(45, 212, 191, 0.15)' }}>
        <div className="container text-center">
          <h2 className="text-5xl font-black mb-4 text-white" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
            READY TO TRANSFORM YOUR DIGITAL PRESENCE?
          </h2>
          <p className="text-lg mb-8" style={{ color: '#7A8FA6' }}>Talk to us today. Your new website could be live by tomorrow.</p>
          <Link href="/contact">
            <button
              className="px-10 py-4 font-bold text-lg rounded transition-all hover:scale-105"
              style={{ backgroundColor: '#F59E0B', color: '#112744', fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '0.05em', boxShadow: '0 0 30px rgba(245, 158, 11, 0.3)' }}
            >
              START YOUR PROJECT
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
