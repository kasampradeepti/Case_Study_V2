import "./MetricSelector.css";

//The Props type tells TypeScript what inputs the MetricSelector component expects
type Props = {
  value: string;
  onChange: (value: string) => void;
};

// MetricSelector component allows users to select which performance metric to analyze
export default function MetricSelector({ value, onChange }: Props) {
  return (
    <select
      className="metric-select"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="energy">Total Energy</option>
      <option value="pr">Average Performance Ratio</option>
      <option value="soiling">Soiling Loss (%)</option>
    </select>
  );
}
