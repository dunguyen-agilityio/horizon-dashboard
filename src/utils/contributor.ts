import { Contributor, ContributorData } from '@/models/Contributor';

export const formatContributorData = (data: ContributorData) => {
  const { nfts = [], ...rest } = data;

  if (nfts.length === 0) {
    return [new Contributor(rest)];
  }

  return nfts.map(
    ({ name }) =>
      new Contributor({
        ...rest,
        template: name,
      }),
  );
};
