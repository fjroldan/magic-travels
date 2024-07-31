// File: user.service.ts
// Description: This file contains the logic for the user service in the EditUsers microfrontend.

// Importing required modules.
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse  } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { User } from './user';
import { environment } from '../environments/environment';
import { catchError } from 'rxjs/operators';

// Injectable decorator.
@Injectable({
  providedIn: 'root'
})
export class UserService {

  // Base URL for the API.
  private baseUrl = `${environment.apiUrl}/api/users`;

  // Constructor.
  constructor(private http: HttpClient) { }

  // Method to get a user by ID.
  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/${id}`);
  }

  // Method to save a user.
  saveUser(user: User): Observable<User> {
    if (user.id === 0 || user.id === null) {
      user.id = null;
      return this.http.post<User>(this.baseUrl, user).pipe(
        catchError(this.handleError)
      );
    }
    return this.http.put<User>(`${this.baseUrl}/${user.id}`, user).pipe(
      catchError(this.handleError)
    );
  }

  // Method to delete a user.
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