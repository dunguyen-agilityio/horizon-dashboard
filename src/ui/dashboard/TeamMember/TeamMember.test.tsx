import { render } from '@testing-library/react';
import TeamMember from './TeamMember';
import { MOCK_USERS } from '@/mocks/user';
import { UserResponse } from '@/models/User';

const MOCK_USERS_RESPONSE: UserResponse[] = MOCK_USERS.map(
  ({ avatar = '', role = '', ...rest }) => ({
    ...rest,
    avatar: { url: avatar },
    role: { name: role },
  }),
);

describe('TeamMembers tests', () => {
  it('Should match snapshot', () => {
    const { container } = render(<TeamMember members={MOCK_USERS_RESPONSE} />);
    expect(container).toMatchSnapshot();
  });
});
