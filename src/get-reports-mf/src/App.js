// Filename: App.js
// Description: This file contains the code for the get-reports page.

// Import necessary modules
import './App.css';
import { useState, useEffect} from 'react';
import { fetchReports, deleteReport } from './services/reportService';

// Function to get the reports from the API
function App() {

  const [reports, setReports] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const loadReports = async () => {
      try {
        const reportsData = await fetchReports();
        if (isMounted) {
          setReports(reportsData);
        }
      } catch (error) {
        console.error('Error loading reports:', error);
        if (isMounted) {
          setError('Error loading reports. Please try again later.');
        }
      }
    };
    loadReports();
    return () => {
      isMounted = false;
    };
  }, []);

  const handleDelete = async (reportId) => {
    try {
        await deleteReport(reportId);
        setReports(reports.filter(report => report.id !== reportId));
    } catch (error) {
        console.error('Error deleting report:', error);
    }
  };
  
  const handleEdit = (id) => {
    // Redirect to the edit-report/:id page
    window.location.href = `/edit-reports/${id}`;
  };

  return (
    <div>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {reports.length === 0 && <p>No reports found.</p>}
      <table className='table'>
        <thead>
          <tr>
            <th>Report Name</th>
            <th>Description</th>
            <th>State</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report, index) => (
            <tr key={index}>
              <td>{report.reportName}</td>
              <td>{report.description}</td>
              <td>{report.state}</td>
              <td>
                <button className="actionButton" onClick={() => handleEdit(report.id)}>Edit</button>
                <button className="actionButton" onClick={() => handleDelete(report.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Export the App function
export default App;