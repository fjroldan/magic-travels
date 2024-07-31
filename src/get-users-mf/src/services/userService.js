// File: userService.js
// Description: This file contains the code for the get-users page.

// Import necessary modules
import axios from 'axios';
import User from '../dtos/user';

// Access environment variable
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

// FetchUsers function
export const fetchUsers = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/users`);
    return response.data.map(user => new User(
      user.id,
      user.firstName,
      user.lastName,
      user.email,
      user.phone,
      user.username
    ));
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

// DeleteUser function
export const deleteUser = async (userId) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/api/users/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
};