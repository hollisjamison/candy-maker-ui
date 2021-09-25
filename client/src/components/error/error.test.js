import { render, screen } from '@testing-library/react';
import Error from './error';

test('The page renders all divs', () => {
  render(<Error />);
  const iconElement = document.querySelector('.icon')
  const messageElement = document.querySelector('.message')
  expect(iconElement).toBeInTheDocument();
  expect(messageElement).toBeInTheDocument();
});

test('It renders the correct text when passed a value', () => {
  render(<Error message="Standard error"/>);
  const messageElement = screen.getByText('Standard error')
  expect(messageElement).toBeInTheDocument();
});
