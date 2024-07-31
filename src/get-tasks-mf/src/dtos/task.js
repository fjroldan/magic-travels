// File: task.js
// Description: This file contains the code for the Task DTO.

// Task DTO class
export default class Task {
    constructor(id, taskName, description, state) {
      this.id = id;
      this.task_name = taskName;
      this.description = description;
      this.state = state;
    }
}