import { render } from '@testing-library/react';
import { histories } from '@/mocks/histories';

import NFTHistory from '.';

describe('NTFHistory', () => {
  it('should match snapshot', () => {
    const { container } = render(<NFTHistory historyList={histories} />);
    expect(container).toMatchSnapshot();
  });

  it('should render correct title', () => {
    const { getByText } = render(<NFTHistory historyList={histories} />);
    expect(getByText('History')).toBeInTheDocument();
  });
});
