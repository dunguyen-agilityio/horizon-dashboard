'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

// Components
import Moon from '@/icons/Moon';
import { Button } from '@nextui-org/button';

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

export default ToggleTheme;
