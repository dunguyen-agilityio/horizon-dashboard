import { render } from '@testing-library/react';
import BackNavigation from '.';
import { usePathname, useSearchParams } from 'next/navigation';
import {
  AUTH_NAVIGATION_HEADER,
  AUTH_ROUTES,
  PUBLIC_ROUTES,
} from '@/constants';

jest.mock('next/navigation', () => ({
  useSearchParams: jest.fn(),
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
    (useSearchParams as jest.Mock).mockImplementation(
      () => new URLSearchParams({ step: '2' }),
    );

    const { queryByText } = render(<BackNavigation />);

    expect(
      queryByText(
        `Back to ${AUTH_NAVIGATION_HEADER[AUTH_ROUTES.FORGET_PASSWORD]}`,
      ),
    ).toBeInTheDocument();
  });

  it('Should render correctly', () => {
    (usePathname as jest.Mock).mockImplementation(
      () => AUTH_ROUTES.FORGET_PASSWORD,
    );
    (useSearchParams as jest.Mock).mockImplementation(
      () => new URLSearchParams({ step: '1' }),
    );

    const { queryByText } = render(<BackNavigation />);

    expect(
      queryByText(`Back to ${AUTH_NAVIGATION_HEADER[AUTH_ROUTES.SIGN_IN]}`),
    ).toBeInTheDocument();
  });

  it('Should render correctly', () => {
    (usePathname as jest.Mock).mockImplementation(() => AUTH_ROUTES.SIGN_UP);
    (useSearchParams as jest.Mock).mockImplementation(
      () => new URLSearchParams({ step: '1' }),
    );

    const { queryByText } = render(<BackNavigation />);

    expect(
      queryByText(`Back to ${AUTH_NAVIGATION_HEADER[AUTH_ROUTES.SIGN_IN]}`),
    ).toBeInTheDocument();
  });

  it('Should render correctly', () => {
    (usePathname as jest.Mock).mockImplementation(
      () => AUTH_ROUTES.RESET_PASSWORD,
    );
    (useSearchParams as jest.Mock).mockImplementation(
      () => new URLSearchParams({ step: '1' }),
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
