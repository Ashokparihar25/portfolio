import { BarChart3, Cog, Database, ChevronRight, Code2, FileCode2, BookOpen, HeartPulse, Download, GraduationCap, Users } from "lucide-react";
import { projects } from "@/data/portfolio";

const projectIcons = [GraduationCap, HeartPulse, Database, BarChart3, Cog];
const projectCtas = [
  [
    { icon: FileCode2, label: "Python Workflow", href: "#evidence-python-workflow" },
    { icon: BookOpen, label: "Methodology", href: "#evidence-methodology" },
  ],
  [
    { icon: FileCode2, label: "Python Workflow", href: "#evidence-python-workflow" },
    { icon: BookOpen, label: "Methodology", href: "#evidence-methodology" },
  ],
  [
    { icon: Code2, label: "SQL Logic", href: "#evidence-sql-logic" },
    { icon: BarChart3, label: "Reporting Views", href: "#evidence-bi-dashboard" },
  ],
  [
    { icon: FileCode2, label: "Python Workflow", href: "#evidence-python-workflow" },
    { icon: BookOpen, label: "Methodology", href: "#evidence-methodology" },
  ],
  [
    { icon: Code2, label: "SQL Logic", href: "#evidence-sql-logic" },
    { icon: BarChart3, label: "BI Dashboard View", href: "#evidence-bi-dashboard" },
  ],
];

export default function CaseStudies() {
  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-heading font-800 text-foreground section-header">Featured Projects</h2>
        <div className="gradient-bar mb-4" />
        <p className="section-subtitle">
          Graduate capstone, course projects, TCS client work, and Saayam for All analytics — with downloadable reports and presentations.
        </p>

        <div className="space-y-8">
          {projects.map((s, i) => {
            const Icon = projectIcons[i] ?? Users;
            const ctas = projectCtas[i] ?? [];
            return (
              <div key={i} className="card-elevated overflow-hidden">
                <div className="p-6 md:p-8 pb-0">
                  <div className="flex items-start gap-4 mb-2">
                    <div className="p-3 rounded-xl shrink-0" style={{ background: "var(--hero-gradient)" }}>
                      <Icon size={22} className="text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-heading font-800 text-lg md:text-xl text-foreground">{s.title}</h3>
                      <p className="text-sm text-secondary font-600">{s.subtitle}</p>
                      <p className="text-xs text-muted-foreground mt-1">{s.meta}</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 md:p-8 pt-5">
                  <div className="grid md:grid-cols-3 gap-5 mb-6">
                    {[
                      { label: "The Challenge", value: s.problem },
                      { label: "My Approach", value: s.approach },
                      { label: "Analytics Delivered", value: s.dashboards },
                    ].map((item) => (
                      <div key={item.label} className="bg-muted/50 rounded-xl p-5">
                        <div className="text-[11px] font-heading font-600 text-secondary uppercase tracking-widest mb-3 flex items-center gap-1">
                          <ChevronRight size={12} /> {item.label}
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
                    {s.outcomes.map((o, j) => (
                      <div key={j} className="stat-block !p-4">
                        <div className="kpi-number !text-xl md:!text-2xl">{o.metric}</div>
                        <div className="kpi-label !mt-1">{o.desc}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2 border-t border-border/60">
                    {s.downloads.map((dl) => (
                      <a
                        key={dl.label}
                        href={dl.href}
                        download={dl.filename}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-[11px] font-heading font-600 bg-primary/10 text-primary border border-primary/25 hover:bg-primary/15 transition-all duration-200"
                      >
                        <Download size={13} /> {dl.label}
                      </a>
                    ))}
                    {ctas.map((cta) => (
                      <a
                        key={cta.label}
                        href={cta.href}
                        onClick={(e) => {
                          e.preventDefault();
                          document.querySelector(cta.href)?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-[11px] font-heading font-600 bg-muted/60 text-muted-foreground border border-border hover:border-primary/40 hover:text-primary hover:bg-primary/5 transition-all duration-200"
                      >
                        <cta.icon size={13} /> {cta.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
