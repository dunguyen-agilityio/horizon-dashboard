'use client';

// Libs
import { useState } from 'react';

// Components
import {
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
import ImageWithBlur from '@/components/ImageWithBlur';

// Mocks
import { MOCK_USERS } from '@/mocks/user';

// Types
import { TEXT_SIZE } from '@/types/text';

// Actions
import { handleSignOut } from '@/actions/auth';

// Constants
import { USER_IMAGE } from '@/constants';

const MOCK_PROFILE = MOCK_USERS[0];

const ProfileDropDown = () => {
  const { avatar = { url: USER_IMAGE.DEFAULT }, username } = MOCK_PROFILE;

  const [isVisible, setIsVisible] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClose = () => {
    onClose();
    handleCloseDropDown();
  };

  const handleCloseDropDown = () => {
    setIsVisible((prev) => !prev);
  };

  const handleLogout = async () => {
    await handleSignOut();
    handleClose();
  };

  return (
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
          <ImageWithBlur
            width={40}
            height={40}
            src={avatar.url}
            alt={username}
            additionalClasses="min-w-10 rounded-full"
          />
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
          <Button className="justify-start" variant="flat" onClick={onOpen}>
            Logout
          </Button>
          {isOpen && (
            <Modal
              isOpen
              onOpenChange={onClose}
              isDismissable={false}
              data-testid="confirm-logout-modal"
            >
              <ModalContent className="bg-white dark:bg-content1">
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
