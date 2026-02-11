from pydantic import BaseModel
from typing import List
from datetime import date

#Using pydantic base model for data validation

# PerformanceMetric defines the structure of each performance metric entry in the API response
class PerformanceMetric(BaseModel):
    date: date
    energy_kwh: float
    pr: float
    soiling_loss_percentage: float

# PerformanceResponse defines the structure of the API response for plant performance data, including plant ID, grain, and a list of performance metrics
class PerformanceResponse(BaseModel):
    plant_id: str
    grain: str
    metrics: List[PerformanceMetric]
