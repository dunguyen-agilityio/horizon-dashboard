import { User } from '@/models/User';

export interface SignInFormData {
  identifier: string;
  password: string;
}

export interface SignUpFormData {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export type SignInResponse = {
  jwt: string;
  user: User;
};
