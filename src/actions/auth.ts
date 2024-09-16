'use server';

// Libs
import { cookies } from 'next/headers';

// Config
import { signIn, signOut } from '@/auth.config';

// Constants
import { API_ENTITY } from '@/constants/api';
import { API_TOKEN, AUTH_ROUTES } from '@/constants';

// Types
import {
  ForgetResponse,
  ResetPasswordPayload,
  SignInFormData,
  AuthResponse,
  SignUpPayload,
  SignUpResponse,
} from '@/types/auth';

// Services
import { apiClient } from '@/services/api';

/**
 *
 * @param formData SignInFormData
 * @returns hasError boolean
 */
export const handleSignIn = async (formData: SignInFormData) => {
  try {
    return await signIn('credentials', { ...formData, redirect: false });
  } catch (error) {
    return { error: `Failed to Sign In ${error}` };
  }
};

export const handleSignOut = async () => {
  await signOut({ redirectTo: AUTH_ROUTES.SIGN_IN });
  cookies().delete(API_TOKEN);
};

export const handleForgetPassword = async (email: string) =>
  await apiClient.post<ForgetResponse>(API_ENTITY.FORGET_PASSWORD, {
    body: { email },
  });

export const handleResetPassword = async (payload: ResetPasswordPayload) =>
  await apiClient.post<AuthResponse>(API_ENTITY.RESET_PASSWORD, {
    body: payload,
  });

export const handleSignUp = async (payload: SignUpPayload) => {
  const { data } = await apiClient.post<SignUpResponse>(API_ENTITY.SIGN_UP, {
    body: payload,
  });

  return data!;
};
