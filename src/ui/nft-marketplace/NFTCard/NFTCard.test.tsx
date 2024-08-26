import { act, fireEvent, render } from '@testing-library/react';

import NFTCard from '.';

import { MOCK_NFTS } from '@/mocks/nft';

const MOCK_NFT = MOCK_NFTS[0];

describe('NFTCard tests', () => {
  let mockOnLike: jest.Mock;

  beforeEach(() => {
    mockOnLike = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should match snapshot', () => {
    const { container } = render(<NFTCard {...MOCK_NFT} onLike={mockOnLike} />);
    expect(container).toMatchSnapshot();
  });

  it('mockOnLike will triggered and should display overlay to block user action when click Favorite Button ', () => {
    const { getByTestId, queryByTestId } = render(
      <NFTCard {...MOCK_NFT} onLike={mockOnLike} />,
    );
    expect(queryByTestId('nft-overlay')).not.toBeInTheDocument();
    act(() => {
      fireEvent.click(getByTestId('like-btn'));
    });
    expect(mockOnLike).toHaveBeenNthCalledWith(1, MOCK_NFT.id);
    expect(queryByTestId('nft-overlay')).toBeInTheDocument();
  });
});
