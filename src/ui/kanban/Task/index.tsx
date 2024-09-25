import { useDisclosure } from '@nextui-org/react';

// Components
import Image from 'next/image';
import Pen from '@/icons/Pen';
import Text from '@/components/Text';
import { Chip } from '@nextui-org/chip';
import Button from '@/components/Button';
import { Avatar, AvatarGroup } from '@nextui-org/avatar';
import ImageWithBlur from '@/components/ImageWithBlur';
import EditTaskModal from '@/ui/kanban/EditTaskModal';

// Types
import { TEXT_SIZE, TEXT_VARIANT } from '@/types/text';

// Models
import { Task as TaskModel } from '@/models/Task';

// Utils
import { getColorByLabel } from '@/utils/task';
import { formatUser } from '@/utils/user';

export const Task = ({
  id,
  status,
  title,
  description,
  labels,
  cover,
  assignees,
  startedDate,
  dueDate,
}: TaskModel) => {
  const {
    isOpen: isOpenModalEdit,
    onOpen,
    onOpenChange,
    onClose,
  } = useDisclosure();

  const validStartDate = startedDate ?? '';
  const validDueDate = dueDate ?? '';

  return (
    <>
      <div className="flex flex-col gap-[10px] pt-[18px] pl-[23px] pb-[23px] pr-[21px] rounded-[15px] bg-white shadow-light-card dark:shadow-none dark:bg-indigo-light max-w-[466px]">
        <div className="flex justify-between">
          <Text size={TEXT_SIZE.lg} as="h3" className="max-w-[90%]">
            {title}
          </Text>
          <Button
            size="fit"
            aria-label="edit-button"
            className="bg-transparent"
            onClick={onOpen}
          >
            <Pen />
          </Button>
        </div>
        {cover && (
          <div className="relative min-h-[285px] min-w-[308px]">
            <ImageWithBlur src={cover} alt="cover" fill />
          </div>
        )}
        <Text as="p" variant={TEXT_VARIANT.SECONDARY}>
          {description ? `${description.blocks[0].text}` : ''}
        </Text>
        <div className="flex justify-between mt-5 items-center">
          <AvatarGroup isBordered max={3}>
            {assignees?.map((item) => {
              const { avatar, fullName } = formatUser(item);

              return (
                <Avatar
                  key={id}
                  src={avatar?.url}
                  ImgComponent={Image}
                  alt={fullName}
                  imgProps={{ width: 20, height: 20 }}
                  isBordered
                />
              );
            })}
          </AvatarGroup>
          {!!labels?.length && (
            <Chip
              color={getColorByLabel(labels[0])}
              className="text-white uppercase text-xs leading-[15px] rounded-[10px] py-[6.5px] px-[25px]"
            >
              {labels[0]}
            </Chip>
          )}
        </div>
      </div>
      <EditTaskModal
        title={title}
        labels={labels}
        isOpen={isOpenModalEdit}
        assignMembers={assignees}
        onOpenChange={onOpenChange}
        onClose={onClose}
        id={id}
        status={status}
        startDateTask={validStartDate}
        dueDateTask={validDueDate}
        description={description}
      />
    </>
  );
};
