import dynamic from 'next/dynamic';
import { useMemo } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { parseAbsoluteToLocal, ZonedDateTime } from '@internationalized/date';
import {
  EditorState,
  convertToRaw,
  convertFromRaw,
  RawDraftContentState,
} from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

// Components
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Select,
  SelectItem,
  DatePicker,
  SharedSelection,
} from '@nextui-org/react';

import { BoxIcon, Text } from '@/components';

// hooks
import { useTask } from '@/hooks/useTask';
import useToast from '@/contexts/toast';

// Types
import { DateTimeParts } from '@/types/date';
import { TEXT_SIZE } from '@/types/text';

// Models
import { LABEL, STATUS } from '@/models/Task';
import { TUser, User } from '@/models/User';

// Mocks
import { Note } from '@/icons';
import { MOCK_USERS } from '@/mocks/user';
import { UPDATE_DUE_DATE_ERROR, UPDATE_START_DATE_ERROR } from '@/mocks/toast';

// utils
import { convertToUTCString } from '@/utils/format';
import { getUpdatedAssignMembers } from '@/utils/task';
import { validateDates } from '@/utils/validation';

interface IEditTaskModalProps {
  id: string;
  isOpen: boolean;
  title: string;
  status: STATUS;
  description?: RawDraftContentState;
  labels?: LABEL[];
  assignMembers?: TUser[];
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

const statusValues = [
  { value: 'backlog' },
  { value: 'in-progress' },
  { value: 'done' },
];

const selectStyle = {
  base: 'bg-white dark:bg-indigo',
  label:
    'group-data-[filled=true]:dark:text-white group-data-[filled=true]:text-primary',
  listbox: 'text-primary dark:text-secondary',
  value:
    'group-data-[has-value=true]:text-primary group-data-[has-value=true]:dark:text-white capitalize',
  listboxWrapper: 'bg-white dark:bg-indigo',
  popoverContent: 'bg-white dark:bg-indigo',
};

interface IEditTaskProps {
  title: string;
  status: STATUS[];
  description?: EditorState;
  selectedMembers: string[];
  selectedLabels: LABEL[];
  startDate: DateTimeParts | null;
  dueDate: DateTimeParts | null;
}

const Editor = dynamic(
  () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
  {
    ssr: false,
  },
);

export const EditTaskModal = ({
  id,
  isOpen,
  title,
  status,
  description,
  labels = [],
  assignMembers = [],
  onOpenChange,
  onClose,
  startDateTask,
  dueDateTask,
}: IEditTaskModalProps) => {
  const editorState = description
    ? EditorState.createWithContent(convertFromRaw(description))
    : EditorState.createEmpty();

  const initialValue = useMemo(
    () => ({
      title: title || '',
      status: [status],
      description: editorState,
      startDate: startDateTask ? parseAbsoluteToLocal(startDateTask) : null,
      dueDate: dueDateTask ? parseAbsoluteToLocal(dueDateTask) : null,
      selectedLabels: labels.map((label) => label),
      selectedMembers: assignMembers.map(({ username }) => username),
    }),
    [
      title,
      status,
      editorState,
      startDateTask,
      dueDateTask,
      labels,
      assignMembers,
    ],
  );

  const { showToast } = useToast();

  const { control, handleSubmit, reset, formState, getValues } = useForm({
    defaultValues: initialValue,
  });

  const handleLabelChange = (
    keys: SharedSelection,
    onChange: (value: LABEL[]) => void,
  ) => {
    const selected = Array.from(keys).map((key) => key as LABEL);
    onChange(selected);
  };

  const handleStatusChange = (
    keys: SharedSelection,
    onChange: (value: STATUS[]) => void,
  ) => {
    const selected = Array.from(keys).map((key) => key as STATUS);
    onChange(selected);
  };

  const handleMembersChange = (
    keys: SharedSelection,
    onChange: (value: string[]) => void,
  ) => {
    const selected = Array.from(keys).map((key) => key as string);
    onChange(selected);
  };

  const { updateTask, removeTask } = useTask(status);

  const onSubmit = async (editTask: IEditTaskProps) => {
    const {
      title,
      status,
      description,
      selectedLabels,
      startDate,
      dueDate,
      selectedMembers,
    } = editTask;
    const updatedAssignMembers = getUpdatedAssignMembers(
      selectedMembers,
    ) as User[];

    const descriptionEditor = description
      ? convertToRaw(description.getCurrentContent())
      : null;

    await updateTask(
      id,
      title,
      status[0],
      descriptionEditor,
      selectedLabels,
      updatedAssignMembers,
      convertToUTCString(startDate),
      convertToUTCString(dueDate),
    );
    onClose();
  };

  const handleDelete = () => {
    removeTask(id);
    onClose();
  };

  const handleOnClose = () => {
    reset(initialValue);
    onClose();
  };

  const handleChangeStartDate = (
    date: ZonedDateTime,
    onChange: (value: ZonedDateTime | null) => void,
  ) => {
    if (!validateDates(date, getValues('dueDate'))) {
      showToast(UPDATE_START_DATE_ERROR);
      return onChange(null);
    }
    return onChange(date);
  };

  const handleChangeDueDate = (
    date: ZonedDateTime,
    onChange: (value: ZonedDateTime | null) => void,
  ) => {
    if (!validateDates(getValues('startDate'), date)) {
      showToast(UPDATE_DUE_DATE_ERROR);
      return onChange(null);
    }
    return onChange(date);
  };

  return (
    <Modal
      size="3xl"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      onClose={handleOnClose}
      placement="center"
      scrollBehavior="outside"
      classNames={{
        base: 'bg-white dark:bg-indigo pt-4 pb-4 min-h-[480px] m-2',
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
            <div className="flex flex-col justify-between lg:flex-row gap-4 px-3">
              <div className="flex flex-col gap-4 w-full">
                <div className="flex items-center gap-2">
                  <Text className="font-bold">Description</Text>
                  <BoxIcon icon={<Note />} customClass="fill-secondary" />
                </div>
                <div className="bg-gray dark:bg-indigo-light rounded-md editor-container w-[300px]  ">
                  <Controller
                    name="description"
                    control={control}
                    render={({ field }) => (
                      <Editor
                        toolbarClassName="editor-toolbar"
                        editorClassName="editor-description"
                        editorState={field.value}
                        onEditorStateChange={(editorState) => {
                          // setDescriptionEditorState(editorState);
                          field.onChange(editorState);
                        }}
                        toolbar={{
                          options: ['inline', 'history'],
                          inline: {
                            options: [
                              'bold',
                              'italic',
                              'underline',
                              'strikethrough',
                            ],
                          },
                          list: { options: ['unordered', 'ordered'] },
                        }}
                        placeholder="Write something here..."
                      />
                    )}
                  />
                </div>
              </div>
              <div>
                <div className="flex flex-row flex-wrap md:flex-nowrap md:flex-col lg:flex-col gap-2 md:justify-center min-w-[250px]">
                  <Text size={TEXT_SIZE.md} className="font-bold pb-1">
                    Add to card
                  </Text>
                  <Controller
                    name="status"
                    control={control}
                    render={({ field }) => (
                      <Select
                        aria-label="select-status"
                        label="Status"
                        defaultSelectedKeys={field.value}
                        selectedKeys={field.value}
                        onSelectionChange={(key: SharedSelection) =>
                          handleStatusChange(key, field.onChange)
                        }
                        classNames={selectStyle}
                      >
                        {statusValues.map((status) => (
                          <SelectItem key={status.value} className="capitalize">
                            {status.value}
                          </SelectItem>
                        ))}
                      </Select>
                    )}
                  />
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
                          <SelectItem key={label.value}>
                            {label.value}
                          </SelectItem>
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
                        {MOCK_USERS.map(({ username }) => (
                          <SelectItem key={username}>{username}</SelectItem>
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
                        showMonthAndYearPickers
                        granularity="minute"
                        value={field.value}
                        onChange={(date) =>
                          handleChangeStartDate(date, field.onChange)
                        }
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
                        showMonthAndYearPickers
                        hideTimeZone
                        granularity="minute"
                        value={field.value}
                        onChange={(date) =>
                          handleChangeDueDate(date, field.onChange)
                        }
                      />
                    )}
                  />
                </div>

                <div className="flex flex-col mt-4">
                  <Text size={TEXT_SIZE.md} className="font-bold pb-2">
                    Actions
                  </Text>
                  <Button
                    onClick={handleDelete}
                    className="w-full justify-start bg-red-750 text-white pl-3 pr-3"
                  >
                    Remove task
                  </Button>
                </div>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              type="submit"
              isDisabled={!formState.isDirty}
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
