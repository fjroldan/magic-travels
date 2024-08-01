// File: EditUsers.js
// Description: Module to edit the users from the API.

// Importing the necessary libraries and hooks
import "./EditUsers.css";
import React, { useEffect} from "react";
import {mount} from "editUsers/EditUsersModule";

// Function to render the EditUsers component
const EditUsers = ({navigateHander}) => {
  
  // Mounting the component
  useEffect(() => {
    mount(); 
  }, []);

  // Returning the component
  return (
    <div className="app-edit-users">
      <button className="home-btn" onClick={() => navigateHander('home')}>Home</button>
      <button className="home-btn" onClick={() => navigateHander('getUsers')}>Mange Users</button>
      <div>
        <app-edit-users></app-edit-users>
      </div>
    </div>
  );
};

// Exporting the EditUsers component
export default EditUsers;