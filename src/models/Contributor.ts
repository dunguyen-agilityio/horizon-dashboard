import { User } from './User';
import { NFT } from './NFT';
import { StrapiModel, StrapiResponse } from '@/types/strapi';
import { TImage } from './Image';

export class Contributor extends User {
  template: string;

  constructor(
    contributor: Partial<Pick<Contributor, 'template'>> &
      Omit<Contributor, 'template'>,
  ) {
    const { template = '', ...rest } = contributor;
    super(rest);

    this.template = template;
  }
}

export type ContributorResponse = Omit<User, 'avatar'> & {
  join_nfts: StrapiModel<StrapiResponse<NFT>[]>;
  avatar?: StrapiModel<StrapiResponse<TImage>>;
};

export type ContributorData = Omit<User, 'avatar'> & {
  avatar?: TImage;
  join_nfts: { data: StrapiResponse<NFT>[] };
};
