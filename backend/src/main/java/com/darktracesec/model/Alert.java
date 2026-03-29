package com.darktracesec.model;

public class Alert {
    private String alertType;
    private String severity;
    private String message;
    private String ipAddress;
    private String user;
    private int eventCount;

    public Alert(String alertType, String severity, String message, String ipAddress, String user, int eventCount) {
        this.alertType = alertType;
        this.severity = severity;
        this.message = message;
        this.ipAddress = ipAddress;
        this.user = user;
        this.eventCount = eventCount;
    }

    public String getAlertType() {
        return alertType;
    }

    public String getSeverity() {
        return severity;
    }

    public String getMessage() {
        return message;
    }

    public String getIpAddress() {
        return ipAddress;
    }

    public String getUser() {
        return user;
    }

    public int getEventCount() {
        return eventCount;
    }
}
