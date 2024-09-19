// Models
import { TUser } from '@/models/User';

// Services
import { apiClient } from './api';

// Constants
import { API_ENTITY } from '@/constants';

export const getTeamMember = () =>
  apiClient.get<TUser[]>(
    `${API_ENTITY.USERS}?limit=3&populate[0]=avatar&populate[1]=role`,
  );
