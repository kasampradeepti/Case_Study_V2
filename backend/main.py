from fastapi import FastAPI, Query
from datetime import date
from typing import Literal
from models import PerformanceResponse
from data import generate_mock_metrics
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI(title="SwishOS Plant Performance API")

# CORS middleware to allow requests from the frontend running on localhost:5173
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# API endpoint to retrieve plant performance data based on plant ID, date range, and grain
@app.get("/plants/{plant_id}/performance", response_model=PerformanceResponse)
def get_plant_performance(
    plant_id: str,
    from_date: date = Query(..., alias="from"),
    to_date: date = Query(..., alias="to"),
    grain: Literal["day", "week", "monthly"] = Query("day"),
):
    metrics = generate_mock_metrics(
        start=from_date,
        end=to_date,
        grain=grain,
    )

    return PerformanceResponse(
        plant_id=plant_id,
        grain=grain,
        metrics=metrics,
    )
