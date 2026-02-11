import { useState } from "react";
import HeaderBar from "./components/HeaderBar/HeaderBar";
import KPISection from "./components/KPI/KPISection";
import Filters from "./components/PerformanceAnalysis/Filters";
import MetricSelector from "./components/PerformanceAnalysis/MetricSelector";
import ChartContainer from "./components/ChartContainer/ChartContainer";
import "./App.css";

function App() {
  const [metric, setMetric] = useState("energy");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [grain, setGrain] = useState("day");

  return (
    <div className="app-container">
      <HeaderBar />

      <section className="section">
        <h3>Real Time Performance</h3>
        <KPISection />
      </section>

      <section className="section">
        <h3>Performance Analysis</h3>

        <div className="analysis-header">
          <MetricSelector value={metric} onChange={setMetric} />

          <Filters
            fromDate={fromDate}
            toDate={toDate}
            grain={grain}
            onFromChange={setFromDate}
            onToChange={setToDate}
            onGrainChange={setGrain}
          />
        </div>

        <ChartContainer
          metric={metric}
          fromDate={fromDate}
          toDate={toDate}
          grain={grain}
        />
      </section>
    </div>
  );
}

export default App;
