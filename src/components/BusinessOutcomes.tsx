import { TrendingDown, Zap, BarChart3, Users, BrainCircuit, Repeat } from "lucide-react";
import { outcomes } from "@/data/portfolio";

const icons = [BrainCircuit, BarChart3, Zap, Repeat, TrendingDown, Users];

export default function BusinessOutcomes() {
  return (
    <section id="outcomes" className="section-padding">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-heading font-800 text-foreground section-header">Key Outcomes Delivered</h2>
        <div className="gradient-bar mb-4" />
        <p className="section-subtitle">Measurable results documented in my resume, capstone report, and graduate project presentations.</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {outcomes.map((o, i) => {
            const Icon = icons[i];
            return (
              <div key={i} className="outcome-card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-primary/8 text-primary">
                    <Icon size={20} />
                  </div>
                  <div className="kpi-number !text-2xl md:!text-3xl">{o.metric}</div>
                </div>
                <h3 className="font-heading font-800 text-base text-foreground mb-2">{o.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{o.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
