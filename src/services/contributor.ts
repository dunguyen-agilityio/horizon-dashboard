// APIs
import { apiClient } from '@/services/api';

// Constants
import { API_ENTITY } from '@/constants/api';

// Types
import { IContributorsResponse } from '@/types/contributor';

interface IContributorParams {
  page: string;
  pageSize?: string;
  cacheOptions?: RequestCache;
}

export const getContributor = ({
  page,
  pageSize = '10',
  cacheOptions,
}: IContributorParams) => {
  const queryParams = new URLSearchParams({
    'pagination[page]': page,
    'pagination[pageSize]': pageSize,
    'populate[users_permissions_user][populate][0]': 'avatar',
    'populate[nfts][populate][0]': 'name',
  });

  return apiClient.get<IContributorsResponse>(
    `${API_ENTITY.CONTRIBUTORS}?${queryParams}`,
    {
      cache: cacheOptions,
    },
  );
};
