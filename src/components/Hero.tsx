import { ArrowDown, Briefcase, FileText, Github, Linkedin, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpeg";
import { contact, heroStats, summary } from "@/data/portfolio";
import { useResumeDownload } from "@/hooks/useResumeDownload";

export default function Hero() {
  const { handleDownload, downloading } = useResumeDownload();

  return (
    <section className="relative min-h-screen flex items-center data-grid-bg pt-16">
      <div className="section-container w-full py-12 md:py-0">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
          <div className="flex flex-col items-center lg:hidden mb-8 animate-fade-up">
            <div className="relative">
              <div className="w-44 h-44 rounded-2xl p-[3px] bg-gradient-to-br from-primary via-secondary to-primary/60 shadow-xl">
                <img
                  src={profilePhoto}
                  alt={`${contact.name} – Data Analyst`}
                  className="w-full h-full rounded-[13px] object-cover object-top"
                />
              </div>
            </div>
            <p className="mt-3 text-xs font-heading font-600 text-muted-foreground tracking-wide text-center">
              Data Analytics · SQL · Python · Power BI · Machine Learning
            </p>
          </div>

          <div className="max-w-3xl lg:flex-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-xs font-heading font-600 mb-6 animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              Open to Data Analytics, BI &amp; Data Science Roles
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-heading font-800 text-foreground leading-[1.1] mb-5 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Turning <span className="gradient-text">Complex Data</span> Into{" "}
              <span className="gradient-text">Actionable Insights</span>
            </h1>

            <p className="text-lg sm:text-xl text-foreground/80 font-heading font-600 mb-3 animate-fade-up" style={{ animationDelay: "0.18s" }}>
              {contact.name} · {contact.title}
            </p>

            <p className="text-sm sm:text-base text-muted-foreground max-w-xl mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: "0.25s" }}>
              {summary.short}
            </p>

            <div className="flex flex-wrap gap-3 mb-6 animate-fade-up" style={{ animationDelay: "0.35s" }}>
              <a href="#projects" className="btn-primary">
                <Briefcase size={16} /> View Projects
              </a>
              <a href={`mailto:${contact.email}?subject=Data%20Analyst%20Opportunity`} className="btn-outline">
                <Mail size={16} /> Let's Connect
              </a>
            </div>
            <div className="flex flex-wrap gap-2 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="btn-ghost text-xs">
                <Linkedin size={14} /> LinkedIn
              </a>
              <a href={contact.github} target="_blank" rel="noopener noreferrer" className="btn-ghost text-xs">
                <Github size={14} /> GitHub
              </a>
              <button type="button" onClick={handleDownload} disabled={downloading} className="btn-ghost text-xs">
                <FileText size={14} /> {downloading ? "Generating…" : "Download Resume"}
              </button>
            </div>
          </div>

          <div className="hidden lg:flex flex-col items-center lg:flex-shrink-0 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              <div className="w-64 h-64 xl:w-72 xl:h-72 rounded-2xl p-[3px] bg-gradient-to-br from-primary via-secondary to-primary/60 shadow-2xl">
                <img
                  src={profilePhoto}
                  alt={`${contact.name} – Data Analyst`}
                  className="w-full h-full rounded-[13px] object-cover object-top"
                />
              </div>
              <div className="absolute -inset-4 rounded-3xl bg-primary/5 -z-10 blur-2xl" />
            </div>
            <p className="mt-4 text-xs font-heading font-600 text-muted-foreground tracking-wide text-center max-w-[16rem]">
              Data Analytics · SQL · Python · Power BI · Machine Learning
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 mt-14 md:mt-20 animate-fade-up" style={{ animationDelay: "0.55s" }}>
          {heroStats.map((s) => (
            <div key={s.label} className="stat-block">
              <div className="kpi-number">{s.value}</div>
              <div className="kpi-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce hidden md:block">
        <ArrowDown size={20} />
      </a>
    </section>
  );
}
