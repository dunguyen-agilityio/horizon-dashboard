import { NFT_IMAGES } from '@/constants/images';

export const histories = [
  {
    image: NFT_IMAGES.DEFAULT,
    title: 'Colorful Heaven',
    author: 'Mark Benjamin',
    price: '1.33',
    timeAgo: new Date(Date.now() - 2 * 60 * 60 * 1000),
  },
  {
    image: NFT_IMAGES.DEFAULT,
    title: 'Abstract Colors',
    author: 'Esthera Jackson',
    price: '0.91',
    timeAgo: new Date(Date.now() - 6 * 60 * 60 * 1000),
  },
  {
    image: NFT_IMAGES.DEFAULT,
    title: 'ETH AI Brain',
    author: 'Nick Wilson',
    price: '2.82',
    timeAgo: new Date(Date.now() - 5 * 60 * 60 * 1000),
  },
  {
    image: NFT_IMAGES.DEFAULT,
    title: 'Swipe Circles',
    author: 'Peter Will',
    price: '2.32',
    timeAgo: new Date(Date.now() - 1.5 * 24 * 60 * 60 * 1000),
  },
];
