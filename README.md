# DarktraceSec-FTD-Plat

DarktraceSec-FTD-Plat is a full threat detection platform prototype built with Python, Java, and JavaScript. It analyzes log files, detects suspicious behavior, exposes alert data through a backend API, and displays alerts in a web dashboard.

## Features

- Parse authentication-style log files
- Detect repeated failed login attempts
- Detect suspicious IP activity across multiple user accounts
- Export alerts to JSON
- Serve alerts through a Spring Boot backend API
- Display alerts in a React dashboard
- Highlight alert severity with visual styling

## Tech Stack

- **Python** - log parsing and threat detection
- **Java / Spring Boot** - backend API
- **React / Vite** - frontend dashboard

## Project Structure

    DarktraceSec-FTD-Plat/
    ├── analyzer/   # Python log analyzer and detection engine
    ├── backend/    # Java Spring Boot API
    ├── dashboard/  # React frontend dashboard
    └── docs/       # Project notes and architecture docs

## Detection Rules Implemented

### FAILED_LOGIN_THRESHOLD_EXCEEDED

Triggers when an IP address exceeds the failed login threshold.

### SUSPICIOUS_IP_MULTI_USER_ACTIVITY

Triggers when a single IP address interacts with multiple different user accounts.

## How It Works

1. The Python analyzer reads and parses log files
2. Detection rules generate structured alerts
3. Alerts are exported to a JSON file
4. The Java backend loads alert data and exposes it through API endpoints
5. The React dashboard fetches and displays alert information

## API Endpoints

- `GET /api/status`
- `GET /api/alerts`