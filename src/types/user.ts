// Model
import { TImage } from '@/models/Image';
import { TUser } from '@/models/User';

export type Role = { name: string };

export type UserExtend = Omit<TUser, 'avatar' | 'fullName'> & {
  avatar?: TImage;
};
