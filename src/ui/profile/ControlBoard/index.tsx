// Components
import { BoxIcon, Text } from '@/components';
import { Switch } from '@nextui-org/switch';

// Icons
import More from '@/icons/More';

// Types
import { TEXT_SIZE } from '@/types/text';

export const listControllerNotifications = [
  {
    id: '1',
    isSelected: true,
    label: 'Item update notifications',
  },
  {
    id: '2',
    isSelected: false,
    isDisabled: true,
    label: 'Item comment notifications',
  },
  {
    id: '3',
    isSelected: false,
    isDisabled: true,
    label: 'Buyer review notifications',
  },
  {
    id: '4',
    isSelected: false,
    isDisabled: true,
    label: 'Rating reminders notifications',
  },
  {
    id: '5',
    isSelected: false,
    isDisabled: true,
    label: 'Meetups near you notifications',
  },
  {
    id: '6',
    isSelected: false,
    isDisabled: true,
    label: 'Company news notifications',
  },
  {
    id: '7',
    isSelected: false,
    isDisabled: true,
    label: 'New launches and projects',
  },
  {
    id: '8',
    isSelected: false,
    isDisabled: true,
    label: 'Monthly product changes',
  },
  {
    id: '9',
    isSelected: false,
    isDisabled: true,
    label: 'Subscribe to newsletter',
  },
  {
    id: '10',
    isSelected: true,
    isDisabled: true,
    label: 'Email me when someone follows me',
  },
];

const ControlBoard = () => (
  <div className="dark:bg-indigo bg-white w-[350px] xl:w-[421px] pt-[23px] p-[31px] rounded-md">
    <div className="flex justify-between">
      <Text size={TEXT_SIZE.extra} className="font-extrabold leading-8 mb-4">
        Notifications
      </Text>
      <BoxIcon
        icon={<More />}
        customClass="rotate-90 w-9 h-9 bg-gray dark:bg-indigo-light rounded-lg fill-blue-450 dark:fill-white"
      />
    </div>
    <div className="flex flex-col gap-[22px] ml-1">
      {listControllerNotifications.map(
        ({ id, label, isSelected, isDisabled }) => (
          <Switch
            key={`switch-${id}`}
            defaultSelected={isSelected}
            isDisabled={isDisabled}
            size="sm"
            classNames={{
              label: 'ml-2 text-primary dark:text-white text-sm',
              wrapper:
                'group-data-[selected=true]:bg-blue-450 group-data-[selected=true]:dark:bg-purple-750',
            }}
          >
            {label}
          </Switch>
        ),
      )}
    </div>
  </div>
);

export default ControlBoard;
