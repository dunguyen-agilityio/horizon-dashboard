import { TUser, User } from '@/models/User';

export const formatUser = (data: TUser) => {
  const user = new User(data);

  return { ...user, fullName: user.fullName };
};
