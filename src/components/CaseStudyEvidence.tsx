import { BarChart3, Cog, Database, Activity, TrendingUp } from "lucide-react";

const evidence = [
  {
    id: "evidence-bi-dashboard",
    icon: BarChart3,
    title: "KPI & BI Dashboard Reporting",
    label:
      "Built KPI dashboards and visual reports at TCS for server health monitoring. Supported Super Admin analytics at Saayam for All with request status and volunteer activity widgets.",
    metrics: ["Power BI", "Matplotlib", "Seaborn", "KPI Dashboards"],
  },
  {
    id: "evidence-python-workflow",
    icon: Cog,
    title: "Python Data Pipelines",
    label:
      "Capstone Random Forest forecasting with Scikit-learn. Lung Cancer project used pandas preprocessing, Information Gain feature selection, and 70/30 train-test evaluation. VCE Lab CAN log-to-CSV conversion and Isolation Forest anomaly detection.",
    metrics: ["pandas · scikit-learn", "Random Forest", "Isolation Forest"],
  },
  {
    id: "evidence-methodology",
    icon: Database,
    title: "Research & ML Methodology",
    label:
      "Capstone: descriptive stats, correlation heatmaps, IQR outlier removal, label encoding. Lung Cancer: Min-Max normalization, one-hot encoding, 10-fold cross-validation. Compared Logistic Regression, Decision Tree, and Random Forest using accuracy, precision, recall, and F1-score.",
    metrics: ["10-Fold CV", "F1-Score", "Feature Importance"],
  },
  {
    id: "evidence-sql-logic",
    icon: Activity,
    title: "SQL Analysis & Database Design",
    label:
      "Queried large IT infrastructure datasets at TCS for trend analysis. Air Cargo project: normalized MySQL schema (1NF–3NF), Shipment Tracking, Customer Shipment History, and Carrier Performance SQL reports.",
    metrics: ["MySQL · SQL", "3NF Schema", "Reporting Queries"],
  },
  {
    id: "evidence-statistical",
    icon: TrendingUp,
    title: "Statistical & Predictive Analysis",
    label:
      "Capstone Random Forest Regressor (R² = 0.94, RMSE = 1.84) forecasting 19.22% medication usage for Jan 2025. Lung Cancer top predictors: coughing of blood (0.8635), wheezing (0.7455), chest pain (0.7405). Aeroponics Excel trend tracking and podcast listener analytics.",
    metrics: ["Random Forest", "Forecasting", "Trend Analysis"],
  },
];

export default function CaseStudyEvidence() {
  return (
    <section className="section-padding">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-heading font-800 text-foreground section-header">Analytics Methodology</h2>
        <div className="gradient-bar mb-4" />
        <p className="section-subtitle">Data analytics methods applied across capstone, course projects, TCS work, and UDM research roles.</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {evidence.map((e, i) => (
            <div key={i} id={e.id} className="outcome-card scroll-mt-24">
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2.5 rounded-xl shrink-0" style={{ background: "var(--hero-gradient)" }}>
                  <e.icon size={18} className="text-primary-foreground" />
                </div>
                <h3 className="font-heading font-800 text-sm text-foreground">{e.title}</h3>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed mb-4">{e.label}</p>
              <div className="flex flex-wrap gap-1.5">
                {e.metrics.map((m) => (
                  <span key={m} className="px-2.5 py-1 rounded-lg text-[10px] font-heading font-600 bg-primary/8 text-primary border border-primary/15">
                    {m}
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
