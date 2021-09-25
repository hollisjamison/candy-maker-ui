import { render, screen } from '@testing-library/react';
import Title from './title';

test('The page renders the title div', () => {
  render(<Title />);
  const titleElement = document.querySelector('.title')
  expect(titleElement).toBeInTheDocument();
});

test('The page renders the title text', () => {
  render(<Title />);
  const titleElement = screen.getByText(/Candy Makers/)
  expect(titleElement).toBeInTheDocument();
});