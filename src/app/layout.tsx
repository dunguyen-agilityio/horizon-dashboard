import type { Metadata } from 'next';
import { cn } from '@nextui-org/theme';
import { DM_Sans } from 'next/font/google';

// Styles
import './globals.css';

// Component
import Providers from './providers';

// Layouts
import Navbar from '@/layouts/Navbar';

const inter = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

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
