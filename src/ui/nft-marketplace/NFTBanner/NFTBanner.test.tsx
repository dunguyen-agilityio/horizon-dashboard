import { render } from '@testing-library/react';

import NFTBanner from '.';

describe('NFTBanner tests', () => {
  it('Should match snapshot', () => {
    const { container } = render(<NFTBanner />);
    expect(container).toMatchSnapshot();
  });
});
