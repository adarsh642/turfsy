"use client";

import { motion } from "framer-motion";
import { Star, MessageCircle, MapPin, BellRing, CalendarCheck } from "lucide-react";

export default function AppDownloadSection() {
  return (
    <section
      id="download"
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "120px 1.5rem",
        backgroundColor: "var(--secondary)",
      }}
    >
      {/* Background blobs */}
      <div style={{
        position: "absolute", top: 0, left: "25%",
        width: 384, height: 384, borderRadius: "50%",
        backgroundColor: "var(--primary)", opacity: 0.05,
        filter: "blur(100px)", pointerEvents: "none"
      }} />
      <div style={{
        position: "absolute", bottom: 0, right: "25%",
        width: 256, height: 256, borderRadius: "50%",
        backgroundColor: "var(--primary)", opacity: 0.06,
        filter: "blur(80px)", pointerEvents: "none"
      }} />

      <div style={{ maxWidth: "80rem", margin: "0 auto", position: "relative" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "4rem",
          alignItems: "center"
        }}>

          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "6px 16px", borderRadius: 9999,
              border: "1px solid rgba(137,233,0,0.28)",
              backgroundColor: "rgba(137,233,0,0.08)",
              color: "var(--primary)", fontSize: 12, fontWeight: 600,
              letterSpacing: "0.08em", textTransform: "uppercase" as const,
              marginBottom: "1.5rem"
            }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "var(--primary)", display: "inline-block" }} />
              Mobile App
            </div>

            <h2 style={{
              fontSize: "clamp(2rem, 5vw, 3.25rem)", fontWeight: 900,
              color: "#fff", lineHeight: 1.15, margin: "0 0 20px"
            }}>
              Your turf life lives{" "}
              <span style={{ color: "var(--primary)", display: "block" }}>in your pocket</span>
            </h2>

            <p style={{
              color: "var(--text-secondary)", fontSize: "1.0625rem",
              lineHeight: 1.8, marginBottom: "2.5rem", maxWidth: 480
            }}>
              The full Turfsy experience is on mobile. Real-time notifications, location-based search, and one-tap booking — all in our free app.
            </p>

            {/* Store buttons */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginBottom: "2.5rem" }}>
              {/* Google Play */}
              <motion.a
                href="#"
                id="playstore-btn"
                style={{
                  display: "flex", alignItems: "center", gap: 12,
                  padding: "12px 20px", borderRadius: 16,
                  backgroundColor: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  textDecoration: "none",
                  transition: "background 0.2s, border-color 0.2s"
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(137,233,0,0.06)";
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border-primary)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.05)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                }}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                  <path d="M3 3.5l7.5 8.5-7.5 8.5" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M3 3.5L18.5 10.5L14 13L3 3.5Z" fill="rgba(137,233,0,0.3)" />
                  <path d="M3 20.5L14 11L18.5 13.5L3 20.5Z" fill="rgba(137,233,0,0.2)" />
                  <path d="M18.5 10.5L21.5 12L18.5 13.5" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div>
                  <p style={{ color: "var(--text-muted)", fontSize: 11, margin: "0 0 2px" }}>Get it on</p>
                  <p style={{ color: "#fff", fontWeight: 700, fontSize: 14, margin: 0 }}>Google Play</p>
                </div>
              </motion.a>

              {/* App Store */}
              <motion.a
                href="#"
                id="appstore-btn"
                style={{
                  display: "flex", alignItems: "center", gap: 12,
                  padding: "12px 20px", borderRadius: 16,
                  backgroundColor: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  textDecoration: "none",
                  transition: "background 0.2s, border-color 0.2s"
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(137,233,0,0.06)";
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border-primary)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.05)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                }}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" fill="var(--primary)" />
                </svg>
                <div>
                  <p style={{ color: "var(--text-muted)", fontSize: 11, margin: "0 0 2px" }}>Download on the</p>
                  <p style={{ color: "#fff", fontWeight: 700, fontSize: 14, margin: 0 }}>App Store</p>
                </div>
              </motion.a>
            </div>

            {/* Social proof */}
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{ display: "flex" }}>
                {[ "#22c55e", "#14b8a6", "#84cc16", "#10b981" ].map((color, i) => (
                  <div key={i} style={{
                    width: 32, height: 32, borderRadius: "50%",
                    backgroundColor: color, border: "2px solid var(--secondary)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#fff", fontSize: 12, fontWeight: 700,
                    marginLeft: i > 0 ? -12 : 0, zIndex: 4 - i
                  }}>
                    {["A", "R", "S", "K"][i]}
                  </div>
                ))}
              </div>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 2 }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} style={{ color: "var(--primary)" }} fill="var(--primary)" />
                  ))}
                </div>
                <p style={{ color: "var(--text-secondary)", fontSize: 12, margin: 0 }}>
                  Loved by <strong style={{ color: "#fff" }}>50,000+</strong> players
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div style={{ position: "relative", padding: "0 3rem" }}>
              {/* Bottom glow */}
              <div style={{
                position: "absolute", bottom: -24, left: "50%", transform: "translateX(-50%)",
                width: 192, height: 56, backgroundColor: "var(--primary)",
                opacity: 0.2, filter: "blur(40px)", borderRadius: "50%", pointerEvents: "none"
              }} />

              {/* Phone hardware */}
              <div style={{
                position: "relative", width: 260, backgroundColor: "var(--secondary-lighter)",
                borderRadius: "3rem", border: "4px solid var(--secondary-lighter)",
                boxShadow: "0 24px 64px rgba(0,0,0,0.5)", overflow: "hidden"
              }}>
                {/* Notch */}
                <div style={{
                  position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
                  width: 100, height: 24, backgroundColor: "var(--secondary-lighter)",
                  borderRadius: "0 0 16px 16px", zIndex: 10
                }} />

                {/* Screen */}
                <div style={{
                  backgroundColor: "var(--bg-dark)", borderRadius: "2.5rem",
                  overflow: "hidden", minHeight: 520, paddingTop: 32, paddingBottom: 16
                }}>
                  {/* Status Bar */}
                  <div style={{ padding: "8px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ color: "#fff", fontSize: 12, fontWeight: 600 }}>9:41</span>
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <svg width="16" height="12" viewBox="0 0 16 12" fill="none"><rect x="0.5" y="0.5" width="13" height="11" rx="2.5" stroke="white" strokeOpacity="0.4"/><rect x="2" y="2" width="10" height="8" rx="1" fill="white"/><path d="M15 4V8" stroke="white" strokeOpacity="0.4" strokeLinecap="round"/></svg>
                    </div>
                  </div>

                  {/* App Header */}
                  <div style={{ padding: "12px 20px 20px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                      <div>
                        <p style={{ color: "var(--text-muted)", fontSize: 12, margin: "0 0 2px" }}>Good morning 👋</p>
                        <p style={{ color: "#fff", fontWeight: 700, fontSize: 16, margin: 0 }}>Find your turf</p>
                      </div>
                      <div style={{ width: 36, height: 36, borderRadius: "50%", backgroundColor: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <span style={{ color: "#222", fontSize: 14, fontWeight: 900 }}>A</span>
                      </div>
                    </div>
                    {/* Search bar */}
                    <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 14px", borderRadius: 14, backgroundColor: "var(--secondary)", border: "1px solid rgba(255,255,255,0.07)" }}>
                      <MapPin size={14} style={{ color: "var(--primary)" }} />
                      <span style={{ color: "var(--text-muted)", fontSize: 13 }}>Search nearby...</span>
                    </div>
                  </div>

                  {/* Chips */}
                  <div style={{ padding: "0 20px 20px", display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {["⚽ Football", "🏏 Cricket", "🏸 Badminton"].map(s => (
                      <div key={s} style={{ padding: "6px 14px", borderRadius: 999, backgroundColor: "var(--secondary)", border: "1px solid rgba(255,255,255,0.07)", color: "var(--text-secondary)", fontSize: 12, whiteSpace: "nowrap" }}>
                        {s}
                      </div>
                    ))}
                  </div>

                  {/* Turf card */}
                  <div style={{ margin: "0 16px 16px", borderRadius: 20, backgroundColor: "var(--secondary)", border: "1px solid rgba(255,255,255,0.07)", overflow: "hidden" }}>
                    <div style={{ height: 120, background: "linear-gradient(135deg, rgba(20,60,20,0.8), rgba(30,80,20,0.4))", position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="64" height="64" viewBox="0 0 64 64" fill="none"><rect x="4" y="4" width="56" height="56" rx="8" stroke="rgba(137,233,0,0.4)" strokeWidth="1.5"/><circle cx="32" cy="32" r="10" stroke="rgba(137,233,0,0.4)" strokeWidth="1.5"/><line x1="4" y1="32" x2="60" y2="32" stroke="rgba(137,233,0,0.3)"/></svg>
                      <div style={{ position: "absolute", top: 10, right: 10, padding: "4px 10px", borderRadius: 999, backgroundColor: "rgba(137,233,0,0.15)", border: "1px solid rgba(137,233,0,0.3)" }}>
                        <span style={{ color: "var(--primary)", fontSize: 11, fontWeight: 700 }}>Available</span>
                      </div>
                    </div>
                    <div style={{ padding: 14 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
                        <p style={{ color: "#fff", fontWeight: 700, fontSize: 14, margin: 0 }}>Green Arena FC</p>
                        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                          <Star size={10} style={{ color: "var(--primary)" }} />
                          <span style={{ color: "var(--primary)", fontSize: 12, fontWeight: 700 }}>4.9</span>
                        </div>
                      </div>
                      <p style={{ color: "var(--text-muted)", fontSize: 12, margin: "0 0 12px" }}>1.2 km · Football</p>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <p style={{ color: "var(--primary)", fontWeight: 800, fontSize: 14, margin: 0 }}>₹700/hr</p>
                        <div style={{ padding: "6px 16px", borderRadius: 999, backgroundColor: "var(--primary)", color: "#222", fontSize: 12, fontWeight: 800 }}>Book</div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Nav */}
                  <div style={{ margin: "0 16px", padding: "14px", borderRadius: 20, backgroundColor: "var(--secondary)", border: "1px solid rgba(255,255,255,0.07)", display: "flex", justifyContent: "space-around" }}>
                    <MapPin size={20} style={{ color: "var(--primary)" }} />
                    <CalendarCheck size={20} style={{ color: "var(--text-muted)" }} />
                    <MessageCircle size={20} style={{ color: "var(--text-muted)" }} />
                    <BellRing size={20} style={{ color: "var(--text-muted)" }} />
                  </div>
                </div>
              </div>

              {/* Floating Notifications */}
              <motion.div
                style={{
                  position: "absolute", right: -8, top: 80, zIndex: 20,
                  padding: "12px 14px", borderRadius: 16, backgroundColor: "var(--bg-card)",
                  border: "1px solid rgba(137,233,0,0.3)", boxShadow: "0 12px 32px rgba(0,0,0,0.4)",
                  display: "flex", alignItems: "center", gap: 10, width: 200
                }}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div style={{ width: 28, height: 28, borderRadius: "50%", backgroundColor: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <BellRing size={14} style={{ color: "#222" }} />
                </div>
                <div style={{ minWidth: 0 }}>
                  <p style={{ color: "#fff", fontWeight: 700, fontSize: 13, margin: "0 0 2px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>Booking Confirmed!</p>
                  <p style={{ color: "var(--text-muted)", fontSize: 11, margin: 0, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>Green Arena · 6 PM</p>
                </div>
              </motion.div>

              <motion.div
                style={{
                  position: "absolute", left: -8, bottom: 120, zIndex: 20,
                  padding: "10px 14px", borderRadius: 16, backgroundColor: "var(--bg-card)",
                  border: "1px solid rgba(137,233,0,0.3)", boxShadow: "0 12px 32px rgba(0,0,0,0.4)"
                }}
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 3, delay: 1, repeat: Infinity, ease: "easeInOut" }}
              >
                <p style={{ color: "var(--primary)", fontWeight: 900, fontSize: 14, margin: "0 0 2px" }}>⚡ Instant</p>
                <p style={{ color: "var(--text-muted)", fontSize: 11, margin: 0 }}>Confirmation</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
