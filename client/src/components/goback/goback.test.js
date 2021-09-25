import { render, screen } from '@testing-library/react';
import MockGoBack from './goback.mocks';

test('The page renders the text go back', () => {
  render(<MockGoBack />);
  const goBackElement = screen.getByText(/Go Back/)
  expect(goBackElement).toBeInTheDocument();
});

test('The page presents a link that redirects to the root', () => {
  render(<MockGoBack/>)
  const goBackElement = screen.getByRole('link')
  expect(goBackElement).toBeInTheDocument();
  expect(goBackElement).toHaveAttribute('href', '/')
});
