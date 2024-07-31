// File: reportService.js
// Description: This file contains the code for the get-reports page.

// Import necessary modules
import axios from 'axios';
import Report from '../dtos/report';

// Access environment variable
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

// FetchReports function
export const fetchReports = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/reports`);
    return response.data.map(report => new Report(
      report.id,
      report.reportName,
      report.description,
      report.state
    ));
  } catch (error) {
    console.error('Error fetching reports:', error);
    throw error;
  }
};

// DeleteReport function
export const deleteReport = async (reportId) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/api/reports/${reportId}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting report:', error);
        throw error;
    }
};