// Components
import {
  GeneralInformation,
  PersonalProject,
  Storage,
  Upload,
  UserInfo,
  ControlBoard,
} from '@/ui/profile';

// Constants
import { MOCK_USERS } from '@/mocks/user';

const ProfilePage = () => {
  return (
    <div className="mx-auto max-w-[1610px]">
      <div className="grid grid-cols-12 grid-rows-2 2xl:grid-rows-1 gap-5 mb-5">
        <div className="col-span-12 2xl:col-span-4">
          <UserInfo
            role="Design NFT"
            userName={MOCK_USERS[0].userName}
            avatar={MOCK_USERS[1].avatar}
            followersCount={33}
            followingCount={90}
            postsTotal={20}
          />
        </div>
        <div className="col-span-12 lg:col-span-4 xl:col-span-6 2xl:col-span-3">
          <Storage totalSize={20} usedSize={10} valueProgress={50} />
        </div>
        <div className="col-span-12 lg:col-span-8 xl:col-span-6 2xl:col-span-5">
          <Upload />
        </div>
      </div>
      <div className="grid grid-cols-12 grid-rows-1 gap-5">
        <div className="col-span-12 lg:col-span-12 xl:col-span-12 2xl:col-span-4">
          <div className="flex h-full justify-center items-center">
            <PersonalProject />
          </div>
        </div>
        <div className="col-span-12 lg:col-span-8 xl:col-span-8 2xl:col-span-5">
          <GeneralInformation />
        </div>
        <div className="col-span-12 lg:col-span-4 2xl:col-span-3">
          <ControlBoard />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
