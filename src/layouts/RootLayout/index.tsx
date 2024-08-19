import { cn } from '@nextui-org/theme';
import { DM_Sans } from 'next/font/google';

import Providers from '@/app/providers';

const inter = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const RootLayout = ({
  children,
  asChild,
}: React.PropsWithChildren<{ asChild?: boolean }>) => {
  const className = cn(inter.className, 'w-full bg-gray dark:bg-indigo-dark');

  if (!asChild) return children;

  return (
    <html lang="en">
      <body className={className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
