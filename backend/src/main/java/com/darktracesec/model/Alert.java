package com.darktracesec.model;

public class Alert {
    private String alert_type;
    private String severity;
    private String message;
    private String ip_address;
    private String user;
    private int event_count;

    public Alert() {

    }

    public Alert(String alert_type, String severity, String message, String ip_address, String user, int event_count) {
        this.alert_type = alert_type;
        this.severity = severity;
        this.message = message;
        this.ip_address = ip_address;
        this.user = user;
        this.event_count = event_count;
    }

    public String getAlert_type() {
        return alert_type;
    }

    public void serAlert_type(String alert_type) {
        this.alert_type = alert_type;
    }

    public String getSeverity() {
        return severity;
    }

    public void setSeverity(String severity) {
        this.severity = severity;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getIp_address() {
        return ip_address;
    }

    public void setIp_address(String ip_address) {
        this.ip_address = ip_address;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public int getEvent_count() {
        return event_count;
    }

    public void setEvent_count(int event_count) {
        this.event_count = event_count;
    }
}