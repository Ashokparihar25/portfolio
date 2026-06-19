import { experiences } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-heading font-800 text-foreground section-header">Professional Experience</h2>
        <div className="gradient-bar mb-4" />
        <p className="section-subtitle">
          Data analytics experience across nonprofit technology, TCS enterprise infrastructure, and University of Detroit Mercy research roles.
        </p>

        <div className="relative">
          <div className="absolute left-[18px] md:left-[30px] top-0 bottom-0 w-px bg-border" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <div key={i} className="relative pl-12 md:pl-20">
                <div className="absolute left-[12px] md:left-[24px] top-2 w-3.5 h-3.5 rounded-full border-[3px] border-primary bg-card z-10" />

                <div className="card-elevated p-6 md:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-1 gap-1">
                    <div>
                      <h3 className="font-heading font-800 text-lg md:text-xl text-foreground">{exp.company}</h3>
                      <p className="text-sm text-secondary font-600">{exp.role}</p>
                    </div>
                    <div className="text-xs text-muted-foreground font-medium whitespace-nowrap">
                      {exp.period} · {exp.location}
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-heading font-600 mb-4 mt-2">
                    ★ {exp.highlight}
                  </div>

                  <ul className="space-y-2.5">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="text-sm text-muted-foreground flex gap-2.5 leading-relaxed">
                        <span className="text-secondary mt-0.5 shrink-0 text-xs">▸</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
