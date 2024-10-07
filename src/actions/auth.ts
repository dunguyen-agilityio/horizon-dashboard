'use server';

// Libs
import { cookies } from 'next/headers';
import { revalidateTag } from 'next/cache';

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
  UpdateInfo,
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

export const handleSignUp = async (payload: SignUpPayload) =>
  await apiClient.post<SignUpResponse>(API_ENTITY.SIGN_UP, {
    body: payload,
  });

export const updateUser = async (id: string, payload: UpdateInfo) => {
  try {
    const response = await apiClient.put(`users/${id}`, {
      body: payload,
    });

    if (response.error) {
      throw new Error(response.error.message || 'Failed to update user');
    }

    revalidateTag('userInfo');

    return response.data;
  } catch (error) {
    throw new Error(`Error during update: ${(error as Error).message}`);
  }
};
