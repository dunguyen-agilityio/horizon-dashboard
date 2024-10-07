// Components
import { Profile } from '@/ui/profile';

// Config
import { getUserInfo } from '@/services/user';
import { User } from '@/models/User';

const ProfilePage = async () => {
  const data = await getUserInfo();
  const { id, username, avatar, phoneNumber } = data as User;

  return (
    <Profile
      userName={username}
      avatar={avatar?.url ?? ''}
      phoneNumber={phoneNumber}
      id={id}
    />
  );
};

export default ProfilePage;
