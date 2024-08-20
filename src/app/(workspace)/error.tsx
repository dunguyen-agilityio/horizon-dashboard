'use client';

// Components
import { Button, Text } from '@/components';

// Types
import { TEXT_SIZE } from '@/types/text';

const Error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => (
  <div className="w-full h-screen flex flex-col justify-center items-center bg-gray-100">
    <div className="text-center">
      <Text
        as="h1"
        size={TEXT_SIZE['2xl']}
        className="mb-4 dark:text-white text-indigo-dark"
      >
        Oops. Something went wrong!
      </Text>
      <Text className="text-lg dark:text-white text-indigo-dark mb-8 mx-4 md:mx-10 lg:mx-60 xl:mx-96 2xl:mx-[600px]">
        {error?.message ||
          'Please try refreshing or return to the previous page.'}
      </Text>
      <Button color="danger" onClick={() => reset()}>
        Try again
      </Button>
    </div>
  </div>
);

export default Error;
