"use client";

import { motion } from "framer-motion";
import { Instagram, Twitter, Linkedin, Github, Mail } from "lucide-react";

const footerLinks = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Download App", href: "#download" },
    { label: "For Owners", href: "#for-owners" },
  ],
  Company: [
    { label: "About Us", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Press", href: "#" },
  ],
  Support: [
    { label: "Contact", href: "#" },
    { label: "Help Center", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

const socials = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Mail, href: "#", label: "Email" },
];

export default function Footer() {
  return (
    <footer
      id="footer"
      style={{
        position: "relative",
        backgroundColor: "#0a0a0a",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      {/* Top green glowing line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 1,
          background:
            "linear-gradient(90deg, transparent 0%, rgba(137,233,0,0.6) 50%, transparent 100%)",
        }}
      />

      {/* Subtle background glow */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: 600,
          height: 200,
          borderRadius: "50%",
          backgroundColor: "rgba(137,233,0,0.03)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "80rem",
          margin: "0 auto",
          padding: "64px 1.5rem 40px",
          position: "relative",
        }}
      >
        {/* Main grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "2.5rem",
            marginBottom: "3.5rem",
          }}
        >
          {/* Brand column */}
          <div style={{ gridColumn: "span 2" }}>
            <a
              href="#hero"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                textDecoration: "none",
                marginBottom: 20,
              }}
            >
              <div
                style={{
                  width: 38,
                  height: 38,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 10,
                  backgroundColor: "var(--primary)",
                  boxShadow: "0 0 16px rgba(137,233,0,0.4)",
                  flexShrink: 0,
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2L3 7v10l9 5 9-5V7L12 2z"
                    stroke="#222"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 22V12M3 7l9 5 9-5"
                    stroke="#222"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span
                style={{
                  fontSize: 22,
                  fontWeight: 900,
                  color: "#fff",
                  letterSpacing: "-0.03em",
                }}
              >
                Turf
                <span style={{ color: "var(--primary)" }}>sy</span>
              </span>
            </a>

            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: 14,
                lineHeight: 1.8,
                maxWidth: 260,
                marginBottom: 28,
              }}
            >
              The smartest way to discover, book, and manage sports turfs. Built
              for players and owners alike.
            </p>

            {/* Social icons */}
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  style={{
                    width: 38,
                    height: 38,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 10,
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                    transition: "border-color 0.2s, color 0.2s, background 0.2s",
                  }}
                  whileHover={{
                    scale: 1.12,
                    y: -2,
                    borderColor: "rgba(137,233,0,0.5)",
                    color: "var(--primary)" as string,
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3
                style={{
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: 14,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  marginBottom: 20,
                }}
              >
                {category}
              </h3>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      style={{
                        color: "var(--text-secondary)",
                        fontSize: 14,
                        textDecoration: "none",
                        transition: "color 0.2s, padding-left 0.2s",
                        display: "inline-block",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.color =
                          "var(--primary)";
                        (e.currentTarget as HTMLElement).style.paddingLeft =
                          "4px";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.color =
                          "var(--text-secondary)";
                        (e.currentTarget as HTMLElement).style.paddingLeft = "0";
                      }}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div
          style={{
            height: 1,
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)",
            marginBottom: 28,
          }}
        />

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
          }}
        >
          <p style={{ color: "var(--text-muted)", fontSize: 13, margin: 0 }}>
            © {new Date().getFullYear()} Turfsy. All rights reserved.
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              color: "var(--text-muted)",
              fontSize: 13,
            }}
          >
            <span>Made with</span>
            <motion.span
              style={{
                color: "var(--primary)",
                fontSize: 16,
                display: "inline-block",
              }}
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
            >
              ♥
            </motion.span>
            <span>for sports lovers</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
