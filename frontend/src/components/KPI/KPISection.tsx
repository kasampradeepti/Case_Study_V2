import KPICard from "./KPICard";
import "./kpi.css";

// Section component to display multiple KPIs in a row
export default function KPISection() {
  return (
    <div className="kpi-row">
      <KPICard label="Total Energy" value="49.3 MW" variant="energy" />
      <KPICard label="Average Performance Ratio" value="86.5 %" variant="pr" />
      <KPICard label="Soiling Loss (%)" value="5.5 %" variant="soiling" />
    </div>
  );
}
