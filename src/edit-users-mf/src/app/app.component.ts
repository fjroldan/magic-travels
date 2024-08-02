// File: app.component.ts
// Description: This file is the main component file for the EditUsers microfrontend. It contains the logic for the EditUsers microfrontend.

// Importing required modules.
import { User } from './user';
import { Component } from '@angular/core';
import { UserService } from './user.service';

// Component decorator.
@Component({
  selector: 'app-edit-users',
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
    private userService: UserService
  ) {}

  // Send message to React app.
  sendMessageToReactApp(data: any) {
    window.parent.postMessage({ type: 'fromAngular', payload: data }, '*');
  }

  // OnInit lifecycle hook.
  ngOnInit(): void {
    window.addEventListener('message', (event) => {
      if (event.data && event.data.type === 'customEvent') {
        const payload = event.data.payload.payload;
        console.log('Received message: ', payload.id);
        if (payload.id != 0) {
          this.userService.getUser(payload.id).subscribe(user => this.user = user);
        }
      }
    });
  }

  // Save user.
  save(): void {
    this.userService.saveUser(this.user).subscribe(
      () => {
        this.sendMessageToReactApp({ type: 'saveUser', payload: 'success' });
      },
      error => this.errorMessage = error
    );
  }
}