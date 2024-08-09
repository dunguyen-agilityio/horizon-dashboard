import { User } from './User';

export const enum STATUS {
  PENDING = 'Pending',
  UPDATE = 'Updates',
  DONE = 'Done',
  ERROR = 'Errors',
}

export class Task {
  id!: string;
  title!: string;
  description!: string;
  createdAt!: Date | string;
  updatedAt!: Date | string;
  dueDate?: Date | string;
  startedData?: Date | string;
  status!: STATUS;
  labels!: string[];
  assignees?: User[];
  cover?: string;

  constructor(task?: Task) {
    const {
      title = '',
      description = '',
      createdAt,
      updatedAt,
      dueDate,
      startedData,

      assignees = [],
    } = task || {};

    Object.assign(this, {
      ...task,
      title,
      description,
      assignees,
      dueDate: dueDate ? new Date(dueDate) : undefined,
      createdAt: createdAt ? new Date(createdAt) : undefined,
      updatedAt: updatedAt ? new Date(updatedAt) : undefined,
      startedData: startedData ? new Date(startedData) : undefined,
    });
  }
}
