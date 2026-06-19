import { useState } from "react";
import { Menu, X } from "lucide-react";

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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/85 backdrop-blur-xl border-b border-border/60">
      <div className="section-container flex items-center justify-between h-16">
        <a href="#" className="font-heading font-800 text-lg gradient-text">
          AK Parihar
        </a>

        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] font-body font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
          <a href="mailto:ashokkumasirvi110@gmail.com?subject=Data%20Analyst%20Opportunity" className="btn-primary !text-xs !px-5 !py-2.5">
            Hire Me
          </a>
        </div>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-card/95 backdrop-blur-xl px-6 py-4 space-y-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-sm font-medium text-muted-foreground hover:text-primary"
            >
              {l.label}
            </a>
          ))}
          <a href="mailto:ashokkumasirvi110@gmail.com?subject=Data%20Analyst%20Opportunity" className="btn-primary w-full text-center !text-xs">
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}
