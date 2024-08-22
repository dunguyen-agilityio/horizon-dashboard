import { Route } from '@/types/route';

export const ENDPOINTS = {
  DASHBOARD: '/dashboard',
  NFT_MARKETPLACE: '/nft-marketplace',
  CONTRIBUTOR: '/contributor',
  KANBAN: '/kanban',
  PROFILE: '/profile',
  SIGN_IN: '/sign-in',
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
    href: '/nft-marketplace',
  },
  { title: 'License', href: '/license' },
  { title: 'Terms of Use', href: '/terms-of-use' },
  { title: 'Blog', href: '/blog' },
];

export const PUBLIC_ROUTES = {
  FORGET_PASSWORD: '/forget-password',
};
