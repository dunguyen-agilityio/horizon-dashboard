// Types
import { TColumn } from '@/types/common';

export const CONTRIBUTOR_COLUMN: TColumn[] = [
  {
    key: 'fullName',
    label: 'Name',
    allowsSorting: true,
    visibleOnMobile: true,
  },
  {
    key: 'template',
    label: 'Template',
    allowsSorting: true,
    visibleOnMobile: true,
  },
  { key: 'createdAt', label: 'Date', allowsSorting: true },
  {
    key: 'rating',
    label: 'Rating',
    visibleOnMobile: true,
    allowsSorting: true,
  },
];
