// APIs
import { apiClient } from '@/services/api';

// Constants
import { API_ENTITY } from '@/constants/api';

// Types
import { IContributorsResponse } from '@/types/contributor';

interface IContributorParams {
  page: string;
  startDate?: string;
  endDate?: string;
  pageSize?: string;
  cacheOptions?: RequestCache;
}

export const getContributor = ({
  page,
  pageSize = '10',
  startDate = '',
  endDate = '',
  cacheOptions,
}: IContributorParams) => {
  const queryParams = new URLSearchParams({
    'pagination[page]': page,
    'pagination[pageSize]': pageSize,
    'populate[users_permissions_user][populate][0]': 'avatar',
    'populate[nfts][populate][0]': 'name',
    'filters[createdAt][$gte]': startDate,
    'filters[createdAt][$lte]': endDate,
  });

  return apiClient.get<IContributorsResponse>(
    `${API_ENTITY.CONTRIBUTORS}?${queryParams}`,
    {
      cache: cacheOptions,
    },
  );
};
