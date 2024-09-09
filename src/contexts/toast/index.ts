'use client';

import { createContext, useContext } from 'react';

// Types
import { ToastType } from '@/types/toast';

// constants
import { TOAST_ERROR } from '@/constants/toast';

interface ToastContextProps {
  showToast: (toast: ToastType) => void;
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
