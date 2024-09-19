import { render } from '@testing-library/react';

import CourseCTA from './CourseCTA';

// Mocks
import { MOCK_USERS } from '@/mocks/user';

describe('TableCheck tests', () => {
  it('Should match snapshot', () => {
    const { container } = render(<CourseCTA members={MOCK_USERS} />);
    expect(container).toMatchSnapshot();
  });
});
