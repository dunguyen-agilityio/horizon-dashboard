import { NFTDataExtend, NFTResponse } from '@/models/NFT';

import { StrapiResponse } from '@/types/strapi';

import { formatUserResponse } from './user';

export const formatNFTResponse = ({
  id,
  attributes: {
    author,
    image,
    members: { data: members = [] },
    createdAt,
    ...rest
  },
}: StrapiResponse<NFTResponse>): NFTDataExtend => {
  const { hash = '', url = '' } = image?.data?.attributes || {};

  return {
    id,
    ...rest,
    createdAt: new Date(createdAt),
    author: formatUserResponse(author.data),
    members: members.map(formatUserResponse),
    image: { hash, url },
  };
};
