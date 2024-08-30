'use client';
import { createContext, useContext } from 'react';

// constants
import { ToastType } from '@/types/toast';
import { TOAST_ERROR } from '@/constants/toast';

interface ToastContextProps {
  showToast: (toast: ToastType) => void;
  hideToast: () => void;
}

export const ToastContext = createContext<ToastContextProps | null>(null);

const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error(TOAST_ERROR);
  }
  return context;
};

export default useToast;
