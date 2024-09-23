'use client';

// Libs
import { usePathname } from 'next/navigation';

// Components
import {
  Navbar as NavComponent,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from '@nextui-org/navbar';
import { Banner, Brand, NavItem } from '@/components';
import { Divider } from '@nextui-org/divider';

// Constants
import { NAV_ROUTES, AUTH_ROUTES } from '@/constants/routes';

interface NavbarProps {
  isAuthenticated: boolean;
}

const Navbar = ({ isAuthenticated }: NavbarProps) => {
  const pathname = usePathname();

  return (
    <NavComponent
      className="bg-white w-navbar dark:bg-indigo h-screen"
      classNames={{
        wrapper: 'px-0 flex-col h-full',
      }}
    >
      <NavbarBrand className="flex-grow-0">
        <div className="flex flex-col w-[290px]">
          <Brand />
          <Divider className="bg-zinc-100 dark:bg-slate-700" />
        </div>
      </NavbarBrand>
      <NavbarContent className="flex flex-1 w-full flex-col items-center justify-between pt-[38px] gap-5">
        {NAV_ROUTES.map(({ href, icon, title }, index) => {
          if (isAuthenticated && href === AUTH_ROUTES.SIGN_IN) return null;
          return (
            <NavbarItem key={`${title}-${index}`} className="w-full">
              <NavItem
                href={href}
                icon={icon}
                label={title}
                isActive={href === pathname}
              />
            </NavbarItem>
          );
        })}
        <li className="flex-1 flex items-end mb-6">
          <Banner />
        </li>
      </NavbarContent>
    </NavComponent>
  );
};

export default Navbar;
