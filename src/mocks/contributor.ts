import { Contributor } from '@/models/Contributor';
import { MOCK_USERS } from './user';

export const MOCK_CONTRIBUTORS = [
  {
    ...MOCK_USERS[0],
    rating: 23,
    template: 'Abstract Colors',
    createdAt: new Date('2024-01-13T07:25:04.188Z'),
  },
  {
    ...MOCK_USERS[1],
    rating: 80,
    template: 'Swipe Circles',
    createdAt: new Date('2024-08-13T07:25:04.188Z'),
  },
  {
    ...MOCK_USERS[2],
    template: 'Colorful Heaven',
    createdAt: new Date('2024-08-11T07:25:04.188Z'),
  },
  {
    ...MOCK_USERS[3],
    template: '3D Cubes Art',
    avatar: undefined,
  },
] as Contributor[];
