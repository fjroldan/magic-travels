// File: report.ts
// Description: This file contains the Report interface for the EditReports microfrontend.

// Report interface.
export interface Report {
    id?: number|null;
    reportName?: string;
    description?: string;
    state?: string;
}