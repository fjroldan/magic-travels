// File: App.js
// Description: Main component of the application, it contains the routes and the main layout of the application.

// Importing the necessary libraries and hooks
import './App.css';
import React from 'react';
import GetUsers from "./modules/GetUsers";
import GetTasks from "./modules/GetTasks";
import EditUsers from './modules/EditUsers';
import EditTasks from './modules/EditTasks';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

// Main component of the application
function Home() {
  // Creating the reference for the component
  const navigate = useNavigate();
  // Returning the component
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="button-container">
        <button className="big-button" onClick={() => navigate('/admin-users')}>Manage Usres</button>
        <button className="big-button" onClick={() => navigate('/manage-tasks')}>Manage Tasks</button>
        <button className="big-button" onClick={() => navigate('/manage-reports')}>Manage Reports</button>
      </div>
    </main>
  );
}

// Function to render the AdminUsers component
function AdminUsers() {
  return <GetUsers />;
}

// Function to render the EditUsers component
function ManageTasks() {
  return <GetTasks />;
}

// Function to render the ManageTasks component
function ManageReports() {
  return <div>Manage Reports Page</div>;
}

// Main component of the application
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin-users" element={<AdminUsers />} />
        <Route path="/edit-users/:id?" element={<EditUsers />} />
        <Route path="/edit-tasks/:id?" element={<EditTasks />} />
        <Route path="/manage-tasks" element={<ManageTasks />} />
        <Route path="/manage-reports" element={<ManageReports />} />
      </Routes>
    </Router>
  );
}

// Exporting the App component
export default App;