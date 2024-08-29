// Components
import Link from 'next/link';
import { BoxIcon, Text } from '@/components';

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
    <div className="flex w-full items-center gap-3 pl-0 xl:pl-8 py-2 hover:bg-gray hover:dark:bg-indigo-light">
      <BoxIcon
        customClass={cn('dark:fill-white', {
          'fill-blue-450': isActive,
          'fill-secondary': !isActive,
        })}
        icon={icon}
      />
      <Text
        className={cn(
          'font-medium text-lg xl:text-medium',
          isActive ? 'font-bold' : 'text-secondary',
        )}
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
