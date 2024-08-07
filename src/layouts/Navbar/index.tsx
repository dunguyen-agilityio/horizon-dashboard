'use client';

import Moon from '@/icons/Moon';
import { useTheme } from 'next-themes';
import { Button } from '@nextui-org/button';

import { useEffect, useState } from 'react';

const Navbar = () => {
  return (
    <div className="bg-white dark:bg-secondary">
      <ToggleTheme className="h-[60px] min-w-[60px] rounded-full flex justify-center items-center bg-gradient-primary" />
    </div>
  );
};

export default Navbar;

interface ToggleThemeProps {
  className?: string;
}

const ToggleTheme = ({ className }: ToggleThemeProps) => {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const isDark = theme === 'dark';

  return (
    <Button
      variant="light"
      onClick={() => {
        setTheme(isDark ? 'light' : 'dark');
      }}
      className={className}
    >
      <Moon isDark={isDark} />
    </Button>
  );
};
