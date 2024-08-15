// Libs
import { memo } from 'react';

// Models
import { Notify } from '@/models/Notify';

// Components
import Text from '@/components/Text';

// Types
import { TEXT_SIZE } from '@/types/text';

// Utils
import { formatDateRelativeToNow } from '@/utils/format';

const NotifyItem = ({
  createdAt,
  message,
  unread,
}: Pick<Notify, 'message' | 'unread' | 'createdAt'>) => (
  <div className="flex gap-2 items-center">
    <div className="flex-1 flex flex-col">
      <Text size={TEXT_SIZE.md} className="font-bold">
        Reminder
      </Text>
      <Text size={TEXT_SIZE.sm} className="whitespace-break-spaces">
        {message}
      </Text>
      <Text size={TEXT_SIZE.xs}>{formatDateRelativeToNow(createdAt)}</Text>
    </div>
    <div className="w-10 pr-2">
      {unread && (
        <div className="bg-green-500 w-2 h-2 rounded-full float-end" />
      )}
    </div>
  </div>
);

export default memo(NotifyItem);
