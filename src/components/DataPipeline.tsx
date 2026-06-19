import { Database, FileInput, Cog, BarChart3, Brain, Monitor, ArrowRight } from "lucide-react";

const pipelineSteps = [
  {
    icon: FileInput,
    title: "Data Sources",
    items: [
      "U.S. Census Pulse Survey (Capstone)",
      "Kaggle Lung Cancer Dataset",
      "IT Infrastructure & Incident Logs (TCS)",
      "Saayam Platform Metrics (AWS/PostgreSQL)",
      "CAN Bus Logs (VCE Lab)",
      "MySQL Cargo & Shipment Data",
    ],
    subtitle: "Survey, clinical & operational data",
  },
  {
    icon: Cog,
    title: "Data Processing",
    items: [
      "Missing Value Imputation",
      "IQR Outlier Removal",
      "One-Hot Encoding",
      "Min-Max Normalization",
      "PowerShell & SQL ETL",
    ],
    subtitle: "Cleanse, transform, validate",
  },
  {
    icon: Database,
    title: "Data Storage & Modeling",
    items: [
      "MySQL (Air Cargo 3NF)",
      "PostgreSQL · Oracle",
      "Snowflake · Redshift",
      "Feature Selection (Info Gain)",
      "Label Encoding",
    ],
    subtitle: "Structured analytical layer",
  },
  {
    icon: Brain,
    title: "Analytics & ML",
    items: [
      "Random Forest Regressor",
      "Decision Tree · Logistic Regression",
      "Isolation Forest",
      "Correlation Analysis",
      "SQL Trend Queries",
    ],
    subtitle: "Insight & prediction engine",
  },
  {
    icon: BarChart3,
    title: "Visualization",
    items: [
      "Power BI KPI Dashboards",
      "Matplotlib · Seaborn",
      "Excel Dashboards",
      "Tableau",
      "Feature Importance Charts",
    ],
    subtitle: "Interactive reporting",
  },
  {
    icon: Monitor,
    title: "Business Impact",
    items: [
      "Mental Health Forecast (19.22%)",
      "Lung Cancer Risk (97.5%)",
      "25% Task Automation (TCS)",
      "25% Registration Increase (Bot)",
      "Volunteer & Request Analytics (Saayam)",
      "Operational Transparency (Cargo DB)",
    ],
    subtitle: "Documented outcomes",
  },
];

export default function DataPipeline() {
  return (
    <section className="section-padding">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-heading font-800 text-foreground section-header">How I Work</h2>
        <div className="gradient-bar mb-4" />
        <p className="section-subtitle">
          End-to-end data analytics workflow applied across my capstone, graduate projects, and TCS infrastructure analytics work.
        </p>

        <div className="hidden lg:flex items-center justify-center gap-2 mb-8 text-[10px] font-heading font-600 text-muted-foreground">
          <span className="px-3 py-1 rounded-full border border-border bg-card">Collect</span>
          <ArrowRight size={12} className="text-primary/50" />
          <span className="px-3 py-1 rounded-full border border-border bg-card">Preprocess</span>
          <ArrowRight size={12} className="text-primary/50" />
          <span className="px-3 py-1 rounded-full border border-border bg-card">Analyze · Model</span>
          <ArrowRight size={12} className="text-primary/50" />
          <span className="px-3 py-1 rounded-full border border-border bg-card">Visualize</span>
          <ArrowRight size={12} className="text-primary/50" />
          <span className="px-3 py-1 rounded-full border border-primary/40 bg-primary/5 text-primary">Deliver Impact</span>
        </div>

        <div className="hidden lg:grid grid-cols-6 gap-3 items-start">
          {pipelineSteps.map((step, i) => (
            <div key={i} className="relative">
              <div className="pipeline-node">
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary mx-auto w-fit mb-3">
                  <step.icon size={22} />
                </div>
                <h3 className="font-heading font-800 text-sm text-foreground mb-1">{step.title}</h3>
                <p className="text-[9px] text-secondary font-600 mb-3">{step.subtitle}</p>
                <ul className="space-y-1.5">
                  {step.items.map((item) => (
                    <li key={item} className="text-[11px] text-muted-foreground">{item}</li>
                  ))}
                </ul>
              </div>
              {i < pipelineSteps.length - 1 && (
                <div className="absolute top-1/2 -right-3 transform -translate-y-1/2 text-primary/40 z-10">
                  <ArrowRight size={16} />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="lg:hidden space-y-3">
          {pipelineSteps.map((step, i) => (
            <div key={i} className="pipeline-node flex items-start gap-4 text-left !p-5 relative">
              <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0">
                <step.icon size={20} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-heading font-800 text-sm text-foreground mb-0.5">{step.title}</h3>
                <p className="text-[9px] text-secondary font-600 mb-2">{step.subtitle}</p>
                <div className="flex flex-wrap gap-1.5">
                  {step.items.map((item) => (
                    <span key={item} className="text-[11px] text-muted-foreground bg-muted px-2 py-0.5 rounded-full">{item}</span>
                  ))}
                </div>
              </div>
              {i < pipelineSteps.length - 1 && (
                <div className="absolute left-8 -bottom-2.5 text-primary/30">
                  <ArrowRight size={14} className="rotate-90" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
