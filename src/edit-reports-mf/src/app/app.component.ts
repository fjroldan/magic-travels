// File: app.component.ts
// Description: This file is the main component file for the EditReports microfrontend. It contains the logic for the EditReports microfrontend.

// Importing required modules.
import { Report } from './report';
import { Component } from '@angular/core';
import { ReportService } from './report.service';

// Component decorator.
@Component({
  selector: 'app-edit-reports',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  // Component
  title = 'EditReports';

  // Report object.
  report: Report = {
    id: 0,
    reportName: '',
    description: '',
    state: ''
  };

  // Error message.
  errorMessage: string = '';

  // Constructor.
  constructor(
    private reportService: ReportService
  ) {}

  // OnInit lifecycle hook.
  ngOnInit(): void {
  }

  // Save report.
  save(): void {
    this.reportService.saveReport(this.report).subscribe(
      () => {
        window.location.href = '/manage-reports';
      },
      error => this.errorMessage = error
    );
  }
}