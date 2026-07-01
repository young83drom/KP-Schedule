import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders KP Schedule core header element', () => {
  render(<App />);
  const headerElement = screen.getByText(/KP Schedule/i);
  expect(headerElement).toBeInTheDocument();
});
