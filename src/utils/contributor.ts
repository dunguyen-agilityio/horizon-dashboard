// Models
import { Contributor, ContributorData } from '@/models/Contributor';

// Types
import { INFTResponse } from '@/types/nft';
import { IUserResponse } from '@/types/user';
import { IContributorData } from '@/types/contributor';

export const formatContributorData = (data: ContributorData) => {
  const { nfts = [], ...rest } = data;

  if (nfts.length === 0) {
    return [new Contributor(rest)];
  }

  return nfts.map(
    ({ name, id: nftId }) =>
      new Contributor({
        ...rest,
        id: `${rest.id}-${nftId}`,
        template: name,
      }),
  );
};

/**
 * Maps the user's NFT data to the ContributorData format.
 *
 * @param {INFTResponse[]} nftsData - Array of NFT data associated with the user.
 * @param {IUserResponse} user - User information that includes attributes like name, avatar, and other data.
 * @returns {ContributorData[]} - Array of ContributorData objects, one for each NFT, or a single object if the user has no NFTs.
 */

export const mapUserNFTsToContributorData = (
  nftsData: INFTResponse[],
  user: IUserResponse,
): ContributorData[] => {
  const { id, attributes } = user;

  return nftsData.length
    ? nftsData.map((nft) => ({
        id: `${nft.id}${id}`, // Unique ID by combining nft ID and user ID
        ...attributes,
        template: nft?.attributes.name ?? '',
        avatar: attributes.avatar.data?.attributes.url ?? '',
      }))
    : [
        {
          id,
          ...attributes,
          template: '',
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
): ContributorData[] => {
  return dataContributor.flatMap(({ attributes }) => {
    const {
      nfts: { data: nfts = [] },
      users_permissions_user: { data: users },
    } = attributes;

    return mapUserNFTsToContributorData(nfts, users);
  });
};
