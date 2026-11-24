import Link from "next/link";

export function SiteBrand({ compact = false }: { compact?: boolean }) {
  return (
    <Link className={`site-brand ${compact ? "site-brand--compact" : ""}`} href="/#home" aria-label="VELOCITY MOTORS home">
      <svg className="site-brand__mark" viewBox="0 0 44 44" aria-hidden="true"><path d="M4 6h8.4l9.6 25.6L31.3 6H40L25.2 39h-7.1L4 6Z" fill="currentColor"/><path d="M26.7 25.8 33.9 6H40L25.2 39h-7.1l3.1-7.1 5.5-6.1Z" fill="#d71920"/><path d="M3 42h38" stroke="#d71920" strokeWidth="1.7"/></svg>
      <span className="site-brand__type"><strong>VELOCITY</strong><small>MOTORS</small></span>
    </Link>
  );
}
