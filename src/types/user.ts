// Model
import { User } from '@/models/User';

// Types
import { IAvatarData } from '@/types/avatar';

export interface IUserResponse {
  id: string;
  attributes: Omit<User, 'id'> & {
    avatar: IAvatarData;
  };
}
