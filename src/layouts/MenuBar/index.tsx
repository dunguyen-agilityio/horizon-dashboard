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
import { ROUTES, LIST_NAV_ICON } from '@/constants/routes';

// Types
import { Navigate } from '@/types/navigate';

const MenuBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();

  const listNavigate: Navigate[] = ROUTES.map((route, index) => ({
    ...route,
    icon: LIST_NAV_ICON[index],
  }));

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

      <NavbarMenu className="mt-8">
        {listNavigate.map(({ title, href, icon }, index) => (
          <NavbarMenuItem key={`${title}-${index}`} onClick={handleOpenMenu}>
            <NavItem
              href={href}
              icon={icon}
              label={title}
              isActive={href === pathname}
            />
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default MenuBar;
