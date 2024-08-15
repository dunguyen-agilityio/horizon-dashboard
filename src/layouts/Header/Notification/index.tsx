import { useRouter } from 'next/navigation';

// Components
import NotifyIcon from '@/icons/Notify';
import ListNotification from './ListNotification';
import { Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react';

// Models
import { Notify } from '@/models/Notify';

interface NotificationProps {
  notifies: Notify[];
}

const Notification = ({ notifies }: NotificationProps) => {
  const { push } = useRouter();

  const handleSelect = (key: React.Key) => {
    push(key as string);
  };

  return (
    <Popover
      placement="bottom"
      showArrow={true}
      className="before:bg-gray data-[placement=bottom]:before:left-[64%] before:dark:bg-indigo-light"
    >
      <PopoverTrigger>
        <button
          className="focus-visible:outline-none aria-expanded:scale-1 aria-expanded:opacity-100"
          data-testid="notify-button"
        >
          <NotifyIcon />
        </button>
      </PopoverTrigger>
      <PopoverContent className="bg-gray dark:bg-indigo-light min-w-[320px] items-start w-full pr-[2px]">
        <ListNotification notifies={notifies} onSelect={handleSelect} />
      </PopoverContent>
    </Popover>
  );
};

export default Notification;
