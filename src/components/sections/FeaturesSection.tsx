"use client";

import { motion } from "framer-motion";
import { CalendarCheck, Wifi, LayoutDashboard, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: CalendarCheck,
    title: "Easy Booking",
    description: "Book any turf in under a minute. Pick your date, select a slot, and confirm — no phone calls needed.",
    iconBg: "linear-gradient(135deg, #89e900, #bef264)",
  },
  {
    icon: Wifi,
    title: "Real-time Availability",
    description: "Live slot availability so you always know what's open before you even drive there.",
    iconBg: "linear-gradient(135deg, #2dd4bf, #67e8f9)",
  },
  {
    icon: LayoutDashboard,
    title: "Owner Dashboard",
    description: "Manage your turf, set availability windows, view bookings, and track earnings from one place.",
    iconBg: "linear-gradient(135deg, #a78bfa, #c4b5fd)",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payments",
    description: "Industry-standard encryption. Pay via UPI, card, or wallet — always safe, always refundable.",
    iconBg: "linear-gradient(135deg, #fb923c, #fbbf24)",
  },
];

export default function FeaturesSection() {
  return (
    <section
      id="features"
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "120px 1.5rem",
        backgroundColor: "var(--bg-dark)",
      }}
      className="grid-bg"
    >
      <div style={{ maxWidth: "80rem", margin: "0 auto", position: "relative" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "4rem" }}
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
            Features
          </div>

          <h2 style={{
            fontSize: "clamp(2rem, 5vw, 3.25rem)", fontWeight: 900,
            color: "#fff", lineHeight: 1.15, margin: "0 0 16px 0", textAlign: "center"
          }}>
            Everything you need to{" "}
            <span style={{ color: "var(--primary)", display: "block" }}>
              book &amp; manage turfs
            </span>
          </h2>

          <p style={{
            color: "var(--text-secondary)", fontSize: "1.125rem",
            lineHeight: 1.7, maxWidth: 520, margin: "0 auto", textAlign: "center"
          }}>
            Purpose-built tools for players and owners. No learning curve, just results.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "1.5rem"
        }}>
          {features.map(({ icon: Icon, title, description, iconBg }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              style={{
                backgroundColor: "var(--bg-card)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 16,
                padding: "1.75rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
                transition: "border-color 0.3s, box-shadow 0.3s",
              }}
              whileHover={{
                borderColor: "rgba(137,233,0,0.35)",
                boxShadow: "0 8px 32px rgba(137,233,0,0.08)",
              }}
            >
              <div style={{
                width: 48, height: 48, borderRadius: 14,
                background: iconBg,
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
                boxShadow: "0 4px 16px rgba(0,0,0,0.3)"
              }}>
                <Icon size={22} style={{ color: "#222" }} strokeWidth={2.5} />
              </div>
              <div>
                <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "1.0625rem", margin: "0 0 8px 0" }}>{title}</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>{description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
