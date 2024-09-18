// Types
import { INFTResponse } from '@/types/nft';
import { IUserResponse } from '@/types/user';
import { IMeta } from '@/types/meta';

export interface IContributorsResponse {
  data: IContributorData[];
  meta: IMeta;
}

export interface IContributorData {
  id: number;
  attributes: {
    nfts: {
      data: INFTResponse[];
    };
    users_permissions_user: {
      data: IUserResponse;
    };
  };
}
