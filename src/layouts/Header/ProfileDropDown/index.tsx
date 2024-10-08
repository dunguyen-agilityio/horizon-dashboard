'use client';

// Libs
import { useState } from 'react';

// Components
import {
  Avatar,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Popover,
  PopoverContent,
  PopoverTrigger,
  useDisclosure,
} from '@nextui-org/react';
import Text from '@/components/Text';
import Button from '@/components/Button';

// Types
import { TEXT_SIZE } from '@/types/text';
import { TImage } from '@/models/Image';

// Actions
import { handleSignOut } from '@/actions/auth';

interface IProfileDropdownProps {
  avatar?: TImage;
  username: string;
}

const ProfileDropDown = ({ avatar, username }: IProfileDropdownProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClose = () => {
    onClose();
  };

  const handleCloseDropDown = () => {
    setIsVisible((prev) => !prev);
  };

  const handleLogout = async () => {
    await handleSignOut();
    handleClose();
  };

  const handleCloseModal = () => {
    onOpen();
    handleCloseDropDown();
  };

  return (
    <div>
      <Popover
        placement="bottom-end"
        showArrow={true}
        isOpen={isVisible}
        onOpenChange={handleCloseDropDown}
        className="before:bg-gray before:dark:bg-indigo-light"
      >
        <PopoverTrigger>
          <button
            className="focus-visible:outline-none aria-expanded:scale-1 aria-expanded:opacity-100"
            data-testid="profile-trigger-btn"
          >
            <Avatar src={avatar?.url} alt={username} />
          </button>
        </PopoverTrigger>
        <PopoverContent
          className="bg-gray dark:bg-indigo-light"
          data-testid="profile-content"
        >
          <div className="flex flex-col gap-4 px-1 py-2 min-w-[150px]">
            <Text size={TEXT_SIZE.md} className="font-bold">
              {username}
            </Text>
            <Button
              data-testId="button-sign-out"
              className="justify-start"
              variant="flat"
              onClick={handleCloseModal}
            >
              Sign Out
            </Button>
          </div>
        </PopoverContent>
      </Popover>
      {isOpen && (
        <Modal
          isOpen
          onOpenChange={onClose}
          isDismissable={false}
          data-testid="confirm-signOut-modal"
        >
          <ModalContent className="bg-white dark:bg-content1">
            <ModalHeader className="flex flex-col gap-1">Sign Out</ModalHeader>
            <ModalBody>
              <Text>Are you sure you want to sign out?</Text>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={handleClose}>
                Close
              </Button>
              <Button
                data-testId="modal-button-sign-out"
                color="primary"
                onPress={handleLogout}
              >
                Sign Out
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </div>
  );
};

export default ProfileDropDown;
