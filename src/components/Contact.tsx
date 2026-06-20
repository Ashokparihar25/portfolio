import {
  MapPin,
  Mail,
  Linkedin,
  Github,
  ArrowUpRight,
  CheckCircle,
  Phone,
  ExternalLink,
} from "lucide-react";
import { contact, contactHighlights, contactTags } from "@/data/portfolio";
import { useResumeDownload } from "@/hooks/useResumeDownload";

export default function Contact() {
  const { handleDownload, downloading } = useResumeDownload();
  const mailto = `mailto:${contact.email}?subject=Data%20Analyst%20Opportunity%20%E2%80%94%20Ashok%20Kumar%20Parihar`;

  return (
    <section id="contact" className="section-padding section-alt relative overflow-hidden">
      <div className="absolute inset-0 hero-grid opacity-30 pointer-events-none" />

      <div className="section-container relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="status-badge mb-8 mx-auto w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
            </span>
            Open to Data Analyst · BI · Reporting · Healthcare Analytics Roles
          </div>

          <h2 className="text-3xl md:text-4xl font-heading font-800 text-foreground mb-4">
            Ready to Deliver{" "}
            <span className="gradient-text">Measurable Analytics Impact</span>
          </h2>

          <p className="text-muted-foreground text-sm md:text-base mb-8 max-w-xl mx-auto leading-relaxed">
            Seeking full-time roles in data analytics, business intelligence, and operational reporting —
            bringing enterprise infrastructure analytics, nonprofit platform experience, and healthcare
            analytics projects to your team.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto mb-8 text-left">
            {contactHighlights.map((h) => (
              <div key={h} className="flex items-start gap-2 card-elevated !transform-none !shadow-none px-4 py-3">
                <CheckCircle size={14} className="text-secondary mt-0.5 shrink-0" />
                <span className="text-xs text-muted-foreground leading-relaxed">{h}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {contactTags.map((tag) => (
              <span key={tag} className="skill-chip">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 mb-10">
            <a href={mailto} className="btn-primary">
              <Mail size={16} /> Get In Touch
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <Linkedin size={16} /> Connect on LinkedIn
            </a>
            <button
              type="button"
              onClick={handleDownload}
              disabled={downloading}
              className="btn-outline disabled:opacity-50"
            >
              <ArrowUpRight size={16} /> {downloading ? "Generating PDF…" : "Download Resume"}
            </button>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <Github size={16} /> GitHub
            </a>
            <a
              href={contact.portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <ExternalLink size={16} /> Portfolio
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-primary" />
              {contact.location}
            </div>
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-primary" />
              {contact.phone}
            </div>
            <div className="flex items-center gap-2">
              <Mail size={14} className="text-primary" />
              <a href={mailto} className="hover:text-primary transition-colors">
                {contact.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
