// APIs
import { apiClient } from '@/services/api';

// Constants
import { API_ENTITY } from '@/constants/api';
import { PAGE_SIZE } from '@/constants/query';

// Types
import { ContributorResponse } from '@/types/contributor';
import { StrapiModelWithPagination, StrapiResponse } from '@/types/strapi';

interface IContributorParams {
  page: string;
  startDate?: string;
  endDate?: string;
  pageSize?: string;
  searchValue?: string;
  cacheOptions?: RequestCache;
}

export const getContributor = ({
  page,
  pageSize = PAGE_SIZE.HIGH,
  startDate,
  endDate,
  searchValue,
  cacheOptions,
}: IContributorParams) => {
  const FILTERS =
    startDate &&
    endDate &&
    `filters[users_permissions_user][createdAt][$gte]=${startDate}&filters[users_permissions_user][createdAt][$lte]=${endDate}`;

  const SEARCH_QUERY =
    searchValue &&
    `filters[users_permissions_user][firstName][$containsi]=${searchValue}`;

  const queryParams = new URLSearchParams({
    'pagination[page]': page,
    'pagination[pageSize]': pageSize,
    'populate[users_permissions_user][populate][join_nfts]': '*',
    'populate[users_permissions_user][populate][avatar]': '*',
  });

  return apiClient.get<
    StrapiModelWithPagination<StrapiResponse<ContributorResponse>[]>
  >(`${API_ENTITY.CONTRIBUTORS}?${queryParams}&${FILTERS}&${SEARCH_QUERY}`, {
    cache: cacheOptions,
  });
};
