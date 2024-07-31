// File: GetTasks.js
// Description: Module to get the tasks from the API and display them in a table.

// Importing the necessary libraries and hooks
import "./GetTasks.css";
import { useNavigate } from 'react-router-dom';
import { mount } from "getTasks/GetTasksModule";
import React, { useEffect, useRef } from "react";

// Function to render the GetTasks component
const GetTasks = () => {

  // Creating the reference for the component
  const navigate = useNavigate();
  const ref = useRef(null);

  // Mounting the component
  useEffect(() => {
    mount(ref.current); 
  }, []);

  // Returning the component
  return (
    <div>
      <button className="home-btn" onClick={() => navigate('/')}>Home</button>
      <div ref={ref} />
      <button className="button" onClick={() => navigate('/edit-tasks')}>Create Task</button>
    </div>
  );
};

// Exporting the GetTasks component
export default GetTasks;