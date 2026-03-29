import json
from models.alert import Alert


def export_alerts_to_json(alerts: list[Alert], output_path: str) -> None:
    alert_data = [alert.to_dict() for alert in alerts]

    with open(output_path, "w", encoding="utf-8") as file:
        json.dump(alert_data, file, indent=4)