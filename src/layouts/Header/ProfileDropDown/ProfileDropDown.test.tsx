import {
  act,
  fireEvent,
  render,
  queryByTestId,
  getByText,
  waitFor,
} from '@testing-library/react';
import ProfileDropDown from '.';

describe('ProfileDropDown tests', () => {
  it('Should match snapshot', () => {
    const { container } = render(<ProfileDropDown />);
    expect(container).toMatchSnapshot();
  });

  it('Should show profile DropdownContent when click Trigger button', () => {
    const { getByTestId } = render(<ProfileDropDown />);
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

  it('Should show ConfirmLogoutModal when click Logout button', () => {
    const { getByTestId } = render(<ProfileDropDown />);

    act(() => {
      fireEvent.click(getByTestId('profile-trigger-btn'));
    });

    act(() => {
      fireEvent.click(getByText(document.documentElement, 'Logout'));
    });

    expect(
      queryByTestId(document.documentElement, 'confirm-logout-modal'),
    ).toBeInTheDocument();
  });

  it('Should show Hidden ConfirmLogoutModal when click Close button', async () => {
    const { getByTestId } = render(<ProfileDropDown />);

    act(() => {
      fireEvent.click(getByTestId('profile-trigger-btn'));
    });

    act(() => {
      fireEvent.click(getByText(document.documentElement, 'Logout'));
    });

    fireEvent.click(getByText(document.documentElement, 'Close'));

    await waitFor(() => {
      expect(
        queryByTestId(document.documentElement, 'confirm-logout-modal'),
      ).not.toBeInTheDocument();
    });
  });

  it('Should show Hidden ConfirmLogoutModal when click Logout button', async () => {
    const { getByTestId } = render(<ProfileDropDown />);

    act(() => {
      fireEvent.click(getByTestId('profile-trigger-btn'));
    });

    act(() => {
      fireEvent.click(getByText(document.documentElement, 'Logout'));
    });

    const modal = queryByTestId(
      document.documentElement,
      'confirm-logout-modal',
    );

    fireEvent.click(getByText(modal!, 'Logout'));

    await waitFor(() => {
      expect(modal).not.toBeInTheDocument();
    });
  });
});
