'use server';

// Config
import { signIn } from '@/auth.config';

// Types
import { SignInFormData } from '@/types/auth';

/**
 *
 * @param formData SignInFormData
 * @returns hasError boolean
 */
export const handleSignIn = async (formData: SignInFormData) =>
  await signIn('credentials', { ...formData, redirect: false });
