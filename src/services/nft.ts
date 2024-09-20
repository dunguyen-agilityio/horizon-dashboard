import { NFTResponse } from '@/models/NFT';
import { User } from '@/models/User';
import { apiClient } from './api';
import { API_ENTITY } from '@/constants';
import { StrapiModelWithPagination, StrapiResponse } from '@/types/strapi';

type UserFavoriteResponse = User & {
  favorite: {
    id: string;
    nfts: NFTResponse[];
  } | null;
};

export const getNFTsFavorite = async () => {
  const searchParams = new URLSearchParams({
    '[populate][favorite][populate][nfts][populate][image]': 'url',
    '[populate][favorite][populate][nfts][populate][members][populate][avatar]':
      'url',
    '[populate][favorite][populate][nfts][populate][author][populate][avatar]':
      'url',
  });

  const { data, error } = await apiClient.get<UserFavoriteResponse>(
    `${API_ENTITY.USERS}/me?${searchParams.toString()}`,
    { cache: 'no-store' },
  );

  return { data: data?.favorite?.nfts || [], error };
};

type NFTsResponse = StrapiModelWithPagination<StrapiResponse<NFTResponse>[]>;

export const getNFTsRecentlyAdded = async () => {
  const searchParams = new URLSearchParams({
    'sort[0]': 'createdAt:desc',
    '[populate][image]': '*',
    '[populate][members][populate][avatar]': '*',
    '[populate][author][populate][avatar]': '*',
    '[pagination][page]': '1',
    '[pagination][pageSize]': '6',
  });

  const { data, error } = await apiClient.get<NFTsResponse>(
    `${API_ENTITY.NFTS}?${searchParams.toString()}`,
    { cache: 'no-store' },
  );

  return { data: data?.data || [], error };
};

export const getNFTsHistory = async () => {
  const searchParams = new URLSearchParams({
    'sort[0]': 'createdAt:asc',
    '[populate][image]': '*',
    '[populate][members][populate][avatar]': '*',
    '[populate][author][populate][avatar]': '*',
    '[pagination][page]': '1',
    '[pagination][pageSize]': '6',
  });

  const { data, error } = await apiClient.get<NFTsResponse>(
    `${API_ENTITY.NFTS}?${searchParams.toString()}`,
    { cache: 'no-store' },
  );

  return { data: data?.data || [], error };
};
