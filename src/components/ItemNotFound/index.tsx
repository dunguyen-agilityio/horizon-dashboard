// Components
import { Link } from '@nextui-org/link';
import { Text } from '@/components';

// Types
import { TEXT_SIZE } from '@/types/text';

interface IItemNotFoundProps {
  title: string;
  description: string;
  href?: string;
  label?: string;
}

const ItemNotFound = ({
  title,
  description,
  href,
  label = 'Explore Item',
}: IItemNotFoundProps) => (
  <div className="h-full flex items-center flex-col justify-center text-center">
    <Text
      as="h1"
      size={TEXT_SIZE['2xl']}
      className="mb-4 dark:text-white text-indigo-dark"
    >
      {title}
    </Text>
    <p className="text-lg text-gray-600 mb-8">{description}</p>
    {href && (
      <Link href={href}>
        <p className="inline-block bg-blue-450 dark:bg-purple-750 text-white py-3 px-6 rounded-full text-lg font-semibold shadow-lg hover:bg-blue-600">
          {label}
        </p>
      </Link>
    )}
  </div>
);

export default ItemNotFound;
