import {
  ArrowDown,
  Briefcase,
  FileText,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";
import { contact, heroStats, heroKeywords, summary } from "@/data/portfolio";
import { useResumeDownload } from "@/hooks/useResumeDownload";
import HeroBackground from "@/components/HeroBackground";
import HeroProfilePanel from "@/components/HeroProfilePanel";

export default function Hero() {
  const { handleDownload, downloading } = useResumeDownload();

  return (
    <section className="hero-section relative min-h-screen flex items-center overflow-hidden">
      <HeroBackground />

      <div className="section-container hero-section-inner w-full py-8 sm:py-14 md:py-20 relative z-10">
        <HeroProfilePanel className="hero-mobile-banner lg:hidden animate-fade-up" />

        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-14 xl:gap-16">
          <div className="max-w-2xl lg:flex-1 hero-content-panel">
            <div className="status-badge hero-status-badge mb-5 sm:mb-6 animate-fade-up">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
              </span>
              <span className="hero-status-text">Open to Data Analyst · BI · Reporting · Operations Roles</span>
            </div>

            <h1
              className="hero-headline text-[1.75rem] sm:text-5xl lg:text-[3.25rem] xl:text-[3.5rem] font-heading font-800 text-foreground leading-[1.08] mb-4 sm:mb-5 animate-fade-up"
              style={{ animationDelay: "0.08s" }}
            >
              Turning{" "}
              <span className="gradient-text">Complex Data</span>
              <br className="hidden sm:block" />
              {" "}Into{" "}
              <span className="gradient-text">Business Impact</span>
            </h1>

            <p
              className="hero-mobile-hide-duplicate text-base sm:text-lg text-foreground/90 font-heading font-600 mb-1 sm:mb-2 animate-fade-up"
              style={{ animationDelay: "0.14s" }}
            >
              {contact.name}
            </p>
            <p
              className="hero-mobile-hide-duplicate text-sm sm:text-base text-primary/90 font-mono mb-3 sm:mb-4 animate-fade-up"
              style={{ animationDelay: "0.18s" }}
            >
              {contact.title}
            </p>

            <p
              className="text-sm sm:text-[15px] text-muted-foreground max-w-xl mb-5 sm:mb-6 leading-relaxed animate-fade-up"
              style={{ animationDelay: "0.22s" }}
            >
              {summary.short}
            </p>

            <div
              className="hero-keywords flex flex-wrap gap-2 mb-6 sm:mb-8 animate-fade-up"
              style={{ animationDelay: "0.28s" }}
            >
              {heroKeywords.map((kw) => (
                <span key={kw} className="skill-chip">
                  {kw}
                </span>
              ))}
            </div>

            <div
              className="hero-cta-row flex flex-col sm:flex-row flex-wrap gap-3 mb-4 sm:mb-5 animate-fade-up"
              style={{ animationDelay: "0.34s" }}
            >
              <a href="#projects" className="btn-primary hero-btn-primary">
                <Briefcase size={16} /> View Projects
              </a>
              <a
                href={`mailto:${contact.email}?subject=Data%20Analyst%20Opportunity%20%E2%80%94%20Ashok%20Kumar%20Parihar`}
                className="btn-outline hero-btn-outline"
              >
                <Mail size={16} /> Let&apos;s Connect
              </a>
            </div>

            <div
              className="hero-social-row flex flex-wrap gap-2 animate-fade-up"
              style={{ animationDelay: "0.4s" }}
            >
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost hero-btn-ghost"
                aria-label="LinkedIn profile"
              >
                <Linkedin size={14} /> LinkedIn
              </a>
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost hero-btn-ghost"
                aria-label="GitHub profile"
              >
                <Github size={14} /> GitHub
              </a>
              <button
                type="button"
                onClick={handleDownload}
                disabled={downloading}
                className="btn-ghost hero-btn-ghost disabled:opacity-50"
                aria-label="Download resume PDF"
              >
                <FileText size={14} /> {downloading ? "Generating PDF…" : "Download Resume"}
              </button>
            </div>

            <div
              className="flex items-center gap-2 mt-5 sm:mt-6 text-xs text-muted-foreground animate-fade-up"
              style={{ animationDelay: "0.45s" }}
            >
              <MapPin size={13} className="text-primary shrink-0" />
              {contact.location}
            </div>
          </div>

          <HeroProfilePanel
            className="hidden lg:block lg:flex-shrink-0 animate-fade-up"
            style={{ animationDelay: "0.25s" }}
          />
        </div>

        <div
          className="hero-stats-grid relative z-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 mt-10 sm:mt-16 md:mt-20 animate-fade-up"
          style={{ animationDelay: "0.5s" }}
        >
          {heroStats.map((s) => (
            <div key={s.label} className="stat-block hero-stat-block">
              <div className="kpi-number">{s.value}</div>
              <div className="kpi-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <a
        href="#about"
        className="hero-scroll-hint absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors flex flex-col items-center gap-1 z-10"
        aria-label="Scroll to about section"
      >
        <span className="text-[10px] uppercase tracking-widest font-medium">Explore</span>
        <ArrowDown size={18} className="hero-scroll-hint-icon" />
      </a>
    </section>
  );
}
