// Components
import Image from 'next/image';
import { Avatar } from '@nextui-org/avatar';
import { Text } from '@/components';

// Mocks
import { MOCK_USERS } from '@/mocks/user';

// Types
import { TEXT_SIZE, TEXT_VARIANT } from '@/types/text';
import { PROFILE_IMAGES } from '@/constants/images';

const { BACKGROUND } = PROFILE_IMAGES;
const { avatar, fullName, userName, role } = MOCK_USERS[0];

const UserInfo = () => (
  <div className="h-[365px] dark:bg-indigo bg-white w-[552px] p-[18px] rounded-md">
    <div className="w-[518px] h-[131px] relative">
      <Image
        src={BACKGROUND}
        alt="background-profile"
        fill
        className="object-cover"
      />
      <div className="absolute top-[85px] left-[215px]">
        <Avatar
          src={avatar}
          ImgComponent={Image}
          alt={fullName}
          imgProps={{ width: 87, height: 87 }}
          className="w-[87px] h-[87px] border-4 dark:border-indigo border-white"
        />
      </div>
    </div>
    <div className="flex flex-col justify-center mt-14">
      <div className="">
        <Text className="text-[20px] text-center font-extrabold">
          {userName}
        </Text>
        <Text
          size={TEXT_SIZE.sm}
          variant={TEXT_VARIANT.SECONDARY}
          className="text-center"
        >
          {role}
        </Text>
      </div>
      <div className="flex justify-center gap-11 mt-[26px]">
        <div className="">
          <Text size={TEXT_SIZE.extra} className="font-extrabold">
            77
          </Text>
          <Text
            size={TEXT_SIZE.sm}
            variant={TEXT_VARIANT.SECONDARY}
            className="text-center"
          >
            Posts
          </Text>
        </div>
        <div className="">
          <Text size={TEXT_SIZE.extra} className="font-extrabold">
            7.9k
          </Text>
          <Text
            size={TEXT_SIZE.sm}
            variant={TEXT_VARIANT.SECONDARY}
            className="text-center"
          >
            Followers
          </Text>
        </div>
        <div className="">
          <Text size={TEXT_SIZE.extra} className="font-extrabold">
            365
          </Text>
          <Text
            size={TEXT_SIZE.sm}
            variant={TEXT_VARIANT.SECONDARY}
            className="text-center"
          >
            Following
          </Text>
        </div>
      </div>
    </div>
  </div>
);

export default UserInfo;
