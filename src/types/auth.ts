import { User } from '@/models/User';

export interface SignInFormData {
  identifier: string;
  password: string;
}

export type SignUpFormData = SignUpPayload & {
  confirmPassword: string;
};

export type SignUpPayload = Pick<SignInFormData, 'password'> &
  Pick<User, 'username' | 'email'>;

export type ForgetResponse = { ok: boolean };

export type AuthResponse = {
  jwt: string;
  user: User;
};

export type ResetPasswordFormData = {
  email: string;
};

export type ResetPasswordPayload = {
  code: string;
  password: string;
  passwordConfirmation: string;
};

type SignUpErrorResponse = {
  data: null;
  error: { status: number; message: string };
};

type SignUpSuccessResponse = {
  data: AuthResponse;
  error: null;
};

export type SignUpResponse = SignUpSuccessResponse | SignUpErrorResponse;
