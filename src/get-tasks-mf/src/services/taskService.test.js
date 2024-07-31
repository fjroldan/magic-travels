// File: taskService.test.js
// Description: Test cases for task service.

// Import the necessary functions
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { fetchTasks, deleteTask } from './taskService';
import Task from '../dtos/task';

// Create a mock adapter instance
const mock = new MockAdapter(axios);

// Access environment variable
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

// Test cases
describe('Task Service', () => {
  
  afterEach(() => {
    // Reset the mock after each test
    mock.reset();
  });

  test('fetchTasks should return task data', async () => {
    // Mock the API response
    const mockTasks = [
      { id: 1, taskName: 'task name 1', dexcription: 'des 1', state: 'active'},
      { id: 2, taskName: 'task name 2', dexcription: 'des 2', state: 'stopped'}
    ];
    mock.onGet(`${API_BASE_URL}/api/tasks`).reply(200, mockTasks);
    const tasks = await fetchTasks();
    // Check if the response is correct
    expect(tasks).toEqual([
      new Task(1, 'task name 1', 'des 1', 'active'),
      new Task(2, 'task name 2', 'des 2', 'stoped')
    ]);
  });

  test('deleteTask should delete a task and return response', async () => {
    // Mock the API response
    const taskId = '1';
    mock.onDelete(`${API_BASE_URL}/api/tasks/${taskId}`).reply(200, { message: 'Task deleted' });
    const response = await deleteTask(taskId);
    // Check if the response is correct
    expect(response).toEqual({ message: 'Task deleted' });
  });

});