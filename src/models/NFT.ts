import { StrapiModel, StrapiResponse } from '@/types/strapi';
import { TImage } from './Image';
import { TUser, User } from './User';
import { UserResponse } from '@/types/contributor';

export class NFT {
  id!: string;
  name!: string;
  author!: string;
  members!: string[];
  price!: number;
  image?: string;
  createdAt!: Date;
  description?: string;

  constructor(nft: NFT) {
    Object.assign(this, nft);
  }
}

export type NFTData = Omit<NFT, 'author' | 'members' | 'image'> & {
  author: TUser;
  members: TUser[];
  image: TImage;
};

export type NFTDataExtend = Omit<NFTData, 'author'> & {
  author: User;
};

export type NFTResponse = Omit<NFT, 'author' | 'members' | 'image'> & {
  author: StrapiModel<StrapiResponse<UserResponse>>;
  members: StrapiModel<StrapiResponse<UserResponse>[]>;
  image: StrapiModel<StrapiResponse<TImage> | null>;
};
