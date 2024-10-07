import { render, screen, fireEvent, waitFor } from '@/utils/test-utils';

// components
import EditUserInfo from '../EditUserInfo';

// mocks
import { MOCK_USER_INFO } from '@/mocks/user';

describe('EditUserInfo Component', () => {
  const defaultProps = {
    id: '1',
    isOpen: true,
    onOpenChange: jest.fn(),
    onClose: jest.fn(),
    ...MOCK_USER_INFO,
  };

  it('renders the component correctly', () => {
    render(<EditUserInfo {...defaultProps} />);
    expect(screen.getByText('Edit User Information')).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /Full Name/i })).toHaveValue(
      MOCK_USER_INFO.fullName,
    );
    expect(screen.getByRole('textbox', { name: /Phone Number/i })).toHaveValue(
      MOCK_USER_INFO.phoneNumber,
    );
  });

  it('shows error message when fullName is empty', async () => {
    render(<EditUserInfo {...defaultProps} />);
    const fullNameInput = screen.getByRole('textbox', { name: /Full Name/i });

    fireEvent.change(fullNameInput, { target: { value: '' } });
    fireEvent.blur(fullNameInput);

    await waitFor(() => {
      expect(screen.getByText('This field is required')).toBeInTheDocument();
    });
  });

  it('shows error message for invalid phone number', async () => {
    render(<EditUserInfo {...defaultProps} />);
    const phoneInput = screen.getByRole('textbox', { name: /Phone Number/i });

    fireEvent.change(phoneInput, { target: { value: 'abc123' } });
    fireEvent.blur(phoneInput);

    await waitFor(() => {
      expect(
        screen.getByText('Phone number must contain only numbers'),
      ).toBeInTheDocument();
    });
  });

  it('disables submit button when form is invalid or pristine', async () => {
    render(<EditUserInfo {...defaultProps} />);

    const submitButton = screen.getByRole('button', { name: /Edit/i });

    expect(submitButton).toBeDisabled();

    fireEvent.change(screen.getByRole('textbox', { name: /Full Name/i }), {
      target: { value: '' },
    });

    await waitFor(() => {
      expect(submitButton).toBeDisabled();
    });
  });

  it('prevents form submission when phone number is invalid', async () => {
    const handleSubmit = jest.fn();
    render(<EditUserInfo {...defaultProps} onClose={handleSubmit} />);

    const phoneInput = screen.getByRole('textbox', { name: /Phone Number/i });
    fireEvent.change(phoneInput, { target: { value: 'invalidPhone' } });

    fireEvent.click(screen.getByRole('button', { name: /Edit/i }));

    await waitFor(() => {
      expect(handleSubmit).not.toHaveBeenCalled();
    });
  });
});
