// Libs
import NextAuth from 'next-auth';
import { cookies } from 'next/headers';
import credentials from 'next-auth/providers/credentials';

// Services
import { apiClient } from './services/api';

// Types
import { SignInResponse } from './types/auth';

// Constants
import { AUTH_ROUTES, API_TOKEN } from './constants';

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

        const { data, error } = await apiClient.post<SignInResponse>(
          'auth/local',
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

      const AUTH_ROUTES = ['/sign-in', '/sign-up', '/reset-password'];

      const isOnAuthRoute = AUTH_ROUTES.some((route) =>
        pathname.includes(route),
      );

      switch (true) {
        case !isAuthenticated:
          if (isOnAuthRoute) return true;
          return Response.redirect(new URL('/sign-in', nextUrl));

        case isOnAuthRoute:
        case pathname === '/':
          return Response.redirect(new URL('/dashboard', nextUrl));

        default:
          return true;
      }
    },
  },
});
