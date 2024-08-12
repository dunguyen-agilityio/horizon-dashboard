// Components
import Image from 'next/image';
import Pen from '@/icons/Pen';
import Text from '@/components/Text';
import { Chip } from '@nextui-org/chip';
import Button from '@/components/Button';
import { Avatar, AvatarGroup } from '@nextui-org/avatar';

// Types
import { TEXT_SIZE, TEXT_VARIANT } from '@/types/text';

// Models
import { Task as TaskModel } from '@/models/Task';

// Utils
import { getColorByLabel } from '@/utils/task';

export const Task = ({
  title,
  description,
  labels,
  cover,
  assignees,
}: Pick<
  TaskModel,
  'title' | 'description' | 'labels' | 'cover' | 'assignees'
>) => (
  <div className="flex flex-col gap-[10px] pt-[18px] pl-[23px] pb-[23px] pr-[21px] rounded-[15px] bg-white dark:bg-indigo-light max-w-[466px]">
    <div className="flex justify-between">
      <Text size={TEXT_SIZE.lg} as="h3" className="max-w-[90%]">
        {title}
      </Text>
      <Button size="fit" aria-label="edit-button" className="bg-transparent">
        <Pen />
      </Button>
    </div>
    {cover && (
      <div className="relative min-h-[285px] min-w-[308px]">
        <Image src={cover} alt="cover" fill />
      </div>
    )}
    <Text as="p" variant={TEXT_VARIANT.SECONDARY}>
      {description}
    </Text>
    <div className="flex justify-between mt-5 items-center">
      <AvatarGroup isBordered max={3}>
        {assignees?.map(({ id, avatar, fullName }) => (
          <Avatar
            key={id}
            src={avatar}
            ImgComponent={Image}
            alt={fullName}
            imgProps={{ width: 20, height: 20 }}
            isBordered
          />
        ))}
      </AvatarGroup>
      <Chip
        color={getColorByLabel(labels[0])}
        className="text-white uppercase text-xs leading-[15px] rounded-[10px] py-[6.5px] px-[25px]"
      >
        {labels[0]}
      </Chip>
    </div>
  </div>
);
