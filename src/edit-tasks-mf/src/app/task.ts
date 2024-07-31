// File: task.ts
// Description: This file contains the Task interface for the EditTasks microfrontend.

// Task interface.
export interface Task {
    id?: number|null;
    taskName?: string;
    description?: string;
    state?: string;
}