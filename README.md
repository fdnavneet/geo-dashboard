# Geo Data Dashboard
  A React-based web dashboard to visualize geospatial project data with map integration, pagination, filtering, and search.

---
## Live Demo
https://geo-dashboard-rho.vercel.app/

## Features
- Paginated project list (server-side)
- Search by project name and status
- Sorting by name, status, and updated date
- Interactive map with markers
- Row click highlights marker and vice versa
- URL based pagination persistence

---
## Architecture Decisions
- Server-side pagination using json-server for handling large datasets (500+ records).
- Client-side sorting and filtering for fast UI response.
- React Leaflet for map visualization due to simplicity and performance.
- React Router search params for preserving pagination state on refresh.
- Component-based architecture for scalability and maintainability.

---

## Tech Stack
- React (Vite)
- React Leaflet
- Tailwind CSS
- JSON Server (Mock API)
- JavaScript (ES6)

---

## Installation & Setup

  ### Clone Repository
   git clone https://github.com/fdnavneet/geo-dashboard.git
   cd geo-data-dashboard

## Install Dependencies
 - npm install

## Start Mock API Server
 - npx json-server --watch db.json --port 5000 or npm run dev

## Start React App  
 - npm run dev