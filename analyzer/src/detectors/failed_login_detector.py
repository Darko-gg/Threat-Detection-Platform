from collections import defaultdict
from models.log_event import LogEvent


FAILED_LOGIN_THRESHOLD = 3

def detect_failed_logins(events: list[LogEvent]) -> list[dict]:
    failed_counts = defaultdict(int)
    alerts = []

    for event in events:
        if "Failed login" in event.message and event.ip_address:
            failed_counts[event.ip_address] += 1

    for ip_address, count in failed_counts.items():
        if count >= FAILED_LOGIN_THRESHOLD:
            alerts.append({
                "type": "FAILED_LOGIN_THRESHOLD_EXCEEDED",
                "ip_address": ip_address,
                "count": count,
                "severity": "high",
                "message": f"Detected {count} failed logins from IP {ip_address}"
            })

    return alerts