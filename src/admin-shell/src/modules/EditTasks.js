// File: EditTasks.js
// Description: Module to edit the tasks from the API.

// Importing the necessary libraries and hooks
import "./EditTasks.css";
import { useNavigate } from 'react-router-dom';
import {mount} from "editTasks/EditTasksModule";
import React, { useEffect, useRef } from "react";

// Function to render the EditTasks component
const EditTasks = () => {
  // Creating the reference for the component
  const ref = useRef(null);
  const navigate = useNavigate();

  // Mounting the component
  useEffect(() => {
    mount();  
  }, []);

  // Returning the component
  return (
    <div>
      <button className="home-btn" onClick={() => navigate('/')}>Home</button>
      <button className="home-btn" onClick={() => navigate('/manage-tasks')}>Mange Tasks</button>
      <app-root></app-root>
    </div>
  );
};

// Exporting the EditTasks component
export default EditTasks;