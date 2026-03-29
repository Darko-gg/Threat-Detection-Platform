from dataclasses import dataclass, asdict


@dataclass
class Alert:
    alert_type: str
    severity: str
    message: str
    ip_address: str | None
    user: str | None
    event_count: int

    def to_dict(self) -> dict:
        return asdict(self)