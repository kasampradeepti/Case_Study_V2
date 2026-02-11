import { useEffect, useState } from "react";
import { LineChart, Line, XAxis,YAxis, Tooltip, ResponsiveContainer} from "recharts";
import {fetchPerformanceData,type PerformanceMetric} from "../../api/performanceAPI";
import "./ChartContainer.css";

//The Props type tells TypeScript what inputs the ChartContainer component expects
type Props = {
  metric: string;
  fromDate: string;
  toDate: string;
  grain: string;
};

//metricConfig maps the metric keys to their display labels and the corresponding data keys in the API response
const metricConfig: Record<string,{ label: string; dataKey: keyof PerformanceMetric }> = {
  energy: { label: "Total Energy (kWh)", dataKey: "energy_kwh" },
  pr: { label: "Performance Ratio", dataKey: "pr" },
  soiling: {
    label: "Soiling Loss (%)",
    dataKey: "soiling_loss_percentage",
  },
};

// ChartContainer component fetches performance data based on selected metric and date range, and renders a line chart
export default function ChartContainer({metric, fromDate, toDate, grain}: Props) {
  const [data, setData] = useState<PerformanceMetric[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const PAGE_SIZE = 7;
  const [pageIndex, setPageIndex] = useState(0);
  const start = pageIndex * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  const visibleData = data.slice(start, end);
  const handleNext = () => {
  if (end < data.length) {
    setPageIndex((p) => p + 1);
  }
};

const handlePrev = () => {
  if (pageIndex > 0) {
    setPageIndex((p) => p - 1);
  }
};

  useEffect(() => {
    if (!fromDate || !toDate) return;
    setPageIndex(0);
    setLoading(true);
    setError(null);

    fetchPerformanceData("plant_123", fromDate, toDate, grain)
      .then((res) => setData(res.metrics))
      .catch(() => setError("Failed to load data"))
      .finally(() => setLoading(false));
  }, [metric, fromDate, toDate, grain]);

  const config = metricConfig[metric];

  return (
    <div className="chart-card">
      <div className="chart-header">{config.label}</div>

      <div className="chart-body">
        {loading && <div>Loading graph…</div>}
        {error && <div>{error}</div>}
        {!loading && !error && data.length === 0 && (
          <div>No data available</div>
        )}

        {/* Line Chart */}
        {!loading && !error && data.length > 0 && (
          <ResponsiveContainer width="100%" height={320}>
            <LineChart data={visibleData}>
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey={config.dataKey}
                stroke="#6366f1"
                strokeWidth={2}
              />
            </LineChart>
            
          </ResponsiveContainer>
        )}
      </div>
   {/*Pagination to display 7 data points at a time, with next and previous buttons to navigate through the data */}  
     <div className="chart-pagination">
        <button onClick={handlePrev} disabled={pageIndex === 0}>
        ← Previous
        </button>
        <button onClick={handleNext} disabled={end >= data.length}>
        Next →
        </button>
    </div>
    </div>
  );
}
