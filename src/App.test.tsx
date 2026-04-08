import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio hero and merged work content', () => {
  render(<App />);
  expect(screen.getByText(/Lennon Chia/i)).toBeInTheDocument();
  expect(screen.getByText(/Merged upstream work/i)).toBeInTheDocument();
});
