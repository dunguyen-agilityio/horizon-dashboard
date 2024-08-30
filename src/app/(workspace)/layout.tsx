import { Suspense } from 'react';

// Components
import { Brand } from '@/components';
import { Divider } from '@nextui-org/react';

// Layouts
import { Header, Navbar, Footer } from '@/layouts';

// Config
import { auth } from '@/auth.config';

const RootLayout = async ({ children }: React.PropsWithChildren) => {
  const isAuthenticated = !!(await auth())?.user;

  return (
    <div className="flex h-screen bg-secondary dark:bg-indigo">
      <div className="hidden xl:block">
        <Brand />
        <Divider className="bg-zinc-100 dark:bg-slate-700" />
        <Navbar isAuthenticated={isAuthenticated} />
      </div>
      <div className="flex-grow flex flex-col w-full">
        <main className="flex-grow flex flex-col w-full h-auto bg-gray dark:bg-indigo p-5 gap-[30px] pt-[50px] pb-[22px] px-5">
          <div className="xl:pl-2.5">
            <Suspense>
              <Header isAuthenticated={isAuthenticated} />
            </Suspense>
          </div>
          {children}
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default RootLayout;
