import { act, fireEvent, render, waitFor } from '@/utils/test-utils';

// Components
import SignUpContent from '@/ui/auth/SignUpContent';
import { handleSignUp } from '@/actions/auth';
import { useRouter } from 'next/navigation';
import { AUTH_ROUTES } from '@/constants';

let mockReplace: jest.Mock;

jest.mock('@/actions/auth', () => ({
  handleSignUp: jest.fn(),
}));

describe('SignUpContent tests', () => {
  beforeEach(() => {
    mockReplace = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should match snapshot', () => {
    const { container } = render(<SignUpContent />);
    expect(container).toMatchSnapshot();
  });

  it('Should render EyeFilled icon', () => {
    const { getAllByTestId } = render(<SignUpContent />);
    const listEyeFilledIcon = getAllByTestId('eye-filled-icon');
    expect(listEyeFilledIcon[0]).toBeInTheDocument();
  });

  it('Should render correct label', () => {
    const { getByLabelText } = render(<SignUpContent />);
    expect(getByLabelText('Email')).toBeInTheDocument();
    expect(getByLabelText('User name')).toBeInTheDocument();
    expect(getByLabelText('Password')).toBeInTheDocument();
    expect(getByLabelText('Confirm Password')).toBeInTheDocument();
  });

  it('Should render EyeSlashFilled icon when click EyeFilled', () => {
    const { getAllByTestId, getByTestId } = render(<SignUpContent />);
    const eyeFilledIcon = getAllByTestId('eye-filled-icon');

    fireEvent.click(eyeFilledIcon[0]);
    expect(getByTestId('eye-slash-filled-icon')).toBeInTheDocument();
  });

  it('Should render error message when give in valid password value', async () => {
    const { getByLabelText, getByText } = render(<SignUpContent />);

    const mockPasswordInValid = '';

    act(() => {
      const passwordField = getByLabelText('Password');
      fireEvent.change(passwordField, {
        target: { value: mockPasswordInValid },
      });
      fireEvent.blur(passwordField);
    });

    await waitFor(() => {
      expect(getByText('Password is required')).toBeInTheDocument();
    });
  });

  it('Should render error message when give in valid confirm password value', async () => {
    const { getByLabelText, getByText } = render(<SignUpContent />);

    const mockPasswordInValid = 'Abcd@123';

    act(() => {
      const confirmPasswordField = getByLabelText('Confirm Password');

      fireEvent.change(confirmPasswordField, {
        target: { value: mockPasswordInValid },
      });

      fireEvent.blur(confirmPasswordField);
    });

    await waitFor(() => {
      expect(
        getByText('Your confirmation passwords do not match'),
      ).toBeInTheDocument();
    });
  });

  it('Should render error message when give in valid email value', async () => {
    const { getByLabelText, getByText } = render(<SignUpContent />);

    const mockEmailInValid = 'user@';

    act(() => {
      const emailField = getByLabelText('Email');
      fireEvent.change(emailField, {
        target: { value: mockEmailInValid },
      });
      fireEvent.blur(emailField);
    });

    await waitFor(() => {
      expect(getByText('Invalid email address')).toBeInTheDocument();
    });
  });

  it('signUp will triggered correctly when click Sign Up Button', async () => {
    (handleSignUp as jest.Mock).mockResolvedValue({
      error: null,
    });
    (useRouter as jest.Mock).mockImplementation(() => ({
      replace: mockReplace,
    }));
    const { getByLabelText, getByTestId } = render(<SignUpContent />);

    const mockEmail = 'goodemail@gmai.com';
    const mockUsername = 'gooduser';
    const mockPassword = 'goodPassw@rd123';

    act(() => {
      fireEvent.change(getByLabelText('Email'), {
        target: { value: mockEmail },
      });

      fireEvent.change(getByLabelText('User name'), {
        target: { value: mockUsername },
      });

      fireEvent.change(getByLabelText('Password'), {
        target: { value: mockPassword },
      });
      fireEvent.change(getByLabelText('Confirm Password'), {
        target: { value: mockPassword },
      });
      fireEvent.blur(getByLabelText('Confirm Password'));
    });

    fireEvent.submit(getByTestId('signup-btn'));

    await waitFor(() => {
      expect(handleSignUp).toHaveBeenNthCalledWith(
        1,
        expect.objectContaining({
          email: mockEmail,
          username: mockUsername,
          password: mockPassword,
        }),
      );
      expect(mockReplace).toHaveBeenNthCalledWith(1, AUTH_ROUTES.SIGN_IN);
    });
  });

  it('signUp will triggered correctly when click Sign Up Button', async () => {
    (handleSignUp as jest.Mock).mockResolvedValue({
      error: new Error('Login Failed!'),
    });
    (useRouter as jest.Mock).mockImplementation(() => ({
      replace: mockReplace,
    }));
    const { getByLabelText, getByTestId } = render(<SignUpContent />);

    const mockEmail = 'goodemail@gmai.com';
    const mockUsername = 'gooduser';
    const mockPassword = 'goodPassw@rd123';

    act(() => {
      fireEvent.change(getByLabelText('Email'), {
        target: { value: mockEmail },
      });

      fireEvent.change(getByLabelText('User name'), {
        target: { value: mockUsername },
      });

      fireEvent.change(getByLabelText('Password'), {
        target: { value: mockPassword },
      });
      fireEvent.change(getByLabelText('Confirm Password'), {
        target: { value: mockPassword },
      });
      fireEvent.blur(getByLabelText('Confirm Password'));
    });

    fireEvent.submit(getByTestId('signup-btn'));

    await waitFor(() => {
      expect(handleSignUp).toHaveBeenNthCalledWith(
        1,
        expect.objectContaining({
          email: mockEmail,
          username: mockUsername,
          password: mockPassword,
        }),
      );
      expect(mockReplace).not.toHaveBeenCalled();
    });
  });
});
