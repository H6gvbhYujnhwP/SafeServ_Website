import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Globe, MapPin, Send, CheckCircle } from "lucide-react";

function ContactGraphic() {
  const channels = [
    { label: "Phone", x: 120, y: 100 },
    { label: "Email", x: 320, y: 100 },
    { label: "Chat", x: 80, y: 260 },
    { label: "Form", x: 360, y: 260 },
    { label: "WhatsApp", x: 220, y: 60 },
    { label: "Callback", x: 220, y: 340 },
  ];
  return (
    <div style={{ width: "100%", height: "420px" }}>
      <svg viewBox="0 0 440 420" style={{ width: "100%", height: "100%" }} xmlns="http://www.w3.org/2000/svg">
        {/* Routing lines from channels to central inbox */}
        {channels.map((c, i) => (
          <motion.line key={i}
            x1={c.x} y1={c.y} x2={220} y2={200}
            stroke="#2DD4BF" strokeWidth="1.2" strokeDasharray="5 4" strokeOpacity="0.45"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
            transition={{ duration: 1.0, delay: i * 0.15 }}
          />
        ))}
        {/* Animated message dots travelling to inbox */}
        {channels.map((c, i) => (
          <motion.circle key={`msg-${i}`} r={5} fill="#2DD4BF"
            animate={{ cx: [c.x, 220, c.x], cy: [c.y, 200, c.y], opacity: [0, 1, 0] }}
            transition={{ duration: 2.0, repeat: Infinity, delay: i * 0.5, ease: "easeInOut" }}
          />
        ))}
        {/* Channel nodes */}
        {channels.map((c, i) => (
          <g key={`ch-${i}`}>
            <motion.circle cx={c.x} cy={c.y} r={24}
              fill="rgba(45,212,191,0.1)" stroke="#2DD4BF" strokeWidth="1.5"
              initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
            />
            <motion.text x={c.x} y={c.y + 4} textAnchor="middle"
              fill="#0D9488" fontSize="8" fontWeight="700" fontFamily="Space Grotesk, sans-serif"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 + i * 0.12 }}
            >{c.label}</motion.text>
          </g>
        ))}
        {/* Central inbox hub */}
        <motion.circle cx={220} cy={200} r={44}
          fill="#2DD4BF"
          animate={{ r: [44, 48, 44] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <text x={220} y={196} textAnchor="middle" fill="#0D2A25" fontSize="10" fontWeight="800" fontFamily="Space Grotesk, sans-serif">SafeServ</text>
        <text x={220} y={210} textAnchor="middle" fill="#0D2A25" fontSize="8" fontWeight="600" fontFamily="Space Grotesk, sans-serif">Inbox</text>
        {/* Response time badge */}
        <motion.rect x="130" y="380" width="180" height="26" rx="13"
          fill="rgba(45,212,191,0.15)" stroke="#2DD4BF" strokeWidth="1"
          animate={{ opacity: [0.7, 1, 0.7] }} transition={{ duration: 2.5, repeat: Infinity }}
        />
        <text x="220" y="397" textAnchor="middle" fill="#0D9488" fontSize="9" fontWeight="700" fontFamily="Space Grotesk, sans-serif">FAST RESPONSE GUARANTEED</text>
      </svg>
    </div>
  );
}

const services = [
  "VoIP Telephony",
  "IT Support",
  "Connectivity",
  "AI Solutions",
  "Website / Digital",
  "General Enquiry",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle = {
    width: "100%",
    padding: "12px 16px",
    borderRadius: "8px",
    fontSize: "0.9rem",
    color: "#111827",
    backgroundColor: "#FFFFFF",
    border: "1px solid #E5E7EB",
    outline: "none",
    fontFamily: "Space Grotesk, sans-serif",
  };

  return (
    <div style={{ backgroundColor: "#FFFFFF", minHeight: "100vh" }}>
      {/* Hero */}
      <section style={{ position: "relative", paddingTop: "100px", paddingBottom: "60px", background: "linear-gradient(135deg, #F0FDFB 0%, #E6FFFA 50%, #F0FDF4 100%)", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -100, right: -100, width: 500, height: 500, borderRadius: "50%", background: "rgba(45,212,191,0.07)", pointerEvents: "none" }} />
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="inline-flex items-center gap-2 mb-5" style={{ background: "rgba(45,212,191,0.12)", border: "1px solid rgba(45,212,191,0.3)", borderRadius: "100px", padding: "6px 16px", color: "#0D9488", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em" }}>
                GET IN TOUCH
              </div>
              <h1 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800, color: "#111827", lineHeight: 1.1, marginBottom: "16px" }}>
                Let's Talk<br /><span style={{ color: "#0D9488" }}>Technology.</span>
              </h1>
              <p style={{ fontSize: "1.05rem", color: "#4B5563", lineHeight: 1.75, maxWidth: "480px" }}>
                No pressure. No obligation. Just an honest conversation about what technology can do for your business.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.0, delay: 0.4 }} className="hidden lg:flex justify-center items-center">
              <ContactGraphic />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section style={{ backgroundColor: "#F9FAFB", paddingTop: "72px", paddingBottom: "72px" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-2">
              <h2 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.4rem", fontWeight: 700, color: "#111827", marginBottom: "28px" }}>Speak to James directly</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "32px" }}>
                {[
                  { icon: Phone, label: "PHONE", value: "01245 850140", href: "tel:01245850140" },
                  { icon: Mail, label: "EMAIL", value: "hello@safeserv.co.uk", href: "mailto:hello@safeserv.co.uk" },
                  { icon: Globe, label: "WEBSITE", value: "www.safeserv.co.uk", href: "https://www.safeserv.co.uk" },
                  { icon: MapPin, label: "LOCATION", value: "Essex, United Kingdom", href: undefined },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div style={{ width: 48, height: 48, borderRadius: "12px", backgroundColor: "rgba(45,212,191,0.1)", border: "1px solid rgba(45,212,191,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <item.icon size={18} style={{ color: "#0D9488" }} />
                    </div>
                    <div>
                      <div style={{ fontSize: "0.65rem", fontWeight: 700, color: "#9CA3AF", letterSpacing: "0.1em", marginBottom: "2px" }}>{item.label}</div>
                      {item.href ? (
                        <a href={item.href} style={{ fontSize: "0.95rem", fontWeight: 600, color: "#111827", textDecoration: "none" }}>{item.value}</a>
                      ) : (
                        <div style={{ fontSize: "0.95rem", fontWeight: 600, color: "#111827" }}>{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ backgroundColor: "#FFFFFF", borderRadius: "16px", padding: "24px", border: "1px solid #E5E7EB" }}>
                <div style={{ fontSize: "0.65rem", fontWeight: 700, color: "#0D9488", letterSpacing: "0.1em", marginBottom: "14px" }}>THE SAFESERV PROMISE</div>
                {["No lock-in contracts", "No obligation consultations", "Fast response times", "Honest, plain-speaking advice"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 mb-2" style={{ fontSize: "0.85rem", color: "#374151" }}>
                    <CheckCircle size={14} style={{ color: "#2DD4BF" }} />{item}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Form */}
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-3">
              {submitted ? (
                <div style={{ backgroundColor: "#FFFFFF", borderRadius: "20px", padding: "60px 40px", border: "1px solid #E5E7EB", textAlign: "center" }}>
                  <CheckCircle size={52} style={{ color: "#2DD4BF", margin: "0 auto 20px" }} />
                  <h3 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.5rem", fontWeight: 700, color: "#111827", marginBottom: "12px" }}>Message Received!</h3>
                  <p style={{ color: "#4B5563", marginBottom: "8px" }}>Thanks for getting in touch. James will be in contact with you shortly.</p>
                  <p style={{ fontSize: "0.875rem", color: "#9CA3AF" }}>In the meantime, feel free to call us on 01245 850140.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ backgroundColor: "#FFFFFF", borderRadius: "20px", padding: "40px", border: "1px solid #E5E7EB" }}>
                  <h3 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.2rem", fontWeight: 700, color: "#111827", marginBottom: "28px" }}>Send us a message</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label style={{ display: "block", fontSize: "0.7rem", fontWeight: 700, color: "#6B7280", letterSpacing: "0.08em", marginBottom: "8px" }}>YOUR NAME *</label>
                      <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} style={inputStyle} placeholder="John Smith"
                        onFocus={(e) => (e.target.style.borderColor = "#2DD4BF")} onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")} />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: "0.7rem", fontWeight: 700, color: "#6B7280", letterSpacing: "0.08em", marginBottom: "8px" }}>COMPANY</label>
                      <input type="text" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} style={inputStyle} placeholder="Your Company Ltd"
                        onFocus={(e) => (e.target.style.borderColor = "#2DD4BF")} onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")} />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label style={{ display: "block", fontSize: "0.7rem", fontWeight: 700, color: "#6B7280", letterSpacing: "0.08em", marginBottom: "8px" }}>EMAIL ADDRESS *</label>
                      <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} style={inputStyle} placeholder="john@company.co.uk"
                        onFocus={(e) => (e.target.style.borderColor = "#2DD4BF")} onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")} />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: "0.7rem", fontWeight: 700, color: "#6B7280", letterSpacing: "0.08em", marginBottom: "8px" }}>PHONE NUMBER</label>
                      <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} style={inputStyle} placeholder="07700 900000"
                        onFocus={(e) => (e.target.style.borderColor = "#2DD4BF")} onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")} />
                    </div>
                  </div>
                  <div style={{ marginBottom: "20px" }}>
                    <label style={{ display: "block", fontSize: "0.7rem", fontWeight: 700, color: "#6B7280", letterSpacing: "0.08em", marginBottom: "8px" }}>I'M INTERESTED IN</label>
                    <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} style={{ ...inputStyle, appearance: "none" as const }}
                      onFocus={(e) => (e.target.style.borderColor = "#2DD4BF")} onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}>
                      <option value="">Select a service...</option>
                      {services.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div style={{ marginBottom: "28px" }}>
                    <label style={{ display: "block", fontSize: "0.7rem", fontWeight: 700, color: "#6B7280", letterSpacing: "0.08em", marginBottom: "8px" }}>YOUR MESSAGE *</label>
                    <textarea required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={5} style={{ ...inputStyle, resize: "vertical" as const }} placeholder="Tell us about your business and what you're looking for..."
                      onFocus={(e) => (e.target.style.borderColor = "#2DD4BF")} onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")} />
                  </div>
                  <motion.button whileHover={{ scale: 1.02, boxShadow: "0 8px 30px rgba(45,212,191,0.4)" }} whileTap={{ scale: 0.97 }} type="submit" className="flex items-center justify-center gap-2 w-full font-semibold" style={{ backgroundColor: "#2DD4BF", color: "#0D2A25", padding: "15px", borderRadius: "8px", fontSize: "1rem", fontFamily: "Space Grotesk, sans-serif", border: "none", cursor: "pointer" }}>
                    <Send size={16} /> Send Message
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
