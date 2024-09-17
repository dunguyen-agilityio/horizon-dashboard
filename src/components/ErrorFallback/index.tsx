import { cn } from '@nextui-org/theme';

// Components
import { Text } from '@/components';

// Types
import { TEXT_SIZE } from '@/types/text';

interface IErrorFallbackProps {
  title?: string;
  message?: string;
  className?: string;
}

const ErrorFallback = ({
  title = 'Oops. Something went wrong!',
  message = 'Please go back later.',
  className,
}: IErrorFallbackProps) => (
  <div
    className={cn(
      'flex items-center flex-col justify-center text-center bg-white dark:bg-indigo-light rounded-md',
      className,
    )}
  >
    <Text
      as="h1"
      size={TEXT_SIZE.xl}
      className="mb-4 dark:text-white text-indigo-dark"
    >
      {title}
    </Text>
    <Text className="text-medium dark:text-white text-indigo-dark">
      {message}
    </Text>
  </div>
);

export default ErrorFallback;
