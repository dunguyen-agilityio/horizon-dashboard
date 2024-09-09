'use client';

import { useRouter } from 'next/navigation';
import { NextUIProvider } from '@nextui-org/system';
import { ThemeProvider } from 'next-themes';

// provider
import ToastProvider from '@/contexts/toast/ToastProvider';

const Providers = ({ children }: React.PropsWithChildren) => {
  const { push } = useRouter();

  return (
    <NextUIProvider navigate={push}>
      <ThemeProvider
        defaultTheme="light"
        enableSystem
        attribute="class"
        themes={['light', 'dark']}
      >
        <ToastProvider>{children}</ToastProvider>
      </ThemeProvider>
    </NextUIProvider>
  );
};

export default Providers;
