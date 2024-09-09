import { Suspense } from 'react';

// Layouts
import { Header, Navbar, Footer } from '@/layouts';

// Config
import { auth } from '@/auth.config';

const RootLayout = async ({ children }: React.PropsWithChildren) => {
  const isAuthenticated = !!(await auth())?.user;

  return (
    <div className="flex h-screen">
      <div className="hidden xl:block">
        <Navbar isAuthenticated={isAuthenticated} />
      </div>
      <div className="flex-grow flex flex-col w-full">
        <main className="flex-grow flex flex-col w-full h-auto bg-gray dark:bg-indigo-dark gap-[30px] pt-[50px] pb-[22px] p-2 md:px-5">
          <div className="xl:pl-2.5">
            <Suspense>
              <Header isAuthenticated={isAuthenticated} />
            </Suspense>
          </div>
          {children}
        </main>
        <div className="bg-gray dark:bg-indigo-dark">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
