import { render, screen } from '@testing-library/react';
import ExampleComponent from '../src/components/ExampleComponent';

describe('ExampleComponent', () => {
  test('renders the component', () => {
    render(<ExampleComponent />);
    const buttonElement = screen.getByText(/example button/i); // Adjust the text based on your component
    expect(buttonElement).toBeInTheDocument();
  });

  // Add more tests as needed
});