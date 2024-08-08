'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

// Components
import Moon from '@/icons/Moon';
import { cn } from '@nextui-org/theme';
import Button from '../Button';

interface ToggleThemeProps {
  className?: string;
  variant?: 'primary' | 'secondary';
}

const ToggleTheme = ({
  className,
  variant = 'primary',
  ...rest
}: ToggleThemeProps) => {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const isDark = theme === 'dark';

  const handleChangeTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  const isPrimary = variant === 'primary';

  return (
    <Button
      size="fit"
      onClick={handleChangeTheme}
      className={cn(
        'rounded-full flex justify-center items-center',
        isPrimary
          ? 'p-2 bg-transparent'
          : 'h-[60px] min-w-[60px] bg-gradient-primary',
        className,
      )}
      variant={isPrimary ? undefined : 'light'}
      {...rest}
    >
      <Moon isDark={isPrimary ? isDark : true} />
    </Button>
  );
};

export default ToggleTheme;
