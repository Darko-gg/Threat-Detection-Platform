package com.threatplatform.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.threatplatform.model.Alert;
import com.threatplatform.service.AlertService;

import java.util.List;


@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class AlertsController {

    private final AlertService alertService;

    public AlertsController(AlertService alertService) {
        this.alertService = alertService;
    }

    @GetMapping("/api/alerts")
    public List<Alert> getAlerts() {
        return alertService.loadAlerts();
    }
}