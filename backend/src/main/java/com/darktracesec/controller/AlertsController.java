package com.darktracesec.controller;

import com.darktracesec.model.Alert;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class AlertsController {

    @GetMapping("/api/alerts")
    public List<Alert> getAlerts() {
        return List.of(
            new Alert(
                "FAILED_LOGIN_THRESHOLD_EXCEEDED",
                "high",
                "Detected 3 failed logins from IP 185.22.44.9",
                "185.22.44.9",
                "bob",
                3
            ),
            new Alert(
                "FAILED_LOGIN_THRESHOLD_EXCEEDED",
                "medium",
                "Detected 2 failed logins from IP 201.55.77.101",
                "201.55.77.101",
                "dave",
                2
            )
        );
    }
}