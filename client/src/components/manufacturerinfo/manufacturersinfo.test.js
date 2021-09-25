import { render, screen } from '@testing-library/react';
import ManufacturerInfo from './manufacturersinfo';

test('The page renders the detail div', () => {
  render(<ManufacturerInfo name="Cadbury" country="US" />);
  const detailElement = document.querySelector('.detail')
  expect(detailElement).toBeInTheDocument();
});

test('The page contains the manufacturers name', () => {
  render(<ManufacturerInfo name="Cadbury" country="US" />);
  const manufacturerElement = screen.getByText(/Cadbury/)
  expect(manufacturerElement).toBeInTheDocument();
});

test('The page contains the manufacturers country', () => {
  render(<ManufacturerInfo name="Cadbury" country="US" />);
  const manufacturerElement = screen.getByText(/US/)
  expect(manufacturerElement).toBeInTheDocument();
});