// Types
import { type NFTData } from '@/models/NFT';

// Constants
import { NFT_IMAGES } from '@/constants/images';

// Mocks
import { MOCK_USERS } from './user';

const [MOCK_USER] = MOCK_USERS;

export const MOCK_NFTS: NFTData[] = [
  {
    id: '1',
    name: 'Mesh Gradients',
    author: { ...MOCK_USER, fullName: 'Adela Parkson' },
    price: 1.23,
    image: NFT_IMAGES.DEFAULT,
    members: MOCK_USERS,
  },
];
