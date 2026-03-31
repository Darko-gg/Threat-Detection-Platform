from collections import defaultdict
from models.log_event import LogEvent
from models.alert import Alert

SUSPICIOUS_IP_USER_THRESHOLD = 3


def detect_suspicious_ip_activity(events: list[LogEvent]) -> list[Alert]:
    ip_to_users = defaultdict(set)
    alerts = []

    for event in events:
        if event.ip_address and event.user:
            ip_to_users[event.ip_address].add(event.user)

    for ip_address, users in ip_to_users.items():
        if len(users) >= SUSPICIOUS_IP_USER_THRESHOLD:
            user_list = ", ".join(sorted(users))
            alerts.append(
                Alert(
                    alert_type="SUSPICIOUS_IP_MULTI_USER_ACTIVITY",
                    severity="medium",
                    message=f"IP {ip_address} interacted with multiple users: {user_list}",
                    ip_address=ip_address,
                    user=None,
                    event_count=len(users)
                )
            )

    return alerts