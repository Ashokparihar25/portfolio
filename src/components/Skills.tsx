import { skillGroups } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-heading font-800 text-foreground section-header">Skills Matrix</h2>
        <div className="gradient-bar mb-4" />
        <p className="section-subtitle">Technical skills applied across capstone, course projects, TCS analytics work, and Saayam for All.</p>

        <div className="grid md:grid-cols-3 gap-6">
          {skillGroups.map((g) => (
            <div key={g.title} className="card-elevated p-6 md:p-7">
              <h3 className="font-heading font-800 text-base text-foreground mb-5">{g.title}</h3>
              <div className="flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <span key={s} className="px-3 py-1.5 rounded-lg text-xs font-medium bg-muted text-muted-foreground border border-border hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-200 cursor-default">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
