// File: EditUsers.js
// Description: Module to edit the users from the API.

// Importing the necessary libraries and hooks
import "./EditUsers.css";
import { useNavigate } from 'react-router-dom';
import {mount} from "editUsers/EditUsersModule";
import React, { useEffect, useRef } from "react";

// Function to render the EditUsers component
const EditUsers = () => {
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
      <button className="home-btn" onClick={() => navigate('/admin-users')}>Mange Users</button>
      <app-root></app-root>
    </div>
  );
};

// Exporting the EditUsers component
export default EditUsers;