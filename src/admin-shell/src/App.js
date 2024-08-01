// File: App.js
// Description: Main component of the application, it contains the routes and the main layout of the application.

// Importing the necessary libraries and hooks
import './App.css';
import React, { useState } from 'react';
import GetUsers from "./modules/GetUsers";
import GetTasks from "./modules/GetTasks";
import EditUsers from './modules/EditUsers';
import EditTasks from './modules/EditTasks';
import GetReports from "./modules/GetReports";
import EditReports from './modules/EditReports';

// Main component of the application
function Home({navigateHander}) {
  // Returning the component
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="button-container">
        <button className="big-button" onClick={() => navigateHander('getUsers')}>Manage Users</button>
        <button className="big-button" onClick={() => navigateHander('getTasks')}>Manage Tasks</button>
        <button className="big-button" onClick={() => navigateHander('getReports')}>Manage Reports</button>
      </div>
    </main>
  );
}

// Main component of the application
const App = () => {
  // State to manage the active component
  const [activeComponent, setActiveComponent] = useState('home');
  // Function to navigate between components named navigateHander
  const navigateHander = (component) => {
    setActiveComponent(component);
  }
  // Function to render the component based on the state
  const renderComponent = () => {
    switch (activeComponent) {
      case 'getUsers':
        return <GetUsers navigateHander={navigateHander} />;
      case 'getTasks':
        return <GetTasks navigateHander={navigateHander}/>;
      case 'editUsers':
        return <EditUsers navigateHander={navigateHander} id={0}/>;
      case 'editTasks':
        return <EditTasks navigateHander={navigateHander}/>;
      case 'getReports':
        return <GetReports navigateHander={navigateHander} />;
      case 'editReports':
        return <EditReports navigateHander={navigateHander}/>;
      default:
        return <Home navigateHander={navigateHander}/>;
    }
  };
  // Returning the component
  return (
    <div>
      {renderComponent()}
    </div>
  );
};

// Exporting the App component
export default App;