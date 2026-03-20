interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--border-primary)] bg-[var(--primary-glow)] text-[var(--primary)] text-sm font-semibold tracking-widest uppercase ${className}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] animate-pulse inline-block" />
      {children}
    </span>
  );
}
