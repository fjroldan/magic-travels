// File: EditReports.js
// Description: Module to edit the reports from the API.

// Importing the necessary libraries and hooks
import "./EditReports.css";

// Function to render the EditReports component
const EditReports = ({navigateHander}) => {
  // Returning the component
  return (
    <div>
      <h1>Edit Reports</h1>
      <button className="home-btn" onClick={() => navigateHander('home')}>Home</button>
      <div>Component is not available at the moment. Please try again later.</div>
    </div>
  );
};

// Exporting the EditReports component
export default EditReports;