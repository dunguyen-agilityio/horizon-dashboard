// Libs
import NextAuth from 'next-auth';
import { cookies } from 'next/headers';
import credentials from 'next-auth/providers/credentials';

// Services
import { apiClient } from './services/api';

// Types
import { AuthResponse } from '@/types/auth';

// Constants
import { AUTH_ROUTES, API_TOKEN, PUBLIC_ROUTES, API_ENTITY } from './constants';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    credentials({
      credentials: {
        identifier: { label: 'Username/email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      type: 'credentials',
      authorize: async (credentials) => {
        const { identifier, password } = credentials;

        const { data, error } = await apiClient.post<AuthResponse>(
          API_ENTITY.SIGN_IN,
          {
            body: { identifier, password },
          },
        );

        if (error !== null) {
          throw new Error(error);
        }

        const { jwt, user } = data;

        if (!user) {
          throw new Error('Not found user!');
        }

        cookies().set(API_TOKEN, jwt);

        return user;
      },
    }),
  ],
  pages: { signIn: AUTH_ROUTES.SIGN_IN },
  callbacks: {
    authorized: ({ auth, request: { nextUrl } }) => {
      const isAuthenticated = !!auth?.user;

      const pathname = nextUrl.pathname;

      const isOnAuthRoute = Object.values(AUTH_ROUTES).some((route) =>
        pathname.includes(route),
      );

      const isOnPublicRoute = Object.values(PUBLIC_ROUTES).some((route) =>
        pathname.includes(route),
      );

      switch (true) {
        case pathname === '/':
          return Response.redirect(new URL(PUBLIC_ROUTES.DASHBOARD, nextUrl));

        case isOnPublicRoute:
          return true;

        case !isAuthenticated:
          if (isOnAuthRoute) return true;
          return Response.redirect(new URL(AUTH_ROUTES.SIGN_IN, nextUrl));

        case isOnAuthRoute:
          return Response.redirect(new URL(PUBLIC_ROUTES.DASHBOARD, nextUrl));

        default:
          return true;
      }
    },
  },
});
