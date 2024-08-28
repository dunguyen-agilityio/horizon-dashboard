import { User } from '@/models/User';

export interface SignInFormData {
  identifier: string;
  password: string;
}

export type SignInResponse = {
  jwt: string;
  user: User;
};
