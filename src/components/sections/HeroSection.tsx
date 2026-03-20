"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, MapPin, Star, ChevronDown } from "lucide-react";

const floatingStats = [
  { icon: MapPin, value: "500+", label: "Turfs" },
  { icon: Star, value: "4.9★", label: "Rating" },
  { icon: Download, value: "50K+", label: "Downloads" },
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        backgroundColor: "var(--bg-dark)",
      }}
      className="grid-bg"
    >
      {/* Radial glows */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 700,
            height: 700,
            borderRadius: "50%",
            background: "var(--primary)",
            opacity: 0.04,
            filter: "blur(120px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "33%",
            left: "33%",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "var(--primary)",
            opacity: 0.06,
            filter: "blur(90px)",
          }}
        />
      </div>

      {/* Animated rings */}
      <motion.div
        style={{
          position: "absolute",
          top: 80,
          right: 80,
          width: 192,
          height: 192,
          borderRadius: "50%",
          border: "1px solid rgba(137,233,0,0.25)",
          opacity: 0.2,
          zIndex: 0,
          pointerEvents: "none",
        }}
        animate={{ rotate: 360, scale: [1, 1.05, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        style={{
          position: "absolute",
          bottom: 128,
          left: 64,
          width: 128,
          height: 128,
          borderRadius: "50%",
          border: "1px solid rgba(137,233,0,0.18)",
          opacity: 0.1,
          zIndex: 0,
          pointerEvents: "none",
        }}
        animate={{ rotate: -360, scale: [1, 1.08, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />

      {/* ── Main content ── */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          maxWidth: "80rem",
          margin: "0 auto",
          padding: "clamp(130px, 18vh, 200px) 1.5rem 80px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
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
            marginBottom: 32,
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
          Now Available on iOS &amp; Android
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            fontSize: "clamp(3rem, 9vw, 6rem)",
            fontWeight: 900,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            margin: "0 0 24px 0",
            textAlign: "center",
          }}
        >
          <span style={{ display: "block", color: "#fff", marginBottom: 8 }}>
            Book Your
          </span>
          <span
            style={{
              display: "inline-block",
              color: "var(--primary)",
              position: "relative",
              paddingBottom: 12,
            }}
            className="glow-text"
          >
            Turf Instantly
            <svg
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
              }}
              height="8"
              viewBox="0 0 400 8"
              fill="none"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <motion.path
                d="M0 6 Q100 2 200 6 Q300 10 400 6"
                stroke="var(--primary)"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.6 }}
                transition={{ duration: 1, delay: 0.8 }}
              />
            </svg>
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
            color: "var(--text-secondary)",
            lineHeight: 1.8,
            maxWidth: 560,
            margin: "0 auto 40px",
            textAlign: "center",
          }}
        >
          Discover nearby turfs, check real-time availability, and confirm your
          booking in under{" "}
          <strong style={{ color: "#fff" }}>60 seconds</strong>. No calls. No
          hassle. Just play.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
            marginBottom: 48,
          }}
        >
          <a
            href="#download"
            id="hero-download-btn"
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
              transition: "filter 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.filter = "brightness(1.1)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.filter = "brightness(1)";
            }}
          >
            <Download size={20} />
            Download App
          </a>
          <a
            href="#features"
            id="hero-explore-btn"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "14px 32px",
              borderRadius: 12,
              backgroundColor: "transparent",
              color: "var(--primary)",
              border: "1px solid var(--primary)",
              fontWeight: 700,
              fontSize: 16,
              textDecoration: "none",
              boxShadow: "0 0 14px rgba(137,233,0,0.18)",
              transition: "background 0.2s, color 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor =
                "var(--primary)";
              (e.currentTarget as HTMLElement).style.color = "var(--secondary)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor =
                "transparent";
              (e.currentTarget as HTMLElement).style.color = "var(--primary)";
            }}
          >
            Explore Turfs
            <ArrowRight size={20} />
          </a>
        </motion.div>

        {/* Stats pills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
            marginBottom: 56,
          }}
        >
          {floatingStats.map(({ icon: Icon, value, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(137,233,0,0.15)", borderColor: "rgba(137,233,0,0.3)" }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "12px 20px",
                borderRadius: 16,
                border: "1px solid rgba(255,255,255,0.07)",
                backgroundColor: "var(--bg-card)",
                cursor: "pointer",
                transition: "border-color 0.2s",
              }}
            >
              <div
                style={{
                  width: 32,
                  height: 32,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 8,
                  backgroundColor: "rgba(137,233,0,0.12)",
                  flexShrink: 0,
                }}
              >
                <Icon size={16} style={{ color: "var(--primary)" }} />
              </div>
              <div style={{ textAlign: "left" }}>
                <p
                  style={{
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: 14,
                    margin: 0,
                    lineHeight: 1,
                  }}
                >
                  {value}
                </p>
                <p
                  style={{
                    color: "var(--text-muted)",
                    fontSize: 12,
                    margin: "3px 0 0 0",
                  }}
                >
                  {label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* App preview mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: [0, -8, 0] }}
          transition={{
            opacity: { duration: 0.9, delay: 0.65 },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.65 }
          }}
          whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          style={{ position: "relative", width: "100%", maxWidth: 860, cursor: "pointer", perspective: 1000 }}
        >
          {/* Glow under */}
          <div
            style={{
              position: "absolute",
              bottom: -16,
              left: "50%",
              transform: "translateX(-50%)",
              width: "75%",
              height: 64,
              background: "var(--primary)",
              opacity: 0.08,
              filter: "blur(40px)",
              borderRadius: "50%",
              pointerEvents: "none",
            }}
          />

          {/* Browser chrome card */}
          <div
            style={{
              borderRadius: 24,
              border: "1px solid rgba(255,255,255,0.07)",
              backgroundColor: "var(--bg-card)",
              overflow: "hidden",
              boxShadow: "0 32px 80px rgba(0,0,0,0.5)",
            }}
          >
            {/* Title bar */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "14px 24px",
                borderBottom: "1px solid rgba(255,255,255,0.07)",
                backgroundColor: "var(--secondary)",
              }}
            >
              <div style={{ display: "flex", gap: 6, flexShrink: 0 }}>
                {["#ef4444", "#f59e0b", "#89e900"].map((c) => (
                  <div
                    key={c}
                    style={{
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      backgroundColor: c,
                      opacity: 0.6,
                    }}
                  />
                ))}
              </div>
              <div
                style={{
                  flex: 1,
                  margin: "0 24px",
                  height: 24,
                  borderRadius: 6,
                  backgroundColor: "var(--secondary-lighter)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    color: "var(--text-muted)",
                    fontSize: 12,
                  }}
                >
                  app.turfsy.com/book
                </span>
              </div>
            </div>

            {/* Content */}
            <div
              style={{
                padding: 24,
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: 16,
              }}
            >
              {/* Search bar */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "12px 16px",
                  borderRadius: 12,
                  backgroundColor: "var(--secondary)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <MapPin
                  size={16}
                  style={{ color: "var(--primary)", flexShrink: 0 }}
                />
                <span
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: 14,
                    flex: 1,
                    textAlign: "left",
                  }}
                >
                  Search turfs near you...
                </span>
                <span
                  style={{
                    padding: "6px 16px",
                    borderRadius: 8,
                    backgroundColor: "var(--primary)",
                    color: "var(--secondary)",
                    fontSize: 12,
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  Search
                </span>
              </div>

              {/* Turf cards row */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                  gap: 12,
                }}
              >
                {[
                  { name: "Green Arena", price: 600, rating: "4.8" },
                  { name: "City Sports Hub", price: 750, rating: "4.9" },
                  { name: "The Pitch", price: 900, rating: "4.10" },
                ].map(({ name, price, rating }) => (
                  <div
                    key={name}
                    style={{
                      borderRadius: 12,
                      border: "1px solid rgba(255,255,255,0.07)",
                      backgroundColor: "var(--bg-dark)",
                      overflow: "hidden",
                      transition: "transform 0.2s",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.02)")}
                    onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                  >
                    <div
                      style={{
                        height: 90,
                        background:
                          "linear-gradient(135deg, rgba(20,60,20,0.8), rgba(30,80,20,0.4))",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 64 64"
                        fill="none"
                        aria-hidden="true"
                      >
                        <rect
                          x="4"
                          y="4"
                          width="56"
                          height="56"
                          rx="8"
                          stroke="rgba(137,233,0,0.3)"
                          strokeWidth="1.5"
                          fill="none"
                        />
                        <line
                          x1="32"
                          y1="4"
                          x2="32"
                          y2="60"
                          stroke="rgba(137,233,0,0.2)"
                          strokeWidth="1"
                        />
                        <circle
                          cx="32"
                          cy="32"
                          r="10"
                          stroke="rgba(137,233,0,0.3)"
                          strokeWidth="1.5"
                          fill="none"
                        />
                        <line
                          x1="4"
                          y1="32"
                          x2="60"
                          y2="32"
                          stroke="rgba(137,233,0,0.2)"
                          strokeWidth="1"
                        />
                      </svg>
                    </div>
                    <div style={{ padding: 10 }}>
                      <p
                        style={{
                          color: "#fff",
                          fontWeight: 600,
                          fontSize: 13,
                          margin: 0,
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {name}
                      </p>
                      <p
                        style={{
                          color: "var(--text-muted)",
                          fontSize: 11,
                          margin: "3px 0 6px",
                        }}
                      >
                        ₹{price}/hr
                      </p>
                      <div
                        style={{ display: "flex", alignItems: "center", gap: 4 }}
                      >
                        <Star
                          size={10}
                          style={{ color: "var(--primary)" }}
                          fill="var(--primary)"
                        />
                        <span
                          style={{
                            color: "var(--primary)",
                            fontSize: 11,
                            fontWeight: 600,
                          }}
                        >
                          {rating}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
          zIndex: 10,
          pointerEvents: "none",
        }}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <span
          style={{
            color: "var(--text-muted)",
            fontSize: 11,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          Scroll
        </span>
        <ChevronDown size={18} style={{ color: "var(--primary)" }} />
      </motion.div>
    </section>
  );
}
