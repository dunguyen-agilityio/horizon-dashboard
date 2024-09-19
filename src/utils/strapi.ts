import { StrapiResponse } from '@/types/strapi';

export const formatStrapiModel = <T extends { id: string }>({
  attributes,
  id,
}: StrapiResponse<T>) =>
  ({
    ...attributes,
    id,
  }) as T;
