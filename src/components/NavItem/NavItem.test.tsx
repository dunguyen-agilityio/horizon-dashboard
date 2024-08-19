import { fireEvent, render } from '@testing-library/react';

// Components
import NavItem from '.';

// Icons
import { Moon } from '@/icons';

const navLabel = 'NFT Marketplace';
const navHref = 'marketplace';

describe('NavItem component', () => {
  const { container } = render(
    <NavItem href={navHref} icon={<Moon />} label={navLabel} isActive />,
  );
  it('NavItem should match snapshot', () => {
    expect(container).toMatchSnapshot();
  });

  it('NavItem should contain correct icon', () => {
    const { getByTestId } = render(
      <NavItem href={navHref} icon={<Moon />} label={navLabel} />,
    );
    const navIcon = getByTestId('nav-icon');
    expect(navIcon).toBeInTheDocument();
  });

  it('NavItem should trigger function when simulator onClick', () => {
    const { getByText } = render(
      <NavItem href={navHref} icon={<Moon />} label={navLabel} />,
    );
    const navItem = getByText(navLabel);
    expect(navItem).toBeInTheDocument();
    fireEvent.click(navItem);
  });
});
