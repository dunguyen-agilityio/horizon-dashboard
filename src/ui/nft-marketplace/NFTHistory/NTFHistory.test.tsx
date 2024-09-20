import { render } from '@testing-library/react';

import NFTHistory from './NFTHistory';
import { MOCK_NFTS_RESPONSE } from '@/mocks/nft';

describe('NTFHistory', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <NFTHistory historyList={MOCK_NFTS_RESPONSE} />,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render correct title', () => {
    const { getByText } = render(
      <NFTHistory historyList={MOCK_NFTS_RESPONSE} />,
    );
    expect(getByText('History')).toBeInTheDocument();
  });
});
