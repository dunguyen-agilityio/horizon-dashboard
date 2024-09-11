import { ROUTES } from '@/constants';
import { RouteWithoutIcon } from '@/types/route';

export const isRouteMatch = (route: string, pattern: string) => {
  const routeSegments = route.split('/').filter(Boolean);
  const patternSegments = pattern.split('/').filter(Boolean);

  if (routeSegments.length !== patternSegments.length) return false;

  return patternSegments.every((segment, i) => {
    return segment.startsWith(':') || segment === routeSegments[i];
  });
};

export const getParams = (route: string, pattern: string) => {
  const routeSegments = route.split('/').filter(Boolean);
  const patternSegments = pattern.split('/').filter(Boolean);

  if (routeSegments.length !== patternSegments.length) return [];

  return routeSegments.filter((segment, i) => {
    return patternSegments[i].startsWith(':');
  });
};

export const getBreadcrumbs = (pathname: string) => {
  const filterRoutes: RouteWithoutIcon[] = [];

  ROUTES.forEach((route) => {
    const { href, title } = route;

    if (pathname.includes(href)) {
      filterRoutes.push({ href, title });
    } else if (isRouteMatch(pathname, href)) {
      filterRoutes.push({
        title: getParams(pathname, href).join('/'),
        href: pathname,
      });
    }
  });

  return filterRoutes;
};
