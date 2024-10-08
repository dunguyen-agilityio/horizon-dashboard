import { Route, RouteWithoutIcon } from '@/types/route';

// Icons
import { Home, Cart, User, Kanban, Chart, Lock } from '@/icons';

export const AUTH_ROUTES = {
  SIGN_IN: '/sign-in',
  SIGN_UP: '/sign-up',
  FORGET_PASSWORD: '/forget-password',
  RESET_PASSWORD: '/reset-password',
};

export const PRIVATE_ROUTES = {
  KANBAN: '/kanban',
  PROFILE: '/profile',
  NFT_FAVORITES: '/nft-favorites',
};

export const PUBLIC_ROUTES = {
  NFT_MARKETPLACE: '/template',
  NFT_MARKETPLACE_DETAIL: '/template/:id',
  CONTRIBUTOR: '/contributor',
  LICENSE: '/license',
  BLOG: '/blog',
  TERM_OF_USE: '/terms-of-use',
  DASHBOARD: '/dashboard',
};

export const NAV_ROUTES: Route[] = [
  {
    title: 'Main Dashboard',
    href: PUBLIC_ROUTES.DASHBOARD,
    icon: <Home key="homeIcon" />,
  },
  {
    title: 'NFT Marketplace',
    href: PUBLIC_ROUTES.NFT_MARKETPLACE,
    icon: <Cart key="cartIcon" />,
  },
  {
    title: 'Contributor',
    href: PUBLIC_ROUTES.CONTRIBUTOR,
    icon: <Chart key="chartIcon" />,
  },
  {
    title: 'Kanban',
    href: PRIVATE_ROUTES.KANBAN,
    icon: <Kanban key="KanbanIcon" />,
  },
  {
    title: 'Profile',
    href: PRIVATE_ROUTES.PROFILE,
    icon: <User key="userIcon" />,
  },
  {
    title: 'Sign In',
    href: AUTH_ROUTES.SIGN_IN,
    icon: <Lock key="lockIcon" />,
  },
];

export const ROUTES: RouteWithoutIcon[] = [
  ...NAV_ROUTES,
  {
    title: 'NFT Favorites',
    href: PRIVATE_ROUTES.NFT_FAVORITES,
  },
  {
    title: 'NFT Marketplace',
    href: PUBLIC_ROUTES.NFT_MARKETPLACE_DETAIL,
  },
];

export const FOOTER_ROUTES: Omit<Route, 'icon'>[] = [
  {
    title: 'Marketplace',
    href: PUBLIC_ROUTES.NFT_MARKETPLACE,
  },
  { title: 'License', href: PUBLIC_ROUTES.LICENSE },
  { title: 'Terms of Use', href: PUBLIC_ROUTES.TERM_OF_USE },
  { title: 'Blog', href: PUBLIC_ROUTES.BLOG },
];

export const AUTH_NAVIGATION_HEADER = {
  [PUBLIC_ROUTES.DASHBOARD]: 'dashboard',
  [AUTH_ROUTES.SIGN_IN]: 'sign in',
};
