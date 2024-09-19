import { render } from '@testing-library/react';

import NFTCard from '.';

import { MOCK_NFTS_RESPONSE } from '@/mocks/nft';
import { formatNFTResponse } from '@/utils/nft';

const MOCK_NFT = MOCK_NFTS_RESPONSE[0];

describe('NFTCard tests', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should match snapshot', () => {
    const { container } = render(<NFTCard {...formatNFTResponse(MOCK_NFT)} />);
    expect(container).toMatchSnapshot();
  });
});
