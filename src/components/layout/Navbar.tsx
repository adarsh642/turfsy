"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "For Owners", href: "#for-owners" },
  { label: "Download App", href: "#download" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();
  const navBg = useTransform(
    scrollY,
    [0, 80],
    ["rgba(15,15,15,0.2)", "rgba(15,15,15,0.95)"]
  );

  useEffect(() => {
    const unsub = scrollY.on("change", (y) => setScrolled(y > 40));
    return unsub;
  }, [scrollY]);

  return (
    <>
      <motion.header
        style={{
          position: "fixed",
          top: scrolled ? "1rem" : "1.5rem",
          left: "0",
          right: "0",
          width: "calc(100% - 2rem)",
          maxWidth: "82rem",
          margin: "0 auto",
          zIndex: 50,
          backgroundColor: navBg,
          backdropFilter: "blur(16px)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "20px",
          transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
          overflow: "hidden",
        }}
        id="navbar"
      >
        {/* Scroll Progress Line */}
        <motion.div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "3px",
            backgroundColor: "var(--primary)",
            transformOrigin: "left",
            scaleX: scrollYProgress,
            zIndex: 60,
          }}
        />
        <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 80 }}>
            {/* Logo */}
            <motion.a
              href="#hero"
              style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}
              whileHover={{ scale: 1.02 }}
            >
              <div
                style={{
                  position: "relative",
                  width: 36,
                  height: 36,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 12,
                  backgroundColor: "var(--primary)",
                  boxShadow: "0 0 16px rgba(137,233,0,0.3)",
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
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
              <span style={{ fontSize: "1.25rem", fontWeight: 900, letterSpacing: "-0.02em", color: "#fff" }}>
                Turf<span style={{ color: "var(--primary)" }}>sy</span>
              </span>
            </motion.a>

            {/* Desktop nav links */}
            <nav style={{ display: "flex", gap: "2.5rem" }} className="hidden md:flex">
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    textDecoration: "none",
                    position: "relative",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--text-secondary)")}
                  whileHover="hovered"
                >
                  {link.label}
                  <motion.span
                    style={{
                      position: "absolute",
                      bottom: -4,
                      left: 0,
                      width: "100%",
                      height: 2,
                      backgroundColor: "var(--primary)",
                      borderRadius: 2,
                      transformOrigin: "left",
                    }}
                    variants={{
                      rest: { scaleX: 0 },
                      hovered: { scaleX: 1 }
                    }}
                    initial="rest"
                    transition={{ duration: 0.2 }}
                  />
                </motion.a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }} className="hidden md:flex">

              <motion.a
                href="#download"
                id="nav-cta"
                style={{
                  display: "inline-block",
                  padding: "10px 24px",
                  borderRadius: 12,
                  backgroundColor: "var(--primary)",
                  color: "#222",
                  fontWeight: 800,
                  fontSize: "0.875rem",
                  textDecoration: "none",
                  boxShadow: "0 4px 14px rgba(137,233,0,0.25)",
                }}
                whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
                whileTap={{ scale: 0.95 }}
              >
                Get the App
              </motion.a>
            </div>

            {/* Mobile toggle button */}
            <motion.button
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 8,
                borderRadius: 8,
                backgroundColor: isOpen ? "rgba(255,255,255,0.1)" : "transparent",
                color: isOpen ? "#fff" : "var(--text-secondary)",
                border: "none",
                cursor: "pointer",
              }}
              className="md:hidden flex"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile slide-down menu */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          style={{
            overflow: "hidden",
            backgroundColor: "rgba(15,15,15,0.98)",
            borderBottom: isOpen ? "1px solid rgba(255,255,255,0.07)" : "none",
          }}
          className="md:hidden"
        >
          <div style={{ padding: "20px 24px", display: "flex", flexDirection: "column", gap: 16 }}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "1rem",
                  fontWeight: 600,
                  textDecoration: "none",
                  padding: "8px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#download"
              onClick={() => setIsOpen(false)}
              style={{
                display: "block",
                padding: "14px 24px",
                borderRadius: 12,
                backgroundColor: "var(--primary)",
                color: "#222",
                fontWeight: 800,
                fontSize: "1rem",
                textDecoration: "none",
                textAlign: "center",
                marginTop: 12,
              }}
            >
              Get the App
            </a>
          </div>
        </motion.div>
      </motion.header>

      {/* Responsive media query injected into DOM to toggle 'md:flex' vs 'hidden md:flex' inline alternatives */}
      <style suppressHydrationWarning>{`
        @media (max-width: 767px) {
          .hidden.md\\:flex { display: none !important; }
        }
        @media (min-width: 768px) {
          .md\\:hidden { display: none !important; }
        }
      `}</style>
    </>
  );
}
