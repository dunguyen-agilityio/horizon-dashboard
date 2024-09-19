import { render, screen } from '@testing-library/react';

// Mocks
import { MOCK_NFTS_RESPONSE } from '@/mocks/nft';

import NFTTrending from '.';
import { formatNFTResponse } from '@/utils/nft';

describe('NFTTrending', () => {
  it('should match snapshot', () => {
    const container = render(<NFTTrending trends={MOCK_NFTS_RESPONSE} />);
    expect(container).toMatchSnapshot();
  });

  it('should render correct title', () => {
    const { getByText } = render(<NFTTrending trends={MOCK_NFTS_RESPONSE} />);
    expect(getByText('Trending NFTs')).toBeInTheDocument();
  });

  it('should render the correct number of NFT cards', () => {
    render(<NFTTrending trends={MOCK_NFTS_RESPONSE} />);

    const nftCards = MOCK_NFTS_RESPONSE.map(() =>
      screen.getByTestId('nft-card'),
    );
    expect(nftCards).toHaveLength(MOCK_NFTS_RESPONSE.length);
  });

  it('should render each NFT card with the correct name', () => {
    const [MOCK_NFT_RESPONSE] = MOCK_NFTS_RESPONSE;
    render(<NFTTrending trends={MOCK_NFTS_RESPONSE} />);

    const { author, name } = formatNFTResponse(MOCK_NFT_RESPONSE);

    expect(screen.getByText(name)).toBeInTheDocument();
    expect(screen.getByText(`By ${author.fullName}`)).toBeInTheDocument();
  });
});
