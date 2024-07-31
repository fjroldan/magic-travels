// File: App.test.js
// Description: Test file for the App component.

// Importing the necessary libraries
import { render, screen } from '@testing-library/react';
import App from './App';

// Test to check if the App component renders correctly
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
