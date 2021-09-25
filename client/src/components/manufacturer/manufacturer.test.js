import { render, screen } from '@testing-library/react';
import MockManufacturer from './manufacturer.mocks';

test('The page renders the manufacturers name', () => {
  render(<MockManufacturer />);
  const manufacturerElement = screen.getByText(/Cadbury/)
  expect(manufacturerElement).toBeInTheDocument();
});

test('The page renders the manufacturers country', () => {
  render(<MockManufacturer />);
  const manufacturerElement = screen.getByText(/US/)
  expect(manufacturerElement).toBeInTheDocument();
});

test('The page renders a div for the manufacturer', () => {
  render(<MockManufacturer />);
  const manufacturerElement = document.querySelector('.manufacturer')
  expect(manufacturerElement).toBeInTheDocument();
});

test('The page renders a link to the manufacturer', () => {
  render(<MockManufacturer />);
  const linkElement = screen.getByRole('link') 
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveAttribute('href', '/products/1')
});

