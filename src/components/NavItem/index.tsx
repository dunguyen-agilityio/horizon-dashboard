// Components
import Link from 'next/link';
import { Text } from '@/components';

// Utils
import { cn } from '@nextui-org/theme';

interface INavItemProps {
  icon: React.JSX.Element;
  label: string;
  isActive?: boolean;
  href: string;
}

const NavItem = ({ icon, label, isActive, href }: INavItemProps) => (
  <Link href={href} className="flex justify-between">
    <div className="flex w-full items-center gap-3 pl-8">
      <i
        className={cn(
          'w-6 h-6 flex justify-center items-center dark:fill-white',
          { 'fill-blue-450': isActive, 'fill-secondary': !isActive },
        )}
        data-testid="nav-icon"
      >
        {icon}
      </i>
      <Text
        className={cn('font-medium', isActive ? 'font-bold' : 'text-secondary')}
      >
        {label}
      </Text>
    </div>
    {isActive && (
      <div className="w-1 dark:bg-purple-750 bg-blue-450 rounded-xl" />
    )}
  </Link>
);

export default NavItem;
