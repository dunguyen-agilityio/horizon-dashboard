import { render, screen } from '@testing-library/react';

// Mocks
import { MOCK_NFTS } from '@/mocks/nft';

import NTFRecentlyAdd from '.';

describe('NFTRecentlyAdd', () => {
  it('should match snapshot', () => {
    const container = render(<NTFRecentlyAdd recentlyList={MOCK_NFTS} />);
    expect(container).toMatchSnapshot();
  });

  it('should render correct title', () => {
    const { getByText } = render(<NTFRecentlyAdd recentlyList={MOCK_NFTS} />);
    expect(getByText('Recently Added')).toBeInTheDocument();
  });

  it('should render the correct number of NFT cards', () => {
    render(<NTFRecentlyAdd recentlyList={MOCK_NFTS} />);

    const nftCards = MOCK_NFTS.map(() => screen.getByTestId('nft-card'));
    expect(nftCards).toHaveLength(MOCK_NFTS.length);
  });

  it('should render each NFT card with the correct name', () => {
    render(<NTFRecentlyAdd recentlyList={MOCK_NFTS} />);

    expect(screen.getByText('Mesh Gradients')).toBeInTheDocument();
    expect(screen.getByText('By Adela Parkson')).toBeInTheDocument();
  });
});
