// File: app.component.ts
// Description: This file is the main component file for the EditUsers microfrontend. It contains the logic for the EditUsers microfrontend.

// Importing required modules.
import { User } from './user';
import { filter } from 'rxjs/operators';
import { Component, ElementRef } from '@angular/core';
import { UserService } from './user.service';
import { NavigationEnd } from '@angular/router';
//import { ActivatedRoute, Router } from '@angular/router';

// Component decorator.
@Component({
  selector: 'app-edit-users',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  id = '';
  userId: string='';

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
    private el: ElementRef
    //private route: ActivatedRoute,
    //private router: Router
  ) {}

  // OnInit lifecycle hook.
  ngOnInit(): void {
    // Listening to the custom event from React
    document.addEventListener('setId', (event: Event) => {
      // Use type assertion to cast the event to CustomEvent
      const customEvent = event as CustomEvent;
      this.id = customEvent.detail;
      this.handleIdChange(this.id); // Your logic to handle the ID
    });

    // Access the custom attribute passed from React
    //this.userId = this.el.nativeElement.getAttribute('user-id');
    //console.log('User ID:', this.userId);
    /*this.router.events.pipe(
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
    });*/
  }

  handleIdChange(id: string) {
    // Logic to handle the ID change
    console.log('***** User ID:', id);
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