// Libs
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

// Constants
import { PUBLIC_ROUTES, ROUTES } from '@/constants';

// Types
import { RouteWithoutIcon } from '@/types/route';

// Utils
import { getParams, isRouteMatch } from '@/utils/route';

const useBreadcrumbs = () => {
  const pathname = usePathname();

  const [breadcrumbs, setBreadcrumbs] = useState<RouteWithoutIcon[]>([]);

  useEffect(() => {
    const getBreadcrumbs = () => {
      for (const route of ROUTES) {
        const { href, title } = route;

        if (pathname.includes(href)) {
          const breadcrumbs: RouteWithoutIcon[] = [];
          if (pathname.includes(PUBLIC_ROUTES.NFT_MARKETPLACE)) {
            breadcrumbs.push({ href, title });

            if (isRouteMatch(pathname, PUBLIC_ROUTES.NFT_MARKETPLACE_DETAIL)) {
              const nftId = getParams(
                pathname,
                PUBLIC_ROUTES.NFT_MARKETPLACE_DETAIL,
              ).join('/');

              breadcrumbs.push({
                title: nftId,
                href: pathname,
              });
            }

            setBreadcrumbs(breadcrumbs);
            return;
          }
        }
      }
    };

    getBreadcrumbs();
  }, [pathname]);

  return breadcrumbs;
};

export default useBreadcrumbs;
