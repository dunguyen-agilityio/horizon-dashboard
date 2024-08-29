'use client';

// Libs
import { usePathname } from 'next/navigation';

// Components
import { Banner, NavItem } from '@/components';

// Constants
import { ROUTES, LIST_NAV_ICON } from '@/constants/routes';

// Types
import { Navigate } from '@/types/navigate';

const Navbar = () => {
  const pathname = usePathname();

  const listNavigate: Navigate[] = ROUTES.map((route, index) => ({
    ...route,
    icon: LIST_NAV_ICON[index],
  }));

  return (
    <nav className="bg-white flex flex-col justify-between dark:bg-indigo w-[240px] lg:w-[290px] h-[1152px]">
      <div className="flex flex-col justify-between pt-[38px]">
        {listNavigate.map((navItem, index) => (
          <NavItem
            key={`${navItem.title}-${index}`}
            href={navItem.href}
            icon={navItem.icon}
            label={navItem.title}
            isActive={navItem.href === pathname}
          />
        ))}
      </div>
      <div className="mb-6">
        <Banner />
      </div>
    </nav>
  );
};

export default Navbar;
