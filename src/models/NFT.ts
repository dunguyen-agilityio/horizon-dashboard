import { User } from './User';

export class NFT {
  id!: string;
  name!: string;
  author!: User;
  members!: User[];
  price!: number;

  constructor(nft: NFT) {
    Object.assign(this, nft);
  }
}
