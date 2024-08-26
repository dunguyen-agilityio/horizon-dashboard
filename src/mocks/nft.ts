// Types
import { type NFT } from '@/models/NFT';

// Constants
import { NFT_IMAGES } from '@/constants/images';

// Mocks
import { MOCK_USERS } from './user';

export const MOCK_NFTS: NFT[] = [
  {
    id: '1',
    author: MOCK_USERS[0],
    name: 'Mesh Gradients',
    price: 1.23,
    image: NFT_IMAGES.DEFAULT,
    members: MOCK_USERS,
  },
];
