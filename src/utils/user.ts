import { TUser, User } from '@/models/User';
import { UserResponse } from '@/types/contributor';
import { StrapiResponse } from '@/types/strapi';
import { formatStrapiModel } from './strapi';

export const formatUser = (data: TUser) => {
  const user = new User(data);

  return { ...user, fullName: user.username };
};

export const formatUserResponse = (
  data: StrapiResponse<UserResponse>,
): User => {
  const { avatar, role, ...rest } = formatStrapiModel(data);

  const { attributes: avatarData, id } = avatar?.data ?? {};

  const hasAvatar = avatarData && id;

  return formatUser({
    ...rest,
    role: { name: role?.attributes.name ?? '' },
    ...(hasAvatar && {
      avatar: { hash: avatarData.hash, url: avatarData.url },
    }),
  });
};
