import type { CSSProperties } from "react";
import profilePhoto from "@/assets/profile-photo.jpeg";
import { contact } from "@/data/portfolio";

type HeroProfilePanelProps = {
  className?: string;
  style?: CSSProperties;
};

export default function HeroProfilePanel({ className = "", style }: HeroProfilePanelProps) {
  return (
    <div className={`hero-profile-panel ${className}`} style={style}>
      <div className="hero-profile-panel-bg" aria-hidden="true">
        <div className="hero-profile-grid" />

        <div className="hero-profile-kpi hero-profile-kpi-tl">
          <span className="hero-profile-kpi-value">500+</span>
          <span className="hero-profile-kpi-label">Servers</span>
        </div>
        <div className="hero-profile-kpi hero-profile-kpi-tr">
          <span className="hero-profile-kpi-value">25%</span>
          <span className="hero-profile-kpi-label">Automation</span>
        </div>
        <div className="hero-profile-kpi hero-profile-kpi-bl">
          <span className="hero-profile-kpi-value">-20%</span>
          <span className="hero-profile-kpi-label">Downtime</span>
        </div>

        <svg className="hero-profile-chart-bars" viewBox="0 0 80 48" fill="none">
          {[18, 28, 22, 38, 32, 42].map((h, i) => (
            <rect
              key={i}
              x={i * 13 + 2}
              y={44 - h}
              width="9"
              height={h}
              rx="2"
              fill="hsl(187 92% 52%)"
              opacity={0.15 + i * 0.04}
            />
          ))}
        </svg>

        <svg className="hero-profile-chart-line" viewBox="0 0 120 40" fill="none">
          <path
            d="M0 32 Q20 28 40 24 T80 14 T120 8"
            stroke="hsl(158 70% 48%)"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.35"
          />
          <path
            d="M0 32 Q20 28 40 24 T80 14 T120 8 V40 H0Z"
            fill="hsl(158 70% 48%)"
            fillOpacity="0.06"
          />
        </svg>

        <div className="hero-profile-sql font-mono">
          <span className="text-primary/40">SELECT</span> kpi_value
          <br />
          <span className="text-primary/40">FROM</span> metrics
          <br />
          <span className="text-primary/40">WHERE</span> status = &apos;live&apos;;
        </div>

        <div className="hero-profile-tools font-mono">SQL · Power BI · Python · Tableau</div>
      </div>

      <div className="hero-profile-photo-wrap">
        <div className="profile-ring w-full h-full">
          <img
            src={profilePhoto}
            alt={`${contact.name} — Data Analyst`}
            className="w-full h-full rounded-[13px] object-cover object-[center_18%]"
          />
        </div>
        <div className="hero-mobile-photo-overlay lg:hidden" aria-hidden="true">
          <p className="hero-mobile-photo-name">{contact.name}</p>
          <p className="hero-mobile-photo-title">{contact.title}</p>
        </div>
      </div>
    </div>
  );
}
