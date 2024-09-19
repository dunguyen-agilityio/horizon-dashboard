// Types
import { StrapiModel, StrapiResponse } from './strapi';

// Models
import { Role, User } from '@/models/User';
import { NFTResponse } from '@/models/NFT';
import { TImage } from '@/models/Image';

export type UserResponse = Omit<User, 'avatar' | 'role'> & {
  join_nfts: StrapiModel<StrapiResponse<NFTResponse>[]>;
  avatar?: StrapiModel<StrapiResponse<TImage>>;
  role: StrapiResponse<Role>;
};

export type ContributorResponse = { id: string } & {
  users_permissions_user: StrapiModel<StrapiResponse<UserResponse>>;
};

export type ContributorData = Omit<User, 'avatar'> & {
  avatar?: TImage;
  template: string;
};
