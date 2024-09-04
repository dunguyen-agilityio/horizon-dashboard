'use client';
import { useState, ReactNode, useEffect } from 'react';

// contexts
import { ToastContext } from './toastContext';

// types

import { ToastType } from '@/types/toast';

// components
import { Toast } from '@/components';

const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toast, setToast] = useState<ToastType | null>(null);

  const showToast = (newToast: ToastType) => {
    setToast(newToast);
  };

  const hideToast = () => {
    setToast(null);
  };

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        setToast(null);
      }, toast.timeOut);

      return () => clearTimeout(timer);
    }
  }, [toast]);

  return (
    <ToastContext.Provider value={{ showToast, hideToast }}>
      {children}
      {toast && (
        <div className="toast-container">
          <Toast
            title={toast.title}
            message={toast.message}
            type={toast.type}
            onClose={hideToast}
          />
        </div>
      )}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
