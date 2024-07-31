// File: app.component.ts
// Description: This file is the main component file for the EditReports microfrontend. It contains the logic for the EditReports microfrontend.

// Importing required modules.
import { Report } from './report';
import { filter } from 'rxjs/operators';
import { Component } from '@angular/core';
import { ReportService } from './report.service';
import { NavigationEnd } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';

// Component decorator.
@Component({
  selector: 'app-root',
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
    private reportService: ReportService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  // OnInit lifecycle hook.
  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const currentUrl = this.router.url;
      const match = currentUrl.match(/\/edit-reports\/(\d+)/);
      if (match) {
        const reportId = match[1];
        const id = Number(reportId);
        console.log(" Report ID", id);
        if (id != 0) {
          this.reportService.getReport(id).subscribe(report => this.report = report);
        }
      }
    });
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