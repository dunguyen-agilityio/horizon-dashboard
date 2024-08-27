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

import { Text } from '@/components';
import { TEXT_SIZE } from '@/types/text';
import { LABEL } from '@/models/Task';

interface IEditTaskModalProps {
  isOpen: boolean;
  title: string;
  description: string;
  labels: LABEL[];
  onOpenChange: () => void;
}

const listLabel = ['Pending', 'Updates', 'Done', 'Errors'];

export const EditTaskModal = ({
  isOpen,
  title,
  description,
  labels,
  onOpenChange,
}: IEditTaskModalProps) => (
  <Modal
    isOpen={isOpen}
    onOpenChange={onOpenChange}
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
            <Textarea defaultValue={description} />
            <Select
              label="Priority"
              defaultSelectedKeys={labels}
              classNames={{
                listboxWrapper: 'bg-white dark:bg-indigo',
                base: 'bg-white dark:bg-indigo',
              }}
            >
              {listLabel.map((label) => (
                <SelectItem key={`${label}-item`}>{label}</SelectItem>
              ))}
            </Select>
            <div className="flex gap-4 items-center">
              <Input label="Start date" type="date" />
              <Text>To</Text>
              <Input label="Due date" type="date" />
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onPress={onClose}>
              Close
            </Button>
            <Button color="primary" onPress={onClose}>
              Update
            </Button>
          </ModalFooter>
        </>
      )}
    </ModalContent>
  </Modal>
);

export default EditTaskModal;
