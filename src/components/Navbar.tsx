import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
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

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 nav-glass mobile-nav-bar">
        <div className="section-container flex items-center justify-between h-14 sm:h-16">
          <a href="#" className="font-heading font-800 text-base sm:text-lg gradient-text tracking-tight">
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
            className="md:hidden mobile-nav-toggle"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden mobile-nav-overlay" role="dialog" aria-modal="true" aria-label="Navigation menu">
          <button
            type="button"
            className="mobile-nav-backdrop"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          />

          <div className="mobile-nav-drawer">
            <div className="mobile-nav-drawer-header">
              <div>
                <p className="mobile-nav-drawer-eyebrow">Portfolio</p>
                <p className="mobile-nav-drawer-name">{contact.name}</p>
              </div>
              <button
                type="button"
                className="mobile-nav-toggle"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            <nav className="mobile-nav-links">
              {links.map((l, i) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="mobile-nav-link"
                  style={{ animationDelay: `${i * 0.04}s` }}
                >
                  <span className="mobile-nav-link-index">{String(i + 1).padStart(2, "0")}</span>
                  <span>{l.label}</span>
                  <ArrowUpRight size={16} className="mobile-nav-link-arrow" />
                </a>
              ))}
            </nav>

            <div className="mobile-nav-drawer-footer">
              <a href={mailto} onClick={() => setOpen(false)} className="btn-primary mobile-nav-hire w-full">
                Hire Me
              </a>
              <p className="mobile-nav-drawer-meta">{contact.location}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
