// File: taskService.js
// Description: This file contains the code for the get-tasks page.

// Import necessary modules
import axios from 'axios';
import Task from '../dtos/task';

// Access environment variable
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

// FetchTasks function
export const fetchTasks = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/tasks`);
    return response.data.map(task => new Task(
      task.id,
      task.taskName,
      task.description,
      task.state
    ));
  } catch (error) {
    console.error('Error fetching tasks:', error);
    throw error;
  }
};

// DeleteTask function
export const deleteTask = async (taskId) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/api/tasks/${taskId}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting task:', error);
        throw error;
    }
};