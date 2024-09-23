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

  const [breadCrumbs, setBreadCrumbs] = useState<RouteWithoutIcon[]>([]);

  useEffect(() => {
    for (const route of ROUTES) {
      const { href, title } = route;

      if (pathname.includes(href)) {
        const filterRoutes: RouteWithoutIcon[] = [];

        switch (true) {
          case pathname.includes(PUBLIC_ROUTES.NFT_MARKETPLACE):
            filterRoutes.push({ href, title });

            if (isRouteMatch(pathname, PUBLIC_ROUTES.NFT_MARKETPLACE_DETAIL)) {
              filterRoutes.push({
                title: getParams(
                  pathname,
                  PUBLIC_ROUTES.NFT_MARKETPLACE_DETAIL,
                ).join('/'),
                href: pathname,
              });
            }
            break;

          default:
            filterRoutes.push({ href, title });
            break;
        }

        setBreadCrumbs(filterRoutes);
      }
    }
  }, [pathname]);

  return breadCrumbs;
};

export default useBreadcrumbs;
