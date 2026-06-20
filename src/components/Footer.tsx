import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { contact } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="relative border-t border-border/60 py-10">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="section-container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <p className="font-heading font-600 text-sm text-foreground mb-1">
              {contact.name}
            </p>
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} · Data Analyst Portfolio · Detroit, MI
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost !px-3 !py-2"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost !px-3 !py-2"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href={contact.portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost !px-3 !py-2"
              aria-label="Portfolio"
            >
              <ExternalLink size={16} />
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="btn-ghost !px-3 !py-2"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
