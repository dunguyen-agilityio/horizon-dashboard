import { render, screen, fireEvent } from '@testing-library/react';
import MenuBar from '.';
import { ROUTES } from '@/constants/routes';

jest.mock('next/navigation', () => ({
  usePathname: jest.fn().mockImplementation(() => '/'),
}));

describe('MenuBar Component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should match snapshot', () => {
    const { container } = render(<MenuBar />);
    expect(container).toMatchSnapshot();
  });

  it('should render the menu toggle button', () => {
    render(<MenuBar />);
    const menuToggleButton = screen.getByLabelText('Open menu');
    expect(menuToggleButton).toBeInTheDocument();
  });

  it('should toggle menu open and close on link click', () => {
    render(<MenuBar />);

    const toggleButton = screen.getByLabelText('Open menu');
    expect(toggleButton).toBeInTheDocument();

    fireEvent.click(toggleButton);

    const navItem = screen.getByText(ROUTES[0].title);
    expect(navItem).toBeInTheDocument();

    const dashBoardLink = screen.getByRole('link', { name: /dashboard/i });
    fireEvent.click(dashBoardLink);
    expect(dashBoardLink).toBeInTheDocument();

    expect(screen.getByLabelText('Open menu')).toBeInTheDocument();
  });
});
