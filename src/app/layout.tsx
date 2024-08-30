import type { Metadata } from 'next';

// Styles
import './globals.css';

// Layouts
import RootLayout from '@/layouts/RootLayout';

// provider
import ToastProvider from '@/contexts/toast/toastProvider';

export const metadata: Metadata = {
  title: 'Horizon',
  description: 'Horizon Dashboard',
  icons: [
    {
      rel: 'icon',
      url: '/favicon.ico',
    },
  ],
};

const AppLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <RootLayout asChild>
    <ToastProvider>{children}</ToastProvider>
  </RootLayout>
);

export default AppLayout;
