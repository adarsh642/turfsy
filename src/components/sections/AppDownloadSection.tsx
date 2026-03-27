"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Star, MessageCircle, MapPin, BellRing, CalendarCheck, Search, Trophy, TrendingUp } from "lucide-react";
import React, { useRef } from "react";

export default function AppDownloadSection() {
  // 3D Tilt Effect Setup for Phone Mockup
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section
      id="download"
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "140px 1.5rem",
        backgroundColor: "var(--bg-dark, #0a0a0a)", // Using very dark bg for contrast
      }}
    >
      {/* Animated Glowing Background Blobs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
          rotate: [0, 90, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        style={{
          position: "absolute", top: "-10%", left: "-10%",
          width: 500, height: 500, borderRadius: "50%",
          backgroundColor: "var(--primary)",
          filter: "blur(120px)", pointerEvents: "none"
        }} 
      />
      
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.08, 0.12, 0.08],
          x: [0, -50, 0],
          y: [0, 50, 0]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute", bottom: "-20%", right: "-5%",
          width: 600, height: 600, borderRadius: "50%",
          background: "linear-gradient(135deg, var(--primary) 0%, transparent 100%)",
          filter: "blur(140px)", pointerEvents: "none"
        }} 
      />

      <div style={{ maxWidth: "80rem", margin: "0 auto", position: "relative", zIndex: 10 }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "6rem",
          alignItems: "center"
        }}>

          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Glowing Tag */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                padding: "8px 20px", borderRadius: 9999,
                border: "1px solid rgba(137,233,0,0.3)",
                background: "linear-gradient(90deg, rgba(137,233,0,0.1) 0%, rgba(137,233,0,0.02) 100%)",
                boxShadow: "0 0 20px rgba(137,233,0,0.1)",
                color: "var(--primary)", fontSize: 13, fontWeight: 700,
                letterSpacing: "0.1em", textTransform: "uppercase",
                marginBottom: "2rem", backdropFilter: "blur(10px)"
              }}
            >
              <span style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ position: "absolute", width: 12, height: 12, borderRadius: "50%", backgroundColor: "var(--primary)", opacity: 0.4, filter: "blur(4px)" }} />
                <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "var(--primary)", zIndex: 1 }} />
              </span>
              Mobile App
            </motion.div>

            <h2 style={{
              fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: 900,
              color: "#fff", lineHeight: 1.1, margin: "0 0 24px",
              letterSpacing: "-0.02em"
            }}>
              Your turf life lives{" "}
              <span style={{ 
                color: "var(--primary)", 
                display: "block",
                textShadow: "0 0 40px rgba(137,233,0,0.3)"
              }}>in your pocket</span>
            </h2>

            <p style={{
              color: "var(--text-secondary, #94a3b8)", fontSize: "1.125rem",
              lineHeight: 1.8, marginBottom: "3rem", maxWidth: 500,
              fontWeight: 400
            }}>
              The full Turfsy experience is on mobile. Real-time notifications, location-based search, and one-tap booking — all in our free app.
            </p>

            {/* Store buttons */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 20, marginBottom: "3rem" }}>
              {/* Google Play */}
              <motion.a
                href="#"
                style={{
                  position: "relative", overflow: "hidden",
                  display: "flex", alignItems: "center", gap: 16,
                  padding: "14px 24px", borderRadius: 20,
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  backdropFilter: "blur(16px)",
                  textDecoration: "none",
                }}
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: "rgba(137,233,0,0.08)",
                  borderColor: "rgba(137,233,0,0.4)",
                  boxShadow: "0 10px 40px -10px rgba(137,233,0,0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <div style={{ width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center" }}>
                   <svg width="28" height="28" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                    <path d="M3 3.5l7.5 8.5-7.5 8.5" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" />
                    <path d="M3 3.5L18.5 10.5L14 13L3 3.5Z" fill="rgba(137,233,0,0.4)" />
                    <path d="M3 20.5L14 11L18.5 13.5L3 20.5Z" fill="rgba(137,233,0,0.2)" />
                    <path d="M18.5 10.5L21.5 12L18.5 13.5" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p style={{ color: "var(--text-muted, #94a3b8)", fontSize: 12, margin: "0 0 2px", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 600 }}>Get it on</p>
                  <p style={{ color: "#fff", fontWeight: 800, fontSize: 16, margin: 0, letterSpacing: "-0.01em" }}>Google Play</p>
                </div>
              </motion.a>

              {/* App Store */}
              <motion.a
                href="#"
                style={{
                  position: "relative", overflow: "hidden",
                  display: "flex", alignItems: "center", gap: 16,
                  padding: "14px 24px", borderRadius: 20,
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  backdropFilter: "blur(16px)",
                  textDecoration: "none",
                }}
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: "rgba(137,233,0,0.08)",
                  borderColor: "rgba(137,233,0,0.4)",
                  boxShadow: "0 10px 40px -10px rgba(137,233,0,0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <div style={{ width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" fill="var(--primary)" />
                  </svg>
                </div>
                <div>
                  <p style={{ color: "var(--text-muted, #94a3b8)", fontSize: 12, margin: "0 0 2px", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 600 }}>Download on the</p>
                  <p style={{ color: "#fff", fontWeight: 800, fontSize: 16, margin: 0, letterSpacing: "-0.01em" }}>App Store</p>
                </div>
              </motion.a>
            </div>

            {/* Social proof */}
            <motion.div 
              style={{ display: "flex", alignItems: "center", gap: 20 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div style={{ display: "flex" }}>
                {[ "#22c55e", "#14b8a6", "#84cc16", "#10b981" ].map((color, i) => (
                  <div key={i} style={{
                    width: 44, height: 44, borderRadius: "50%",
                    backgroundColor: color, border: "3px solid var(--bg-dark)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#fff", fontSize: 15, fontWeight: 800,
                    marginLeft: i > 0 ? -16 : 0, zIndex: 4 - i,
                    boxShadow: "0 4px 12px rgba(0,0,0,0.3)"
                  }}>
                    {["A", "R", "S", "K"][i]}
                  </div>
                ))}
              </div>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 4 }}>
                  {[...Array(5)].map((_, i) => (
                     <motion.div 
                       key={i}
                       initial={{ opacity: 0, scale: 0 }}
                       whileInView={{ opacity: 1, scale: 1 }}
                       transition={{ delay: 0.4 + i * 0.1, duration: 0.3 }}
                     >
                       <Star size={16} style={{ color: "var(--primary)" }} fill="var(--primary)" />
                     </motion.div>
                  ))}
                </div>
                <p style={{ color: "var(--text-secondary, #94a3b8)", fontSize: 14, margin: 0, fontWeight: 500 }}>
                  Loved by <strong style={{ color: "#fff", fontWeight: 800 }}>50,000+</strong> players
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Interactive 3D Phone Mockup */}
          <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            style={{ 
              display: "flex", justifyContent: "center", perspective: "1500px", 
              padding: "4rem 0", position: "relative"
            }}
          >
            <motion.div 
              style={{
                position: "relative",
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
                zIndex: 20
              }}
            >
              {/* Massive back glow for phone */}
              <div style={{
                position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%) translateZ(-100px)",
                width: 250, height: 500, backgroundColor: "var(--primary)",
                opacity: 0.15, filter: "blur(60px)", borderRadius: "3rem", pointerEvents: "none"
              }} />

              {/* Phone hardware wrapper */}
              <motion.div 
                style={{
                  position: "relative", width: 280, backgroundColor: "#1e293b",
                  borderRadius: "3.5rem", border: "8px solid #0f172a",
                  boxShadow: "0 30px 60px -12px rgba(0,0,0,0.8), inset 0 0 0 2px rgba(255,255,255,0.1)", 
                  overflow: "hidden", transformStyle: "preserve-3d"
                }}
              >
                {/* Metallic Edge Highlight */}
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
                  borderRadius: "3rem", border: "1px solid rgba(255,255,255,0.2)",
                  pointerEvents: "none", zIndex: 30
                }}/>

                {/* Dynamic Notch Area */}
                <div style={{
                  position: "absolute", top: 6, left: "50%", transform: "translateX(-50%)",
                  width: 100, height: 28, backgroundColor: "#0f172a",
                  borderRadius: "14px", zIndex: 40,
                  display: "flex", alignItems: "center", justifyContent: "flex-end", paddingRight: 10
                }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#111", border: "1px solid #333", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ width: 4, height: 4, borderRadius: "50%", backgroundColor: "#0a4a8c", filter: "blur(0.5px)" }} />
                  </div>
                </div>

                {/* Screen Content */}
                <div style={{
                  backgroundColor: "#0f172a", borderRadius: "2.8rem",
                  overflow: "hidden", minHeight: 580, paddingTop: 40, paddingBottom: 24,
                  position: "relative"
                }}>
                  
                  {/* Subtle Screen Gradient Background */}
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "linear-gradient(160deg, #1e293b 0%, #0f172a 100%)", zIndex: 0 }} />
                   <div style={{ position: "absolute", top: -100, right: -50, width: 200, height: 200, background: "var(--primary)", opacity: 0.1, filter: "blur(80px)", borderRadius: "50%", zIndex: 0 }} />

                  <div style={{ position: "relative", zIndex: 10 }}>
                    {/* Status Bar */}
                    <div style={{ padding: "0 24px 12px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ color: "#fff", fontSize: 13, fontWeight: 600 }}>9:41</span>
                      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                        <svg width="18" height="12" viewBox="0 0 16 12" fill="none"><rect x="0.5" y="0.5" width="13" height="11" rx="2.5" stroke="white" strokeOpacity="0.8"/><rect x="2" y="2" width="10" height="8" rx="1" fill="white"/><path d="M15 4V8" stroke="white" strokeOpacity="0.8" strokeLinecap="round"/></svg>
                      </div>
                    </div>

                    {/* App Header */}
                    <div style={{ padding: "12px 20px 24px" }}>
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
                        style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}
                      >
                        <div>
                          <p style={{ color: "#94a3b8", fontSize: 13, margin: "0 0 4px", fontWeight: 500 }}>Good morning 👋</p>
                          <p style={{ color: "#fff", fontWeight: 800, fontSize: 18, margin: 0 }}>Find your turf</p>
                        </div>
                        <div style={{ width: 42, height: 42, borderRadius: "50%", backgroundColor: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 12px rgba(137,233,0,0.3)" }}>
                          <span style={{ color: "#000", fontSize: 16, fontWeight: 900 }}>A</span>
                        </div>
                      </motion.div>
                      
                      {/* Search bar */}
                      <motion.div 
                         initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6 }}
                         style={{ 
                          display: "flex", alignItems: "center", gap: 12, padding: "14px 18px", 
                          borderRadius: 16, backgroundColor: "rgba(255,255,255,0.05)", 
                          border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(10px)"
                        }}
                      >
                        <Search size={16} style={{ color: "var(--primary)" }} />
                        <span style={{ color: "#64748b", fontSize: 14, fontWeight: 500 }}>Search nearby turfs...</span>
                      </motion.div>
                    </div>

                    {/* Filter Chips */}
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }}
                      style={{ padding: "0 20px 24px", display: "flex", overflowX: "hidden", gap: 10, flexWrap: "nowrap" }}
                    >
                      {[{n: "⚽ Football", a: true}, {n: "🏏 Cricket", a: false}, {n: "🏸 Badminton", a: false}].map(s => (
                        <div key={s.n} style={{ 
                          padding: "8px 16px", borderRadius: 999, 
                          backgroundColor: s.a ? "var(--primary)" : "rgba(255,255,255,0.05)", 
                          border: s.a ? "none" : "1px solid rgba(255,255,255,0.1)", 
                          color: s.a ? "#000" : "#cbd5e1", fontSize: 13, fontWeight: s.a ? 700 : 500, whiteSpace: "nowrap" 
                        }}>
                          {s.n}
                        </div>
                      ))}
                    </motion.div>

                    {/* Featured Turf Card */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
                      style={{ 
                        margin: "0 16px 20px", borderRadius: 24, backgroundColor: "rgba(255,255,255,0.03)", 
                        border: "1px solid rgba(255,255,255,0.1)", overflow: "hidden", backdropFilter: "blur(10px)",
                        boxShadow: "0 10px 30px rgba(0,0,0,0.5)"
                      }}
                    >
                      <div style={{ height: 140, background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)", position: "relative", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
                        {/* Dynamic Field Pattern */}
                        <div style={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0, opacity: 0.2, backgroundImage: "linear-gradient(rgba(137,233,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(137,233,0,1) 1px, transparent 1px)", backgroundSize: "20px 20px", transform: "perspective(300px) rotateX(60deg) scale(1.5)" }} />
                        <div style={{ zIndex: 10, width: 60, height: 60, borderRadius: "50%", background: "rgba(137,233,0,0.1)", border: "2px solid var(--primary)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 30px rgba(137,233,0,0.4)" }}>
                          <Trophy size={28} style={{ color: "var(--primary)" }} />
                        </div>
                        <div style={{ position: "absolute", top: 12, right: 12, padding: "6px 14px", borderRadius: 999, backgroundColor: "var(--primary)", boxShadow: "0 4px 12px rgba(137,233,0,0.4)" }}>
                          <span style={{ color: "#000", fontSize: 11, fontWeight: 800, textTransform: "uppercase" }}>Available Now</span>
                        </div>
                      </div>
                      <div style={{ padding: 18 }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                          <h4 style={{ color: "#fff", fontWeight: 800, fontSize: 16, margin: 0 }}>Green Arena FC</h4>
                          <div style={{ display: "flex", alignItems: "center", gap: 4, backgroundColor: "rgba(137,233,0,0.1)", padding: "4px 8px", borderRadius: 8 }}>
                            <Star size={12} style={{ color: "var(--primary)" }} fill="var(--primary)" />
                            <span style={{ color: "var(--primary)", fontSize: 13, fontWeight: 800 }}>4.9</span>
                          </div>
                        </div>
                        <p style={{ color: "#94a3b8", fontSize: 13, margin: "0 0 16px", display: "flex", alignItems: "center", gap: 4 }}>
                          <MapPin size={12} /> 1.2 km away
                        </p>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 16 }}>
                          <div>
                             <p style={{ color: "#94a3b8", fontSize: 11, margin: "0 0 2px" }}>Price per hour</p>
                             <p style={{ color: "#fff", fontWeight: 800, fontSize: 18, margin: 0 }}>₹700</p>
                          </div>
                          <motion.div 
                            whileHover={{ scale: 1.05 }}
                            style={{ padding: "10px 24px", borderRadius: 12, backgroundColor: "var(--primary)", color: "#000", fontSize: 14, fontWeight: 800, boxShadow: "0 4px 14px rgba(137,233,0,0.4)" }}
                          >
                            Book
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Bottom Nav */}
                    <div style={{ 
                      position: "absolute", bottom: 0, left: 0, right: 0,
                      padding: "16px 24px 28px", backgroundColor: "rgba(15, 23, 42, 0.9)", 
                      backdropFilter: "blur(20px)", borderTop: "1px solid rgba(255,255,255,0.05)", 
                      display: "flex", justifyContent: "space-between" 
                    }}>
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                        <MapPin size={22} style={{ color: "var(--primary)" }} />
                        <div style={{ width: 4, height: 4, borderRadius: "50%", backgroundColor: "var(--primary)" }} />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, opacity: 0.5 }}>
                        <CalendarCheck size={22} style={{ color: "#fff" }} />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, opacity: 0.5 }}>
                         <TrendingUp size={22} style={{ color: "#fff" }} />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, opacity: 0.5 }}>
                        <MessageCircle size={22} style={{ color: "#fff" }} />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Enhanced Floating Notifications with 3D offset */}
              <motion.div
                style={{
                  position: "absolute", right: -40, top: 120, zIndex: 50,
                  transform: "translateZ(80px)",
                  padding: "16px", borderRadius: 20, 
                  backgroundColor: "rgba(30, 41, 59, 0.8)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid rgba(255,255,255,0.1)", 
                  boxShadow: "0 20px 40px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(137,233,0,0.2)",
                  display: "flex", alignItems: "center", gap: 14, width: 240
                }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div style={{ width: 36, height: 36, borderRadius: "50%", backgroundColor: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 0 15px rgba(137,233,0,0.4)" }}>
                  <BellRing size={18} style={{ color: "#000" }} />
                </div>
                <div style={{ minWidth: 0 }}>
                  <p style={{ color: "#fff", fontWeight: 800, fontSize: 14, margin: "0 0 4px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>Booking Confirmed!</p>
                  <p style={{ color: "#cbd5e1", fontSize: 12, margin: 0, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", fontWeight: 500 }}>Green Arena · 6 PM</p>
                </div>
              </motion.div>

              <motion.div
                style={{
                  position: "absolute", left: -30, bottom: 180, zIndex: 50,
                  transform: "translateZ(60px)",
                  padding: "16px 20px", borderRadius: 20, 
                  backgroundColor: "rgba(30, 41, 59, 0.8)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid rgba(255,255,255,0.1)", 
                  boxShadow: "0 20px 40px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(137,233,0,0.2)"
                }}
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, delay: 1, repeat: Infinity, ease: "easeInOut" }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                   <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "var(--primary)", boxShadow: "0 0 10px var(--primary)" }} />
                   <p style={{ color: "#fff", fontWeight: 800, fontSize: 15, margin: 0 }}>Instant</p>
                </div>
                <p style={{ color: "#cbd5e1", fontSize: 13, margin: 0, fontWeight: 500 }}>Confirmation</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
