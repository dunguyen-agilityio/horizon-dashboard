'use client';

// types
import { ToastStatus } from '@/types/toast';

import { BoxIcon, Text } from '@/components';

// icons
import { Close } from '@/icons';

interface ToastProps {
  title: string;
  message: string;
  type?: ToastStatus;
  onClose?: () => void;
}

const typeStyles = {
  success: 'bg-success',
  error: 'bg-error',
  info: 'bg-secondary',
  warning: 'bg-warning',
};

const Toast = ({ title, message, type = 'info', onClose }: ToastProps) => (
  <div
    className={`fixed top-5 right-5 z-[1000] flex justify-between min-w-[300px] p-1
      rounded text-white text-lg transition-opacity duration-500 ease-in animate-slideDown ${typeStyles[type]}`}
  >
    <div className="flex flex-col justify-between min-h-12 px-3 py-1">
      <Text className="font-bold leading-none text-white" as="h2">
        {title}
      </Text>
      <Text className="font-normal text-sm !text-white leading-none opacity-9">
        {message}
      </Text>
    </div>
    <button
      onClick={onClose}
      className="w-5 h-5 hover:bg-white hover:bg-opacity-20 hover:rounded-full flex justify-center items-center"
    >
      <BoxIcon icon={<Close />} />
    </button>
  </div>
);

export default Toast;
