// Models
import { TUser, User } from '@/models/User';

// Services
import { apiClient } from './api';

// Constants
import { API_ENTITY } from '@/constants';

export const getTeamMember = () =>
  apiClient.get<TUser[]>(
    `${API_ENTITY.USERS}?limit=3&populate[0]=avatar&populate[1]=role`,
  );

export const getUserInfo = async (): Promise<User | null> => {
  const response = await apiClient.get<User>(
    `${API_ENTITY.USERS}/me?populate=*`,
    { next: { revalidate: 5000, tags: ['userInfo'] } },
  );
  return response?.data;
};
