// File: GetReports.js
// Description: Module to get the reports from the API and display them in a table.

// Importing the necessary libraries and hooks
import "./GetReports.css";
import { useNavigate } from 'react-router-dom';
import { mount } from "getReports/GetReportsModule";
import React, { useEffect, useRef } from "react";

// Function to render the GetReports component
const GetReports = () => {

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
      <button className="button" onClick={() => navigate('/edit-reports')}>Create Report</button>
    </div>
  );
};

// Exporting the GetReports component
export default GetReports;