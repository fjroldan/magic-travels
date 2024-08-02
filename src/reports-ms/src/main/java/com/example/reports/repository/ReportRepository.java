package com.example.reports.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.reports.entity.Report;

@Repository
public interface ReportRepository extends JpaRepository<Report, Long> {
}