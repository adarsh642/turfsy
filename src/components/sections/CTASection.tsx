"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export default function CTASection() {
  return (
    <section
      id="cta"
      style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "var(--bg-dark)",
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
      }}
    >
      <div style={{ maxWidth: "80rem", margin: "0 auto", position: "relative" }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            position: "relative",
            borderRadius: 24,
            overflow: "hidden",
            border: "1px solid rgba(137,233,0,0.28)",
            backgroundColor: "var(--secondary)",
          }}
        >
          {/* Green glow */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 600,
              height: 300,
              borderRadius: "50%",
              backgroundColor: "var(--primary)",
              opacity: 0.07,
              filter: "blur(80px)",
              pointerEvents: "none",
            }}
          />

          {/* Grid overlay */}
          <div
            className="grid-bg"
            style={{
              position: "absolute",
              inset: 0,
              opacity: 0.5,
              pointerEvents: "none",
            }}
          />

          {/* Top glowing border line */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 1,
              background:
                "linear-gradient(90deg, transparent, var(--primary), transparent)",
            }}
          />

          {/* Content */}
          <div
            style={{
              position: "relative",
              zIndex: 10,
              textAlign: "center",
              padding: "80px 32px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "6px 18px",
                borderRadius: 9999,
                border: "1px solid rgba(137,233,0,0.28)",
                backgroundColor: "rgba(137,233,0,0.08)",
                color: "var(--primary)",
                fontSize: 13,
                fontWeight: 600,
                marginBottom: 28,
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor: "var(--primary)",
                  display: "inline-block",
                  animation: "pulse 2s infinite",
                }}
              />
              Free to Get Started
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              style={{
                fontSize: "clamp(2rem, 6vw, 3.75rem)",
                fontWeight: 900,
                color: "#fff",
                lineHeight: 1.15,
                margin: "0 0 20px 0",
                textAlign: "center",
              }}
            >
              Ready to book your
              <br />
              <span className="glow-text" style={{ color: "var(--primary)" }}>
                next match?
              </span>
            </motion.h2>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              style={{
                color: "var(--text-secondary)",
                fontSize: "clamp(1rem, 2vw, 1.125rem)",
                lineHeight: 1.8,
                maxWidth: 520,
                margin: "0 auto 40px",
                textAlign: "center",
              }}
            >
              Join 50,000+ players already using Turfsy. Download the app for
              free and book your first turf in under a minute.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.28 }}
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
                gap: 16,
              }}
            >
              <a
                href="#download"
                id="cta-download-btn"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "14px 32px",
                  borderRadius: 12,
                  backgroundColor: "var(--primary)",
                  color: "var(--secondary)",
                  fontWeight: 700,
                  fontSize: 16,
                  textDecoration: "none",
                  boxShadow: "0 0 24px rgba(137,233,0,0.35)",
                  transition: "filter 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.filter =
                    "brightness(1.1)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.filter =
                    "brightness(1)")
                }
              >
                <Download size={20} />
                Download the App
              </a>

              <a
                href="#features"
                id="cta-features-btn"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "14px 32px",
                  borderRadius: 12,
                  backgroundColor: "transparent",
                  color: "#fff",
                  border: "1px solid rgba(255,255,255,0.15)",
                  fontWeight: 700,
                  fontSize: 16,
                  textDecoration: "none",
                  transition: "border-color 0.2s, background 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(255,255,255,0.35)";
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    "rgba(255,255,255,0.05)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(255,255,255,0.15)";
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    "transparent";
                }}
              >
                Learn More
                <ArrowRight size={20} />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
