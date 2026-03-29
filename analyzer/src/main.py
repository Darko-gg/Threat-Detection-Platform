from parsers.log_parser import parse_log_file
from detectors.failed_login_detector import detect_failed_logins


def main():
    file_path = "sample_logs/auth.log"

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
            print(f"- [{alert['severity'].upper()}] {alert['message']}")
    else:
        print("No alerts detected.")

if __name__ == "__main__":
    main()