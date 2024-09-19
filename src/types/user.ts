// Model
import { TImage } from '@/models/Image';
import { TUser, User } from '@/models/User';

// Types
import { StrapiModel, StrapiResponse } from './strapi';
import { NFT } from '@/models/NFT';

export interface IUserResponse {
  id: string;
  attributes: Omit<User, 'avatar'> & {
    avatar?: StrapiModel<StrapiResponse<TImage>>;
    join_nfts: StrapiModel<StrapiResponse<NFT>[]>;
  };
}

export type Role = { name: string };

export type UserExtend = Omit<TUser, 'avatar' | 'fullName'> & {
  avatar?: TImage;
};
