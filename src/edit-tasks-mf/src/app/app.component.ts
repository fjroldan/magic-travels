// File: app.component.ts
// Description: This file is the main component file for the EditTasks microfrontend. It contains the logic for the EditTasks microfrontend.

// Importing required modules.
import { Task } from './task';
import { Component } from '@angular/core';
import { TaskService } from './task.service';

// Component decorator.
@Component({
  selector: 'app-edit-tasks',
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
    private taskService: TaskService
  ) {}

  // OnInit lifecycle hook.
  ngOnInit(): void {
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