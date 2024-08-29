'use server';

// Libs
import { cookies } from 'next/headers';

// Config
import { signIn, signOut } from '@/auth.config';

// Constants
import { API_TOKEN, AUTH_ROUTES } from '@/constants';

// Types
import { SignInFormData } from '@/types/auth';

/**
 *
 * @param formData SignInFormData
 * @returns hasError boolean
 */
export const handleSignIn = async (formData: SignInFormData) =>
  await signIn('credentials', { ...formData, redirect: false });

export const handleSignOut = async () => {
  await signOut({ redirectTo: AUTH_ROUTES.SIGN_IN });
  cookies().delete(API_TOKEN);
};
