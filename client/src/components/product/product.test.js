import { render, screen } from '@testing-library/react';
import Product from './product';

test('The page renders the product div', () => {
  render(<Product id="1" year="2000" name="Mars Bar" />);
  const productElement = document.querySelector('.product')
  expect(productElement).toBeInTheDocument();
});

test('The page displays the products name', () => {
  render(<Product id="1" year="2000" name="Mars Bar" />);
  const productElement = screen.getByText(/Mars Bar/)
  expect(productElement).toBeInTheDocument();
});

test('The page displays the products year', () => {
  render(<Product id="1" year="2000" name="Mars Bar" />);
  const productElement = screen.getByText(/2000/)
  expect(productElement).toBeInTheDocument();
});