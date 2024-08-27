'use server';

import { signIn } from '@/auth.config';
import { SignInFormData } from '@/types/auth';

/**
 *
 * @param formData SignInFormData
 * @returns hasError boolean
 */
export const handleSignIn = async (data: SignInFormData) =>
  await signIn('credentials', { ...data, redirect: false });
