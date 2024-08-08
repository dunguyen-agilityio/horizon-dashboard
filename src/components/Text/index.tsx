import { TEXT_SIZE, TEXT_VARIANT } from '@/types/text';
import { cn } from '@nextui-org/theme';

const classes: { [key in TEXT_SIZE]: string } = {
  [TEXT_SIZE.xl]: 'text-xl font-bold leading-extra',
  [TEXT_SIZE['2xl']]: 'text-2xl font-bold leading-2xl',
  [TEXT_SIZE.lg]: 'text-extra font-bold leading-large',
  [TEXT_SIZE.md]: 'text-medium leading-xl',
  [TEXT_SIZE.sm]: 'text-small font-medium',
  [TEXT_SIZE.xs]: 'text-xs uppercase',
};

export interface TextProps {
  size?: TEXT_SIZE;
  variant?: TEXT_VARIANT;
  text?: string;
  as?: keyof React.ReactHTML;
  className?: string;
}

const Text = ({
  children,
  text,
  size = TEXT_SIZE.md,
  as: Component = 'p',
  variant = TEXT_VARIANT.PRIMARY,
  className,
}: React.PropsWithChildren<TextProps>) => {
  return (
    <Component
      className={`${variant === TEXT_VARIANT.PRIMARY ? 'text-primary dark:text-white' : 'text-secondary dark:text-secondary'} ${cn(classes[size], className)}`}
    >
      {text || children}
    </Component>
  );
};

export default Text;
