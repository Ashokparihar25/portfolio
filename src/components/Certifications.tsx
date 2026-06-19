import { Award, GraduationCap, Trophy } from "lucide-react";
import { education, certifications, achievements } from "@/data/portfolio";

export default function Certifications() {
  return (
    <section id="education" className="section-padding">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-800 text-foreground section-header">Education</h2>
            <div className="gradient-bar mb-8" />
            <div className="space-y-4">
              {education.map((e) => (
                <div key={e.degree} className="card-elevated p-5 flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-secondary/10 text-secondary shrink-0">
                    <GraduationCap size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="font-heading font-600 text-sm text-foreground mb-0.5">{e.degree}</div>
                    <div className="text-xs text-muted-foreground">{e.school}</div>
                    <div className="text-xs text-secondary font-600 mt-1">{e.year}</div>
                    {e.detail && (
                      <p className="text-xs text-muted-foreground leading-relaxed mt-2">{e.detail}</p>
                    )}
                    {e.download && (
                      <a
                        href={e.download.href}
                        download={e.download.filename}
                        className="inline-flex items-center gap-1.5 mt-3 px-3 py-1.5 rounded-lg text-[11px] font-heading font-600 bg-primary/10 text-primary border border-primary/25 hover:bg-primary/15 transition-all"
                      >
                        {e.download.label}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-800 text-foreground section-header">Certifications</h2>
            <div className="gradient-bar mb-8" />
            <div className="space-y-4">
              {certifications.map((c) => (
                <div key={c.title} className="card-elevated p-5 flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary shrink-0">
                    <Award size={20} />
                  </div>
                  <div>
                    <div className="font-heading font-600 text-sm text-foreground mb-0.5">{c.title}</div>
                    <div className="text-xs text-muted-foreground">{c.org}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl font-heading font-800 text-foreground section-header">Achievements</h2>
          <div className="gradient-bar mb-8" />
          <div className="space-y-4">
            {achievements.map((a) => (
              <div key={a.title} className="card-elevated p-5 flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-600 shrink-0">
                  <Trophy size={20} />
                </div>
                <div>
                  <div className="font-heading font-600 text-sm text-foreground mb-1">{a.title}</div>
                  <div className="text-xs text-muted-foreground leading-relaxed">{a.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
