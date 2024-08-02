// File: EditUsers.js
// Description: Module to edit the users from the API.

// Importing the necessary libraries and hooks
import "./EditUsers.css";
import React, { useEffect, useState} from "react";
import {mount} from "editUsers/EditUsersModule";

// Function to render the EditUsers component
const EditUsers = ({navigateHander, id}) => {

  // Function to send a custom event
  const sendCustomEvent = (data) => {
    window.postMessage({ type: 'customEvent', payload: data }, '*');
  };

  // Mounting the component
  useEffect(() => {
    // Mounting the module
    mount();
    // Sending the custom event to the module
    sendCustomEvent({type: 'editUser', payload: {id: id}});
    // Event listener for messages from the Angular app
    const handleMessage = (event) => {
      if (event.data && event.data.type === 'fromAngular') {
        console.log('Message received from Angular:', event.data.payload); 
        const result = event.data.payload.payload;
        if (result === 'success') {
          navigateHander('getUsers');
        }
      }
    };
    window.addEventListener('message', handleMessage);
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('message', handleMessage);
    };
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