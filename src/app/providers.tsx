'use client';

import { useRouter } from 'next/navigation';
import { NextUIProvider } from '@nextui-org/system';
import { ThemeProvider } from 'next-themes';

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
        {children}
      </ThemeProvider>
    </NextUIProvider>
  );
};

export default Providers;
