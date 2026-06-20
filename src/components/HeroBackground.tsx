function SqlWatermark() {
  return (
    <div className="hero-deco hero-deco-br font-mono">
      <span className="text-primary/35">SELECT</span> incident_id, downtime_mins
      <br />
      <span className="text-primary/35">FROM</span> infrastructure_logs
      <br />
      <span className="text-primary/35">JOIN</span> kpi_metrics <span className="text-primary/35">ON</span> server_id
      <br />
      <span className="text-primary/35">GROUP BY</span> trend_date;
    </div>
  );
}

function BlurredDashboardBackdrop() {
  return (
    <div className="hero-deco hero-deco-tr hero-dashboard-backdrop">
      <div className="hero-dashboard-card">
        <div className="hero-dashboard-header">
          <span className="hero-dashboard-dot bg-red-400/60" />
          <span className="hero-dashboard-dot bg-amber-400/60" />
          <span className="hero-dashboard-dot bg-emerald-400/60" />
          <span className="hero-dashboard-title">Infrastructure KPI Dashboard</span>
          <span className="hero-dashboard-badge">Power BI · SQL</span>
        </div>
        <div className="hero-dashboard-body">
          <div className="hero-dashboard-kpis">
            <div>
              <p className="hero-dashboard-kpi-label">Servers</p>
              <p className="hero-dashboard-kpi-value">500+</p>
              <p className="hero-dashboard-kpi-trend text-emerald-400/70">↑ Migrated</p>
            </div>
            <div>
              <p className="hero-dashboard-kpi-label">Downtime</p>
              <p className="hero-dashboard-kpi-value">-20%</p>
              <p className="hero-dashboard-kpi-trend text-emerald-400/70">↓ Reduced</p>
            </div>
            <div>
              <p className="hero-dashboard-kpi-label">Automation</p>
              <p className="hero-dashboard-kpi-value">25%</p>
              <p className="hero-dashboard-kpi-trend text-cyan-400/70">↑ Reporting</p>
            </div>
            <div>
              <p className="hero-dashboard-kpi-label">Health</p>
              <p className="hero-dashboard-kpi-value">KPI</p>
              <p className="hero-dashboard-kpi-trend text-cyan-400/70">Live trend</p>
            </div>
          </div>
          <div className="hero-dashboard-chart-wrap">
            <p className="hero-dashboard-chart-label">Server Health · 30 Day Trend</p>
            <svg viewBox="0 0 200 48" className="w-full h-12" fill="none">
              <path
                d="M0 40 Q25 35 50 32 T100 22 T150 18 T200 8"
                stroke="hsl(158 70% 48%)"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.45"
              />
              <path
                d="M0 40 Q25 35 50 32 T100 22 T150 18 T200 8 V48 H0Z"
                fill="hsl(158 70% 48%)"
                fillOpacity="0.07"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function BlurredDashboardSecondary() {
  return (
    <div className="hero-deco hero-deco-bl hero-dashboard-backdrop">
      <div className="hero-dashboard-card hero-dashboard-card-sm">
        <div className="hero-dashboard-header">
          <span className="hero-dashboard-title">Volunteer Analytics · Saayam</span>
          <span className="hero-dashboard-badge">PostgreSQL</span>
        </div>
        <div className="hero-dashboard-body">
          <div className="hero-dashboard-kpis hero-dashboard-kpis-sm">
            <div>
              <p className="hero-dashboard-kpi-label">Requests</p>
              <p className="hero-dashboard-kpi-value text-sm">KPI</p>
            </div>
            <div>
              <p className="hero-dashboard-kpi-label">Engagement</p>
              <p className="hero-dashboard-kpi-value text-sm">↑</p>
            </div>
            <div>
              <p className="hero-dashboard-kpi-label">Platform</p>
              <p className="hero-dashboard-kpi-value text-sm">Live</p>
            </div>
          </div>
          <svg viewBox="0 0 120 32" className="w-full h-8 mt-2" fill="none">
            {[0, 1, 2, 3, 4].map((i) => (
              <rect
                key={i}
                x={i * 24 + 4}
                y={28 - (i + 1) * 5}
                width="14"
                height={(i + 1) * 5}
                rx="2"
                fill="hsl(187 92% 52%)"
                opacity={0.18 + i * 0.06}
              />
            ))}
          </svg>
        </div>
      </div>
    </div>
  );
}

function PipelineStrip() {
  return (
    <div className="hero-deco hero-deco-pipeline font-mono">
      {["SQL", "ETL", "PostgreSQL", "Power BI", "Insights"].map((step, i) => (
        <span key={step} className="hero-pipeline-step" style={{ animationDelay: `${i * 0.15}s` }}>
          {step}
          {i < 4 ? <span className="hero-pipeline-arrow">→</span> : null}
        </span>
      ))}
    </div>
  );
}

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="hero-mesh" />
      <div className="hero-grid" />
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-orb hero-orb-3" />

      {/* Fades all decorations away from the reading zone (headline + CTAs) */}
      <div className="hero-content-mask" />

      <BlurredDashboardBackdrop />
      <BlurredDashboardSecondary />
      <SqlWatermark />
      <PipelineStrip />

      <svg className="hero-deco hero-deco-chart-line" viewBox="0 0 200 120" fill="none">
        <path
          d="M0 90 L30 70 L55 75 L80 45 L110 50 L140 25 L170 30 L200 10 V120 H0Z"
          fill="url(#areaGrad)"
          opacity="0.1"
        />
        <polyline
          points="0,90 30,70 55,75 80,45 110,50 140,25 170,30 200,10"
          stroke="url(#chartGrad)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.35"
        />
        <defs>
          <linearGradient id="chartGrad" x1="0" y1="0" x2="200" y2="0">
            <stop offset="0%" stopColor="hsl(187 92% 52%)" />
            <stop offset="100%" stopColor="hsl(265 83% 62%)" />
          </linearGradient>
          <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="120">
            <stop offset="0%" stopColor="hsl(187 92% 52%)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
