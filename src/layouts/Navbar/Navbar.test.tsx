import { render } from '@testing-library/react';

// Components
import Navbar from '.';

// Constants
import { ROUTES } from '@/constants/routes';

jest.mock('next/navigation', () => ({
  usePathname: jest.fn().mockImplementation(() => '/'),
}));

describe('Navbar component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Navbar should render match snapshot', () => {
    const { container } = render(<Navbar />);
    expect(container).toMatchSnapshot();
  });

  it('Navbar should render correct icon', () => {
    const { getByTestId } = render(<Navbar />);

    const navIcon = getByTestId('cart-icon');
    expect(navIcon).toBeInTheDocument();
  });

  it('Navbar should render correct title on item', () => {
    const { getByText } = render(<Navbar />);

    const navItem = getByText(ROUTES[1].title);
    expect(navItem).toBeInTheDocument();
  });
});
