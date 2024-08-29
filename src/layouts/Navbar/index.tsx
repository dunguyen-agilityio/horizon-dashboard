'use client';

// Libs
import { usePathname } from 'next/navigation';

// Components
import { Banner, NavItem } from '@/components';

// Constants
import { ROUTES, AUTH_ROUTES } from '@/constants/routes';

interface NavbarProps {
  isAuthenticated: boolean;
}

const Navbar = ({ isAuthenticated }: NavbarProps) => {
  const pathname = usePathname();

  return (
    <nav className="bg-white flex flex-col justify-between dark:bg-indigo w-[240px] lg:w-[290px] h-[1152px]">
      <div className="flex flex-col justify-between pt-[38px] gap-5">
        {ROUTES.map(({ href, icon, title }, index) => {
          if (isAuthenticated && href === AUTH_ROUTES.SIGN_IN) return null;

          return (
            <NavItem
              key={`${title}-${index}`}
              href={href}
              icon={icon}
              label={title}
              isActive={href === pathname}
            />
          );
        })}
      </div>
      <div className="mb-6">
        <Banner />
      </div>
    </nav>
  );
};

export default Navbar;
