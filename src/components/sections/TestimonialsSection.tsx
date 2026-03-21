"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Arjun Mehta",
    role: "Football Enthusiast",
    location: "Bangalore",
    avatar: "AM",
    avatarBg: "#22c55e",
    rating: 5,
    text: "I used to spend 20 minutes calling different turfs every week. With Turfsy I book in 30 seconds flat. The real-time availability is a game changer.",
  },
  {
    name: "Priya Sharma",
    role: "Turf Owner",
    location: "Mumbai",
    avatar: "PS",
    avatarBg: "#14b8a6",
    rating: 5,
    text: "My weekend bookings went from 60% to 95% occupancy in just one month. The analytics dashboard showed me exactly which slots to promote.",
  },
  {
    name: "Kiran Reddy",
    role: "Cricket Player",
    location: "Hyderabad",
    avatar: "KR",
    avatarBg: "#65a30d",
    rating: 5,
    text: "Love the QR check-in feature. No awkward conversations with the guard. Just scan and play. My whole team uses Turfsy now.",
  },
];

const stats = [
  { value: "50K+", label: "Active Users" },
  { value: "500+", label: "Listed Turfs" },
  { value: "4.9★", label: "App Store Rating" },
  { value: "99%", label: "Booking Success Rate" },
];

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "var(--bg-dark)",
        paddingTop: "6rem",
        paddingBottom: "6rem",
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
      }}
    >
      {/* Separator line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, var(--primary), transparent)",
          opacity: 0.4,
        }}
      />

      <div
        style={{
          maxWidth: "80rem",
          margin: "0 auto",
          position: "relative",
        }}
      >
        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            textAlign: "center",
            marginBottom: "4rem",
          }}
        >
          {/* Label pill */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 16px",
              borderRadius: "9999px",
              border: "1px solid rgba(137,233,0,0.28)",
              backgroundColor: "rgba(137,233,0,0.08)",
              color: "var(--primary)",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "1.5rem",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: "var(--primary)",
                display: "inline-block",
              }}
            />
            Testimonials
          </div>

          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3.25rem)",
              fontWeight: 900,
              color: "#fff",
              lineHeight: 1.15,
              margin: "0 0 16px 0",
              textAlign: "center",
            }}
          >
            Players &amp; owners{" "}
            <span style={{ color: "var(--primary)" }}>love Turfsy</span>
          </h2>

          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "1.125rem",
              lineHeight: 1.7,
              maxWidth: "480px",
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            Real experiences from our community of 50,000+ users.
          </p>
        </motion.div>

        {/* ── Testimonial cards grid ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
            marginBottom: "3.5rem",
          }}
        >
          {testimonials.map(({ name, role, location, avatar, avatarBg, rating, text }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              style={{
                backgroundColor: "var(--bg-card)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "1rem",
                padding: "1.75rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
                position: "relative",
                overflow: "hidden",
                transition: "border-color 0.3s, box-shadow 0.3s",
              }}
              whileHover={{
                borderColor: "rgba(137,233,0,0.35)",
                boxShadow: "0 8px 32px rgba(137,233,0,0.08)",
              }}
            >
              {/* Quote icon */}
              <Quote
                size={26}
                style={{ color: "var(--primary)", opacity: 0.6 }}
                fill="rgba(137,233,0,0.12)"
              />

              {/* Stars */}
              <div style={{ display: "flex", gap: "4px" }}>
                {[...Array(rating)].map((_, idx) => (
                  <Star
                    key={idx}
                    size={14}
                    style={{ color: "var(--primary)" }}
                    fill="var(--primary)"
                  />
                ))}
              </div>

              {/* Review text */}
              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "0.9375rem",
                  lineHeight: 1.75,
                  flex: 1,
                  margin: 0,
                }}
              >
                &ldquo;{text}&rdquo;
              </p>

              {/* Author */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  paddingTop: "1rem",
                  borderTop: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <div
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: "50%",
                    backgroundColor: avatarBg,
                    border: "2px solid var(--primary)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    fontSize: "0.8125rem",
                    fontWeight: 700,
                    flexShrink: 0,
                  }}
                >
                  {avatar}
                </div>
                <div>
                  <p
                    style={{
                      color: "#fff",
                      fontWeight: 600,
                      fontSize: "0.9375rem",
                      margin: 0,
                    }}
                  >
                    {name}
                  </p>
                  <p
                    style={{
                      color: "var(--text-muted)",
                      fontSize: "0.8125rem",
                      margin: "2px 0 0 0",
                    }}
                  >
                    {role} · {location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Stats bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1.5rem",
            padding: "2.5rem 2rem",
            borderRadius: "1.5rem",
            border: "1px solid rgba(255,255,255,0.07)",
            backgroundColor: "var(--bg-card)",
          }}
        >
          {stats.map(({ value, label }) => (
            <div
              key={label}
              style={{ textAlign: "center" }}
            >
              <p
                style={{
                  color: "var(--primary)",
                  fontWeight: 900,
                  fontSize: "clamp(1.75rem, 4vw, 2.25rem)",
                  margin: "0 0 6px 0",
                  lineHeight: 1,
                }}
              >
                {value}
              </p>
              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "0.9rem",
                  margin: 0,
                }}
              >
                {label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
