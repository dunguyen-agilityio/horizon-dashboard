import { render } from '@testing-library/react';

import PersonalProjects from '.';

describe('PersonalProjects tests', () => {
  it('Should match snapshot', () => {
    const { container } = render(<PersonalProjects userId={3} />);
    expect(container).toMatchSnapshot();
  });
});
