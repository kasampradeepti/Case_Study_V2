# Case_Study_V2
This repository demonstrates V2 development for a solar performance analytics platform.

## Architecture Overview

## Frontend

- React + TypeScript

- Vite for fast development and build

- Recharts for time-series data visualization

- Window Based chart pagination (displays 7 data points at a time)
  
- Component-based UI with reusable sections:
   
  - Header

  - KPI cards

  - Filters (date range + grain)

  - Metric selector

  - Chart container

## Backend

 - FastAPI

  - Pydantic for request/response validation

  - Mock data generator to simulate plant performance data

  - REST endpoint serving time-series metrics based on:

  - Date range

  - Grain (day / week / monthly)

### Backend API Example

```
GET /plants/{plant_id}/performance?from=2026-02-11&to=2026-02-18&grain=day
```

### Response (example)

```
{
  "plant_id": "plant_123",
  "grain": "day",
  "metrics": [
    {
      "date": "2026-02-11",
      "energy_kwh": 1200,
      "pr": 0.86,
      "soiling_loss_percentage": 2.8
    }
  ]
}

```

## How to Run the Project

### Backend
```
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```
Runs on:
http://localhost:8000

### Frontend
```
cd frontend
npm install
npm run dev
```
Runs on:
http://localhost:5173
