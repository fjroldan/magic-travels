// File: EditTasks.js
// Description: Module to edit the tasks from the API.

// Importing the necessary libraries and hooks
import "./EditTasks.css";

// Function to render the EditTasks component
const EditTasks = ({navigateHander}) => {
  // Returning the component
  return (
    <div>
      <h1>Edit Tasks</h1>
      <button className="home-btn" onClick={() => navigateHander('home')}>Home</button>
      <div>Component is not available at the moment. Please try again later.</div>
    </div>
  );
};

// Exporting the EditTasks component
export default EditTasks;