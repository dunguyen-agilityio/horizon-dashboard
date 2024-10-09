import {
  act,
  fireEvent,
  render,
  queryByTestId,
  getByText,
  waitFor,
} from '@testing-library/react';

import ProfileDropDown from '.';

import { signOut } from '@/auth.config';

// Mocks
import { MOCK_AVATAR, MOCK_USERS } from '@/mocks/user';

jest.mock('@/auth.config', () => ({
  signOut: jest.fn(),
}));

jest.mock('next/headers', () => ({
  cookies: jest.fn().mockImplementation(() => ({
    delete: jest.fn(),
  })),
}));

describe('ProfileDropDown tests', () => {
  it('Should match snapshot', () => {
    const { container } = render(
      <ProfileDropDown
        avatar={MOCK_AVATAR}
        username={MOCK_USERS[0].username}
      />,
    );
    expect(container).toMatchSnapshot();
  });

  it('Should show profile DropdownContent when click Trigger button', () => {
    const { getByTestId } = render(
      <ProfileDropDown
        avatar={MOCK_AVATAR}
        username={MOCK_USERS[0].username}
      />,
    );
    expect(
      queryByTestId(document.documentElement, 'profile-content'),
    ).not.toBeInTheDocument();

    act(() => {
      fireEvent.click(getByTestId('profile-trigger-btn'));
    });

    expect(
      queryByTestId(document.documentElement, 'profile-content'),
    ).toBeInTheDocument();
  });

  it('Should show ConfirmSignOutModal when click Sign Out button', () => {
    const { getByTestId } = render(
      <ProfileDropDown
        avatar={MOCK_AVATAR}
        username={MOCK_USERS[0].username}
      />,
    );

    act(() => {
      fireEvent.click(getByTestId('profile-trigger-btn'));
    });

    act(() => {
      fireEvent.click(getByText(document.documentElement, 'Sign Out'));
    });

    expect(
      queryByTestId(document.documentElement, 'confirm-signOut-modal'),
    ).toBeInTheDocument();
  });

  it('Should hidden ConfirmSignOutModal when click Close button', async () => {
    const { getByTestId } = render(
      <ProfileDropDown
        avatar={MOCK_AVATAR}
        username={MOCK_USERS[0].username}
      />,
    );

    act(() => {
      fireEvent.click(getByTestId('profile-trigger-btn'));
    });

    act(() => {
      fireEvent.click(getByTestId('button-sign-out'));
    });

    fireEvent.click(getByText(document.documentElement, 'Close'));

    await waitFor(() => {
      expect(
        queryByTestId(document.documentElement, 'confirm-signOut-modal'),
      ).not.toBeInTheDocument();
    });
  });

  it('Should hidden ConfirmSignOutModal when click Sign Out button', async () => {
    const { getByTestId } = render(
      <ProfileDropDown
        avatar={MOCK_AVATAR}
        username={MOCK_USERS[0].username}
      />,
    );

    act(() => {
      fireEvent.click(getByTestId('profile-trigger-btn'));
    });

    act(() => {
      fireEvent.click(getByTestId('button-sign-out'));
    });

    const modal = queryByTestId(
      document.documentElement,
      'confirm-signOut-modal',
    );

    fireEvent.click(getByTestId('modal-button-sign-out'));

    await waitFor(() => {
      expect(modal).toBeInTheDocument();
    });
  });

  it('Should trigger function signOut when click Sign Out button', async () => {
    const { getByTestId } = render(
      <ProfileDropDown
        avatar={MOCK_AVATAR}
        username={MOCK_USERS[0].username}
      />,
    );

    act(() => {
      fireEvent.click(getByTestId('profile-trigger-btn'));
    });

    act(() => {
      fireEvent.click(getByTestId('button-sign-out'));
    });

    fireEvent.click(getByTestId('modal-button-sign-out'));
    (signOut as jest.Mock).mockResolvedValue(true);
    await waitFor(() => {
      expect(signOut).toHaveBeenCalled();
    });
  });
});
