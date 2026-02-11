//PerformanceMetric defines inputs needed to send to the API
export type PerformanceMetric = {
  date: string;
  energy_kwh: number;
  pr: number;
  soiling_loss_percentage: number;
};

//PerformanceResponse defines the structure of the API response for performance data
export type PerformanceResponse = {
  plant_id: string;
  grain: string;
  metrics: PerformanceMetric[];
};

//fetchPerformanceData is an async function that calls the backend API to retrieve performance data based on the provided parameters
export async function fetchPerformanceData(
  plantId: string,
  fromDate: string,
  toDate: string,
  grain: string
): Promise<PerformanceResponse> {
  const params = new URLSearchParams({
    from: fromDate,
    to: toDate,
    grain,
  });

  const response = await fetch(
    `http://127.0.0.1:8000/plants/${plantId}/performance?${params.toString()}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch performance data");
  }

  return response.json();
}
