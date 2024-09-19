// Models
import { ContributorData, ContributorResponse } from '@/types/contributor';

// Types
import { StrapiResponse } from '@/types/strapi';

// Utils
import { formatUser } from './user';
import { formatStrapiModel } from './strapi';

/**
 * Maps multiple contributors data, including users and NFTs.
 *
 * @param {IContributorData[]} dataContributor - Array of contributors' data, which includes NFT and user information.
 * @returns {ContributorData[]} - Array of formatted ContributorData objects for all contributors.
 */

export const mapContributorsData = ({
  attributes,
}: StrapiResponse<ContributorResponse>): ContributorData[] => {
  const {
    users_permissions_user: { data: user },
  } = attributes;

  const join_nfts = user.attributes.join_nfts?.data || [];

  const { avatar, role, ...contributor } = formatStrapiModel(user);
  const contributorData = formatUser({
    ...contributor,
    avatar: avatar?.data?.attributes,
    role: { name: role?.attributes?.name },
  });

  if (!join_nfts.length) {
    return [{ ...contributorData, template: '' }];
  }

  return join_nfts.map(({ id, attributes }) => {
    return {
      ...contributorData,
      id: `${user.id}-${id}`,
      template: attributes.name,
    };
  });
};
