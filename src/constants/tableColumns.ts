// Types
import { TColumn } from '@/types/common';

export const CONTRIBUTOR_HEADER = {
  FULL_NAME: 'fullName',
  TEMPLATE: 'template',
  RATING: 'rating',
  CREATE_AT: 'createdAt',
};

export const CONTRIBUTOR_COLUMN: TColumn[] = [
  {
    key: CONTRIBUTOR_HEADER.FULL_NAME,
    label: 'Name',
    allowsSorting: true,
    visibleOnMobile: true,
  },
  {
    key: CONTRIBUTOR_HEADER.TEMPLATE,
    label: 'Template',
    allowsSorting: true,
    visibleOnMobile: true,
  },
  { key: CONTRIBUTOR_HEADER.CREATE_AT, label: 'Date', allowsSorting: true },
  {
    key: CONTRIBUTOR_HEADER.RATING,
    label: 'Rating',
    visibleOnMobile: true,
    allowsSorting: true,
  },
];
