import { fireEvent, render, waitFor } from '@testing-library/react';

import ResetPasswordForm from '.';

import { MESSAGES } from '@/constants';

describe('ResetPassword Tests', () => {
  it('Should match snapshot', () => {
    const { container } = render(<ResetPasswordForm code="123" />);
    expect(container).toMatchSnapshot();
  });

  it('Should render correctly', async () => {
    const { getByLabelText, queryByText } = render(
      <ResetPasswordForm code="123" />,
    );

    const passwordField = getByLabelText('New Password');
    const confirmPasswordField = getByLabelText('Confirm Password');

    fireEvent.blur(passwordField);

    await waitFor(() => {
      expect(queryByText(MESSAGES.PASSWORD.REQUIRED)).toBeInTheDocument();
    });

    fireEvent.change(passwordField, { target: { value: 'invalid' } });
    fireEvent.blur(passwordField);

    await waitFor(() => {
      expect(queryByText(MESSAGES.PASSWORD.REGEX_MISMATCH)).toBeInTheDocument();
    });

    fireEvent.change(passwordField, { target: { value: '12345@Abc' } });
    fireEvent.change(confirmPasswordField, { target: { value: '12345@Ab' } });
    fireEvent.blur(confirmPasswordField);

    await waitFor(() => {
      expect(queryByText(MESSAGES.PASSWORD.MISMATCH)).toBeInTheDocument();
    });

    fireEvent.change(confirmPasswordField, { target: { value: '12345@Abc' } });
    fireEvent.blur(confirmPasswordField);

    await waitFor(() => {
      expect(queryByText(MESSAGES.PASSWORD.MISMATCH)).toBeInTheDocument();
    });
  });
});
