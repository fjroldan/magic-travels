// File: task.service.ts
// Description: This file contains the logic for the task service in the EditTasks microfrontend.

// Importing required modules.
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse  } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Task } from './task';
import { environment } from '../environments/environment';
import { catchError } from 'rxjs/operators';

// Injectable decorator.
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  // Base URL for the API.
  private baseUrl = `${environment.apiUrl}/api/tasks`;

  // Constructor.
  constructor(private http: HttpClient) { }

  // Method to get a task by ID.
  getTask(id: number): Observable<Task> {
    return this.http.get<Task>(`${this.baseUrl}/${id}`);
  }

  // Method to save a task.
  saveTask(task: Task): Observable<Task> {
    if (task.id === 0 || task.id === null) {
      task.id = null;
      return this.http.post<Task>(this.baseUrl, task).pipe(
        catchError(this.handleError)
      );
    }
    return this.http.put<Task>(`${this.baseUrl}/${task.id}`, task).pipe(
      catchError(this.handleError)
    );
  }

  // Method to delete a task.
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