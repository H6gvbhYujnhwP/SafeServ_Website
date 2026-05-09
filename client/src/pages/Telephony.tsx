import { motion } from "framer-motion";
import { Link } from "wouter";
import { CheckCircle2, ArrowRight, Phone } from "lucide-react";

const phones = [
  {
    model: "D44",
    subtitle: "Entry-Level IP Phone",
    tagline: "The reliable workhorse for every desk.",
    img: "/manus-storage/VoIPPhoneD44-1_920eb732.png",
    keyFeatures: [
      "4.3\" (480x272) Colour LCD Display",
      "10 BLF/Function Keys with Tri-Colour LED",
      "4 SIP Accounts",
      "HD Audio (Handset & Speakerphone)",
      "Dual Gigabit Ethernet (10/100/1000)",
      "PoE 802.3af/at Support",
      "Bluetooth & EHS Compatible",
      "Desktop Stand or Wall Mount",
    ],
    protocols: ["SIP2.0 / UDP/TCP/TLS", "RTP/RTCP/SRTP", "IPv6"],
    networking: ["Dual Gigabit Ethernet", "PoE 802.3af/at", "VLAN, QoS, VPN"],
    advanced: ["USB Wi-Fi & Bluetooth", "5-Way Conference Calling", "Remote Phonebook, LDAP", "Auto Provisioning", "Secure SIP over TLS", "Hot Desking"],
    color: "#2DD4BF",
  },
  {
    model: "E50",
    subtitle: "Mid-Range IP Phone",
    tagline: "Power and flexibility for busy teams.",
    img: "/manus-storage/VoIPPhoneE50_55decede.png",
    keyFeatures: [
      "4.3\" (480x272) Colour LCD Display",
      "36 BLF Keys with Tri-Color LEDs",
      "4 SIP Accounts",
      "HD Audio (Handset & Speakerphone)",
      "Dual Gigabit Ethernet (10/100/1000)",
      "USB Port, RJ9 & EHS Headset Support",
      "5-Way Conference Calling",
      "Desktop or Wall Mount Option",
    ],
    protocols: ["SIP2.0 / UDP/TCP/TLS", "RTP/RTCP/SRTP", "IPv6"],
    networking: ["Dual Gigabit Ethernet", "PoE 802.3af/at", "VLAN, QoS, VPN"],
    advanced: ["USB Wi-Fi & Bluetooth", "Remote Phonebook, LDAP", "Secure SIP over TLS", "Auto Provisioning", "Hot Desking", "Busy Lamp Field"],
    color: "#2DD4BF",
  },
  {
    model: "F60",
    subtitle: "Executive Touchscreen Phone",
    tagline: "The ultimate communication hub for leaders.",
    img: "/manus-storage/VoIPPhoneF60Safeservbrochure_7e10be5d.png",
    keyFeatures: [
      "7\" (1024x600) Colour Touchscreen",
      "HD Audio (Handset & Speakerphone)",
      "20 SIP Accounts",
      "Built-in Bluetooth & Wi-Fi",
      "Dual Gigabit Ethernet (10/100/1000)",
      "HD Video Support with USB Camera",
      "5-Way Conference Calling",
      "USB Port & RJ9/EHS Headset Support",
    ],
    protocols: ["SIP2.0 / UDP/TCP/TLS", "RTP/RTCP/SRTP", "IPv6"],
    networking: ["Dual Gigabit Ethernet", "PoE 802.3af/at", "VLAN, QoS, VPN"],
    advanced: ["Video Calling via USB Camera", "5-Way Conference Calling", "Remote Phonebook, LDAP", "Secure SIP over TLS", "Auto Provisioning", "Hot Desking"],
    color: "#F59E0B",
  },
];

export default function Telephony() {
  return (
    <div style={{ backgroundColor: '#112744', paddingTop: '80px' }}>
      {/* Hero */}
      <section
        className="relative py-24 overflow-hidden"
        style={{
          backgroundImage: `url('/manus-storage/voip_hero_ffef5711.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(10, 22, 40, 0.70)' }} />
        <div className="container relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-xs font-semibold tracking-widest mb-3" style={{ color: '#2DD4BF' }}>VOIP TELEPHONY</p>
            <h1 className="text-6xl lg:text-8xl font-black leading-none mb-6" style={{ fontFamily: 'Barlow Condensed, sans-serif', color: '#FFFFFF' }}>
              IP PHONES<br />
              <span style={{ color: '#2DD4BF' }}>BUILT FOR</span><br />
              BUSINESS.
            </h1>
            <p className="text-lg max-w-xl mb-8" style={{ color: '#94A3B8' }}>
              From entry-level desk phones to executive touchscreen systems — SafeServ's VoIP range delivers HD audio, enterprise features, and zero lock-in contracts.
            </p>
            <Link href="/contact">
              <button
                className="flex items-center gap-2 px-8 py-4 font-bold rounded transition-all hover:scale-105"
                style={{ backgroundColor: '#F59E0B', color: '#112744', fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '0.05em', fontSize: '1.05rem' }}
              >
                GET A QUOTE <ArrowRight size={16} />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Phone Cards */}
      <section className="py-24">
        <div className="container">
          <div className="space-y-24">
            {phones.map((phone, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Image side */}
                <div className={`${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div
                    className="rounded-2xl overflow-hidden relative"
                    style={{ backgroundColor: '#0A1628', border: `1px solid ${phone.color}25` }}
                  >
                    <div className="absolute top-6 left-6 z-10">
                      <span
                        className="text-5xl font-black"
                        style={{ fontFamily: 'Barlow Condensed, sans-serif', color: phone.color }}
                      >
                        {phone.model}
                      </span>
                      <p className="text-xs tracking-widest mt-1" style={{ color: '#7A8FA6' }}>{phone.subtitle.toUpperCase()}</p>
                    </div>
                    <img
                      src={phone.img}
                      alt={`SafeServ ${phone.model} IP Phone`}
                      className="w-full object-contain"
                      style={{ maxHeight: '420px', padding: '2rem' }}
                    />
                  </div>
                </div>

                {/* Content side */}
                <div className={`${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <p className="text-sm italic mb-4" style={{ color: phone.color }}>{phone.tagline}</p>
                  <h2 className="text-4xl lg:text-5xl font-black mb-6 text-white" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
                    {phone.model} IP PHONE
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {phone.keyFeatures.map((f, j) => (
                      <div key={j} className="flex items-start gap-2">
                        <CheckCircle2 size={14} style={{ color: phone.color, flexShrink: 0, marginTop: 2 }} />
                        <span className="text-sm" style={{ color: '#94A3B8' }}>{f}</span>
                      </div>
                    ))}
                  </div>

                  {/* Specs table */}
                  <div className="grid grid-cols-3 gap-3 mb-8">
                    {[
                      { label: "Protocols", items: phone.protocols },
                      { label: "Networking", items: phone.networking },
                      { label: "Advanced", items: phone.advanced.slice(0, 3) },
                    ].map((col, k) => (
                      <div key={k} className="p-4 rounded-lg" style={{ backgroundColor: '#1A3352', border: '1px solid rgba(255,255,255,0.06)' }}>
                        <p className="text-xs font-semibold tracking-widest mb-3" style={{ color: phone.color }}>{col.label.toUpperCase()}</p>
                        {col.items.map((item, l) => (
                          <p key={l} className="text-xs mb-1" style={{ color: '#7A8FA6' }}>{item}</p>
                        ))}
                      </div>
                    ))}
                  </div>

                  <Link href="/contact">
                    <button
                      className="flex items-center gap-2 px-6 py-3 font-semibold rounded transition-all hover:scale-105"
                      style={{
                        border: `1px solid ${phone.color}50`,
                        color: phone.color,
                        fontFamily: 'Barlow Condensed, sans-serif',
                        letterSpacing: '0.05em',
                      }}
                    >
                      <Phone size={14} /> ENQUIRE ABOUT {phone.model}
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: '#1A3352', borderTop: '1px solid rgba(45, 212, 191, 0.15)' }}>
        <div className="container text-center">
          <h2 className="text-5xl font-black mb-4 text-white" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
            NOT SURE WHICH PHONE IS RIGHT FOR YOU?
          </h2>
          <p className="text-lg mb-8" style={{ color: '#7A8FA6' }}>
            Talk to James. He'll recommend the perfect setup for your team — with no pressure and no lock-in.
          </p>
          <Link href="/contact">
            <button
              className="px-10 py-4 font-bold text-lg rounded transition-all hover:scale-105"
              style={{ backgroundColor: '#F59E0B', color: '#112744', fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '0.05em', boxShadow: '0 0 30px rgba(245, 158, 11, 0.3)' }}
            >
              BOOK A FREE CONSULTATION
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
