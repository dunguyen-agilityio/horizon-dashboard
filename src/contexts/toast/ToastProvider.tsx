'use client';

import { useState, ReactNode, useEffect } from 'react';

// contexts
import { ToastContext } from '.';

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
      const { timeOut = 1000 } = toast;

      const timer = setTimeout(() => {
        setToast(null);
      }, timeOut);

      return () => clearTimeout(timer);
    }
  }, [toast]);

  return (
    <ToastContext.Provider value={{ showToast }}>
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
