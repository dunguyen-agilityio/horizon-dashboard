'use client';

import { useTheme } from 'next-themes';
import { cn } from '@nextui-org/theme';
import { useEffect, useState } from 'react';

// Components
import Moon from '@/icons/Moon';
import Button from '../Button';

// Constants
import { THEME } from '@/constants/theme';

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

  if (!isMounted) return <div className="min-w-[34px] h-[34px]" />;

  const isDark = theme === THEME.DARK;

  const handleChangeTheme = () => {
    setTheme(isDark ? THEME.LIGHT : THEME.DARK);
  };

  const isPrimary = variant === 'primary';

  return (
    <Button
      size="fit"
      aria-label="theme-button"
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
