import { UserExtend } from '@/types/user';
import { apiClient } from './api';
import { API_ENTITY } from '@/constants';

export const getTeamMember = () =>
  apiClient.get<UserExtend[]>(
    `${API_ENTITY.USERS}?limit=3&populate[0]=avatar&populate[1]=role`,
  );
