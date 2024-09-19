import { NFTDataExtend, NFTResponse } from '@/models/NFT';
import { StrapiResponse } from '@/types/strapi';
import { User } from '@/models/User';
import { UserResponse } from '@/types/contributor';

export const formatStrapiModel = <T extends { id: string }>({
  attributes,
  id,
}: StrapiResponse<T>) =>
  ({
    ...attributes,
    id,
  }) as T;

const formatUserResponse = (data: StrapiResponse<UserResponse>): User => {
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
  attributes: {
    author,
    image,
    members: { data: members = [] },
    ...rest
  },
}: StrapiResponse<NFTResponse>): NFTDataExtend => {
  const { hash = '', url = '' } = image?.data?.attributes || {};

  return {
    id,
    ...rest,
    author: formatUserResponse(author.data),
    members: members.map(formatUserResponse),
    image: { hash, url },
  };
};
