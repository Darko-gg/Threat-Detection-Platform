from collections import defaultdict
from models.log_event import LogEvent
from models.alert import Alert


FAILED_LOGIN_THRESHOLD = 3

def detect_failed_logins(events: list[LogEvent]) -> list[Alert]:
    failed_counts = defaultdict(int)
    failed_users = {}
    alerts = []

    for event in events:
        if "Failed login" in event.message and event.ip_address:
            failed_counts[event.ip_address] += 1

            if event.ip_address not in failed_users:
                failed_users[event.ip_address] = event.user

    for ip_address, count in failed_counts.items():
        if count >= FAILED_LOGIN_THRESHOLD:
            alerts.append(
                Alert(
                    alert_type="FAILED_LOGIN_THRESHOLD_EXCEEDED",
                    severity="high",
                    message=f"Detected {count} failed logins from IP {ip_address}",
                    ip_address=ip_address,
                    user=failed_users.get(ip_address),
                    event_count=count
                )
            )

    return alerts