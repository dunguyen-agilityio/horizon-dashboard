import { TEXT_SIZE, TEXT_VARIANT } from '@/types/text';
import { cn } from '@nextui-org/theme';

const sizes: { [key in TEXT_SIZE]: string } = {
  [TEXT_SIZE.xl]: 'text-xl font-bold leading-extra',
  [TEXT_SIZE['2xl']]: 'text-2xl font-bold leading-2xl',
  [TEXT_SIZE.lg]: 'text-extra font-bold leading-large',
  [TEXT_SIZE.extra]: 'text-1.5xl font-bold leading-xl',
  [TEXT_SIZE.md]: 'text-medium',
  [TEXT_SIZE.sm]: 'text-small font-medium',
  [TEXT_SIZE.xs]: 'text-xs uppercase',
};

const variants: { [key in TEXT_VARIANT]: string } = {
  [TEXT_VARIANT.PRIMARY]: 'text-primary dark:text-white',
  [TEXT_VARIANT.SECONDARY]: 'text-secondary dark:text-white',
  [TEXT_VARIANT.TERTIARY]: 'text-foreground dark:text-white',
  [TEXT_VARIANT.QUATERNARY]: 'text-blue-450 dark:text-white',
};

export interface TextProps {
  size?: TEXT_SIZE;
  variant?: TEXT_VARIANT;
  as?: keyof React.ReactHTML;
  className?: string;
}

const Text = ({
  children,
  size = TEXT_SIZE.md,
  as: Component = 'p',
  variant = TEXT_VARIANT.PRIMARY,
  className,
  ...props
}: React.PropsWithChildren<TextProps>) => {
  return (
    <Component
      className={`${variants[variant]} ${cn(sizes[size], className)}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Text;
