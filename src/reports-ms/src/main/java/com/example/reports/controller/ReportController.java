package com.example.reports.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.reports.entity.Report;
import com.example.reports.service.Reportservice;

import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/reports")
public class ReportController {

    @Autowired
    private Reportservice reportservice;

    @GetMapping
    public List<Report> getAllReports() {
        return reportservice.getAllReports();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Report> getReportById(@PathVariable Long id) {
        Optional<Report> report = reportservice.getReportById(id);
        return report.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public Report createReport(@RequestBody Report report) {
        Report createdreport = reportservice.createReport(report);
        return createdreport;
    }

    @PutMapping("/{id}")
    public ResponseEntity<Report> updateReport(@PathVariable Long id, @RequestBody Report report) {
        if (!reportservice.getReportById(id).isPresent()) {
            return ResponseEntity.notFound().build();
        }
        report.setId(id);
        Report updatedreport = reportservice.saveReport(report);
        return ResponseEntity.ok(updatedreport);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteReport(@PathVariable Long id) {
        if (!reportservice.getReportById(id).isPresent()) {
            return ResponseEntity.notFound().build();
        }
        reportservice.deleteReport(id);
        return ResponseEntity.noContent().build();
    }
}