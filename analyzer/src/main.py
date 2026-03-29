from parsers.log_parser import parse_log_file
from detectors.failed_login_detector import detect_failed_logins
from services.alert_exporter import export_alerts_to_json


def main():
    file_path = "sample_logs/auth.log"
    output_path = "output/alerts.json"

    print("DarktraceSec Analyzer started.")
    print(f"Loading log file: {file_path}")

    events = parse_log_file(file_path)
    alerts = detect_failed_logins(events)

    print(f"Parsed events: {len(events)}")
    print(f"Generated alerts: {len(alerts)}")
    print()

    if alerts:
        print("Alerts:")
        for alert in alerts:
            print(f"- Type: {alert.alert_type}")
            print(f"  Severity:: {alert.severity.upper()}")
            print(f"  Message: {alert.message}")
            print(f"  IP Address: {alert.ip_address}")
            print(f"  User: {alert.user}")
            print(f"  Event Count: {alert.event_count}")
            print()

        export_alerts_to_json(alerts, output_path)
        print(f"Alerts exported to {output_path}")
    else:
        print("No alerts detected.")

if __name__ == "__main__":
    main()