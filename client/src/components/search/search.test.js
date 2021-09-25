import { render, screen, fireEvent } from '@testing-library/react';
import MockSearch from './search.mocks';

test('The page renders an input box', () => {
  render(<MockSearch/>);
  const searchElement = screen.getByRole('textbox')
  expect(searchElement).toBeInTheDocument();
});

test('The input box should render with default value', () => {
  render(<MockSearch />);
  const searchElement = screen.getByRole('textbox')
  expect(searchElement).toHaveValue('');
});

test('The input box should change value when typed in', () => {
  render(<MockSearch />);
  const searchElement = screen.getByRole('textbox')
  fireEvent.change(searchElement, {target: {value: 'Test Input'}})
  expect(searchElement.value).toEqual('Test Input');
});


