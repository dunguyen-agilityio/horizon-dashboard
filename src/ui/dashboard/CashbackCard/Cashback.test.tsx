import { render } from '@testing-library/react';

import Cashback from '.';

describe('TableCheck tests', () => {
  it('Should match snapshot', () => {
    const { container } = render(<Cashback />);
    expect(container).toMatchSnapshot();
  });
});
