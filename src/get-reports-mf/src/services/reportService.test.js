// File: reportService.test.js
// Description: Test cases for report service.

// Import the necessary functions
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { fetchReports, deleteReport } from './reportService';
import Report from '../dtos/report';

// Create a mock adapter instance
const mock = new MockAdapter(axios);

// Access environment variable
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

// Test cases
describe('Report Service', () => {
  
  afterEach(() => {
    // Reset the mock after each test
    mock.reset();
  });

  test('fetchReports should return report data', async () => {
    // Mock the API response
    const mockReports = [
      { id: 1, reportName: 'report name 1', dexcription: 'des 1', state: 'active'},
      { id: 2, reportName: 'report name 2', dexcription: 'des 2', state: 'stopped'}
    ];
    mock.onGet(`${API_BASE_URL}/api/reports`).reply(200, mockReports);
    const reports = await fetchReports();
    // Check if the response is correct
    expect(reports).toEqual([
      new Report(1, 'report name 1', 'des 1', 'active'),
      new Report(2, 'report name 2', 'des 2', 'stoped')
    ]);
  });

  test('deleteReport should delete a report and return response', async () => {
    // Mock the API response
    const reportId = '1';
    mock.onDelete(`${API_BASE_URL}/api/reports/${reportId}`).reply(200, { message: 'Report deleted' });
    const response = await deleteReport(reportId);
    // Check if the response is correct
    expect(response).toEqual({ message: 'Report deleted' });
  });

});