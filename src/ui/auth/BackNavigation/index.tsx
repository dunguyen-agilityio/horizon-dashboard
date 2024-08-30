'use client';

// Libs
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

// Components
import { ArrowRight } from '@/icons';
import { BoxIcon, Text } from '@/components';

// Constants
import {
  AUTH_NAVIGATION_HEADER,
  AUTH_ROUTES,
  PUBLIC_ROUTES,
  STEP_KEY,
} from '@/constants';

// Types
import { TEXT_VARIANT } from '@/types/text';

const BackNavigation = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const step = parseInt(params.get(STEP_KEY) ?? '1');

  const getNavigationHeader = (): { title: string; href: string } => {
    switch (true) {
      case pathname.includes(AUTH_ROUTES.SIGN_IN):
        return {
          title: AUTH_NAVIGATION_HEADER[PUBLIC_ROUTES.DASHBOARD],
          href: PUBLIC_ROUTES.DASHBOARD,
        };

      case pathname.includes(AUTH_ROUTES.FORGET_PASSWORD) && step === 2:
        params.set(STEP_KEY, '1');

        return {
          title: AUTH_NAVIGATION_HEADER[AUTH_ROUTES.FORGET_PASSWORD],
          href: `${AUTH_ROUTES.FORGET_PASSWORD}?${params.toString()}`,
        };

      case pathname.includes(AUTH_ROUTES.FORGET_PASSWORD) && step === 1:
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
      <BoxIcon icon={<ArrowRight />} customClass="fill-secondary" />
      <Text variant={TEXT_VARIANT.SECONDARY} className="ml-1">
        {`Back to ${title}`}
      </Text>
    </Link>
  );
};

export default BackNavigation;
