'use client';
// types
import { ToastStatus } from '@/types/toast';

import { BoxIcon, Text } from '@/components';

// icons
import { Close } from '@/icons';

interface ToastProps {
  title: string;
  message: string;
  type: ToastStatus;
  onClose: () => void;
}

const typeStyles = {
  success: 'bg-success',
  error: 'bg-error',
};

const Toast = ({ title, message, type, onClose }: ToastProps) => (
  <div
    className={`fixed top-5 left-1/2 z-[1000] flex justify-between min-w-[300px] p-1
      rounded text-white text-lg transition-opacity duration-500 ease-in animate-slideDown ${typeStyles[type]}`}
  >
    <div className="flex flex-col justify-between gap-2 p-3">
      <Text className="font-bold leading-none text-white">{title}</Text>
      <Text className="font-normal text-sm text-amber-450 leading-none opacity-9">
        {message}
      </Text>
    </div>
    <BoxIcon
      customClass="w-7 h-7 hover:bg-white hover:bg-opacity-20 hover:rounded-full"
      icon={<Close />}
      onClick={onClose}
    />
  </div>
);

export default Toast;
