// Models
import { Contributor, ContributorData } from '@/models/Contributor';

// Types
import { IUserResponse } from '@/types/user';
import { IContributorData } from '@/types/contributor';

export const formatContributorData = (data: ContributorData) => {
  const { join_nfts, ...rest } = data;

  if (!join_nfts || !join_nfts.data || join_nfts.data.length === 0) {
    // Check if user haven't NFT
    return [new Contributor(rest)];
  }

  return join_nfts.data.map(
    (nft) =>
      new Contributor({
        ...rest,
        id: `${rest.id}-${nft.id}`,
        template: nft?.attributes?.name,
      }),
  );
};

/**
 * Maps the user's NFT data to the ContributorData format.
 *
 * @param {INFTResponse[]} nftsData - Array of NFT data associated with the user.
 * @param {IUserResponse} user - User information that includes attributes like name, avatar, and other data.
 * @param {Date} createdAtContributor - Data create at contributor.
 * @returns {ContributorData[]} - Array of ContributorData objects, one for each NFT, or a single object if the user has no NFTs.
 */

export const mapUserNFTsToContributorData = (
  user: IUserResponse,
  createdAtContributor?: Date,
): ContributorData[] => {
  if (!user) {
    return [];
  }

  const { id, attributes } = user;

  return attributes.join_nfts?.data?.length
    ? attributes.join_nfts?.data.map((nft) => ({
        id: `${nft.id}${id}`, // Unique ID by combining nft ID and user ID
        ...attributes,
        template: '',
        createdAt: createdAtContributor || attributes.createdAt,
        avatar: attributes.avatar.data?.attributes.url ?? '',
        join_nfts: { data: [nft] },
      }))
    : [
        {
          id,
          ...attributes,
          template: '',
          createdAt: createdAtContributor || attributes.createdAt,
          avatar: attributes.avatar.data?.attributes.url ?? '',
        },
      ];
};

/**
 * Maps multiple contributors data, including users and NFTs.
 *
 * @param {IContributorData[]} dataContributor - Array of contributors' data, which includes NFT and user information.
 * @returns {ContributorData[]} - Array of formatted ContributorData objects for all contributors.
 */

export const mapContributorsData = (
  dataContributor: IContributorData[],
): ContributorData[] =>
  dataContributor.flatMap(({ attributes }) => {
    const {
      createdAt,
      users_permissions_user: { data: user },
    } = attributes;
    return mapUserNFTsToContributorData(user, createdAt);
  });
