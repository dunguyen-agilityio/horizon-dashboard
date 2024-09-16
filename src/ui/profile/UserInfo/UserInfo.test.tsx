import { render } from '@testing-library/react';

// Components
import UserInfo from '.';

// Mocks
import { MOCK_USERS } from '@/mocks/user';

const { avatar, username, role } = MOCK_USERS[0];

describe('UserInfo component', () => {
  it('UserInfo should render match snapshot', () => {
    const { container } = render(
      <UserInfo avatar={avatar} username={username} role={role} />,
    );
    expect(container).toMatchSnapshot();
  });

  it('UserInfo should render without avatar props', () => {
    const { container } = render(<UserInfo username={username} role={role} />);
    expect(container).toMatchSnapshot();
  });

  it('UserInfo should render correct alt and avatar user', () => {
    const { getByAltText } = render(
      <UserInfo avatar={avatar} username={username} role={role} />,
    );

    const avatarUser = getByAltText('avatar-user');
    expect(avatarUser).toBeInTheDocument();
  });

  it('UserInfo should render correct user information', () => {
    const { getByText } = render(<UserInfo username={username} role={role} />);

    expect(getByText(username)).toBeInTheDocument();
  });
});
