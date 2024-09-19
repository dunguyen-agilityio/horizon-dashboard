import { render } from '@testing-library/react';
import TeamMember from './TeamMember';
import { MOCK_USERS } from '@/mocks/user';

describe('TeamMembers tests', () => {
  it('Should match snapshot', () => {
    const { container } = render(<TeamMember members={MOCK_USERS} />);
    expect(container).toMatchSnapshot();
  });
});
