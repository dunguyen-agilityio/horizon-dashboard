export type ToastStatus = 'success' | 'error';

export type ToastType = {
  title: string;
  message: string;
  type: ToastStatus;
  timeOut: number;
};

export enum TOAST {
  SUCCESS = 'success',
  ERROR = 'error',
}
