// Components
import Image from 'next/image';
import { CourseLabel } from './CourseLabel';
import { Avatar, AvatarGroup } from '@nextui-org/avatar';
import { Button, Text } from '@/components';

// Icons
import Timer from '@/icons/Timer';
import Video from '@/icons/Video';
import FireIcon from '@/icons/Fire';

// Mocks
import { MOCK_USERS } from '@/mocks/user';

// Types
import { TEXT_SIZE, TEXT_VARIANT } from '@/types/text';

const CourseCTA = () => (
  <div className="flex flex-col w-full h-full sm:w-card md:w-auto rounded-md bg-white dark:bg-indigo">
    <div className="px-2 sm:px-[26px] pt-[27px] pb-[30px]">
      <div className="flex gap-3 items-center">
        <Avatar
          icon={<FireIcon />}
          classNames={{
            base: 'bg-red-50 dark:bg-indigo-light rounded-[15px] p-[10px] h-12 w-12',
          }}
        />
        <div>
          <Text
            as="span"
            variant={TEXT_VARIANT.SECONDARY}
            className="text-tiny font-bold !leading-5 block"
          >
            Business Design
          </Text>
          <Text as="b" size={TEXT_SIZE.md} className="font-bold">
            New lesson is available
          </Text>
        </div>
      </div>
      <Text as="h2" className="text-[20px] font-bold leading-xl pt-[38px]">
        What do you need to know to create better products?
      </Text>
    </div>
    <div className="flex-1 bg-grayest dark:bg-indigo-light px-2 sm:px-[26px] pt-4 rounded-b-md">
      <div className="flex gap-[26px]">
        <CourseLabel icon={<Timer />} label="85 Mins" />
        <CourseLabel icon={<Video />} label="Video format" />
      </div>
      <div className="flex justify-between pt-10">
        <AvatarGroup
          isBordered
          max={3}
          className="[&>span]:w-[30px] [&>span]:h-[30px]"
        >
          {MOCK_USERS?.map(({ id, avatar, fullName }) => (
            <Avatar
              key={id}
              src={avatar}
              ImgComponent={Image}
              alt={fullName}
              imgProps={{ width: 30, height: 30 }}
              isBordered
            />
          ))}
        </AvatarGroup>
        <Button
          color="primary"
          disabled
          className="text-sm font-bold disabled:opacity-70 disabled:cursor-not-allowed dark:bg-purple-750"
        >
          Get started
        </Button>
      </div>
    </div>
  </div>
);

export default CourseCTA;
