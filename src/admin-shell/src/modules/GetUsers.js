// File: GetUsers.js
// Description: Module to get the users from the API and display them in a table.

// Importing the necessary libraries and hooks
import "./GetUsers.css";
import { useNavigate } from 'react-router-dom';
import { mount } from "getUsers/GetUsersModule";
import React, { useEffect, useRef } from "react";

// Function to render the GetUsers component
const GetUsers = () => {

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
      <div ref={ref} />
      <button className="button" onClick={() => navigate('/edit-users')}>Create User</button>
    </div>
  );
};

// Exporting the GetUsers component
export default GetUsers;