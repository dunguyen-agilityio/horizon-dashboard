import { User } from './User';

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
  dueDate?: Date | string;
  startedDate?: Date | string;
  status!: STATUS;
  labels!: LABEL[];
  assignees?: User[];
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
      dueDate: dueDate ? new Date(dueDate) : undefined,
      createdAt: createdAt ? new Date(createdAt) : undefined,
      updatedAt: updatedAt ? new Date(updatedAt) : undefined,
      startedDate: startedDate ? new Date(startedDate) : undefined,
    });
  }
}
