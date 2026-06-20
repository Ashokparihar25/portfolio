import {
  BarChart3,
  Cog,
  Database,
  ChevronRight,
  Code2,
  FileCode2,
  BookOpen,
  GraduationCap,
  HeartPulse,
  Users,
} from "lucide-react";
import DocumentViewerModal from "@/components/DocumentViewerModal";
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

const projectViewerTriggerClass =
  "group inline-flex items-center justify-center gap-1.5 w-full sm:w-auto px-4 py-2.5 sm:py-2 rounded-lg text-[11px] font-heading font-600 bg-primary/10 text-primary border border-primary/25 hover:bg-primary/15 hover:border-primary/40 hover:shadow-[0_0_20px_hsl(187_92%_52%/0.15)] transition-all duration-300";

export default function CaseStudies() {
  return (
    <section id="projects" className="section-padding section-alt">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-heading font-800 text-foreground section-header">Featured Projects</h2>
        <div className="gradient-bar mb-4" />
        <p className="section-subtitle">
          Graduate capstone, course projects, TCS client work, and Saayam for All analytics — with in-browser reports and presentations.
        </p>

        <div className="space-y-8">
          {projects.map((s, i) => {
            const Icon = projectIcons[i] ?? Users;
            const ctas = projectCtas[i] ?? [];
            return (
              <div key={i} className="card-elevated overflow-hidden mobile-project-card">
                <div className="p-5 sm:p-6 md:p-8 pb-0">
                  <div className="flex items-start gap-4 mb-2">
                    <div className="p-3 rounded-xl shrink-0" style={{ background: "var(--hero-gradient)" }}>
                      <Icon size={22} className="text-primary-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-heading font-800 text-lg md:text-xl text-foreground">{s.title}</h3>
                      <p className="text-sm text-secondary font-600">{s.subtitle}</p>
                      <p className="text-xs text-muted-foreground mt-1">{s.meta}</p>

                      {s.viewers.length > 0 && (
                        <div className="flex flex-col sm:flex-row flex-wrap gap-2 mt-4">
                          {s.viewers.map((viewer) => (
                            <DocumentViewerModal
                              key={viewer.label}
                              triggerLabel={viewer.label}
                              title={s.title}
                              subtitle={s.meta}
                              src={viewer.href}
                              kind={viewer.kind}
                              triggerClassName={projectViewerTriggerClass}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-5 sm:p-6 md:p-8 pt-5">
                  <div className="grid md:grid-cols-3 gap-4 sm:gap-5 mb-6">
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

                  {ctas.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-2 border-t border-border/60">
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
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
