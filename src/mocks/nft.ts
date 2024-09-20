// Types
import { NFTResponse, type NFTData } from '@/models/NFT';

// Constants
import { NFT_IMAGES } from '@/constants/images';

// Mocks
import { MOCK_IMAGE_RESPONSE, MOCK_USERS, MOCK_USERS_RESPONSE } from './user';
import { StrapiResponse } from '@/types/strapi';

const [MOCK_USER] = MOCK_USERS;

export const MOCK_NFTS: NFTData[] = [
  {
    id: '1',
    name: 'Mesh Gradients',
    author: MOCK_USER,
    price: 1.23,
    image: { url: NFT_IMAGES.DEFAULT, hash: 'mock hash' },
    members: MOCK_USERS,
    createdAt: new Date('2024-08-17T07:25:04.188Z'),
  },
];

export const MOCK_NFTS_RESPONSE: StrapiResponse<NFTResponse>[] = [
  {
    id: '1',
    attributes: {
      name: 'Mesh Gradients',
      author: { data: MOCK_USERS_RESPONSE[0] },
      price: 1.23,
      members: { data: MOCK_USERS_RESPONSE },
      image: { data: MOCK_IMAGE_RESPONSE },
      createdAt: new Date('2024-08-17T07:25:04.188Z'),
    },
  },
];
