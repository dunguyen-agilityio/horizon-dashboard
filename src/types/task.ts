import { Task } from '@/models/Task';

export type TaskFormData = Pick<Task, 'title' | 'status'>;
