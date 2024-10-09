import { act, fireEvent, render, waitFor } from '@/utils/test-utils';

// Components
import SignInContent from '@/ui/auth/SignInContent';

// Config
import { signIn } from '@/auth.config';

// Constants
import { PUBLIC_ROUTES } from '@/constants';

jest.mock('@/auth.config', () => ({
  signIn: jest.fn(),
}));

const mockReplace = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: jest.fn().mockImplementation(() => ({
    replace: mockReplace,
  })),
}));

describe('SignInContent tests', () => {
  it('Should match snapshot', () => {
    const { container } = render(<SignInContent />);
    expect(container).toMatchSnapshot();
  });

  it('Should render EyeFilled icon', () => {
    const { getByTestId } = render(<SignInContent />);
    expect(getByTestId('eye-filled-icon')).toBeInTheDocument();
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

  it('Should render EyeSlashFilled icon when click EyeFilled', () => {
    const { getByTestId } = render(<SignInContent />);
    const eyeFilledIcon = getByTestId('eye-filled-icon');

    fireEvent.click(eyeFilledIcon);
    expect(getByTestId('eye-slash-filled-icon')).toBeInTheDocument();
  });

  it('handleSignIn will triggered correctly when click Login Button', async () => {
    (signIn as jest.Mock).mockResolvedValue(true);
    const { getByLabelText, getByTestId } = render(<SignInContent />);

    const mockUserName = 'user123';
    const mockPassword = 'Abcd@1234';

    act(() => {
      fireEvent.change(getByLabelText('Email or username'), {
        target: { value: mockUserName },
      });

      const inputPassword = getByLabelText('inputPassword');
      fireEvent.change(inputPassword, { target: { value: mockPassword } });
    });

    fireEvent.submit(getByTestId('signin-btn'));

    await waitFor(() => {
      expect(signIn).toHaveBeenNthCalledWith(1, 'credentials', {
        password: mockPassword,
        identifier: mockUserName,
        redirect: false,
      });
    });

    expect(mockReplace).toHaveBeenNthCalledWith(1, PUBLIC_ROUTES.DASHBOARD);
  });
});
