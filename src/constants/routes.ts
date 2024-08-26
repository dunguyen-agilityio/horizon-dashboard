import { Route } from '@/types/route';

export const ROUTES: Route[] = [
  {
    title: 'Main Dashboard',
    href: '/dashboard',
  },
  { title: 'NFT Marketplace', href: '/nft-marketplace' },
  { title: 'Contributor', href: '/contributor' },
  { title: 'Kanban', href: '/kanban' },
  { title: 'Profile', href: '/profile' },
  { title: 'Sign In', href: '/sign-in' },
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
