package com.example.reports.controller;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.ResponseEntity;

import com.example.reports.entity.Report;
import com.example.reports.service.Reportservice;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

public class ReportControllerTest {

    @Mock
    private Reportservice reportservice;

    @InjectMocks
    private ReportController reportController;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testGetAllreports() {
        Report report1 = new Report();
        report1.setId(1L);
        report1.setReportName("report 1");
        Report report2 = new Report();
        report2.setId(2L);
        report2.setReportName("report 2");
        List<Report> reports = Arrays.asList(report1, report2);
        when(reportservice.getAllReports()).thenReturn(reports);
        List<Report> result = reportController.getAllReports();
        assertEquals(2, result.size());
        assertEquals("report 1", result.get(0).getReportName());
        assertEquals("report 2", result.get(1).getReportName());
    }

    @Test
    public void testGetreportById() {
        Report report = new Report();
        report.setId(1L);
        report.setReportName("report Name");
        when(reportservice.getReportById(1L)).thenReturn(Optional.of(report));
        ResponseEntity<Report> response = reportController.getReportById(1L);
        assertEquals("200 OK", response.getStatusCode().toString());
        assertEquals("report Name", response.getBody().getReportName());
    }

    @Test
    public void testGetreportById_NotFound() {
        when(reportservice.getReportById(1L)).thenReturn(Optional.empty());
        ResponseEntity<Report> response = reportController.getReportById(1L);
        assertEquals("404 NOT_FOUND", response.getStatusCode().toString());
    }

    @Test
    public void testCreatereport() {
        Report report = new Report();
        report.setId(1L);
        report.setReportName("report Name");
        when(reportservice.createReport(report)).thenReturn(report);
        Report result = reportController.createReport(report);
        assertEquals("report Name", result.getReportName());
    }
}