import { fireEvent, render, waitFor } from '@/utils/test-utils';

import ResetPasswordForm from '.';

import { AUTH_ROUTES, MESSAGES } from '@/constants';
import { handleResetPassword } from '@/actions/auth';
import { MOCK_USERS } from '@/mocks/user';
import { useRouter } from 'next/navigation';

jest.mock('@/actions/auth', () => ({
  handleResetPassword: jest.fn(),
}));

let mockPush: jest.Mock;

const mockPassword = '12345@Abc';
const mockInvalidPassword = '1234';
const mockCode = '13232';

describe('ResetPassword Tests', () => {
  beforeEach(() => {
    mockPush = jest.fn();

    (useRouter as jest.Mock).mockImplementation(() => ({
      push: mockPush,
    }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should match snapshot', () => {
    const { container } = render(<ResetPasswordForm code={mockCode} />);
    expect(container).toMatchSnapshot();
  });

  it('Should render correctly', async () => {
    const { getByLabelText, queryByText } = render(
      <ResetPasswordForm code={mockCode} />,
    );

    const passwordField = getByLabelText('New Password');
    const confirmPasswordField = getByLabelText('Confirm Password');

    fireEvent.blur(passwordField);

    await waitFor(() => {
      expect(queryByText(MESSAGES.PASSWORD.REQUIRED)).toBeInTheDocument();
    });

    fireEvent.change(passwordField, { target: { value: mockInvalidPassword } });
    fireEvent.blur(passwordField);

    await waitFor(() => {
      expect(queryByText(MESSAGES.PASSWORD.REGEX_MISMATCH)).toBeInTheDocument();
    });

    fireEvent.change(passwordField, { target: { value: mockPassword } });
    fireEvent.blur(passwordField);
    fireEvent.change(confirmPasswordField, {
      target: { value: mockInvalidPassword },
    });
    fireEvent.blur(confirmPasswordField);

    await waitFor(() => {
      expect(queryByText(MESSAGES.PASSWORD.MISMATCH)).toBeInTheDocument();
    });

    fireEvent.change(confirmPasswordField, { target: { value: mockPassword } });
    fireEvent.blur(confirmPasswordField);

    await waitFor(() => {
      expect(queryByText(MESSAGES.PASSWORD.MISMATCH)).not.toBeInTheDocument();
    });
  });

  it('handleResetPassword and push will triggered correctly when fill on fields and click submit', async () => {
    (handleResetPassword as jest.Mock).mockResolvedValue({
      data: { user: MOCK_USERS[0] },
    });

    const { getByLabelText, getByTestId } = render(
      <ResetPasswordForm code={mockCode} />,
    );

    const passwordField = getByLabelText('New Password');
    const confirmPasswordField = getByLabelText('Confirm Password');

    fireEvent.change(passwordField, { target: { value: mockPassword } });
    fireEvent.blur(passwordField);
    fireEvent.change(confirmPasswordField, {
      target: { value: mockInvalidPassword },
    });

    fireEvent.change(confirmPasswordField, { target: { value: mockPassword } });
    fireEvent.blur(confirmPasswordField);

    fireEvent.submit(getByTestId('update-password-btn'));

    await waitFor(() => {
      expect(handleResetPassword).toHaveBeenNthCalledWith(
        1,
        expect.objectContaining({
          code: mockCode,
          password: mockPassword,
          passwordConfirmation: mockPassword,
        }),
      );

      expect(mockPush).toHaveBeenNthCalledWith(1, AUTH_ROUTES.SIGN_IN);
    });
  });

  it('push will not triggered when reset password not success', async () => {
    (handleResetPassword as jest.Mock).mockResolvedValue({
      data: { user: null },
    });

    const { getByLabelText, getByTestId } = render(
      <ResetPasswordForm code={mockCode} />,
    );

    const passwordField = getByLabelText('New Password');
    const confirmPasswordField = getByLabelText('Confirm Password');

    fireEvent.change(passwordField, { target: { value: mockPassword } });
    fireEvent.blur(passwordField);
    fireEvent.change(confirmPasswordField, {
      target: { value: mockInvalidPassword },
    });

    fireEvent.change(confirmPasswordField, { target: { value: mockPassword } });
    fireEvent.blur(confirmPasswordField);

    fireEvent.submit(getByTestId('update-password-btn'));

    await waitFor(() => {
      expect(mockPush).not.toHaveBeenCalled();
    });
  });
});
