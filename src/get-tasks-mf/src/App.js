// Filename: App.js
// Description: This file contains the code for the get-tasks page.

// Import necessary modules
import './App.css';
import { useState, useEffect} from 'react';
import { fetchTasks, deleteTask } from './services/taskService';

// Function to get the tasks from the API
function App() {

  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const tasksData = await fetchTasks();
        setTasks(tasksData);
      } catch (error) {
        console.error('Error loading tasks:', error);
        setError('Error loading tasks. Please try again later.');
      }
    };
    loadTasks();
  }, []);

  const handleDelete = async (taskId) => {
    try {
        await deleteTask(taskId);
        setTasks(tasks.filter(task => task.id !== taskId));
    } catch (error) {
        console.error('Error deleting task:', error);
    }
  };
  
  const handleEdit = (id) => {
    // Redirect to the edit-task/:id page
    window.location.href = `/edit-tasks/${id}`;
  };

  return (
    <div>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {tasks.length === 0 && <p>No tasks found.</p>}
      <table className='table'>
        <thead>
          <tr>
            <th>Task Name</th>
            <th>Description</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index}>
              <td>{task.taskName}</td>
              <td>{task.description}</td>
              <td>{task.state}</td>
              <td>
                <button className="actionButton" onClick={() => handleEdit(task.id)}>Edit</button>
                <button className="actionButton" onClick={() => handleDelete(task.id)}>Delete</button>
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