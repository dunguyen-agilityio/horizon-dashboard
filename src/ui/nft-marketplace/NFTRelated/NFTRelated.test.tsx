import { render, screen } from '@testing-library/react';

// Mocks
import { MOCK_NFTS_RESPONSE } from '@/mocks/nft';

// Components
import NTFRelated from './NTFRelated';

// Utils
import { formatNFTResponse } from '@/utils/nft';

describe('NFTRelated', () => {
  it('should match snapshot', () => {
    const container = render(<NTFRelated relatedList={MOCK_NFTS_RESPONSE} />);
    expect(container).toMatchSnapshot();
  });

  it('should render correct title', () => {
    const { getByText } = render(
      <NTFRelated relatedList={MOCK_NFTS_RESPONSE} />,
    );
    expect(getByText('NFTs Related')).toBeInTheDocument();
  });

  it('should render the correct number of NFT cards', () => {
    render(<NTFRelated relatedList={MOCK_NFTS_RESPONSE} />);

    const nftCards = MOCK_NFTS_RESPONSE.map(() =>
      screen.getByTestId('nft-card'),
    );
    expect(nftCards).toHaveLength(MOCK_NFTS_RESPONSE.length);
  });

  it('should render each NFT card with the correct name', () => {
    render(<NTFRelated relatedList={MOCK_NFTS_RESPONSE} />);

    const { name, author } = formatNFTResponse(MOCK_NFTS_RESPONSE[0]);

    expect(screen.getByText(name)).toBeInTheDocument();
    expect(screen.getByText(`By ${author.fullName}`)).toBeInTheDocument();
  });
});
