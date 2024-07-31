// File: app.component.ts
// Description: This file is the main component file for the EditUsers microfrontend. It contains the logic for the EditUsers microfrontend.

// Importing required modules.
import { User } from './user';
import { filter } from 'rxjs/operators';
import { Component } from '@angular/core';
import { UserService } from './user.service';
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
  title = 'EditUsers';

  // User object.
  user: User = {
    id: 0,
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  };

  // Error message.
  errorMessage: string = '';

  // Constructor.
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  // OnInit lifecycle hook.
  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const currentUrl = this.router.url;
      const match = currentUrl.match(/\/edit-users\/(\d+)/);
      if (match) {
        const userId = match[1];
        const id = Number(userId);
        console.log(" User ID", id);
        if (id != 0) {
          this.userService.getUser(id).subscribe(user => this.user = user);
        }
      }
    });
  }

  // Save user.
  save(): void {
    this.userService.saveUser(this.user).subscribe(
      () => {
        window.location.href = '/admin-users';
      },
      error => this.errorMessage = error
    );
  }
}