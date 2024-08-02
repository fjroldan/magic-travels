// File: GetUsers.js
// Description: Module to get the users from the API and display them in a table.

// Importing the necessary libraries and hooks
import "./GetUsers.css";
import { mount } from "getUsers/GetUsersModule";
import React, { useEffect, useRef } from "react";

// Function to render the GetUsers component
const GetUsers = ({navigateHander}) => {

  // Creating the reference for the component
  const ref = useRef(null);

  // Mounting the component
  useEffect(() => {
    mount(ref.current); 
    // Event listener for messages from the Angular app
    const handleMessage = (event) => {
      if (event.data && event.data.type === 'fromReactRemote') {
        console.log('Message received from React Remote:', event.data.payload); 
        const id = event.data.payload.payload;
        navigateHander('editUsers', id);
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
    <div>
      <h3>Users</h3>
      <button className="home-btn" onClick={() => navigateHander('home')}>Home</button>
      <div ref={ref} />
      <button className="button" onClick={() => navigateHander('editUsers')}>Create User</button>
    </div>
  );
};

// Exporting the GetUsers component
export default GetUsers;