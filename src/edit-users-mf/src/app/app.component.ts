import { Component } from '@angular/core';

import { User } from './user';
import { UserService } from './user.service';
import { ActivatedRoute, Router } from '@angular/router';

import { NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'EditUsers';

  user: User = {
    id: 0,
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  };

  errorMessage: string = '';

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}


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

  save(): void {
    this.userService.saveUser(this.user).subscribe(
      () => {
        window.location.href = '/admin-users';
      },
      error => this.errorMessage = error
    );
  }
}