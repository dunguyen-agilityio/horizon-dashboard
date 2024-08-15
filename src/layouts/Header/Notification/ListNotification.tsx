'use client';

// Libs
import { cn } from '@nextui-org/theme';

// Components
import { Listbox, ListboxItem } from '@nextui-org/listbox';

// Models
import { Notify } from '@/models/Notify';

// Styles
import '@/styles/scroll.css';
import NotifyItem from './NotifyItem';

interface ListNotificationProps {
  notifies: Notify[];
  onSelect: (key: React.Key) => void;
}

const ListNotification = ({ notifies, onSelect }: ListNotificationProps) => (
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
      {({ link, id, unread, ...rest }) => (
        <ListboxItem
          key={link}
          textValue={id}
          className={cn(
            'border-b-secondary dark:border-b-indigo border-b-1 data-[hover=true]:bg-default/20',
            unread ? 'bg-default/20' : 'rounded-b-none hover:rounded-b-small',
          )}
          data-testid="notification-item"
        >
          <NotifyItem unread={unread} {...rest} />
        </ListboxItem>
      )}
    </Listbox>
  </div>
);

export default ListNotification;
