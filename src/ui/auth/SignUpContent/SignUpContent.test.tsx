import { act, fireEvent, render, waitFor } from '@testing-library/react';

// Components
import SignUpContent from '@/ui/auth/SignUpContent';

const mockReplace = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: jest.fn().mockImplementation(() => ({
    replace: mockReplace,
  })),
}));

describe('SignUpContent tests', () => {
  it('Should match snapshot', () => {
    const { container } = render(<SignUpContent />);
    expect(container).toMatchSnapshot();
  });

  it('Should render EyeSlashFilled icon', () => {
    const { getAllByTestId } = render(<SignUpContent />);
    const listEyeSlashFilledIcon = getAllByTestId('eye-slash-filled-icon');
    expect(listEyeSlashFilledIcon[0]).toBeInTheDocument();
  });

  it('Should render correct label', () => {
    const { getByLabelText } = render(<SignUpContent />);
    expect(getByLabelText('Email')).toBeInTheDocument();
    expect(getByLabelText('User name')).toBeInTheDocument();
    expect(getByLabelText('Password')).toBeInTheDocument();
    expect(getByLabelText('Confirm Password')).toBeInTheDocument();
  });

  it('Should render EyeFilled icon when click EyeSlashFilled', () => {
    const { getAllByTestId, getByTestId } = render(<SignUpContent />);
    const eyeSlashFilledIcon = getAllByTestId('eye-slash-filled-icon');

    fireEvent.click(eyeSlashFilledIcon[0]);
    expect(getByTestId('eye-filled-icon')).toBeInTheDocument();
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
      expect(getByText('This field is required')).toBeInTheDocument();
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

  it('signUp will triggered correctly when click Login Button', async () => {
    const { getByLabelText, getByTestId } = render(<SignUpContent />);

    const mockEmail = 'goodemail@gmai.com';
    const mockUserName = 'gooduser';
    const mockPassword = 'goodPassw@rd123';

    act(() => {
      fireEvent.change(getByLabelText('Email'), {
        target: { value: mockEmail },
      });

      fireEvent.change(getByLabelText('User name'), {
        target: { value: mockUserName },
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

    // TODO: Will expect trigger signUp event when implement featute signUp
  });
});
