import { render } from '@testing-library/react';

// Component
import NFTFavorites from '.';

// Mocks
import { MOCK_NFTS_RESPONSE } from '@/mocks/nft';
import { formatNFTResponse } from '@/utils/nft';

describe('NTFFavorites', () => {
  it('should match snapshot', () => {
    const container = render(
      <NFTFavorites
        listFavorites={MOCK_NFTS_RESPONSE}
        pageSize={5}
        activePage={1}
      />,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render correct info of NFT card', () => {
    const { name, author } = formatNFTResponse(MOCK_NFTS_RESPONSE[0]);
    const { getByText } = render(
      <NFTFavorites
        listFavorites={MOCK_NFTS_RESPONSE}
        pageSize={5}
        activePage={1}
      />,
    );
    expect(getByText(name)).toBeInTheDocument();
    expect(getByText(`By ${author.fullName}`)).toBeInTheDocument();
  });

  it('should render the correct number of NFT cards', () => {
    const { getAllByTestId } = render(
      <NFTFavorites
        listFavorites={MOCK_NFTS_RESPONSE}
        pageSize={5}
        activePage={1}
      />,
    );

    const nftCards = getAllByTestId('nft-card');
    expect(nftCards).toHaveLength(MOCK_NFTS_RESPONSE.length);
  });
});
