import { fireEvent, render } from '@testing-library/react';
import Header from '.';

const mockPush = jest.fn();

jest.mock('@/auth.config', () => ({
  signOut: jest.fn(),
}));

jest.mock('next/navigation', () => ({
  useRouter: jest.fn().mockImplementation(() => ({
    push: mockPush,
  })),
  useSearchParams: jest.fn().mockImplementation(() => new URLSearchParams()),
  usePathname: jest.fn().mockImplementation(() => '/'),
}));

describe('Header tests', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
    jest.clearAllMocks();
  });

  it('Should match snapshot', () => {
    const { container } = render(<Header isAuthenticated />);
    expect(container).toMatchSnapshot();
  });

  it('Should push search query correctly', async () => {
    const mockSearch = 'sea';

    const { getByTestId } = render(<Header isAuthenticated />);

    fireEvent.change(getByTestId('input-search'), {
      target: { value: mockSearch },
    });
    jest.advanceTimersByTime(1000);
    expect(mockPush).toHaveBeenNthCalledWith(1, `/?q=${mockSearch}`);
  });

  it('Should push search query correctly', async () => {
    const mockSearch = 'sea';

    const { getByTestId } = render(<Header isAuthenticated />);

    fireEvent.change(getByTestId('input-search'), {
      target: { value: mockSearch },
    });

    fireEvent.change(getByTestId('input-search'), {
      target: { value: '' },
    });

    jest.advanceTimersByTime(1000);
    expect(mockPush).toHaveBeenNthCalledWith(1, '/?');
  });
});
