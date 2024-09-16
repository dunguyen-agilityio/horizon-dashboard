import { ContributorData } from '@/models/Contributor';
import { MOCK_USERS } from './user';
import { MOCK_NFTS } from './nft';

export const MOCK_CONTRIBUTORS = [
  {
    ...MOCK_USERS[0],
    rating: 23,
    nfts: MOCK_NFTS,
  },
  {
    ...MOCK_USERS[1],
    rating: 80,
    nfts: MOCK_NFTS,
  },
  {
    ...MOCK_USERS[2],
    nfts: MOCK_NFTS,
  },
  {
    ...MOCK_USERS[3],
    avatar: undefined,
    nfts: MOCK_NFTS,
  },
] as ContributorData[];
