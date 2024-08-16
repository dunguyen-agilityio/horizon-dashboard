import type { Metadata } from 'next';

// Styles
import './globals.css';

// Component
import Providers from './providers';

// Layouts
import Navbar from '@/layouts/Navbar';
import RootLayout from '@/layouts/RootLayout';

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

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RootLayout asChild>
      <Providers>
        <div className="flex">
          <Navbar />
          <main className="mx-auto w-full">{children}</main>
        </div>
      </Providers>
    </RootLayout>
  );
}
