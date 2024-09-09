// Components
import { Text } from '@/components';
import { Link } from '@nextui-org/link';

// Types
import { TEXT_SIZE } from '@/types/text';

// Constants
import { FOOTER_ROUTES, FOOTER_CONTENT } from '@/constants';

const Footer = () => (
  <div className="flex flex-col justify-between items-center px-1 gap-2 lg:gap-0 lg:flex-row xl:px-7 mb-6">
    <Text className="text-secondary text-center" size={TEXT_SIZE.sm}>
      {FOOTER_CONTENT}
    </Text>
    <div className="flex gap-7 lg:gap-11">
      {FOOTER_ROUTES.map((footer) => (
        <Link href={footer.href} key={`${footer.title}`}>
          <Text size={TEXT_SIZE.sm} className="text-secondary leading-6">
            {footer.title}
          </Text>
        </Link>
      ))}
    </div>
  </div>
);

export default Footer;
