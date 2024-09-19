import { INFTResponse } from '@/types/nft';
import { User } from './User';

export class Contributor extends User {
  template: string;

  constructor(contributor: Contributor) {
    const { template, ...rest } = contributor;
    super(rest);

    this.template = template;
  }
}

export type ContributorData = Omit<Contributor, 'nfts'> & {
  join_nfts: {
    data: INFTResponse[];
  };
};
