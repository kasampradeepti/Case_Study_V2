import "./kpi.css";

type Props = {
  label: string;
  value: string;
  variant?: "energy" | "pr" | "soiling";
};

//card component for displaying a KPI with label and value
export default function KPICard({ label, value, variant }: Props) {
  return (
    <div className={`kpi-card ${variant ?? ""}`}>
      <div className="kpi-label">{label}</div>
      <div className="kpi-value">{value}</div>
    </div>
  );
}
