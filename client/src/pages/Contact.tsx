import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Globe, MapPin, Send, CheckCircle2 } from "lucide-react";

const services = [
  "VoIP Telephony",
  "IT Support (Sweetbyte)",
  "Connectivity",
  "AI Solutions",
  "Website / Digital",
  "General Enquiry",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to a backend or form service
    setSubmitted(true);
  };

  return (
    <div style={{ backgroundColor: '#1A3352', paddingTop: '80px' }}>
      {/* Hero */}
      <section className="relative py-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, #112744 0%, #1A3352 100%)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url('/manus-storage/hero_bg_b8439bb6.jpg')`, backgroundSize: 'cover' }} />
        <div className="container relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-xs font-semibold tracking-widest mb-3" style={{ color: '#2DD4BF' }}>GET IN TOUCH</p>
            <h1 className="text-6xl lg:text-7xl font-black leading-none mb-4" style={{ fontFamily: 'Barlow Condensed, sans-serif', color: '#FFFFFF' }}>
              LET'S TALK<br />
              <span style={{ color: '#2DD4BF' }}>TECHNOLOGY.</span>
            </h1>
            <p className="text-lg max-w-xl" style={{ color: '#94A3B8' }}>
              No pressure. No obligation. Just an honest conversation about what technology can do for your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <h2 className="text-3xl font-black mb-8 text-white" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
                SPEAK TO JAMES DIRECTLY
              </h2>

              <div className="space-y-6 mb-12">
                <a href="tel:01245850140" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(45, 212, 191, 0.12)', border: '1px solid rgba(45, 212, 191, 0.2)' }}>
                    <Phone size={18} style={{ color: '#2DD4BF' }} />
                  </div>
                  <div>
                    <p className="text-xs tracking-widest mb-0.5" style={{ color: '#475569' }}>PHONE</p>
                    <p className="text-base font-semibold text-white group-hover:text-teal-400 transition-colors">01245 850140</p>
                  </div>
                </a>

                <a href="mailto:hello@safeserv.co.uk" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(45, 212, 191, 0.12)', border: '1px solid rgba(45, 212, 191, 0.2)' }}>
                    <Mail size={18} style={{ color: '#2DD4BF' }} />
                  </div>
                  <div>
                    <p className="text-xs tracking-widest mb-0.5" style={{ color: '#475569' }}>EMAIL</p>
                    <p className="text-base font-semibold text-white group-hover:text-teal-400 transition-colors">hello@safeserv.co.uk</p>
                  </div>
                </a>

                <a href="https://www.safeserv.co.uk" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(45, 212, 191, 0.12)', border: '1px solid rgba(45, 212, 191, 0.2)' }}>
                    <Globe size={18} style={{ color: '#2DD4BF' }} />
                  </div>
                  <div>
                    <p className="text-xs tracking-widest mb-0.5" style={{ color: '#475569' }}>WEBSITE</p>
                    <p className="text-base font-semibold text-white group-hover:text-teal-400 transition-colors">www.safeserv.co.uk</p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(45, 212, 191, 0.12)', border: '1px solid rgba(45, 212, 191, 0.2)' }}>
                    <MapPin size={18} style={{ color: '#2DD4BF' }} />
                  </div>
                  <div>
                    <p className="text-xs tracking-widest mb-0.5" style={{ color: '#475569' }}>LOCATION</p>
                    <p className="text-base font-semibold text-white">Essex, United Kingdom</p>
                  </div>
                </div>
              </div>

              {/* Promise */}
              <div className="p-6 rounded-xl" style={{ backgroundColor: '#1E3A5F', border: '1px solid rgba(45, 212, 191, 0.15)' }}>
                <p className="text-xs font-semibold tracking-widest mb-3" style={{ color: '#2DD4BF' }}>THE SAFESERV PROMISE</p>
                {["No lock-in contracts", "No obligation consultations", "Fast response times", "Honest, plain-speaking advice"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 mb-2">
                    <CheckCircle2 size={13} style={{ color: '#2DD4BF' }} />
                    <span className="text-sm" style={{ color: '#94A3B8' }}>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              {submitted ? (
                <div
                  className="p-12 rounded-2xl text-center"
                  style={{ backgroundColor: '#1E3A5F', border: '1px solid rgba(45, 212, 191, 0.3)' }}
                >
                  <CheckCircle2 size={48} style={{ color: '#2DD4BF', margin: '0 auto 24px' }} />
                  <h3 className="text-3xl font-black mb-4 text-white" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
                    MESSAGE RECEIVED!
                  </h3>
                  <p className="text-base mb-2" style={{ color: '#94A3B8' }}>
                    Thanks for getting in touch. James will be in contact with you shortly.
                  </p>
                  <p className="text-sm" style={{ color: '#475569' }}>
                    In the meantime, feel free to call us on 01245 850140.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="p-10 rounded-2xl"
                  style={{ backgroundColor: '#1E3A5F', border: '1px solid rgba(45, 212, 191, 0.15)' }}
                >
                  <h3 className="text-2xl font-black mb-8 text-white" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
                    SEND US A MESSAGE
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className="block text-xs font-semibold tracking-widest mb-2" style={{ color: '#7A8FA6' }}>YOUR NAME *</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg text-sm text-white outline-none transition-all"
                        style={{ backgroundColor: '#1A3352', border: '1px solid rgba(255,255,255,0.08)', color: '#FFFFFF' }}
                        onFocus={(e) => (e.target.style.borderColor = 'rgba(45, 212, 191, 0.5)')}
                        onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.08)')}
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold tracking-widest mb-2" style={{ color: '#7A8FA6' }}>COMPANY</label>
                      <input
                        type="text"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all"
                        style={{ backgroundColor: '#1A3352', border: '1px solid rgba(255,255,255,0.08)', color: '#FFFFFF' }}
                        onFocus={(e) => (e.target.style.borderColor = 'rgba(45, 212, 191, 0.5)')}
                        onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.08)')}
                        placeholder="Your Company Ltd"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className="block text-xs font-semibold tracking-widest mb-2" style={{ color: '#7A8FA6' }}>EMAIL ADDRESS *</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all"
                        style={{ backgroundColor: '#1A3352', border: '1px solid rgba(255,255,255,0.08)', color: '#FFFFFF' }}
                        onFocus={(e) => (e.target.style.borderColor = 'rgba(45, 212, 191, 0.5)')}
                        onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.08)')}
                        placeholder="john@company.co.uk"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold tracking-widest mb-2" style={{ color: '#7A8FA6' }}>PHONE NUMBER</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all"
                        style={{ backgroundColor: '#1A3352', border: '1px solid rgba(255,255,255,0.08)', color: '#FFFFFF' }}
                        onFocus={(e) => (e.target.style.borderColor = 'rgba(45, 212, 191, 0.5)')}
                        onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.08)')}
                        placeholder="07700 900000"
                      />
                    </div>
                  </div>

                  <div className="mb-5">
                    <label className="block text-xs font-semibold tracking-widest mb-2" style={{ color: '#7A8FA6' }}>I'M INTERESTED IN</label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all appearance-none"
                      style={{ backgroundColor: '#1A3352', border: '1px solid rgba(255,255,255,0.08)', color: form.service ? '#FFFFFF' : '#475569' }}
                      onFocus={(e) => (e.target.style.borderColor = 'rgba(45, 212, 191, 0.5)')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.08)')}
                    >
                      <option value="" style={{ backgroundColor: '#1A3352' }}>Select a service...</option>
                      {services.map((s) => (
                        <option key={s} value={s} style={{ backgroundColor: '#1A3352' }}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div className="mb-8">
                    <label className="block text-xs font-semibold tracking-widest mb-2" style={{ color: '#7A8FA6' }}>YOUR MESSAGE *</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all resize-none"
                      style={{ backgroundColor: '#1A3352', border: '1px solid rgba(255,255,255,0.08)', color: '#FFFFFF' }}
                      onFocus={(e) => (e.target.style.borderColor = 'rgba(45, 212, 191, 0.5)')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.08)')}
                      placeholder="Tell us about your business and what you're looking for..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 py-4 font-bold text-base rounded transition-all hover:scale-105"
                    style={{
                      backgroundColor: '#F59E0B',
                      color: '#112744',
                      fontFamily: 'Barlow Condensed, sans-serif',
                      letterSpacing: '0.05em',
                      fontSize: '1.05rem',
                      boxShadow: '0 0 30px rgba(245, 158, 11, 0.3)',
                    }}
                  >
                    SEND MESSAGE <Send size={16} />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
