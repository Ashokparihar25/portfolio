import { MapPin, Mail, Linkedin, Github, ArrowUpRight, CheckCircle, Phone } from "lucide-react";
import { contact, contactHighlights, contactTags } from "@/data/portfolio";
import { useResumeDownload } from "@/hooks/useResumeDownload";

export default function Contact() {
  const { handleDownload, downloading } = useResumeDownload();

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] data-grid-bg" />
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "var(--hero-gradient)" }} />

      <div className="section-container relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary/10 text-secondary text-xs font-heading font-600 mb-8">
            <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse" />
            Actively Seeking Data Analytics, BI &amp; Data Science Roles
          </div>

          <h2 className="text-3xl md:text-4xl font-heading font-800 text-foreground mb-4">
            Ready to Deliver{" "}
            <span className="gradient-text">Data-Driven Impact</span>
          </h2>

          <p className="text-muted-foreground text-sm md:text-base mb-6 max-w-xl mx-auto leading-relaxed">
            Seeking full-time opportunities in data analytics, business intelligence, or data science — bringing TCS infrastructure analytics, Saayam for All nonprofit analytics, UDM graduate project work, and hands-on machine learning skills.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-w-lg mx-auto mb-8">
            {contactHighlights.map((h) => (
              <div key={h} className="flex items-start gap-1.5 text-left">
                <CheckCircle size={12} className="text-secondary mt-0.5 shrink-0" />
                <span className="text-[11px] text-muted-foreground">{h}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-8 text-xs text-muted-foreground">
            {contactTags.map((tag) => (
              <span key={tag} className="px-3 py-1.5 rounded-lg bg-muted border border-border font-medium">{tag}</span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 mb-10">
            <a href={`mailto:${contact.email}?subject=Data%20Analyst%20Opportunity`} className="btn-primary">
              <Mail size={16} /> Get In Touch
            </a>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="btn-outline">
              <Linkedin size={16} /> Connect on LinkedIn
            </a>
            <button type="button" onClick={handleDownload} disabled={downloading} className="btn-outline">
              <ArrowUpRight size={16} /> {downloading ? "Generating…" : "Download Resume"}
            </button>
            <a href={contact.github} target="_blank" rel="noopener noreferrer" className="btn-outline">
              <Github size={16} /> GitHub
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin size={14} />
              {contact.location}
            </div>
            <div className="flex items-center gap-2">
              <Phone size={14} />
              {contact.phone}
            </div>
            <div className="flex items-center gap-2">
              <Mail size={14} />
              {contact.email}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
