import { ToggleTheme } from '@/components';

const Navbar = () => {
  return (
    <div className="bg-white dark:bg-secondary">
      <ToggleTheme className="h-[60px] min-w-[60px] rounded-full flex justify-center items-center bg-gradient-primary" />
    </div>
  );
};

export default Navbar;
