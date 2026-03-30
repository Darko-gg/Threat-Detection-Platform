package com.darktracesec.service;

import com.darktracesec.model.Alert;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.IOException;
import java.util.Collections;
import java.util.List;

@Service
public class AlertService {

    private final ObjectMapper objectMapper = new ObjectMapper();

    public List<Alert> loadAlerts() {
        File alertFile = new File("../analyzer/output/alerts.json");

        if (!alertFile.exists()) {
            return Collections.emptyList();
        }

        try {
            return objectMapper.readValue(alertFile, new TypeReference<List<Alert>>() {});
        } catch (IOException e) {
            e.printStackTrace();
            return Collections.emptyList();
        }
    }
}