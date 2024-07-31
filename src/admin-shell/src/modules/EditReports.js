// File: EditReports.js
// Description: Module to edit the reports from the API.

// Importing the necessary libraries and hooks
import "./EditReports.css";
import { useNavigate } from 'react-router-dom';
import {mount} from "editReports/EditReportsModule";
import React, { useEffect, useRef } from "react";

// Function to render the EditReports component
const EditReports = () => {
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
      <button className="home-btn" onClick={() => navigate('/manage-reports')}>Mange Reports</button>
      <app-root></app-root>
    </div>
  );
};

// Exporting the EditReports component
export default EditReports;