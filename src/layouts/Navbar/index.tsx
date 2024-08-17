'use client';

// Components
import { NavItem } from '@/components';

// Constants
import { ROUTES } from '@/constants/routes';

// Icons
import { Moon, Cart, User, Kanban, Chart, Lock } from '@/icons';

import { Navigate } from '@/types/navigate';
import { usePathname } from 'next/navigation';

const listNavIcon = (isActive?: boolean) => [
  <Moon key={'moonIcon'} />,
  <Cart key={'cartIcon'} />,
  <Chart isActive={isActive} key={'chartIcon'} />,
  <Kanban key={'KanbanIcon'} />,
  <User key={'userIcon'} />,
  <Lock key={'lockIcon'} />,
];

const Navbar = () => {
  const pathname = usePathname();
  const navIcon = listNavIcon();

  const navigate: Navigate[] = ROUTES.map((route, index) => ({
    ...route,
    icon: navIcon[index],
  }));

  return (
    <nav className="bg-white flex flex-col justify-between dark:bg-indigo w-[290px] h-[1152px]">
      <div className="flex flex-col pt-[38px] gap-5">
        {navigate.map((navItem, index) => (
          <NavItem
            key={`${navItem.title}-${index}`}
            href={navItem.href}
            icon={navItem.icon}
            label={navItem.title}
            isActive={navItem.href === pathname}
          />
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
