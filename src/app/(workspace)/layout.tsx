import { Suspense } from 'react';

// Layouts
import { Header, Navbar, Footer } from '@/layouts';

// Config
import { auth } from '@/auth.config';

// Services
import { getUserInfo } from '@/services/user';

// Model
import { User } from '@/models/User';

const RootLayout = async ({ children }: React.PropsWithChildren) => {
  const isAuthenticated = !!(await auth())?.user;
  const userData = (await getUserInfo()) as User;

  return (
    <div className="flex flex-1">
      <div className="hidden xl:block">
        <Navbar isAuthenticated={isAuthenticated} />
      </div>
      <div className="flex-grow flex flex-col w-full xl:w-main items-center pt-4 md:pt-[50px] px-2 md:px-5 gap-5">
        <Suspense>
          <Header isAuthenticated={isAuthenticated} userData={userData} />
        </Suspense>
        <main className="scrollbar flex-grow flex flex-col w-full max-w-screen-5xl h-0 overflow-y-auto bg-gray dark:bg-indigo-dark gap-[30px] px-0 pr-4">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default RootLayout;
