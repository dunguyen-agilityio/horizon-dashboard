import { render } from '@testing-library/react';

// Component
import NFTFavorites from '.';

// Mocks
import { MOCK_NFTS } from '@/mocks/nft';
import { formatUser } from '@/utils/user';

describe('NTFFavorites', () => {
  it('should match snapshot', () => {
    const container = render(<NFTFavorites listFavorites={MOCK_NFTS} />);
    expect(container).toMatchSnapshot();
  });

  it('should render correct info of NFT card', () => {
    const { name, author } = MOCK_NFTS[0];
    const { getByText } = render(<NFTFavorites listFavorites={MOCK_NFTS} />);
    expect(getByText(name)).toBeInTheDocument();
    expect(getByText(`By ${formatUser(author).fullName}`)).toBeInTheDocument();
  });

  it('should render the correct number of NFT cards', () => {
    const { getAllByTestId } = render(
      <NFTFavorites listFavorites={MOCK_NFTS} />,
    );

    const nftCards = getAllByTestId('nft-card');
    expect(nftCards).toHaveLength(MOCK_NFTS.length);
  });
});
