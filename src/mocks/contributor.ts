import { MOCK_IMAGE_RESPONSE, MOCK_ROLE_RESPONSE, MOCK_USERS } from './user';
import { MOCK_NFTS_RESPONSE } from './nft';
import { ContributorResponse } from '@/types/contributor';
import { formatUser } from '@/utils/user';
import { StrapiResponse } from '@/types/strapi';

export const MOCK_CONTRIBUTORS: StrapiResponse<ContributorResponse>[] =
  MOCK_USERS.map((user, index) => ({
    id: String(index),
    attributes: {
      avatar: { data: MOCK_IMAGE_RESPONSE },
      join_nfts: { data: MOCK_NFTS_RESPONSE },
      users_permissions_user: {
        data: {
          id: user.id,
          attributes: {
            ...formatUser(user),
            avatar: { data: MOCK_IMAGE_RESPONSE },
            join_nfts: { data: MOCK_NFTS_RESPONSE },
            role: MOCK_ROLE_RESPONSE,
          },
        },
      },
    },
  }));
