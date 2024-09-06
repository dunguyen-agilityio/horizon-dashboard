import { act, fireEvent, render, waitFor } from '@testing-library/react';

import ForgetPasswordForm from '.';

import { MESSAGES } from '@/constants';

describe('ForgetPassword tests', () => {
  it('Should match snapshot', () => {
    const { container } = render(<ForgetPasswordForm />);
    expect(container).toMatchSnapshot();
  });

  it('Should render correctly', async () => {
    const { getByTestId, getByLabelText, getByText } = render(
      <ForgetPasswordForm />,
    );
    expect(getByTestId('forget-password-step1')).toBeInTheDocument();

    const emailField = getByLabelText('Email');

    act(() => {
      fireEvent.change(emailField, { target: { value: 'invalid' } });
      fireEvent.click(getByTestId('continue-btn'));
    });

    await waitFor(() => {
      expect(getByText(MESSAGES.EMAIL.REGEX_MISMATCH)).toBeInTheDocument();
    });

    act(() => {
      fireEvent.change(emailField, { target: { value: 'user@gmail.com' } });
      fireEvent.click(getByTestId('continue-btn'));
    });

    await waitFor(() => {
      expect(getByTestId('forget-password-step2')).toBeInTheDocument();
    });
  });
});
