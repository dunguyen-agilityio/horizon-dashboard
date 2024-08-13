'use client';

// Libs
import { useState } from 'react';

// Components
import {
  Image,
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
import NextImage from 'next/image';
import Text from '@/components/Text';
import Button from '@/components/Button';

// Mocks
import { MOCK_USERS } from '@/mocks/user';

// Types
import { TEXT_SIZE } from '@/types/text';

const MOCK_PROFILE = MOCK_USERS[0];

const ProfileDropDown = () => {
  const { avatar, userName } = MOCK_PROFILE;

  const [isVisible, setIsVisible] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClose = () => {
    onClose();
    handleCloseDropDown();
  };

  const handleCloseDropDown = () => {
    setIsVisible((prev) => !prev);
  };

  const handleLogout = () => {
    handleClose();
    // TODO: handle logout will implement later
  };

  return (
    <Popover
      placement="bottom"
      showArrow={true}
      isOpen={isVisible}
      onOpenChange={handleCloseDropDown}
    >
      <PopoverTrigger>
        <button
          className="focus-visible:outline-none aria-expanded:scale-1 aria-expanded:opacity-100"
          data-testid="profile-trigger-btn"
        >
          <Image
            as={NextImage}
            width={40}
            height={40}
            src={avatar}
            alt={userName}
            className="min-w-10"
          />
        </button>
      </PopoverTrigger>
      <PopoverContent
        className="bg-gray dark:bg-indigo-light"
        data-testid="profile-content"
      >
        <div className="flex flex-col gap-4 px-1 py-2 min-w-[150px]">
          <Text size={TEXT_SIZE.md} className="font-bold">
            {userName}
          </Text>
          <Button className="justify-start" variant="flat" onClick={onOpen}>
            Logout
          </Button>
          {isOpen && (
            <Modal
              isOpen
              // onOpenChange={handleOpenChange}
              isDismissable={false}
              data-testid="confirm-logout-modal"
            >
              <ModalContent>
                <ModalHeader className="flex flex-col gap-1">
                  Sign Out
                </ModalHeader>
                <ModalBody>
                  <Text>Are you sure you want to sign out?</Text>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={handleClose}>
                    Close
                  </Button>
                  <Button color="primary" onPress={handleLogout}>
                    Logout
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ProfileDropDown;
