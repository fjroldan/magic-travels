// Filename: App.js
// Description: This file contains the code for the get-users page.

// Import necessary modules
import './App.css';
import { useState, useEffect} from 'react';
import { fetchUsers, deleteUser } from './services/userService';

// Function to get the users from the API
function App() {

  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true; 
    const loadUsers = async () => {
      try {
        const usersData = await fetchUsers();
        if (isMounted) {
          setUsers(usersData);
        }
      } catch (error) {
        console.error('Error loading users:', error);
        if (isMounted) {
          setError('Error loading users. Please try again later.');
        }
      }
    };
    loadUsers();
    return () => {
      isMounted = false;
    };
  }, []);

  const handleDelete = async (userId) => {
    try {
        await deleteUser(userId);
        setUsers(users.filter(user => user.id !== userId));
    } catch (error) {
        console.error('Error deleting user:', error);
    }
  };
  
  const handleEdit = (id) => {
    // Redirect to the edit-user/:id page
    window.location.href = `/edit-users/${id}`;
  };

  return (
    <div>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {users.length === 0 && <p>No users found.</p>}
      <table className='table'>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Username</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.username}</td>
              <td>
                <button className="actionButton" onClick={() => handleEdit(user.id)}>Edit</button>
                <button className="actionButton" onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Export the App function
export default App;