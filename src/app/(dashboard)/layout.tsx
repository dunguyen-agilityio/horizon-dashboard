import { Brand } from '@/components';
import Header from '@/layouts/Header';
import Navbar from '@/layouts/Navbar';
import { Divider } from '@nextui-org/react';
import { Suspense } from 'react';

const RootLayout = ({ children }: React.PropsWithChildren) => (
  <div className="flex h-screen bg-secondary dark:bg-indigo">
    <div>
      <Brand />
      <Divider className="bg-zinc-100 dark:bg-slate-700" />
      <Navbar />
    </div>
    <div className="flex-1 pt-[50px] pb-[22px] px-5 bg-gray dark:bg-indigo-dark flex flex-col gap-5">
      <Suspense>
        <Header />
      </Suspense>
      <main className="mx-auto w-full h-full p-5 bg-secondary dark:bg-indigo">
        {children}
      </main>
    </div>
  </div>
);

export default RootLayout;
