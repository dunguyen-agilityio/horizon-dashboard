import { Route } from '@/types/route';

export const ENDPOINTS = {
  DASHBOARD: '/dashboard',
  NFT_MARKETPLACE: '/nft-marketplace',
  CONTRIBUTOR: '/contributor',
  KANBAN: '/kanban',
  PROFILE: '/profile',
  SIGN_IN: '/sign-in',
  LICENSE: '/license',
  BLOG: '/blog',
  FORGET_PASSWORD: '/forget-password',
  TERM_OF_USE: '/terms-of-use',
};

export const ROUTES: Route[] = [
  {
    title: 'Main Dashboard',
    href: ENDPOINTS.DASHBOARD,
  },
  { title: 'NFT Marketplace', href: ENDPOINTS.NFT_MARKETPLACE },
  { title: 'Contributor', href: ENDPOINTS.CONTRIBUTOR },
  { title: 'Kanban', href: ENDPOINTS.KANBAN },
  { title: 'Profile', href: ENDPOINTS.PROFILE },
  { title: 'Sign In', href: ENDPOINTS.SIGN_IN },
];

export const FOOTER_ROUTES: Route[] = [
  {
    title: 'Marketplace',
    href: ENDPOINTS.NFT_MARKETPLACE,
  },
  { title: 'License', href: ENDPOINTS.LICENSE },
  { title: 'Terms of Use', href: ENDPOINTS.TERM_OF_USE },
  { title: 'Blog', href: ENDPOINTS.BLOG },
];

export const PUBLIC_ROUTES = {
  FORGET_PASSWORD: ENDPOINTS.FORGET_PASSWORD,
};
