import { render } from '@testing-library/react';

// Components
import UserInfo from '.';

// Mocks
import { MOCK_USERS } from '@/mocks/user';

const { userName } = MOCK_USERS[0];

describe('UserInfo component', () => {
  it('UserInfo should render match snapshot', () => {
    const { container } = render(<UserInfo />);
    expect(container).toMatchSnapshot();
  });

  it('UserInfo should render correct alt and avatar user', () => {
    const { getByAltText } = render(<UserInfo />);

    const avatarUser = getByAltText('avatar');
    expect(avatarUser).toBeInTheDocument();
  });

  it('UserInfo should render correct user information', () => {
    const { getByText } = render(<UserInfo />);

    expect(getByText(userName)).toBeInTheDocument();
  });
});
