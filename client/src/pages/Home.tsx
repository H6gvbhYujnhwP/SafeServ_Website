import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Shield, Wifi, Bot, Globe, Headphones, CheckCircle2, ChevronRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

const services = [
  {
    icon: Phone,
    title: "VoIP Telephony",
    desc: "Enterprise-grade IP phone systems for UK businesses. HD audio, 4–20 SIP accounts, and zero lock-in.",
    href: "/telephony",
    color: "#2DD4BF",
  },
  {
    icon: Shield,
    title: "IT Support",
    desc: "25+ years of IT expertise via Sweetbyte, including the UK's first MOA (Managing Operating Agents) service.",
    href: "/it-support",
    color: "#2DD4BF",
  },
  {
    icon: Wifi,
    title: "Connectivity",
    desc: "Superfast broadband, leased lines, and SOGEA solutions for businesses that can't afford downtime.",
    href: "/connectivity",
    color: "#2DD4BF",
  },
  {
    icon: Bot,
    title: "AI Solutions",
    desc: "AI voice receptionists, call transcription, email automation, and full business AI workforces.",
    href: "/ai-solutions",
    color: "#F59E0B",
  },
  {
    icon: Globe,
    title: "Digital & Web",
    desc: "Stunning websites delivered in 48 hours from £799. Custom apps and e-commerce via our partners.",
    href: "/digital",
    color: "#F59E0B",
  },
  {
    icon: Headphones,
    title: "Managed Services",
    desc: "One point of contact for every technology need. We manage it all so you can focus on your business.",
    href: "/about",
    color: "#2DD4BF",
  },
];

const stats = [
  { value: "15+", label: "Years in Telecoms" },
  { value: "0", label: "Lock-In Contracts" },
  { value: "3", label: "Expert Partners" },
  { value: "48hr", label: "Website Delivery" },
];

const phones = [
  {
    model: "D44",
    subtitle: "Entry-Level IP Phone",
    img: "/manus-storage/VoIPPhoneD44-1_920eb732.png",
    features: ["4.3\" Colour LCD", "10 Programmable Keys", "Dual Gigabit Ethernet", "PoE Support"],
    href: "/telephony",
  },
  {
    model: "E50",
    subtitle: "Mid-Range IP Phone",
    img: "/manus-storage/VoIPPhoneE50_55decede.png",
    features: ["36 BLF Keys", "4 SIP Accounts", "5-Way Conferencing", "Bluetooth & EHS"],
    href: "/telephony",
  },
  {
    model: "F60",
    subtitle: "Executive Touchscreen",
    img: "/manus-storage/VoIPPhoneF60Safeservbrochure_7e10be5d.png",
    features: ["7\" Touchscreen", "20 SIP Accounts", "Video Calling", "Built-in Wi-Fi"],
    href: "/telephony",
  },
];

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: { x: number; y: number; vx: number; vy: number; r: number }[] = [];
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.5,
      });
    }

    let animId: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(45, 212, 191, 0.6)";
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(45, 212, 191, ${0.15 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div style={{ backgroundColor: '#0D1B2A' }}>
      {/* ── HERO ── */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          backgroundImage: `url('/manus-storage/hero_bg_b8439bb6.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(13, 27, 42, 0.75)' }} />
        <canvas ref={canvasRef} id="particle-canvas" />

        <div className="container relative z-10 pt-24 pb-20">
          <div className="max-w-3xl">
            <motion.div
              initial="hidden"
              animate="visible"
              custom={0}
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6 tracking-widest"
              style={{ backgroundColor: 'rgba(45, 212, 191, 0.12)', border: '1px solid rgba(45, 212, 191, 0.3)', color: '#2DD4BF' }}
            >
              UK'S COMPLETE TECHNOLOGY PARTNER
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="visible"
              custom={1}
              variants={fadeUp}
              className="text-6xl lg:text-8xl font-black leading-none mb-6"
              style={{ fontFamily: 'Barlow Condensed, sans-serif', color: '#FFFFFF', lineHeight: 0.95 }}
            >
              RELIABLE.<br />
              <span style={{ color: '#2DD4BF' }}>SECURE.</span><br />
              CONNECTED.
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              custom={2}
              variants={fadeUp}
              className="text-lg lg:text-xl leading-relaxed mb-10 max-w-xl"
              style={{ color: '#94A3B8' }}
            >
              SafeServ brings together the UK's best technology services — VoIP, IT support, connectivity, AI, and digital — under one roof. No lock-in contracts. Just exceptional service.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              custom={3}
              variants={fadeUp}
              className="flex flex-wrap gap-4"
            >
              <Link href="/contact">
                <button
                  className="flex items-center gap-2 px-8 py-4 font-bold text-base rounded transition-all duration-200 hover:scale-105 hover:shadow-lg"
                  style={{
                    backgroundColor: '#F59E0B',
                    color: '#0D1B2A',
                    fontFamily: 'Barlow Condensed, sans-serif',
                    letterSpacing: '0.05em',
                    fontSize: '1.05rem',
                    boxShadow: '0 0 30px rgba(245, 158, 11, 0.35)',
                  }}
                >
                  GET A FREE QUOTE <ArrowRight size={16} />
                </button>
              </Link>
              <a
                href="tel:01245850140"
                className="flex items-center gap-2 px-8 py-4 font-semibold text-base rounded transition-all duration-200 hover:scale-105"
                style={{
                  border: '1px solid rgba(45, 212, 191, 0.4)',
                  color: '#2DD4BF',
                  fontFamily: 'Barlow Condensed, sans-serif',
                  letterSpacing: '0.05em',
                  fontSize: '1.05rem',
                }}
              >
                <Phone size={16} /> 01245 850140
              </a>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs tracking-widest" style={{ color: '#475569' }}>SCROLL</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-0.5 h-8"
            style={{ backgroundColor: '#2DD4BF', opacity: 0.5 }}
          />
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section style={{ backgroundColor: '#0F2336', borderTop: '1px solid rgba(45, 212, 191, 0.15)', borderBottom: '1px solid rgba(45, 212, 191, 0.15)' }}>
        <div className="container py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-black mb-1" style={{ fontFamily: 'Barlow Condensed, sans-serif', color: '#2DD4BF' }}>
                  {s.value}
                </div>
                <div className="text-xs tracking-widest uppercase" style={{ color: '#64748B' }}>{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-xs font-semibold tracking-widest mb-3" style={{ color: '#2DD4BF' }}>WHAT WE DO</p>
            <h2 className="text-5xl lg:text-6xl font-black leading-none" style={{ fontFamily: 'Barlow Condensed, sans-serif', color: '#FFFFFF' }}>
              EVERYTHING YOUR<br />
              <span style={{ color: '#2DD4BF' }}>BUSINESS NEEDS.</span>
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
              >
                <Link href={svc.href}>
                  <div
                    className="group p-8 rounded-lg h-full transition-all duration-300 hover:-translate-y-1"
                    style={{
                      backgroundColor: '#0F2336',
                      border: '1px solid rgba(255,255,255,0.06)',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = `${svc.color}40`;
                      (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 40px ${svc.color}15`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.06)';
                      (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                    }}
                  >
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-5" style={{ backgroundColor: `${svc.color}15` }}>
                      <svc.icon size={22} style={{ color: svc.color }} />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
                      {svc.title}
                    </h3>
                    <p className="text-sm leading-relaxed mb-5" style={{ color: '#64748B' }}>{svc.desc}</p>
                    <div className="flex items-center gap-2 text-sm font-semibold transition-all group-hover:gap-3" style={{ color: svc.color }}>
                      Learn more <ChevronRight size={14} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHONE SHOWCASE ── */}
      <section className="py-24" style={{ backgroundColor: '#0F2336' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-xs font-semibold tracking-widest mb-3" style={{ color: '#2DD4BF' }}>VOIP RANGE</p>
            <h2 className="text-5xl lg:text-6xl font-black leading-none" style={{ fontFamily: 'Barlow Condensed, sans-serif', color: '#FFFFFF' }}>
              PHONES BUILT FOR<br />
              <span style={{ color: '#2DD4BF' }}>MODERN BUSINESS.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {phones.map((phone, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
              >
                <Link href={phone.href}>
                  <div
                    className="group rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2"
                    style={{
                      backgroundColor: '#0D1B2A',
                      border: '1px solid rgba(45, 212, 191, 0.15)',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = '0 20px 60px rgba(45, 212, 191, 0.15)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                    }}
                  >
                    <div className="relative h-56 overflow-hidden" style={{ backgroundColor: '#060E18' }}>
                      <img
                        src={phone.img}
                        alt={`SafeServ ${phone.model} IP Phone`}
                        className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="text-3xl font-black" style={{ fontFamily: 'Barlow Condensed, sans-serif', color: '#2DD4BF' }}>
                          {phone.model}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-xs tracking-widest mb-4 uppercase" style={{ color: '#64748B' }}>{phone.subtitle}</p>
                      <ul className="space-y-2">
                        {phone.features.map((f, j) => (
                          <li key={j} className="flex items-center gap-2 text-sm" style={{ color: '#94A3B8' }}>
                            <CheckCircle2 size={12} style={{ color: '#2DD4BF', flexShrink: 0 }} />
                            {f}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-5 flex items-center gap-2 text-sm font-semibold" style={{ color: '#2DD4BF' }}>
                        View specs <ArrowRight size={14} />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NO LOCK-IN BANNER ── */}
      <section
        className="py-20 relative overflow-hidden"
        style={{
          backgroundImage: `url('/manus-storage/hero_bg_b8439bb6.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(13, 27, 42, 0.88)' }} />
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-semibold tracking-widest mb-4" style={{ color: '#F59E0B' }}>THE SAFESERV PROMISE</p>
            <h2 className="text-5xl lg:text-7xl font-black mb-6 leading-none" style={{ fontFamily: 'Barlow Condensed, sans-serif', color: '#FFFFFF' }}>
              NO LOCK-IN.<br />
              <span style={{ color: '#2DD4BF' }}>NO CONTRACTS.</span><br />
              NO EXCUSES.
            </h2>
            <p className="text-lg max-w-2xl mx-auto mb-10" style={{ color: '#94A3B8' }}>
              If the service isn't exceptional, you shouldn't be paying for it. That's why every SafeServ service runs on a simple principle — we earn your business every single month.
            </p>
            <Link href="/contact">
              <button
                className="px-10 py-4 font-bold text-lg rounded transition-all duration-200 hover:scale-105"
                style={{
                  backgroundColor: '#F59E0B',
                  color: '#0D1B2A',
                  fontFamily: 'Barlow Condensed, sans-serif',
                  letterSpacing: '0.05em',
                  boxShadow: '0 0 40px rgba(245, 158, 11, 0.4)',
                }}
              >
                START YOUR FREE CONSULTATION
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── PARTNER ECOSYSTEM ── */}
      <section className="py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-xs font-semibold tracking-widest mb-3" style={{ color: '#2DD4BF' }}>OUR ECOSYSTEM</p>
            <h2 className="text-5xl lg:text-6xl font-black leading-none" style={{ fontFamily: 'Barlow Condensed, sans-serif', color: '#FFFFFF' }}>
              BEST-IN-CLASS<br />
              <span style={{ color: '#2DD4BF' }}>PARTNERS.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Sweetbyte",
                role: "IT Support & Cyber Security",
                desc: "25+ years of IT expertise. The UK's first MOA (Managing Operating Agents) service included as standard with every IT support contract.",
                color: "#2DD4BF",
                href: "https://sweetbyte.co.uk",
              },
              {
                name: "TheGreenAgents",
                role: "AI Automation & Web Development",
                desc: "AI voice receptionists, marketing automation, custom websites, and mobile apps. The future of business operations, available today.",
                color: "#F59E0B",
                href: "https://thegreenagents.com",
              },
              {
                name: "ClearerPaths",
                role: "Rapid Website Delivery",
                desc: "7-page professional websites delivered in under 48 hours from £799. Copywriting, images, and hosting included.",
                color: "#2DD4BF",
                href: "https://clearerpaths.co.uk",
              },
            ].map((partner, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-xl"
                style={{
                  backgroundColor: '#0F2336',
                  border: `1px solid ${partner.color}25`,
                }}
              >
                <div className="text-xs font-semibold tracking-widest mb-2" style={{ color: partner.color }}>
                  {partner.role.toUpperCase()}
                </div>
                <h3 className="text-2xl font-black mb-4 text-white" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
                  {partner.name}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#64748B' }}>{partner.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
