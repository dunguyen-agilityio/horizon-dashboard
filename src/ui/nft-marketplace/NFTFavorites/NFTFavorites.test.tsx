import { render } from '@testing-library/react';

// Component
import NFTFavorites from '.';

// Mocks
import { MOCK_NFTS } from '@/mocks/nft';

describe('NTFFavorites', () => {
  it('should match snapshot', () => {
    const container = render(
      <NFTFavorites listFavorites={MOCK_NFTS} pageSize={5} activePage={1} />,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render correct info of NFT card', () => {
    const { getByText } = render(
      <NFTFavorites listFavorites={MOCK_NFTS} pageSize={5} activePage={1} />,
    );
    expect(getByText('Mesh Gradients')).toBeInTheDocument();
    expect(getByText('By Adela Parkson')).toBeInTheDocument();
  });

  it('should render the correct number of NFT cards', () => {
    const { getAllByTestId } = render(
      <NFTFavorites listFavorites={MOCK_NFTS} pageSize={5} activePage={1} />,
    );

    const nftCards = getAllByTestId('nft-card');
    expect(nftCards).toHaveLength(MOCK_NFTS.length);
  });
});
