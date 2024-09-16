import { useEffect, useMemo } from 'react';
import { useForm, Controller } from 'react-hook-form';

// Components
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Textarea,
  Select,
  SelectItem,
  DatePicker,
  SharedSelection,
} from '@nextui-org/react';

import { parseAbsoluteToLocal } from '@internationalized/date';

import { BoxIcon, Text } from '@/components';

// hooks
import { useTask } from '@/hooks/useTask';

// Types
import { DateTimeParts } from '@/types/date';

// Models
import { LABEL, STATUS } from '@/models/Task';
import { User } from '@/models/User';

// Mocks
import { Note } from '@/icons';
import { MOCK_USERS } from '@/mocks/user';

// utils
import { convertToUTCString } from '@/utils/format';
import { getUpdatedAssignMembers } from '@/utils/task';

interface IEditTaskModalProps {
  id: string;
  isOpen: boolean;
  title: string;
  description: string;
  status: STATUS;
  labels?: LABEL[];
  assignMembers?: User[];
  startDateTask: string;
  dueDateTask: string;
  onOpenChange: () => void;
  onClose: () => void;
}

const labelValues = [
  { value: 'Pending' },
  { value: 'Done' },
  { value: 'Errors' },
  { value: 'Updates' },
];

const selectStyle = {
  base: 'bg-white dark:bg-indigo',
  label: 'group-data-[filled=true]:text-secondary',
  listbox: 'text-primary dark:text-secondary',
  value:
    'group-data-[has-value=true]:text-primary group-data-[has-value=true]:dark:text-white',
  listboxWrapper: 'bg-white dark:bg-indigo',
  popoverContent: 'bg-white dark:bg-indigo',
};

interface IEditTaskProps {
  title: string;
  description: string;
  selectedMembers: string[];
  selectedLabels: LABEL[];
  startDate: DateTimeParts | null;
  dueDate: DateTimeParts | null;
}

export const EditTaskModal = ({
  id,
  isOpen,
  title,
  description,
  status,
  labels = [],
  assignMembers = [],
  onOpenChange,
  onClose,
  startDateTask,
  dueDateTask,
}: IEditTaskModalProps) => {
  const initialValue = useMemo(
    () => ({
      title: title || '',
      description: description || '',
      startDate: startDateTask ? parseAbsoluteToLocal(startDateTask) : null,
      dueDate: dueDateTask ? parseAbsoluteToLocal(dueDateTask) : null,
      selectedLabels: labels.map((label) => label),
      selectedMembers: assignMembers.map((user) => user.userName),
    }),
    [title, description, startDateTask, dueDateTask, labels, assignMembers],
  );

  const { control, handleSubmit, reset, formState } = useForm({
    defaultValues: initialValue,
  });

  useEffect(() => {
    if (isOpen) {
      reset(initialValue);
    }
  }, [initialValue, isOpen, reset]);

  const handleLabelChange = (
    keys: SharedSelection,
    onChange: (value: LABEL[]) => void,
  ) => {
    const selected = Array.from(keys).map((key) => key as LABEL);
    onChange(selected);
  };

  const handleMembersChange = (
    keys: SharedSelection,
    onChange: (value: string[]) => void,
  ) => {
    const selected = Array.from(keys).map((key) => key as string);
    onChange(selected);
  };

  const { updateTask } = useTask(status);

  const onSubmit = async (editTask: IEditTaskProps) => {
    const {
      title,
      description,
      selectedLabels,
      startDate,
      dueDate,
      selectedMembers,
    } = editTask;
    const updatedAssignMembers = getUpdatedAssignMembers(
      selectedMembers,
    ) as User[];

    await updateTask(
      id,
      title,
      description,
      selectedLabels,
      updatedAssignMembers,
      convertToUTCString(startDate),
      convertToUTCString(dueDate),
    );
    onClose();
  };

  return (
    <Modal
      size="3xl"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      placement="center"
      classNames={{
        base: 'bg-white dark:bg-indigo p-4 min-h-[480px] m-2',
        closeButton: 'm-3 p-3',
      }}
    >
      <ModalContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalHeader className="flex flex-col gap-1">
            <Controller
              name="title"
              control={control}
              render={({ field }) => (
                <Input
                  className="bg-transparent w-5/6"
                  classNames={{
                    input:
                      'text-lg font-[700] group-data-[has-value=true]:text-primary group-data-[has-value=true]:dark:text-white group-data-[has-value=true]:shadow-none ',
                    inputWrapper: 'bg-transparent shadow-none',
                  }}
                  type="text"
                  as="h2"
                  {...field}
                />
              )}
            />
          </ModalHeader>
          <ModalBody>
            <div className="flex flex-col justify-between lg:flex-row gap-4">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <Text className="font-bold">Description</Text>
                  <BoxIcon icon={<Note />} customClass="fill-secondary" />
                </div>
                <Controller
                  name="description"
                  control={control}
                  render={({ field }) => (
                    <Textarea
                      data-testid="textarea-description"
                      rows={9}
                      aria-label="textarea-description"
                      disableAutosize
                      classNames={{
                        inputWrapper: 'w-full lg:w-[400px]',
                        input:
                          'group-data-[has-value=true]:text-primary group-data-[has-value=true]:dark:text-white',
                      }}
                      {...field}
                    />
                  )}
                />
              </div>
              <div className="flex flex-row flex-wrap md:flex-nowrap md:flex-col lg:flex-col gap-2 items-center justify-center min-w-[250px]">
                <Controller
                  name="selectedLabels"
                  control={control}
                  render={({ field }) => (
                    <Select
                      aria-label="select-label"
                      label="Label"
                      selectedKeys={field.value}
                      onSelectionChange={(key: SharedSelection) =>
                        handleLabelChange(key, field.onChange)
                      }
                      classNames={selectStyle}
                    >
                      {labelValues.map((label) => (
                        <SelectItem key={label.value}>{label.value}</SelectItem>
                      ))}
                    </Select>
                  )}
                />
                <Controller
                  name="selectedMembers"
                  control={control}
                  render={({ field }) => (
                    <Select
                      aria-label="select-members"
                      label="Assign members"
                      selectionMode="multiple"
                      selectedKeys={field.value}
                      onSelectionChange={(key: SharedSelection) =>
                        handleMembersChange(key, field.onChange)
                      }
                      classNames={selectStyle}
                    >
                      {MOCK_USERS.map(({ userName }) => (
                        <SelectItem key={userName}>{userName}</SelectItem>
                      ))}
                    </Select>
                  )}
                />
                <Controller
                  name="startDate"
                  control={control}
                  render={({ field }) => (
                    <DatePicker
                      aria-label="start-date-picker"
                      label="Start date"
                      hideTimeZone
                      granularity="second"
                      showMonthAndYearPickers
                      value={field.value}
                      onChange={field.onChange}
                    />
                  )}
                />
                <Controller
                  name="dueDate"
                  control={control}
                  render={({ field }) => (
                    <DatePicker
                      aria-label="due-date-picker"
                      label="Due date"
                      granularity="second"
                      showMonthAndYearPickers
                      value={field.value}
                      onChange={field.onChange}
                    />
                  )}
                />
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              type="submit"
              isDisabled={!formState.isValid}
            >
              Update
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default EditTaskModal;
