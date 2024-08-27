import { User } from '@/models/User';

export interface SignInFormData {
  identifier: string;
  password: string;
}

export type SignResponse = {
  jwt: string;
  user: User;
};
