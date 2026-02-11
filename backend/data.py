from datetime import date, timedelta
from typing import List
from models import PerformanceMetric

# generate_mock_metrics creates a list of mock performance metrics for a given date range and grain (day, week, monthly) to simulate API responses for testing purposes
def generate_mock_metrics(
    start: date,
    end: date,
    grain: str
) -> List[PerformanceMetric]:
    metrics = []
    current = start

    if grain == "day":
        step = timedelta(days=1)
    elif grain == "week":
        step = timedelta(days=7)
    else:  # monthly
        step = timedelta(days=30)

    index = 0
    while current <= end:
        metrics.append(
            PerformanceMetric(
                date=current,
                energy_kwh=1200 + index * 50,
                pr=0.75 + (index % 10) * 0.01,
                soiling_loss_percentage=3.0 + (index % 5) * 0.2,
            )
        )
        current += step
        index += 1

    return metrics
