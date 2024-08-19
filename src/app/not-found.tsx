import Link from 'next/link';
import { Text } from '@/components';

// Types
import { TEXT_SIZE } from '@/types/text';

const NotFound = () => (
  <div className="w-full h-screen flex flex-col justify-center items-center bg-gray-100">
    <div className="text-center">
      <Text
        as="h1"
        size={TEXT_SIZE['2xl']}
        className="mb-4 dark:text-white text-indigo-dark"
      >
        Page Not Found
      </Text>
      <p className="text-lg text-gray-600 mb-8">
        Sorry, the page you are looking for doesn&apos;t exist or has been
        moved.
      </p>
      <Link href="/">
        <p className="inline-block bg-blue-450 text-white py-3 px-6 rounded-full text-lg font-semibold shadow-lg hover:bg-blue-600">
          Return Home
        </p>
      </Link>
    </div>
  </div>
);

export default NotFound;
