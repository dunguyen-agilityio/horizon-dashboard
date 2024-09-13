import { useState } from 'react';
import {
  Navbar,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from '@nextui-org/react';

// Components
import { NavItem } from '@/components';
import { usePathname } from 'next/navigation';

// Constants
import { NAV_ROUTES, AUTH_ROUTES } from '@/constants/routes';

interface MenubarProp {
  isAuthenticated: boolean;
}

const MenuBar = ({ isAuthenticated }: MenubarProp) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();

  const handleOpenMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="bg-transparent shadow-none"
      classNames={{
        wrapper: 'px-0 bg-transparent h-[1/2]',
      }}
    >
      <NavbarContent className="xl:hidden px-0 flex justify-start dark:bg-indigo-dark">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="cursor-pointer xl:hidden p-0 h-[40px] dark:bg-indigo-dark"
        />
      </NavbarContent>

      <NavbarMenu className="mt-8 bg-gray dark:bg-indigo-dark">
        {NAV_ROUTES.map(({ title, href, icon }, index) => {
          if (isAuthenticated && href === AUTH_ROUTES.SIGN_IN) return null;

          return (
            <NavbarMenuItem key={`${title}-${index}`} onClick={handleOpenMenu}>
              <NavItem
                href={href}
                icon={icon}
                label={title}
                isActive={href === pathname}
              />
            </NavbarMenuItem>
          );
        })}
      </NavbarMenu>
    </Navbar>
  );
};

export default MenuBar;
