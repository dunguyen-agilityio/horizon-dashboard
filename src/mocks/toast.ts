import { TOAST } from '@/types/toast';

export const ADD_TASK_SUCCESS = {
  title: 'Success',
  message: 'Your task was submitted successfully',
  type: TOAST.SUCCESS,
  timeOut: 3000,
};

export const ADD_TASK_ERROR = {
  title: 'Error',
  message: 'There was an error submitting your task',
  type: TOAST.ERROR,
  timeOut: 3000,
};

export const UPDATE_TASK_SUCCESS = {
  title: 'Success',
  message: 'The task has been successfully updated.',
  type: TOAST.SUCCESS,
  timeOut: 3000,
};

export const UPDATE_TASK_ERROR = {
  title: 'Error',
  message: 'The task has failed to update.',
  type: TOAST.ERROR,
  timeOut: 3000,
};
