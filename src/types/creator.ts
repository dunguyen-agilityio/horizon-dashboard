import { TUser } from '@/models/User';

export type Creator = Pick<
  TUser,
  'id' | 'username' | 'avatar' | 'createdAt' | 'rating'
> & {
  artwork: number;
};
