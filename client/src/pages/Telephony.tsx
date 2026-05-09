import { Link } from "wouter";
import { motion } from "framer-motion";
import { CheckCircle, ChevronRight, Phone, ArrowRight } from "lucide-react";

function VoIPGraphic() {
  const protocols = [
    { label: "SIP", x: 300, y: 80 },
    { label: "HD", x: 380, y: 180 },
    { label: "TLS", x: 340, y: 300 },
    { label: "RTP", x: 180, y: 340 },
    { label: "PoE", x: 80, y: 260 },
    { label: "BLF", x: 60, y: 140 },
    { label: "SIP2", x: 160, y: 60 },
  ];
  const cx = 220, cy = 200, r = 28;
  return (
    <div style={{ width: "100%", height: "420px", position: "relative" }}>
      <svg viewBox="0 0 440 420" style={{ width: "100%", height: "100%" }} xmlns="http://www.w3.org/2000/svg">
        {/* Animated pulse rings from central handset */}
        {[60, 90, 120].map((radius, i) => (
          <motion.circle key={i} cx={cx} cy={cy} r={radius}
            fill="none" stroke="#2DD4BF" strokeWidth="1"
            initial={{ opacity: 0.6, scale: 0.8 }}
            animate={{ opacity: [0.6, 0, 0.6], scale: [0.8, 1.3, 0.8] }}
            transition={{ duration: 2.8, repeat: Infinity, delay: i * 0.9, ease: "easeInOut" }}
          />
        ))}
        {/* Connection lines to protocol nodes */}
        {protocols.map((p, i) => (
          <motion.line key={i} x1={cx} y1={cy} x2={p.x} y2={p.y}
            stroke="#2DD4BF" strokeWidth="1" strokeDasharray="4 4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{ duration: 1.2, delay: 0.3 + i * 0.15 }}
          />
        ))}
        {/* Travelling signal dots */}
        {protocols.slice(0, 4).map((p, i) => (
          <motion.circle key={`dot-${i}`} r={4} fill="#2DD4BF"
            initial={{ cx, cy }}
            animate={{ cx: [cx, p.x, cx], cy: [cy, p.y, cy] }}
            transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.6, ease: "easeInOut" }}
          />
        ))}
        {/* Central handset icon circle */}
        <circle cx={cx} cy={cy} r={r} fill="#2DD4BF" />
        <text x={cx} y={cy + 5} textAnchor="middle" fill="#0D2A25" fontSize="11" fontWeight="700" fontFamily="Space Grotesk, sans-serif">VoIP</text>
        {/* Protocol nodes */}
        {protocols.map((p, i) => (
          <g key={`node-${i}`}>
            <motion.circle cx={p.x} cy={p.y} r={20} fill="rgba(45,212,191,0.12)" stroke="#2DD4BF" strokeWidth="1"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.15 }}
            />
            <motion.text x={p.x} y={p.y + 4} textAnchor="middle" fill="#0D9488" fontSize="9" fontWeight="700" fontFamily="Space Grotesk, sans-serif"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 + i * 0.15 }}
            >{p.label}</motion.text>
          </g>
        ))}
        {/* Audio waveform below handset */}
        {[-3,-2,-1,0,1,2,3].map((offset, i) => (
          <motion.rect key={`wave-${i}`}
            x={cx - 42 + i * 14} y={cy + 50}
            width={8} rx={4}
            fill="#2DD4BF" fillOpacity="0.7"
            initial={{ height: 4, y: cy + 68 }}
            animate={{ height: [4, 8 + Math.abs(offset) * 8, 4], y: [cy + 68, cy + 60 - Math.abs(offset) * 4, cy + 68] }}
            transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.12, ease: "easeInOut" }}
          />
        ))}
      </svg>
    </div>
  );
}

/* OPTION 2: CRISP WHITE & TEAL */

const phones = [
  {
    name: "D44",
    subtitle: "Entry Level IP Phone",
    tag: "ENTRY LEVEL",
    img: "/D44.png",
    keyFeatures: [
      "4.3\" (480x272) Colour LCD Display",
      "10 BLF/Function Keys with Tri-Colour LED",
      "4 SIP Accounts",
      "HD Audio (Handset & Speakerphone)",
      "Dual Gigabit Ethernet (10/100/1000)",
      "1x USB Port, 1x RJ9 Headset Jack",
      "Desktop Stand or Wall Mount Option",
    ],
    advanced: [
      "USB Wi-Fi & Bluetooth Support",
      "5-Way Conference Calling",
      "Remote Phonebook, LDAP",
      "Auto Provisioning",
      "Secure SIP over TLS",
      "Hot Desking",
    ],
    protocols: ["SIP2.0 / UDP/TCP/TLS", "RTP/RTCP/SRTP", "IPv6"],
    networking: ["Dual Gigabit Ethernet", "PoE 802.3af/at", "VLAN, QoS, VPN"],
    tagline: "The reliable workhorse for any desk.",
    accentColor: "#2DD4BF",
  },
  {
    name: "E50",
    subtitle: "Mid-Range IP Phone",
    tag: "MOST POPULAR",
    img: "/E50.png",
    keyFeatures: [
      "4.3\" (480x272) Colour Display",
      "36 BLF Keys with Tri-Color LEDs",
      "4 SIP Accounts",
      "HD Audio (Handset & Speakerphone)",
      "Dual Gigabit Ethernet (10/100/1000)",
      "USB Port, RJ9 & EHS Headset Support",
      "Desktop or Wall Mount Option",
    ],
    advanced: [
      "USB Wi-Fi & Bluetooth Support",
      "Remote Phonebook, LDAP",
      "Secure SIP over TLS",
      "Auto Provisioning",
      "Hot Desking",
      "Busy Lamp Field (BLF)",
    ],
    protocols: ["SIP2.0 / UDP/TCP/TLS", "RTP/RTCP/SRTP", "IPv6"],
    networking: ["Dual Gigabit Ethernet", "PoE 802.3af/at", "VLAN, QoS, VPN"],
    tagline: "36 programmable keys — power at your fingertips.",
    accentColor: "#0D9488",
  },
  {
    name: "F60",
    subtitle: "Flagship Touchscreen Phone",
    tag: "FLAGSHIP",
    img: "/F60.png",
    keyFeatures: [
      "7\" (1024x600) Colour Touchscreen",
      "HD Audio (Handset & Speakerphone)",
      "20 SIP Accounts",
      "Built-in Bluetooth & Wi-Fi",
      "Dual Gigabit Ethernet (10/100/1000)",
      "HD Video Support with USB Camera Option",
      "USB Port & RJ9/EHS Headset Support",
    ],
    advanced: [
      "Video Calling via USB Camera",
      "5-Way Conference Calling",
      "Remote Phonebook, LDAP",
      "Secure SIP over TLS",
      "Auto Provisioning",
      "Hot Desking",
    ],
    protocols: ["SIP2.0 / UDP/TCP/TLS", "RTP/RTCP/SRTP", "IPv6"],
    networking: ["Dual Gigabit Ethernet", "PoE 802.3af/at", "VLAN, QoS, VPN"],
    tagline: "7\" touchscreen. Video calling. The future of desk phones.",
    accentColor: "#2DD4BF",
  },
];

export default function Telephony() {
  return (
    <div style={{ backgroundColor: "#FFFFFF", minHeight: "100vh" }}>

      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, #F0FDFB 0%, #E6F7F5 50%, #F8FFFE 100%)",
          paddingTop: "80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", top: -80, right: -80, width: 400, height: 400, background: "radial-gradient(circle, rgba(45,212,191,0.12) 0%, transparent 70%)", borderRadius: "50%" }} />
        <div className="container" style={{ paddingTop: "72px", paddingBottom: "72px" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 mb-5" style={{ background: "rgba(45,212,191,0.12)", border: "1px solid rgba(45,212,191,0.3)", borderRadius: "100px", padding: "6px 14px", color: "#0D9488", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", fontFamily: "Space Grotesk, sans-serif" }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#2DD4BF", display: "inline-block" }} />
                VOIP TELEPHONY
              </div>
              <h1 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 700, color: "#111827", lineHeight: 1.1, marginBottom: "16px" }}>
                HD Voice for<br /><span style={{ color: "#0D9488" }}>Modern Business.</span>
              </h1>
              <p style={{ fontSize: "1.05rem", color: "#6B7280", lineHeight: 1.7, maxWidth: "520px", marginBottom: "28px" }}>
                Three industry-leading IP phones — from the reliable D44 to the flagship F60 touchscreen. All with HD audio, PoE support, and no lock-in contracts.
              </p>
              <Link href="/contact">
                <button className="flex items-center gap-2 font-semibold transition-all hover:scale-105" style={{ backgroundColor: "#2DD4BF", color: "#0D2A25", padding: "14px 28px", borderRadius: "8px", fontSize: "0.95rem", fontFamily: "Space Grotesk, sans-serif", boxShadow: "0 4px 16px rgba(45,212,191,0.4)", border: "none" }}>
                  Get a Quote <ArrowRight size={16} />
                </button>
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.0, delay: 0.4 }} className="hidden lg:flex justify-center items-center">
              <VoIPGraphic />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Phone sections */}
      {phones.map((phone, i) => (
        <section key={phone.name} className="py-20" style={{ backgroundColor: i % 2 === 0 ? "#FFFFFF" : "#F9FAFB" }}>
          <div className="container">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
              {/* Image side */}
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={i % 2 !== 0 ? "lg:order-2" : ""}
              >
                <div style={{ background: "linear-gradient(135deg, #F0FDFB, #E6F7F5)", borderRadius: "24px", padding: "48px", display: "flex", alignItems: "center", justifyContent: "center", border: `1px solid ${phone.accentColor}30` }}>
                  <img src={phone.img} alt={`SafeServ ${phone.name}`} style={{ maxHeight: "280px", objectFit: "contain" }} />
                </div>
              </motion.div>

              {/* Content side */}
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={i % 2 !== 0 ? "lg:order-1" : ""}
              >
                <div className="inline-block mb-3 px-3 py-1 text-xs font-bold tracking-widest rounded" style={{ backgroundColor: `${phone.accentColor}15`, color: phone.accentColor, fontFamily: "Space Grotesk, sans-serif" }}>
                  {phone.tag}
                </div>
                <h2 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 700, color: "#111827", lineHeight: 1.15, marginBottom: "8px" }}>
                  {phone.name} <span style={{ color: phone.accentColor }}>IP Phone</span>
                </h2>
                <p style={{ color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>{phone.tagline}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 600, color: "#111827", marginBottom: "12px", fontSize: "0.85rem", letterSpacing: "0.06em" }}>PHYSICAL SPECS</h4>
                    <ul className="space-y-2">
                      {phone.keyFeatures.map((f, j) => (
                        <li key={j} className="flex items-start gap-2" style={{ fontSize: "0.82rem", color: "#4B5563" }}>
                          <CheckCircle size={13} style={{ color: phone.accentColor, flexShrink: 0, marginTop: 2 }} />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 600, color: "#111827", marginBottom: "12px", fontSize: "0.85rem", letterSpacing: "0.06em" }}>ADVANCED FEATURES</h4>
                    <ul className="space-y-2">
                      {phone.advanced.map((f, j) => (
                        <li key={j} className="flex items-start gap-2" style={{ fontSize: "0.82rem", color: "#4B5563" }}>
                          <CheckCircle size={13} style={{ color: phone.accentColor, flexShrink: 0, marginTop: 2 }} />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div style={{ backgroundColor: "#F9FAFB", borderRadius: "10px", padding: "14px", border: "1px solid #E5E7EB" }}>
                    <div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em", color: phone.accentColor, marginBottom: "8px", fontFamily: "Space Grotesk, sans-serif" }}>PROTOCOLS</div>
                    {phone.protocols.map((p, j) => <div key={j} style={{ fontSize: "0.75rem", color: "#6B7280", marginBottom: "2px" }}>{p}</div>)}
                  </div>
                  <div style={{ backgroundColor: "#F9FAFB", borderRadius: "10px", padding: "14px", border: "1px solid #E5E7EB" }}>
                    <div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em", color: phone.accentColor, marginBottom: "8px", fontFamily: "Space Grotesk, sans-serif" }}>NETWORKING</div>
                    {phone.networking.map((p, j) => <div key={j} style={{ fontSize: "0.75rem", color: "#6B7280", marginBottom: "2px" }}>{p}</div>)}
                  </div>
                </div>

                <Link href="/contact">
                  <button className="flex items-center gap-2 font-semibold transition-all hover:scale-105" style={{ backgroundColor: phone.accentColor, color: "#0D2A25", padding: "12px 24px", borderRadius: "8px", fontSize: "0.9rem", fontFamily: "Space Grotesk, sans-serif", border: "none", boxShadow: `0 4px 16px ${phone.accentColor}40` }}>
                    <Phone size={15} /> Get a Quote for {phone.name}
                  </button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-20" style={{ background: "linear-gradient(135deg, #0D9488 0%, #0F766E 100%)" }}>
        <div className="container text-center">
          <h2 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 700, color: "#FFFFFF", marginBottom: "16px" }}>
            Not sure which phone is right for you?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "32px", maxWidth: "480px", margin: "0 auto 32px" }}>
            Our team will assess your needs and recommend the perfect solution — free of charge, no obligation.
          </p>
          <Link href="/contact">
            <button className="flex items-center gap-2 font-semibold mx-auto transition-all hover:scale-105" style={{ backgroundColor: "#2DD4BF", color: "#0D2A25", padding: "14px 32px", borderRadius: "8px", fontSize: "0.95rem", fontFamily: "Space Grotesk, sans-serif", border: "none", boxShadow: "0 4px 16px rgba(45,212,191,0.4)" }}>
              Talk to an Expert <ChevronRight size={16} />
            </button>
          </Link>
        </div>
      </section>

    </div>
  );
}
