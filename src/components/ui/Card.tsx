"use client";

import { motion } from "framer-motion";
import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  id?: string;
}

export default function Card({
  children,
  className = "",
  hover = true,
  glow = false,
  id,
}: CardProps) {
  return (
    <motion.div
      id={id}
      className={`gradient-border rounded-2xl p-6 relative overflow-hidden group ${
        glow ? "shadow-[0_0_30px_var(--primary-glow)]" : ""
      } ${className}`}
      whileHover={hover ? { y: -6, scale: 1.01 } : {}}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/*
        The glow overlay sits at z-0, children at z-10.
        Using pointer-events-none so hover works on children.
      */}
      <div className="absolute inset-0 rounded-2xl z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-[var(--primary-glow)] to-transparent" />
      <div className="relative z-10 flex flex-col h-full">{children}</div>
    </motion.div>
  );
}
