'use client';

// Libs
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Icons
import { Back } from '@/icons';

// Components
import { BoxIcon, Text } from '@/components';

// Constants
import {
  AUTH_NAVIGATION_HEADER,
  AUTH_ROUTES,
  PUBLIC_ROUTES,
} from '@/constants';

const BackNavigation = () => {
  const pathname = usePathname();

  const getNavigationHeader = (): { title: string; href: string } => {
    switch (true) {
      case pathname.includes(AUTH_ROUTES.SIGN_IN):
        return {
          title: AUTH_NAVIGATION_HEADER[PUBLIC_ROUTES.DASHBOARD],
          href: PUBLIC_ROUTES.DASHBOARD,
        };

      case pathname.includes(AUTH_ROUTES.FORGET_PASSWORD):
      case pathname.includes(AUTH_ROUTES.SIGN_UP):
      case pathname.includes(AUTH_ROUTES.RESET_PASSWORD):
        return {
          title: AUTH_NAVIGATION_HEADER[AUTH_ROUTES.SIGN_IN],
          href: AUTH_ROUTES.SIGN_IN,
        };

      default:
        return { title: '', href: '' };
    }
  };

  const { title, href } = getNavigationHeader();

  return (
    <Link href={href} className="h-fit flex items-center gap-1">
      <BoxIcon icon={<Back />} customClass="fill-primary" />
      <Text className="ml-1 text-primary">{`Back to ${title}`}</Text>
    </Link>
  );
};

export default BackNavigation;
