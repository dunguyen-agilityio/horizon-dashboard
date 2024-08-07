import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

// Components
import './globals.css';
import Providers from './providers';
import Navbar from '@/layouts/Navbar';
import { cn } from '@nextui-org/theme';

const inter = Inter({ subsets: ['latin'] });

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, 'bg-secondary dark:bg-indigo-dark')}>
        <Providers>
          <Navbar />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
