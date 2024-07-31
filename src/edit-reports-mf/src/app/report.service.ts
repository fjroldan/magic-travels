// File: report.service.ts
// Description: This file contains the logic for the report service in the EditReports microfrontend.

// Importing required modules.
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse  } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Report } from './report';
import { environment } from '../environments/environment';
import { catchError } from 'rxjs/operators';

// Injectable decorator.
@Injectable({
  providedIn: 'root'
})
export class ReportService {

  // Base URL for the API.
  private baseUrl = `${environment.apiUrl}/api/reports`;

  // Constructor.
  constructor(private http: HttpClient) { }

  // Method to get a report by ID.
  getReport(id: number): Observable<Report> {
    return this.http.get<Report>(`${this.baseUrl}/${id}`);
  }

  // Method to save a report.
  saveReport(report: Report): Observable<Report> {
    if (report.id === 0 || report.id === null) {
      report.id = null;
      return this.http.post<Report>(this.baseUrl, report).pipe(
        catchError(this.handleError)
      );
    }
    return this.http.put<Report>(`${this.baseUrl}/${report.id}`, report).pipe(
      catchError(this.handleError)
    );
  }

  // Method to delete a report.
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // The backend returned an unsuccessful response code
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}