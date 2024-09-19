// Types
import { IMeta } from '@/types/meta';
import { StrapiResponse } from './strapi';
import { ContributorResponse } from '@/models/Contributor';

export interface IContributorsResponse {
  data: StrapiResponse<{
    id: string;
    createdAt: Date;
    users_permissions_user: {
      data: StrapiResponse<ContributorResponse>;
    };
  }>[];
  meta: IMeta;
}

export interface IContributorData {
  id: string;
  attributes: {
    createdAt: Date;
    users_permissions_user: {
      data: StrapiResponse<ContributorResponse>;
    };
  };
}
