import { TrendingUp, TrendingDown } from "lucide-react";

function MiniLineChart({ color = "hsl(210 70% 28%)" }: { color?: string }) {
  return (
    <svg viewBox="0 0 120 40" className="w-full h-10" fill="none">
      <path d="M0 35 Q10 30 20 28 T40 22 T60 18 T80 12 T100 8 T120 4" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M0 35 Q10 30 20 28 T40 22 T60 18 T80 12 T100 8 T120 4 V40 H0Z" fill={color} fillOpacity="0.08" />
    </svg>
  );
}

function KPIBadge({ label, value, trend, up = true }: { label: string; value: string; trend: string; up?: boolean }) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="text-[9px] text-muted-foreground uppercase tracking-wider font-medium">{label}</span>
      <span className="text-sm font-heading font-800 text-foreground">{value}</span>
      <span className={`text-[9px] font-medium flex items-center gap-0.5 ${up ? "text-secondary" : "text-destructive"}`}>
        {up ? <TrendingUp size={9} /> : <TrendingDown size={9} />} {trend}
      </span>
    </div>
  );
}

const dashboards = [
  {
    id: "capstone",
    title: "Capstone — Mental Health Medication Forecast",
    tool: "Random Forest · Scikit-learn",
    toolColor: "bg-blue-500/10 text-blue-600",
    content: (
      <div className="space-y-3">
        <div className="grid grid-cols-4 gap-2">
          <KPIBadge label="R² Score" value="0.94" trend="Model fit" up />
          <KPIBadge label="RMSE" value="1.84" trend="Low error" up />
          <KPIBadge label="Jan 2025" value="19.22%" trend="18–29 age group" up />
          <KPIBadge label="Records" value="3,800+" trend="Pulse Survey" up />
        </div>
        <div className="bg-muted/40 rounded-lg p-2.5">
          <p className="text-[8px] text-muted-foreground mb-1 uppercase tracking-wider">Medication Usage Trend (Mid-2020 → Early 2021)</p>
          <MiniLineChart />
        </div>
        <p className="text-[9px] text-muted-foreground leading-relaxed">
          Top predictors: mental health indicator, age, subgroup. Women and older adults (65+) showed highest usage rates.
        </p>
      </div>
    ),
  },
  {
    id: "ml",
    title: "Lung Cancer Prediction — Model Comparison",
    tool: "Python · scikit-learn",
    toolColor: "bg-green-500/10 text-green-600",
    content: (
      <div className="space-y-3">
        <div className="grid grid-cols-4 gap-2">
          <KPIBadge label="Decision Tree" value="97.5%" trend="CV: 98.7%" up />
          <KPIBadge label="Random Forest" value="97.5%" trend="CV: 99.1%" up />
          <KPIBadge label="Logistic Reg." value="93.88%" trend="CV: 91.8%" up />
          <KPIBadge label="Samples" value="980" trend="12 features" up />
        </div>
        <div className="bg-muted/40 rounded-lg p-2.5">
          <p className="text-[8px] text-muted-foreground mb-2 uppercase tracking-wider">Top Feature Importance</p>
          <div className="space-y-1.5">
            {[
              { label: "Coughing of Blood", pct: 86.4 },
              { label: "Wheezing", pct: 74.6 },
              { label: "Chest Pain", pct: 74.1 },
              { label: "Dust Allergy", pct: 66.7 },
            ].map((r) => (
              <div key={r.label} className="flex items-center gap-2">
                <span className="text-[8px] w-24 text-muted-foreground truncate">{r.label}</span>
                <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-secondary rounded-full" style={{ width: `${r.pct}%` }} />
                </div>
                <span className="text-[8px] font-medium text-foreground w-8 text-right">{r.pct}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "tcs",
    title: "TCS Amway-Alticor — Infrastructure KPIs",
    tool: "PowerShell · SQL · Power BI",
    toolColor: "bg-amber-500/10 text-amber-600",
    content: (
      <div className="space-y-3">
        <div className="grid grid-cols-4 gap-2">
          <KPIBadge label="Servers Migrated" value="500+" trend="2008→2019 OS" up />
          <KPIBadge label="Downtime" value="-20%" trend="Reduced" up />
          <KPIBadge label="Automation" value="25%" trend="Tasks automated" up />
          <KPIBadge label="Team Size" value="15" trend="Infrastructure" up />
        </div>
        <div className="bg-muted/40 rounded-lg p-2.5">
          <p className="text-[8px] text-muted-foreground mb-1 uppercase tracking-wider">Server Health KPI Monitoring</p>
          <MiniLineChart color="hsl(175 50% 36%)" />
        </div>
      </div>
    ),
  },
  {
    id: "cargo",
    title: "Air Cargo — SQL Reporting Dashboard",
    tool: "MySQL · 3NF Schema",
    toolColor: "bg-red-500/10 text-red-600",
    content: (
      <div className="space-y-2.5">
        <div className="bg-muted/60 rounded-lg p-2.5 font-mono text-[9px] leading-[1.6] text-foreground/80 overflow-hidden">
          <span className="text-primary font-bold">SELECT</span> s.shipment_id, s.status, r.route_name,<br />
          &nbsp;&nbsp;<span className="text-secondary">DATEDIFF</span>(s.delivered_at, s.shipped_at) <span className="text-primary font-bold">AS</span> transit_days<br />
          <span className="text-primary font-bold">FROM</span> shipments s<br />
          <span className="text-primary font-bold">JOIN</span> routes r <span className="text-primary font-bold">ON</span> s.route_id = r.route_id
        </div>
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="bg-secondary/10 rounded-lg p-2">
            <p className="text-[8px] text-muted-foreground">Report 1</p>
            <p className="text-[10px] font-heading font-800 text-secondary">Shipment Tracking</p>
          </div>
          <div className="bg-primary/10 rounded-lg p-2">
            <p className="text-[8px] text-muted-foreground">Report 2</p>
            <p className="text-[10px] font-heading font-800 text-primary">Customer History</p>
          </div>
          <div className="bg-secondary/10 rounded-lg p-2">
            <p className="text-[8px] text-muted-foreground">Report 3</p>
            <p className="text-[10px] font-heading font-800 text-secondary">Carrier Performance</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "saayam",
    title: "Saayam for All — Volunteer Analytics",
    tool: "Python · SQL · PostgreSQL · AWS",
    toolColor: "bg-teal-500/10 text-teal-600",
    content: (
      <div className="space-y-3">
        <div className="grid grid-cols-3 gap-2">
          <KPIBadge label="Platform" value="501(c)(3)" trend="Nonprofit" up />
          <KPIBadge label="Focus" value="KPI" trend="Request & volunteer" up />
          <KPIBadge label="Stack" value="AWS" trend="PostgreSQL · Python" up />
        </div>
        <div className="bg-muted/40 rounded-lg p-2.5 text-[9px] text-muted-foreground leading-relaxed">
          Super Admin dashboard widgets — request volume trends, volunteer activity analysis, and chart-ready JSON APIs for the global volunteer-matching platform.
        </div>
      </div>
    ),
  },
  {
    id: "bot",
    title: "TiTAns Bot — Registration Impact",
    tool: "chainlit · NLP",
    toolColor: "bg-purple-500/10 text-purple-600",
    content: (
      <div className="space-y-3">
        <div className="grid grid-cols-3 gap-2">
          <KPIBadge label="Registrations" value="+25%" trend="First month" up />
          <KPIBadge label="NLP" value="Lemma" trend="Lemmatization" up />
          <KPIBadge label="Stack" value="AI" trend="chainlit · langchain" up />
        </div>
        <div className="bg-muted/40 rounded-lg p-2.5 text-[9px] text-muted-foreground leading-relaxed">
          Conversational AI chatbot for UDM course registration — intent detection, entity extraction, and automated response logic to reduce manual advisor workload.
        </div>
      </div>
    ),
  },
];

export default function DashboardMockups() {
  return (
    <section id="gallery" className="section-padding section-alt">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-heading font-800 text-foreground section-header">Project Analytics Highlights</h2>
        <div className="gradient-bar mb-4" />
        <p className="section-subtitle">
          Key metrics and visual summaries from my capstone, course projects, TCS analytics, and Saayam for All work.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {dashboards.map((d) => (
            <div key={d.id} className="card-elevated overflow-hidden">
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-border/60 bg-muted/20">
                <h3 className="font-heading font-800 text-xs text-foreground truncate pr-2">{d.title}</h3>
                <span className={`shrink-0 px-2 py-0.5 rounded-md text-[9px] font-heading font-600 ${d.toolColor}`}>
                  {d.tool}
                </span>
              </div>
              <div className="p-4">{d.content}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
