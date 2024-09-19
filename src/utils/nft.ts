import { NFTDataExtend, NFTResponse } from '@/models/NFT';
import { StrapiModel, StrapiResponse } from '@/types/strapi';
import { TUser, User } from '@/models/User';
import { TImage } from '@/models/Image';

export const formatStrapiModel = <T extends { id: string }>({
  attributes,
  id,
}: StrapiResponse<T>) =>
  ({
    ...attributes,
    id,
  }) as T;

export type UserResponse1 = Omit<TUser, 'avatar' | 'role'> & {
  avatar: StrapiModel<StrapiResponse<TImage>> | null;
  role: StrapiResponse<{ name: string; id: string }> | null;
};

const formatUserResponse = (data: StrapiResponse<UserResponse1>): User => {
  const { avatar, role, ...rest } = formatStrapiModel(data);

  const { attributes: avatarData, id } = avatar?.data ?? {};

  const hasAvatar = avatarData && id;

  return new User({
    ...rest,
    role: { name: role?.attributes.name ?? '' },
    ...(hasAvatar && {
      avatar: { hash: avatarData.hash, url: avatarData.url },
    }),
  });
};

export const formatNFTResponse = ({
  id,
  attributes: { author, image, members, ...rest },
}: StrapiResponse<NFTResponse>): NFTDataExtend => {
  const { hash = '', url = '' } = image?.data?.attributes || {};

  return {
    id,
    ...rest,
    author: formatUserResponse(author.data),
    members: members.data?.map?.((member) => formatUserResponse(member)) || [],
    image: { hash, url },
  };
};
