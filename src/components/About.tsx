import { Database, BarChart3, Cloud, BrainCircuit } from "lucide-react";
import { aboutSkillCards, summary } from "@/data/portfolio";

const icons = [Database, BarChart3, BrainCircuit, Cloud];

export default function About() {
  return (
    <section id="about" className="section-padding section-alt">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-heading font-800 text-foreground section-header">About Me</h2>
        <div className="gradient-bar mb-4" />
        <p className="section-subtitle">
          Data analytics professional with enterprise, nonprofit, and research experience — focused on BI, KPI reporting, and measurable business impact.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2 space-y-5 text-muted-foreground text-sm md:text-base leading-relaxed">
            {summary.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="space-y-4">
            {aboutSkillCards.map((item, i) => {
              const Icon = icons[i];
              return (
                <div key={item.label} className="card-elevated p-5 flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary shrink-0">
                    <Icon size={20} />
                  </div>
                  <div>
                    <div className="font-heading font-600 text-sm text-foreground mb-0.5">{item.label}</div>
                    <div className="text-xs text-muted-foreground leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
