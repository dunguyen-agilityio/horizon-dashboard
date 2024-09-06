import { render } from '@testing-library/react';
import BackNavigation from '.';
import { usePathname } from 'next/navigation';
import {
  AUTH_NAVIGATION_HEADER,
  AUTH_ROUTES,
  PUBLIC_ROUTES,
} from '@/constants';

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}));

describe('BackNavigation tests', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should render correctly', () => {
    (usePathname as jest.Mock).mockImplementation(
      () => AUTH_ROUTES.FORGET_PASSWORD,
    );

    const { queryByText } = render(<BackNavigation />);

    expect(
      queryByText(`Back to ${AUTH_NAVIGATION_HEADER[AUTH_ROUTES.SIGN_IN]}`),
    ).toBeInTheDocument();
  });

  it('Should render correctly', () => {
    (usePathname as jest.Mock).mockImplementation(() => AUTH_ROUTES.SIGN_UP);

    const { queryByText } = render(<BackNavigation />);

    expect(
      queryByText(`Back to ${AUTH_NAVIGATION_HEADER[AUTH_ROUTES.SIGN_IN]}`),
    ).toBeInTheDocument();
  });

  it('Should render correctly', () => {
    (usePathname as jest.Mock).mockImplementation(
      () => AUTH_ROUTES.RESET_PASSWORD,
    );

    const { queryByText } = render(<BackNavigation />);

    expect(
      queryByText(`Back to ${AUTH_NAVIGATION_HEADER[AUTH_ROUTES.SIGN_IN]}`),
    ).toBeInTheDocument();
  });

  it('Should render correctly', () => {
    (usePathname as jest.Mock).mockImplementation(() => AUTH_ROUTES.SIGN_IN);

    const { queryByText } = render(<BackNavigation />);
    expect(
      queryByText(`Back to ${AUTH_NAVIGATION_HEADER[PUBLIC_ROUTES.DASHBOARD]}`),
    ).toBeInTheDocument();
  });
});
