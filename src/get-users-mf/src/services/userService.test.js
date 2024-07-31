// File: userService.test.js
// Description: Test cases for user service.

// Import the necessary functions
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { fetchUsers, deleteUser } from './userService';
import User from '../dtos/user';

// Create a mock adapter instance
const mock = new MockAdapter(axios);

// Access environment variable
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

// Test cases
describe('User Service', () => {
  
  afterEach(() => {
    // Reset the mock after each test
    mock.reset();
  });

  test('fetchUsers should return user data', async () => {
    // Mock the API response
    const mockUsers = [
      { id: 1, firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', phone: '1234567890', username: 'johndoe' },
      { id: 2, firstName: 'Jane', lastName: 'Doe', email: 'jane.doe@example.com', phone: '0987654321', username: 'janedoe' }
    ];
    mock.onGet(`${API_BASE_URL}/api/users`).reply(200, mockUsers);
    const users = await fetchUsers();
    // Check if the response is correct
    expect(users).toEqual([
      new User(1, 'John', 'Doe', 'john.doe@example.com', '1234567890', 'johndoe'),
      new User(2, 'Jane', 'Doe', 'jane.doe@example.com', '0987654321', 'janedoe')
    ]);
  });

  test('deleteUser should delete a user and return response', async () => {
    // Mock the API response
    const userId = '1';
    mock.onDelete(`${API_BASE_URL}/api/users/${userId}`).reply(200, { message: 'User deleted' });
    const response = await deleteUser(userId);
    // Check if the response is correct
    expect(response).toEqual({ message: 'User deleted' });
  });

});