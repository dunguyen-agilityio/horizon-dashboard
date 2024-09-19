import { TUser } from './User';

export const enum LABEL {
  PENDING = 'Pending',
  UPDATES = 'Updates',
  DONE = 'Done',
  ERRORS = 'Errors',
}

export const enum STATUS {
  BACKLOG = 'backlog',
  IN_PROGRESS = 'in-progress',
  DONE = 'done',
}

export class Task {
  id!: string;
  title!: string;
  description!: string;
  createdAt!: Date | string;
  updatedAt!: Date | string;
  dueDate?: string;
  startedDate?: string;
  status!: STATUS;
  labels!: LABEL[];
  assignees?: TUser[];
  cover?: string;

  constructor(task?: Task) {
    const {
      title = '',
      description = '',
      createdAt,
      updatedAt,
      dueDate,
      startedDate,
      assignees = [],
      labels = [],
    } = task || {};

    Object.assign(this, {
      ...task,
      title,
      description,
      assignees,
      labels: labels.length ? labels : [LABEL.PENDING],
      dueDate: dueDate ?? '',
      createdAt: createdAt ? new Date(createdAt) : undefined,
      updatedAt: updatedAt ? new Date(updatedAt) : undefined,
      startedDate: startedDate ?? '',
    });
  }
}
