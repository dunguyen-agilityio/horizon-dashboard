import { User } from '@/models/User';

export const MOCK_USERS = [
  {
    id: '1',
    userName: 'Adela Parkson',
    avatar: '/default-avatar.webp',
    firstName: 'User 1',
    email: 'user1@gmail.com',
    role: 'Creative Director',
    postsTotal: 77,
    followers: 7.9,
    following: 365,
  },
  {
    id: '2',
    userName: 'user2',
    avatar: '/default-avatar.webp',
    firstName: 'User 2',
    email: 'user2@gmail.com',
    role: 'Product Designer',
  },
  {
    id: '3',
    userName: 'user3',
    avatar: '/default-avatar.webp',
    firstName: 'User 3',
    email: 'user3@gmail.com',
    role: 'Product Designer',
  },
  {
    id: '4',
    userName: 'user4',
    avatar: '/default-avatar.webp',
    firstName: 'User 4',
    email: 'user4@gmail.com',
    role: 'Junior Graphic Designer',
  },
] as User[];
