import { render } from '@testing-library/react';

import SafetyCard from '.';

describe('TableCheck tests', () => {
  it('Should match snapshot', () => {
    const { container } = render(<SafetyCard />);
    expect(container).toMatchSnapshot();
  });
});
