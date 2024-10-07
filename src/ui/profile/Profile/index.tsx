'use client';
// Components
import {
  GeneralInformation,
  PersonalProject,
  Storage,
  Upload,
  UserInfo,
  ControlBoard,
  EditUserInfo,
} from '@/ui/profile';

// Constants
import { MOCK_USERS } from '@/mocks/user';

import Button from '@/components/Button/index';
import { useDisclosure } from '@nextui-org/react';

interface IProfile {
  id: string;
  userName: string;
  avatar: string;
  phoneNumber: string;
}

const Profile = ({ id, userName, avatar, phoneNumber }: IProfile) => {
  const { isOpen: openEditModal, onOpenChange, onClose } = useDisclosure();
  const { role } = MOCK_USERS[0];

  return (
    <>
      <EditUserInfo
        isOpen={openEditModal}
        fullName={userName}
        phoneNumber={phoneNumber}
        avatar={avatar}
        onOpenChange={onOpenChange}
        onClose={onClose}
        id={id}
      />
      <div className="flex justify-end">
        <Button
          onPress={onOpenChange}
          className="bg-blue-450 text-white w-full md:w-[200px] dark:bg-purple-750"
        >
          Edit Information
        </Button>
      </div>
      <div className="grid grid-cols-12 grid-rows-2 2xl:grid-rows-1 gap-[30px]">
        <div className="col-span-12 2xl:col-span-4">
          <UserInfo
            role={role}
            username={userName}
            avatar={avatar}
            phoneNumber={phoneNumber}
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
          <div className="flex h-full justify-center items-center xl:items-start">
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
    </>
  );
};

export default Profile;
