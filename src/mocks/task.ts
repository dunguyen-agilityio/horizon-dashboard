// Types
import { LABEL, STATUS, Task } from '@/models/Task';

// Mocks
import { MOCK_USERS } from './user';

export const MOCK_TASKS: Task[] = [
  {
    id: '1',
    createdAt: 'Fri, 09 Aug 2024 03:25:32 GMT',
    description: {
      blocks: [
        {
          key: '1',
          text: "It usually displays this message when you close an unsaved page when you do it on purpose, and it's getting frustrated to see this every time.",
          type: '',
          depth: 0,
          inlineStyleRanges: [],
          entityRanges: [],
        },
      ],
      entityMap: {},
    },
    labels: [LABEL.DONE],
    status: STATUS.IN_PROGRESS,
    title: 'Option to use local/server version feature',
    updatedAt: 'Fri, 09 Aug 2024 03:25:32 GMT',
    cover: '/default-task-cover.webp',
    assignees: MOCK_USERS,
  },
  {
    id: '2',
    createdAt: 'Fri, 09 Aug 2024 03:25:32 GMT',
    description: {
      blocks: [
        {
          key: '2',
          text: "Website Design: The ability to add/modify your own CSS-Selectors like it's done in Venus.",
          type: '',
          depth: 0,
          inlineStyleRanges: [],
          entityRanges: [],
        },
      ],
      entityMap: {},
    },
    labels: [LABEL.DONE],
    status: STATUS.DONE,
    title: 'Add/modify your own CSS-Selectors',
    updatedAt: 'Fri, 09 Aug 2024 03:25:32 GMT',
    assignees: MOCK_USERS,
  },
  {
    id: '3',
    createdAt: 'Fri, 09 Aug 2024 03:25:32 GMT',
    description: {
      blocks: [
        {
          key: '3',
          text: 'When you save some sections as a template and then paste a shortcode to a new page, the layout is broken, some styles are missing - in the editor.',
          type: '',
          depth: 0,
          inlineStyleRanges: [],
          entityRanges: [],
        },
      ],
      entityMap: {},
    },
    labels: [LABEL.ERRORS, LABEL.PENDING],
    status: STATUS.BACKLOG,
    title: 'Shortcode for templates to display correctly',
    updatedAt: 'Fri, 09 Aug 2024 03:25:32 GMT',
    cover: '/default-task-cover.webp',
    assignees: MOCK_USERS,
  },
  {
    id: '4',
    createdAt: 'Fri, 09 Aug 2024 03:25:32 GMT',
    description: {
      blocks: [
        {
          key: '4',
          text: 'Create your Dashboard with Drag & Drop technique.',
          type: '',
          depth: 0,
          inlineStyleRanges: [],
          entityRanges: [],
        },
      ],
      entityMap: {},
    },
    labels: [LABEL.UPDATES],
    status: STATUS.IN_PROGRESS,
    title: '[UX Design] - Set the default Library tab',
    updatedAt: 'Fri, 09 Aug 2024 03:25:32 GMT',
    assignees: MOCK_USERS,
    cover: '/default-task-cover.webp',
  },
  {
    id: '5',
    createdAt: 'Fri, 09 Aug 2024 03:25:32 GMT',
    description: {
      blocks: [
        {
          key: '5',
          text: 'Create your Dashboard with Drag & Drop technique.',
          type: '',
          depth: 0,
          inlineStyleRanges: [],
          entityRanges: [],
        },
      ],
      entityMap: {},
    },
    labels: [LABEL.UPDATES],
    status: STATUS.DONE,
    title: '[UX Design] - Set the default Library tab',
    updatedAt: 'Fri, 09 Aug 2024 03:25:32 GMT',
    assignees: MOCK_USERS,
  },
  {
    id: '6',
    createdAt: 'Fri, 09 Aug 2024 03:25:32 GMT',
    description: {
      blocks: [
        {
          key: '6',
          text: 'Create your Dashboard with Drag & Drop technique.',
          type: '',
          depth: 0,
          inlineStyleRanges: [],
          entityRanges: [],
        },
      ],
      entityMap: {},
    },
    labels: [LABEL.UPDATES],
    status: STATUS.BACKLOG,
    title: '[UX Design] - Set the default Library tab',
    updatedAt: 'Fri, 09 Aug 2024 03:25:32 GMT',
    assignees: MOCK_USERS,
    cover: '/default-task-cover.webp',
  },
];
