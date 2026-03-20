"use client";

import { motion } from "framer-motion";
import { TrendingUp, BarChart3, Clock4, ArrowRight, CheckCircle2 } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Grow Your Revenue",
    description: "Fill empty slots with our smart demand engine. Owners see up to 40% increase in weekly bookings.",
  },
  {
    icon: BarChart3,
    title: "Powerful Analytics",
    description: "Track peak hours, popular sports, and revenue trends. Data that actually drives decisions.",
  },
  {
    icon: Clock4,
    title: "Save Time",
    description: "No more phone calls for bookings. Your schedule manages itself — so you focus on what matters.",
  },
];

const perks = [
  "Easy one-time turf setup",
  "Automated booking confirmations",
  "Revenue dashboard",
  "Player reviews & ratings",
  "Promotional tools",
  "24/7 support",
];

export default function ForOwnersSection() {
  return (
    <section
      id="for-owners"
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "120px 1.5rem",
        backgroundColor: "var(--bg-dark)",
      }}
      className="grid-bg"
    >
      {/* Background glow */}
      <div style={{
        position: "absolute", top: "50%", right: 0,
        transform: "translateY(-50%)",
        width: 300, height: 300, borderRadius: "50%",
        backgroundColor: "var(--primary)", opacity: 0.04,
        filter: "blur(80px)", pointerEvents: "none"
      }} />

      <div style={{ maxWidth: "80rem", margin: "0 auto", position: "relative" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "4rem",
          alignItems: "center"
        }}>

          {/* Left: Analytics dashboard visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{ position: "relative", paddingTop: 32, paddingBottom: 16 }}
          >
            {/* Main analytics card */}
            <div style={{
              borderRadius: 24, border: "1px solid rgba(255,255,255,0.07)",
              backgroundColor: "var(--bg-card)", overflow: "hidden"
            }}>
              {/* Revenue header */}
              <div style={{
                padding: "20px 24px", borderBottom: "1px solid rgba(255,255,255,0.07)",
                display: "flex", alignItems: "center", justifyContent: "space-between"
              }}>
                <div>
                  <p style={{ color: "var(--text-muted)", fontSize: 12, margin: "0 0 4px" }}>This Week</p>
                  <p style={{ color: "#fff", fontWeight: 700, fontSize: "1.5rem", margin: 0 }}>₹42,800</p>
                </div>
                <div style={{
                  display: "flex", alignItems: "center", gap: 6,
                  padding: "6px 12px", borderRadius: 9999,
                  backgroundColor: "rgba(137,233,0,0.12)",
                  border: "1px solid rgba(137,233,0,0.28)"
                }}>
                  <TrendingUp size={14} style={{ color: "var(--primary)" }} />
                  <span style={{ color: "var(--primary)", fontSize: 12, fontWeight: 700 }}>+24%</span>
                </div>
              </div>

              {/* Bar chart */}
              <div style={{ padding: "20px 24px 24px" }}>
                <p style={{ color: "var(--text-muted)", fontSize: 12, margin: "0 0 16px" }}>Daily Bookings</p>
                <div style={{ display: "flex", alignItems: "flex-end", gap: 6, height: 96 }}>
                  {[40, 70, 55, 85, 65, 90, 75].map((h, i) => (
                    <motion.div
                      key={i}
                      style={{
                        flex: 1, borderRadius: "6px 6px 0 0",
                        background: i === 5 ? "var(--primary)" : "var(--secondary-lighter)",
                        transformOrigin: "bottom",
                        height: `${h}%`
                      }}
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.06 }}
                    />
                  ))}
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(d => (
                    <span key={d} style={{ color: "var(--text-muted)", fontSize: 11, flex: 1, textAlign: "center" }}>{d}</span>
                  ))}
                </div>
              </div>

              {/* Stats row */}
              <div style={{
                padding: "16px 20px", borderTop: "1px solid rgba(255,255,255,0.07)",
                display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, textAlign: "center"
              }}>
                <div>
                  <p style={{ color: "var(--text-muted)", fontSize: 11, margin: "0 0 4px" }}>Bookings Today</p>
                  <p style={{ color: "#fff", fontWeight: 700, fontSize: "1rem", margin: 0 }}>18 slots</p>
                </div>
                <div>
                  <p style={{ color: "var(--text-muted)", fontSize: 11, margin: "0 0 4px" }}>Occupancy</p>
                  <p style={{ color: "var(--primary)", fontWeight: 700, fontSize: "1rem", margin: 0 }}>87%</p>
                </div>
                <div>
                  <p style={{ color: "var(--text-muted)", fontSize: 11, margin: "0 0 4px" }}>Avg. Rating</p>
                  <p style={{ color: "#fff", fontWeight: 700, fontSize: "1rem", margin: 0 }}>4.9 ★</p>
                </div>
              </div>
            </div>

            {/* Floating +40% badge */}
            <motion.div
              style={{
                position: "absolute", top: 0, left: 0,
                padding: "12px 16px", borderRadius: 16,
                border: "1px solid rgba(137,233,0,0.35)",
                backgroundColor: "var(--bg-card)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.4)"
              }}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <p style={{ color: "var(--primary)", fontWeight: 900, fontSize: "1.5rem", margin: 0, lineHeight: 1 }}>+40%</p>
              <p style={{ color: "var(--text-secondary)", fontSize: 12, margin: "4px 0 0" }}>More bookings</p>
            </motion.div>
          </motion.div>

          {/* Right: Copy */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Label */}
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
              For Turf Owners
            </div>

            <h2 style={{
              fontSize: "clamp(1.75rem, 4vw, 3rem)", fontWeight: 900,
              color: "#fff", lineHeight: 1.15, margin: "0 0 20px"
            }}>
              Put your turf on{" "}
              <span style={{ color: "var(--primary)" }}>autopilot</span>
            </h2>

            <p style={{
              color: "var(--text-secondary)", fontSize: "1.0625rem",
              lineHeight: 1.8, marginBottom: "2rem"
            }}>
              Join hundreds of turf owners using Turfsy to maximize revenue, automate bookings, and delight customers.
            </p>

            {/* Benefits */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2rem" }}>
              {benefits.map(({ icon: Icon, title, description }) => (
                <div key={title} style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: 12,
                    backgroundColor: "rgba(137,233,0,0.1)",
                    border: "1px solid rgba(137,233,0,0.28)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0, marginTop: 2
                  }}>
                    <Icon size={18} style={{ color: "var(--primary)" }} />
                  </div>
                  <div>
                    <p style={{ color: "#fff", fontWeight: 600, fontSize: "0.9375rem", margin: "0 0 4px" }}>{title}</p>
                    <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.6, margin: 0 }}>{description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Perks */}
            <div style={{
              display: "grid", gridTemplateColumns: "1fr 1fr",
              gap: "10px 16px", marginBottom: "2rem"
            }}>
              {perks.map(perk => (
                <div key={perk} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <CheckCircle2 size={14} style={{ color: "var(--primary)", flexShrink: 0 }} />
                  <span style={{ color: "var(--text-secondary)", fontSize: "0.875rem" }}>{perk}</span>
                </div>
              ))}
            </div>

            <a
              href="#"
              id="owners-register-btn"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "14px 32px", borderRadius: 12,
                backgroundColor: "var(--primary)", color: "#222",
                fontWeight: 700, fontSize: 16, textDecoration: "none",
                boxShadow: "0 0 24px rgba(137,233,0,0.35)",
                transition: "filter 0.2s"
              }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.filter = "brightness(1.1)"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.filter = "brightness(1)"}
            >
              Register Your Turf
              <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
