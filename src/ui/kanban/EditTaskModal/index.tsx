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
} from '@nextui-org/react';
import { BoxIcon, Text } from '@/components';

// Types
import { TEXT_SIZE } from '@/types/text';

// Models
import { LABEL } from '@/models/Task';
import { User } from '@/models/User';

// Mocks
import { MOCK_USERS } from '@/mocks/user';
import { Note } from '@/icons';

interface IEditTaskModalProps {
  isOpen: boolean;
  title: string;
  description: string;
  labels?: LABEL[];
  assignMembers?: User[];
  onOpenChange: () => void;
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

export const EditTaskModal = ({
  isOpen,
  title,
  description,
  labels = [],
  assignMembers = [],
  onOpenChange,
}: IEditTaskModalProps) => {
  const defaultSelectedMemberKeys = assignMembers.map((user) => user.userName);
  const defaultSelectedLabelKeys = labels.map((label) => label);

  return (
    <Modal
      size="3xl"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      placement="center"
      classNames={{
        base: 'bg-white dark:bg-indigo',
      }}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              <Text size={TEXT_SIZE.lg} as="h1">
                {title}
              </Text>
            </ModalHeader>
            <ModalBody>
              <div className="flex justify-between">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <Text className="font-bold">Description</Text>
                    <BoxIcon icon={<Note />} customClass="fill-secondary" />
                  </div>
                  <Textarea
                    data-testid="textarea-description"
                    rows={9}
                    aria-label="textarea-description"
                    defaultValue={description}
                    disableAutosize
                    classNames={{
                      inputWrapper: 'w-[185px] sm:w-[450px] lg:w-[500px]',
                      input:
                        'group-data-[has-value=true]:text-primary group-data-[has-value=true]:dark:text-white',
                    }}
                  />
                </div>
                <div className="flex flex-col gap-2 items-center justify-center">
                  <Select
                    aria-label="select-label"
                    label="Label"
                    className="max-w-44"
                    defaultSelectedKeys={defaultSelectedLabelKeys}
                    classNames={selectStyle}
                  >
                    {labelValues.map((label) => (
                      <SelectItem key={label.value}>{label.value}</SelectItem>
                    ))}
                  </Select>
                  <Select
                    aria-label="select-members"
                    label="Assign members"
                    selectionMode="multiple"
                    defaultSelectedKeys={defaultSelectedMemberKeys}
                    className="max-w-44"
                    classNames={selectStyle}
                  >
                    {MOCK_USERS?.map(({ userName }) => (
                      <SelectItem key={userName}>{userName}</SelectItem>
                    ))}
                  </Select>
                  <Input
                    aria-label="input-start-date"
                    type="date"
                    label="Start date"
                    className="max-w-44"
                    classNames={{
                      label: 'group-data-[filled=true]:text-secondary',
                      input:
                        'group-data-[has-value=true]:text-primary group-data-[has-value=true]:dark:text-white',
                      inputWrapper: '',
                    }}
                  />
                  <Input
                    aria-label="input-due-date"
                    type="date"
                    label="Due date"
                    className="max-w-44"
                    classNames={{
                      label: 'group-data-[filled=true]:text-secondary',
                      input:
                        'group-data-[has-value=true]:text-primary group-data-[has-value=true]:dark:text-white',
                    }}
                  />
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onPress={onClose}>
                Update
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default EditTaskModal;
