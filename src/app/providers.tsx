'use client';

import { useRouter } from 'next/navigation';
import { NextUIProvider } from '@nextui-org/system';
import { ThemeProvider } from 'next-themes';

// provider
import ToastProvider from '@/contexts/toast/ToastProvider';

// Constants
import { THEME } from '@/constants/theme';

const Providers = ({ children }: React.PropsWithChildren) => {
  const { push } = useRouter();

  return (
    <NextUIProvider navigate={push}>
      <ThemeProvider
        defaultTheme={THEME.LIGHT}
        enableSystem
        attribute="class"
        themes={[THEME.LIGHT, THEME.DARK]}
      >
        <ToastProvider>{children}</ToastProvider>
      </ThemeProvider>
    </NextUIProvider>
  );
};

export default Providers;
