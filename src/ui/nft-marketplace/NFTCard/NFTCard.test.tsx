import { render } from '@testing-library/react';

import NFTCard from '.';

import { MOCK_NFTS } from '@/mocks/nft';

const MOCK_NFT = MOCK_NFTS[0];

describe('NFTCard tests', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should match snapshot', () => {
    const { container } = render(<NFTCard {...MOCK_NFT} />);
    expect(container).toMatchSnapshot();
  });
});
