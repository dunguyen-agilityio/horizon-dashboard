'use server';

// Libs
import { cookies } from 'next/headers';

// Config
import { signIn, signOut } from '@/auth.config';

// Constants
import { API_ENTITY } from '@/constants/api';
import { API_TOKEN, AUTH_ROUTES } from '@/constants';

// Types
import { ForgetResponse, SignInFormData, SignInResponse } from '@/types/auth';

// Services
import { apiClient } from '@/services/api';

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

export const handleForgetPassword = async (email: string) =>
  await apiClient.post<ForgetResponse>(API_ENTITY.FORGET_PASSWORD, {
    body: { email },
  });

export type ResetPasswordPayload = {
  code: string;
  password: string;
  passwordConfirmation: string;
};

export const handleResetPassword = async (payload: ResetPasswordPayload) =>
  await apiClient.post<SignInResponse>(API_ENTITY.RESET_PASSWORD, {
    body: payload,
  });
