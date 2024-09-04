import { render, screen } from '@testing-library/react';

import Toast from '.';

describe('Toast', () => {
  const mockOnClose = jest.fn();
  const ToastComponent = () =>
    render(
      <Toast
        message="Success message"
        type="success"
        onClose={mockOnClose}
        title="Success"
      />,
    );

  it('should match snapshot', () => {
    const { container } = ToastComponent();
    expect(container).toMatchSnapshot();
  });

  it('should renders the Toast component with the success type', () => {
    ToastComponent();

    expect(screen.getByText('Success message')).toBeInTheDocument();
  });

  it('should renders the Toast component with the error type', () => {
    render(
      <Toast
        message="Error message"
        type="error"
        onClose={mockOnClose}
        title="Success"
      />,
    );

    expect(screen.getByText('Error message')).toBeInTheDocument();
  });
});
