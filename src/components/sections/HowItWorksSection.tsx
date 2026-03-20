"use client";

import { motion } from "framer-motion";
import { Search, CalendarClock, Zap } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Search Turf",
    description: "Enter your location or sport. Browse a live map of turfs around you, filtered by availability, price, and ratings.",
  },
  {
    number: "02",
    icon: CalendarClock,
    title: "Book a Slot",
    description: "Pick your preferred date and time slot. Pay securely in-app. Receive an instant confirmation on your phone.",
  },
  {
    number: "03",
    icon: Zap,
    title: "Just Play",
    description: "Show up, scan your QR code at the gate, and get on the field. It's that simple — zero paperwork.",
  },
];

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "120px 1.5rem",
        backgroundColor: "var(--secondary)",
      }}
    >
      <div style={{ maxWidth: "80rem", margin: "0 auto", position: "relative" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "5rem" }}
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
            How It Works
          </div>

          <h2 style={{
            fontSize: "clamp(2rem, 5vw, 3.25rem)", fontWeight: 900,
            color: "#fff", lineHeight: 1.15, margin: "0 0 16px 0", textAlign: "center"
          }}>
            From search to kickoff{" "}
            <span style={{ color: "var(--primary)" }}>in 3 steps</span>
          </h2>

          <p style={{
            color: "var(--text-secondary)", fontSize: "1.125rem",
            lineHeight: 1.7, maxWidth: 480, margin: "0 auto", textAlign: "center"
          }}>
            We removed every unnecessary step. Booking a turf is now as easy as ordering food.
          </p>
        </motion.div>

        {/* Steps */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "3rem",
          position: "relative"
        }}>
          {steps.map(({ number, icon: Icon, title, description }, i) => (
            <motion.div
              key={number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              style={{
                display: "flex", flexDirection: "column",
                alignItems: "center", textAlign: "center"
              }}
            >
              {/* Icon circle */}
              <div style={{ position: "relative", marginBottom: "1.25rem" }}>
                {/* Step badge */}
                <div style={{
                  position: "absolute", top: -8, right: -8,
                  width: 28, height: 28, borderRadius: "50%",
                  backgroundColor: "var(--primary)", color: "#222",
                  fontSize: 12, fontWeight: 900,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  boxShadow: "0 0 12px rgba(137,233,0,0.5)",
                  zIndex: 2
                }}>
                  {i + 1}
                </div>
                <motion.div
                  style={{
                    width: 112, height: 112, borderRadius: "50%",
                    border: "2px solid rgba(137,233,0,0.35)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    backgroundColor: "var(--secondary)",
                  }}
                  whileHover={{ scale: 1.06 }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                >
                  <div style={{
                    width: 80, height: 80, borderRadius: "50%",
                    background: "linear-gradient(135deg, rgba(137,233,0,0.18), transparent)",
                    border: "1px solid rgba(137,233,0,0.3)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    boxShadow: "0 0 28px rgba(137,233,0,0.15)"
                  }}>
                    <Icon size={30} style={{ color: "var(--primary)" }} strokeWidth={1.8} />
                  </div>
                </motion.div>
              </div>

              {/* Decorative number */}
              <span style={{
                fontSize: "3rem", fontWeight: 900, lineHeight: 1,
                marginBottom: "0.75rem", userSelect: "none",
                color: "rgba(137,233,0,0.15)"
              }}>
                {number}
              </span>

              <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "1.25rem", margin: "0 0 12px 0" }}>
                {title}
              </h3>
              <p style={{
                color: "var(--text-secondary)", fontSize: "0.9rem",
                lineHeight: 1.75, maxWidth: 260, margin: "0 auto"
              }}>
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
