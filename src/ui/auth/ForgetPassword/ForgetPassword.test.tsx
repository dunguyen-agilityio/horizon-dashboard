import { act, fireEvent, render, waitFor } from '@/utils/test-utils';

import ForgetPasswordForm from '.';

import { MESSAGES } from '@/constants';

import { handleForgetPassword } from '@/actions/auth';

jest.mock('@/actions/auth', () => ({
  handleForgetPassword: jest.fn(),
}));

describe('ForgetPassword tests', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should match snapshot', () => {
    const { container } = render(<ForgetPasswordForm />);
    expect(container).toMatchSnapshot();
  });

  it('Should render correctly', async () => {
    (handleForgetPassword as jest.Mock).mockResolvedValue({
      data: { ok: true },
    });
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

    jest.advanceTimersByTime(1000);

    await waitFor(
      () => {
        expect(getByTestId('forget-password-step2')).toBeInTheDocument();
        expect(getByText('Resend email')).toBeInTheDocument();
      },
      { timeout: 10000 },
    );
  });

  it('Should render correctly', async () => {
    (handleForgetPassword as jest.Mock).mockResolvedValue({
      data: { ok: false },
    });

    const { queryByTestId, getByLabelText, getByTestId } = render(
      <ForgetPasswordForm />,
    );
    expect(getByTestId('forget-password-step1')).toBeInTheDocument();

    const emailField = getByLabelText('Email');

    act(() => {
      fireEvent.change(emailField, { target: { value: 'user@gmail.com' } });
      fireEvent.click(getByTestId('continue-btn'));
    });

    jest.advanceTimersByTime(1000);

    await waitFor(
      () => {
        expect(queryByTestId('forget-password-step2')).not.toBeInTheDocument();
      },
      { timeout: 10000 },
    );
  });

  it('handleForgetPassword will triggered correctly', async () => {
    (handleForgetPassword as jest.Mock).mockResolvedValue({
      data: { ok: true },
    });

    const { getByTestId, getByLabelText, getByText } = render(
      <ForgetPasswordForm />,
    );
    expect(getByTestId('forget-password-step1')).toBeInTheDocument();

    const emailField = getByLabelText('Email');

    act(() => {
      fireEvent.change(emailField, { target: { value: 'user@gmail.com' } });
      fireEvent.click(getByTestId('continue-btn'));
    });

    await waitFor(() => {
      expect(handleForgetPassword).toHaveBeenNthCalledWith(1, 'user@gmail.com');
    });

    jest.advanceTimersByTime(1000);

    await waitFor(
      () => {
        expect(getByText('Resend email')).toBeInTheDocument();
      },
      { timeout: 10000 },
    );

    act(() => {
      fireEvent.click(getByText('Resend email'));
    });

    await waitFor(() => {
      expect(handleForgetPassword).toHaveBeenNthCalledWith(1, 'user@gmail.com');
    });
  });
});
