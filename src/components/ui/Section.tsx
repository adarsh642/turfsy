import React from "react";

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  grid?: boolean;
  tight?: boolean;
}

export default function Section({
  children,
  id,
  className = "",
  grid = false,
  tight = false,
}: SectionProps) {
  if (tight) {
    return (
      <section
        id={id}
        className={`relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden ${
          grid ? "grid-bg" : ""
        } ${className}`}
      >
        <div className="relative max-w-7xl mx-auto">{children}</div>
      </section>
    );
  }

  return (
    <section
      id={id}
      className={`relative py-32 md:py-48 px-4 sm:px-6 lg:px-8 overflow-hidden ${
        grid ? "grid-bg" : ""
      } ${className}`}
    >
      <div className="relative max-w-7xl mx-auto">{children}</div>
    </section>
  );
}
