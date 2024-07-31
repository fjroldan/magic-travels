// File: app.component.ts
// Description: This file is the main component file for the EditTasks microfrontend. It contains the logic for the EditTasks microfrontend.

// Importing required modules.
import { Task } from './task';
import { filter } from 'rxjs/operators';
import { Component } from '@angular/core';
import { TaskService } from './task.service';
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
  title = 'EditTasks';

  // Task object.
  task: Task = {
    id: 0,
    taskName: '',
    description: '',
    state: ''
  };

  // Error message.
  errorMessage: string = '';

  // Constructor.
  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  // OnInit lifecycle hook.
  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const currentUrl = this.router.url;
      const match = currentUrl.match(/\/edit-tasks\/(\d+)/);
      if (match) {
        const taskId = match[1];
        const id = Number(taskId);
        console.log(" Task ID", id);
        if (id != 0) {
          this.taskService.getTask(id).subscribe(task => this.task = task);
        }
      }
    });
  }

  // Save task.
  save(): void {
    this.taskService.saveTask(this.task).subscribe(
      () => {
        window.location.href = '/manage-tasks';
      },
      error => this.errorMessage = error
    );
  }
}