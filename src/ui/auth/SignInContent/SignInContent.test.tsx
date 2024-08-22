import { fireEvent, render } from '@testing-library/react';

// Components
import SignInContent from '@/ui/auth/SignInContent';

describe('SignInContent tests', () => {
  it('Should match snapshot', () => {
    const { container } = render(<SignInContent />);
    expect(container).toMatchSnapshot();
  });

  it('Should render EyeSlashFilled icon', () => {
    const { getByTestId } = render(<SignInContent />);
    expect(getByTestId('eye-slash-filled-icon')).toBeInTheDocument();
  });

  it('Should render Email and Password label', () => {
    const { getByLabelText } = render(<SignInContent />);
    expect(getByLabelText('Email or username')).toBeInTheDocument();
    expect(getByLabelText('Password')).toBeInTheDocument();
  });

  it('Should render placeholder on input of Email and Password', () => {
    const { getByPlaceholderText } = render(<SignInContent />);
    expect(getByPlaceholderText('Your username or email')).toBeInTheDocument();
    expect(getByPlaceholderText('Min. 8 characters')).toBeInTheDocument();
  });

  it('Should render checkbox keep me logged in', () => {
    const { getByText } = render(<SignInContent />);
    expect(getByText('Keep me logged in')).toBeInTheDocument();
  });

  it('Should render EyeFilled icon when click EyeSlashFilled', () => {
    const { getByTestId } = render(<SignInContent />);
    const eyeSlashFilledIcon = getByTestId('eye-slash-filled-icon');

    fireEvent.click(eyeSlashFilledIcon);
    expect(getByTestId('eye-filled-icon')).toBeInTheDocument();
  });
});
