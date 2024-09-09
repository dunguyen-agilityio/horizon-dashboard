import { NextRequest } from 'next/server';

const NextAuth = () => ({
  handlers: {
    GET: (_: NextRequest) => Promise<Response>,
    POST: (_: NextRequest) => Promise<Response>,
  },
  signIn: async () => {},
  signOut: async () => {},
  auth: async () => {},
});

export default NextAuth;
