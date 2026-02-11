import "./Filters.css";

/*The Props type tells TypeScript what inputs the Filters component expects
if wrong data or wrong type is provided, TypeScript will throw an error*/
type Props = {
  fromDate: string;
  toDate: string;
  grain: string;
  onFromChange: (v: string) => void;
  onToChange: (v: string) => void;
  onGrainChange: (v: string) => void;
};

// Filters component allows users to select date range and data grain for performance analysis
export default function Filters({fromDate, toDate, grain, onFromChange, onToChange, onGrainChange,}: Props) {
  return (
    <div className="filters">
      <label className="filter-label">
        From
        <input
          type="date"
          value={fromDate}
          onChange={(e) => onFromChange(e.target.value)}
        />
      </label>

      <label className="filter-label">
        To
        <input
          type="date"
          value={toDate}
          onChange={(e) => onToChange(e.target.value)}
        />
      </label>

      <label className="filter-label">
        Grain
        <select
          value={grain}
          onChange={(e) => onGrainChange(e.target.value)}
        >
          <option value="day">Day</option>
          <option value="week">Week</option>
          <option value="monthly">Monthly</option>
        </select>
      </label>
    </div>
  );
}
