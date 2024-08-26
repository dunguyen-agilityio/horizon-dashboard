import { USER_IMAGE } from '@/constants/images';

import { User } from '@/models/User';

export const MOCK_USERS = [
  {
    id: '1',
    userName: 'Adela Parkson',
    avatar: USER_IMAGE.DEFAULT,
    firstName: 'User 1',
    email: 'user1@gmail.com',
    role: 'Creative Director',
    createdAt: new Date('2024-08-17T07:25:04.188Z'),
    rating: 29,
  },
  {
    id: '2',
    userName: 'user2',
    avatar: USER_IMAGE.DEFAULT,
    firstName: 'User 2',
    email: 'user2@gmail.com',
    role: 'Product Designer',
    createdAt: new Date('2024-08-13T07:25:04.188Z'),
    rating: 72,
  },
  {
    id: '3',
    userName: 'user3',
    avatar: USER_IMAGE.DEFAULT,
    firstName: 'User 3',
    email: 'user3@gmail.com',
    role: 'Product Designer',
    createdAt: new Date('2024-01-13T07:25:04.188Z'),
    rating: 89,
  },
  {
    id: '4',
    userName: 'user4',
    avatar: USER_IMAGE.DEFAULT,
    firstName: 'User 4',
    email: 'user4@gmail.com',
    role: 'Junior Graphic Designer',
    createdAt: new Date('2024-08-18T07:25:04.188Z'),
    rating: 52,
  },
] as User[];
