import { Complex, ComplexStatus } from '@/types/complex';

export const MOCK_COMPLEXES: Complex[] = [
  {
    id: '1',
    name: 'Tony Reichert',
    progress: 45,
    status: ComplexStatus.APPROVED,
    createdAt: new Date('2024-08-14T08:25:04.188Z'),
  },
  {
    id: '2',
    name: 'Zoey Lang',
    progress: 15,
    status: ComplexStatus.DISABLE,
    createdAt: new Date('2024-08-14T08:25:04.188Z'),
  },
  {
    id: '3',
    name: 'Jane Fisher',
    progress: 55,
    status: ComplexStatus.ERROR,
    createdAt: new Date('2024-08-14T08:25:04.188Z'),
  },
  {
    id: '4',
    name: 'William Howard',
    progress: 65,
    status: ComplexStatus.APPROVED,
    createdAt: new Date('2024-08-14T08:25:04.188Z'),
  },
];
