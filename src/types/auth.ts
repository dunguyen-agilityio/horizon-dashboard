import { User } from '@/models/User';

export interface SignInFormData {
  identifier: string;
  password: string;
}

export interface SignUpFormData extends Pick<SignInFormData, 'password'> {
  userName: string;
  email: string;
  confirmPassword: string;
}

export type ForgetResponse = { ok: boolean };

export type SignInResponse = {
  jwt: string;
  user: User;
};

export type ResetPasswordFormData = {
  email: string;
};
