import { User } from './User';

export class NFT {
  id!: string;
  name!: string;
  author!: string;
  members!: string[];
  price!: number;
  image?: string;

  constructor(nft: NFT) {
    Object.assign(this, nft);
  }
}

export type NFTData = Omit<NFT, 'author' | 'members'> & {
  author: User;
  members: User[];
};
