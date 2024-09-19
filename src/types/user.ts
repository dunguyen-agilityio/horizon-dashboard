// Model
import { User } from '@/models/User';

// Types
import { IAvatarResponse } from '@/types/avatar';
import { INFTResponse } from '@/types/nft';

export interface IUserResponse {
  id: string;
  attributes: Omit<User, 'id'> & {
    avatar: IAvatarResponse;
    join_nfts: {
      data: INFTResponse[];
    };
  };
}
