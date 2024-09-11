export type Route = {
  title: string;
  href: string;
  icon: React.ReactElement;
};

export type RouteWithoutIcon = Pick<Route, 'title' | 'href'>;
