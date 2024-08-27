import { Notify } from '@/models/Notify';

// Type
import { INotification } from '@/types/notification';

export const MOCK_NOTIFIES: Notify[] = [
  new Notify({
    id: '1',
    message: 'Your task is scheduled to start in 10 minutes.',
    createdAt: new Date('2024-08-14T08:25:04.188Z'),
    link: '/kanban/1',
    unread: true,
  }),
  new Notify({
    id: '2',
    message: 'Your task is scheduled to start in 10 minutes.',
    createdAt: new Date('2024-08-13T07:25:04.188Z'),
    link: '/kanban/2',
    unread: true,
  }),
  new Notify({
    id: '3',
    message: 'Your task is scheduled to start in 10 minutes.',
    createdAt: new Date('2024-08-14T02:25:07.188Z'),
    link: '/kanban/3',
  }),
  new Notify({
    id: '4',
    message: 'Your task is scheduled to start in 10 minutes.',
    createdAt: new Date('2024-08-08T08:25:04.188Z'),
    link: '/kanban/4',
  }),
  new Notify({
    id: '5',
    message: 'Your task is scheduled to start in 10 minutes.',
    createdAt: new Date('2024-08-08T08:25:04.188Z'),
    link: '/kanban/5',
  }),
  new Notify({
    id: '6',
    message: 'Your task is scheduled to start in 10 minutes.',
    createdAt: new Date('2024-08-08T08:25:04.188Z'),
    link: '/kanban/6',
  }),
  new Notify({
    id: '7',
    message: 'Your task is scheduled to start in 10 minutes.',
    createdAt: new Date('2024-08-08T08:25:04.188Z'),
    link: '/kanban/7',
  }),
  new Notify({
    id: '8',
    message: 'Your task is scheduled to start in 10 minutes.',
    createdAt: new Date('2024-08-08T08:25:04.188Z'),
    link: '/kanban/8',
  }),
];

export const CONTROL_NOTIFICATIONS: INotification[] = [
  {
    id: '1',
    isSelected: true,
    isDisabled: false,
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
