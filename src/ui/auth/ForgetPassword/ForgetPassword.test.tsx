import { act, fireEvent, render, waitFor } from '@testing-library/react';

import ForgetPasswordForm from '.';

import { AUTH_ROUTES, MESSAGES, STEP_KEY } from '@/constants';
import { useSearchParams } from 'next/navigation';

const mockPush = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: jest.fn().mockImplementation(() => ({
    push: mockPush,
  })),
  useSearchParams: jest.fn(),
  usePathname: jest.fn().mockImplementation(() => AUTH_ROUTES.FORGET_PASSWORD),
}));

describe('ForgetPassword tests', () => {
  it('Should match snapshot', () => {
    const { container } = render(<ForgetPasswordForm />);
    expect(container).toMatchSnapshot();
  });

  it('Should render correctly', async () => {
    const { getByTestId, getByLabelText, getByText } = render(
      <ForgetPasswordForm />,
    );
    (useSearchParams as jest.Mock).mockImplementation(
      () => new URLSearchParams({ step: '1' }),
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
  });

  it('mockPush triggered correctly when User typing email and click continue', async () => {
    (useSearchParams as jest.Mock).mockImplementation(
      () => new URLSearchParams({ step: '1' }),
    );
    const { getByTestId, getByLabelText } = render(<ForgetPasswordForm />);
    const emailField = getByLabelText('Email');

    act(() => {
      fireEvent.change(emailField, { target: { value: 'abc@gmail.com' } });
      fireEvent.click(getByTestId('continue-btn'));
    });

    await waitFor(() => {
      expect(mockPush).toHaveBeenNthCalledWith(
        1,
        `${AUTH_ROUTES.FORGET_PASSWORD}?${STEP_KEY}=2`,
      );
    });
  });

  it('Should render correctly', async () => {
    (useSearchParams as jest.Mock).mockImplementation(
      () => new URLSearchParams({ step: '2' }),
    );
    const { getByTestId } = render(<ForgetPasswordForm />);

    await waitFor(() => {
      expect(getByTestId('forget-password-step2')).toBeInTheDocument();
    });
  });
});
