import { useState } from "react";
import { Menu, X } from "lucide-react";
import { contact } from "@/data/portfolio";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Outcomes", href: "#outcomes" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const mailto = `mailto:${contact.email}?subject=Data%20Analyst%20Opportunity%20%E2%80%94%20Ashok%20Kumar%20Parihar`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 nav-glass">
      <div className="section-container flex items-center justify-between h-16">
        <a href="#" className="font-heading font-800 text-lg gradient-text tracking-tight">
          AK Parihar
        </a>

        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] font-body font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
          <a href={mailto} className="btn-primary !text-xs !px-5 !py-2.5">
            Hire Me
          </a>
        </div>

        <button
          type="button"
          className="md:hidden p-2 text-foreground rounded-lg hover:bg-muted/50 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/60 bg-background/95 backdrop-blur-xl px-6 py-4 space-y-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a href={mailto} onClick={() => setOpen(false)} className="btn-primary w-full text-center !text-xs mt-3">
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}
