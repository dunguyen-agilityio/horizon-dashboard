'use client';

import { Listbox, ListboxItem } from '@nextui-org/listbox';
import { formatDateRelativeToNow } from '@/utils/format';
import Text from '@/components/Text';
import { TEXT_SIZE } from '@/types/text';
import { cn } from '@nextui-org/theme';

// Styles
import '@/styles/scroll.css';
import { Notify } from '@/models/Notify';

const ListNotification = ({
  notifies,
  onSelect,
}: {
  notifies: Notify[];
  onSelect: (key: React.Key) => void;
}) => (
  <div data-testid="notification-list">
    <Listbox
      classNames={{
        base: 'max-w-md',
        list: 'max-h-[500px] overflow-y-scroll scrollbar pr-2',
      }}
      items={notifies}
      label="Assigned to"
      variant="flat"
      onAction={onSelect}
    >
      {({ message, createdAt, unread, link }) => (
        <ListboxItem
          key={link}
          textValue={message}
          className={cn(
            'border-b-secondary dark:border-b-indigo border-b-1',
            unread ? 'bg-default/40' : 'rounded-b-none hover:rounded-b-small',
          )}
          data-testid="notification-item"
        >
          <div className="flex gap-2 items-center">
            <div className="flex-1 flex flex-col">
              <Text size={TEXT_SIZE.md} className="font-bold">
                Reminder
              </Text>
              <Text size={TEXT_SIZE.sm} className="whitespace-break-spaces">
                Your task is scheduled to start in 10 minutes.
              </Text>
              <Text size={TEXT_SIZE.xs}>
                {formatDateRelativeToNow(createdAt)}
              </Text>
            </div>
            <div className="w-10 pr-2">
              {unread && (
                <div className="bg-green-500 w-2 h-2 rounded-full float-end" />
              )}
            </div>
          </div>
        </ListboxItem>
      )}
    </Listbox>
  </div>
);

export default ListNotification;
