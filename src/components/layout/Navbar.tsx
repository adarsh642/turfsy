"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Button from "@/components/ui/Button";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "For Owners", href: "#for-owners" },
  { label: "Download App", href: "#download" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const navBg = useTransform(
    scrollY,
    [0, 80],
    ["rgba(15,15,15,0)", "rgba(15,15,15,0.92)"]
  );

  useEffect(() => {
    const unsub = scrollY.on("change", (y) => setScrolled(y > 40));
    return unsub;
  }, [scrollY]);

  return (
    <motion.header
      style={{ backgroundColor: navBg }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl border-b border-[var(--border-subtle)]" : ""
      }`}
      id="navbar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.a
            href="#hero"
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative w-9 h-9 flex items-center justify-center rounded-xl bg-[var(--primary)] shadow-[0_0_16px_var(--primary-glow)]">
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
            <span className="text-xl font-black tracking-tight text-white">
              Turf<span className="text-[var(--primary)]">sy</span>
            </span>
          </motion.a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="text-[var(--text-secondary)] hover:text-white text-sm font-medium transition-colors duration-200 relative group"
                whileHover={{ y: -1 }}
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[var(--primary)] group-hover:w-full transition-all duration-300 rounded-full" />
              </motion.a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm" href="#features">
              Login
            </Button>
            <Button variant="primary" size="sm" href="#download" id="nav-cta">
              Get the App
            </Button>
          </div>

          {/* Mobile toggle */}
          <motion.button
            className="md:hidden p-2 rounded-lg text-[var(--text-secondary)] hover:text-white hover:bg-white/5 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        className="md:hidden overflow-hidden border-t border-[var(--border-subtle)] backdrop-blur-xl bg-[rgba(15,15,15,0.95)]"
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-[var(--text-secondary)] hover:text-white font-medium py-1 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Button
            variant="primary"
            size="md"
            href="#download"
            fullWidth
            className="mt-2"
          >
            Get the App
          </Button>
        </div>
      </motion.div>
    </motion.header>
  );
}
