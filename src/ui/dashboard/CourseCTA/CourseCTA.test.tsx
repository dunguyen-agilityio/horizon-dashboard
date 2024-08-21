import { render } from '@testing-library/react';

import CourseCTA from '.';

describe('TableCheck tests', () => {
  it('Should match snapshot', () => {
    const { container } = render(<CourseCTA />);
    expect(container).toMatchSnapshot();
  });
});
