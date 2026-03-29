import re
from datetime import datetime
from models.log_event import LogEvent


LOG_PATTERN = re.compile(
    r"^(?P<timestamp>\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}) "
    r"(?P<level>\w+) "
    r"(?P<message>.*)$"
)

USER_PATTERN = re.compile(r"user=([a-zA-Z0-9_.-]+)")
IP_PATTERN = re.compile(r"ip=([0-9]+\.[0-9]+\.[0-9]+\.[0-9]+)")

def parse_log_line(line: str) -> LogEvent | None:
    line = line.strip()
    if not line:
        return None
    
    match = LOG_PATTERN.match(line)
    if not match:
        return None
    
    timestamp = datetime.strptime(match.group("timestamp"), "%Y-%m-%d %H:%M:%S")
    level = match.group("level")
    message = match.group("message")
    
    user_match = USER_PATTERN.search(message)
    ip_match = IP_PATTERN.search(message)

    user = user_match.group(1) if user_match else None
    ip_address = ip_match.group(1) if ip_match else None

    return LogEvent(
        timestamp=timestamp,
        level=level,
        message=message,
        user=user,
        ip_address=ip_address
    )

def parse_log_file(file_path: str) -> list[LogEvent]:
    events = []

    with open(file_path, "r", encoding="utf-8") as file:
        for line in file:
            event = parse_log_line(line)
            if event:
                events.append(event)

    return events
