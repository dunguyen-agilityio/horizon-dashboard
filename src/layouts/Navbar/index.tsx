'use client';

// Libs
import { useMemo } from 'react';
import { usePathname } from 'next/navigation';

// Components
import { Banner, NavItem } from '@/components';

// Constants
import { ROUTES } from '@/constants/routes';

// Icons
import { Home, Cart, User, Kanban, Chart, Lock } from '@/icons';

// Types
import { Navigate } from '@/types/navigate';

const listNavIcon = [
  <Home key="homeIcon" />,
  <Cart key="cartIcon" />,
  <Chart key="chartIcon" />,
  <Kanban key="KanbanIcon" />,
  <User key="userIcon" />,
  <Lock key="lockIcon" />,
];

const Navbar = () => {
  const pathname = usePathname();

  const listNavigate: Navigate[] = useMemo(
    () =>
      ROUTES.map((route, index) => ({
        ...route,
        icon: listNavIcon[index],
      })),
    [],
  );

  return (
    <nav className="bg-white flex flex-col justify-between dark:bg-indigo w-[240px] lg:w-[290px] h-[1152px]">
      <div className="flex flex-col justify-between pt-[38px] gap-5">
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
