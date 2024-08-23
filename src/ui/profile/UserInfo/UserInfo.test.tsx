import { render } from '@testing-library/react';

// Components
import UserInfo from '.';

// Mocks
import { MOCK_USERS } from '@/mocks/user';

const { avatar, userName, role, postsTotal, followers, following } =
  MOCK_USERS[0];

describe('UserInfo component', () => {
  it('UserInfo should render match snapshot', () => {
    const { container } = render(
      <UserInfo
        avatar={avatar}
        userName={userName}
        role={role}
        postsTotal={postsTotal}
        followers={followers}
        following={following}
      />,
    );
    expect(container).toMatchSnapshot();
  });

  it('UserInfo should render correct alt and avatar user', () => {
    const { getByAltText } = render(
      <UserInfo
        avatar={avatar}
        userName={userName}
        role={role}
        postsTotal={postsTotal}
        followers={followers}
        following={following}
      />,
    );

    const avatarUser = getByAltText('avatar-user');
    expect(avatarUser).toBeInTheDocument();
  });

  it('UserInfo should render correct user information', () => {
    const { getByText } = render(
      <UserInfo
        avatar={avatar}
        userName={userName}
        role={role}
        postsTotal={postsTotal}
        followers={followers}
        following={following}
      />,
    );

    expect(getByText(userName)).toBeInTheDocument();
  });
});
