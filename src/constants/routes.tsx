import { Route } from '@/types/route';

// Icons
import { Home, Cart, User, Kanban, Chart, Lock } from '@/icons';

export const AUTH_ROUTES = {
  SIGN_IN: '/sign-in',
  SIGN_UP: '/sign-up',
  FORGET_PASSWORD: '/forget-password',
};

export const PRIVATE_ROUTES = {
  DASHBOARD: '/dashboard',
  NFT_MARKETPLACE: '/nft-marketplace',
  CONTRIBUTOR: '/contributor',
  KANBAN: '/kanban',
  PROFILE: '/profile',
};

export const PUBLIC_ROUTES = {
  LICENSE: '/license',
  BLOG: '/blog',
  TERM_OF_USE: '/terms-of-use',
};

export const ROUTES: Route[] = [
  {
    title: 'Main Dashboard',
    href: PRIVATE_ROUTES.DASHBOARD,
  },
  { title: 'NFT Marketplace', href: PRIVATE_ROUTES.NFT_MARKETPLACE },
  { title: 'Contributor', href: PRIVATE_ROUTES.CONTRIBUTOR },
  { title: 'Kanban', href: PRIVATE_ROUTES.KANBAN },
  { title: 'Profile', href: PRIVATE_ROUTES.PROFILE },
  { title: 'Sign In', href: AUTH_ROUTES.SIGN_IN },
];

export const FOOTER_ROUTES: Route[] = [
  {
    title: 'Marketplace',
    href: PRIVATE_ROUTES.NFT_MARKETPLACE,
  },
  { title: 'License', href: PUBLIC_ROUTES.LICENSE },
  { title: 'Terms of Use', href: PUBLIC_ROUTES.TERM_OF_USE },
  { title: 'Blog', href: PUBLIC_ROUTES.BLOG },
];

export const LIST_NAV_ICON = [
  <Home key="homeIcon" />,
  <Cart key="cartIcon" />,
  <Chart key="chartIcon" />,
  <Kanban key="KanbanIcon" />,
  <User key="userIcon" />,
  <Lock key="lockIcon" />,
];
