import { User, UserResponse } from '@/models/User';

export const formatUser = ({ avatar, role, ...rest }: UserResponse) =>
  new User({
    ...rest,
    role: role?.name,
    avatar: avatar?.url,
  });
