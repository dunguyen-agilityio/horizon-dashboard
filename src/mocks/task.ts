// Types
import { LABEL, STATUS, Task } from '@/models/Task';

// Mocks
import { MOCK_USERS } from './user';

export const MOCK_TASKS: Task[] = [
  {
    id: '1',
    createdAt: 'Fri, 09 Aug 2024 03:25:32 GMT',
    description:
      "It usually displays this message when you close an unsaved page when you do it on purpose, and it's getting frustrated to see this every time.",
    labels: [LABEL.DONE],
    status: STATUS.IN_PROGRESS,
    title: 'Option to use local/server version feature',
    updatedAt: 'Fri, 09 Aug 2024 03:25:32 GMT',
    cover: '/default-task-cover.png',
    assignees: MOCK_USERS,
  },
  {
    id: '2',
    createdAt: 'Fri, 09 Aug 2024 03:25:32 GMT',
    description:
      "Website Design: The ability to add/modify your own CSS-Selectors like it's done in Venus.",
    labels: [LABEL.DONE],
    status: STATUS.DONE,
    title: 'Add/modify your own CSS-Selectors',
    updatedAt: 'Fri, 09 Aug 2024 03:25:32 GMT',
    assignees: MOCK_USERS,
  },
  {
    id: '3',
    createdAt: 'Fri, 09 Aug 2024 03:25:32 GMT',
    description:
      'When you save some sections as a template and then paste a shortcode to a new page, the layout is broken, some styles are missing - in the editor.',
    labels: [LABEL.ERRORS, LABEL.PENDING],
    status: STATUS.BACKLOG,
    title: 'Shortcode for templates to display correctly',
    updatedAt: 'Fri, 09 Aug 2024 03:25:32 GMT',
    cover: '/default-task-cover.png',
    assignees: MOCK_USERS,
  },
  {
    id: '4',
    createdAt: 'Fri, 09 Aug 2024 03:25:32 GMT',
    description: 'Create your Dashboard with Drag & Drop technique.',
    labels: [LABEL.UPDATES],
    status: STATUS.IN_PROGRESS,
    title: '[UX Design] - Set the default Library tab',
    updatedAt: 'Fri, 09 Aug 2024 03:25:32 GMT',
    assignees: MOCK_USERS,
    cover: '/default-task-cover.png',
  },
  {
    id: '5',
    createdAt: 'Fri, 09 Aug 2024 03:25:32 GMT',
    description: 'Create your Dashboard with Drag & Drop technique.',
    labels: [LABEL.UPDATES],
    status: STATUS.DONE,
    title: '[UX Design] - Set the default Library tab',
    updatedAt: 'Fri, 09 Aug 2024 03:25:32 GMT',
    assignees: MOCK_USERS,
  },
  {
    id: '6',
    createdAt: 'Fri, 09 Aug 2024 03:25:32 GMT',
    description: 'Create your Dashboard with Drag & Drop technique.',
    labels: [LABEL.UPDATES],
    status: STATUS.BACKLOG,
    title: '[UX Design] - Set the default Library tab',
    updatedAt: 'Fri, 09 Aug 2024 03:25:32 GMT',
    assignees: MOCK_USERS,
    cover: '/default-task-cover.png',
  },
];
