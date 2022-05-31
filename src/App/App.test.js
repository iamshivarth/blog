import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

const sum = (a, b) => {
  return a + b;
};

describe('App test', () => {
  test('Jest is working', () => {
    expect(sum(4, 8)).toBe(12);
  });

  it('@testing-library/react is working', () => {
    render(<App />);
    const element = screen.getByText(/working/i);
    expect(element).toBeInTheDocument();
  });
});
