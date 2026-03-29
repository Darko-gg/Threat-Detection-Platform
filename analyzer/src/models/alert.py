from dataclasses import dataclass


@dataclass
class Alert:
    alert_type: str
    severity: str
    message: str
    ip_address: str | None
    user: str | None
    event_count: int