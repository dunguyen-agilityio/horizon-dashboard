// Component
import Image from 'next/image';
import { Text } from '@/components';

// Types
import { TEXT_SIZE } from '@/types/text';

const Banner = () => (
  <div className="w-[300px] h-[250px] flex items-end justify-center">
    <div className="w-[228px] h-[190px] bg-gradient-to-br from-purple-750 to-blue-450 rounded-2xl relative">
      <div className="w-[94px] h-[94px] top-[-47px] left-[65px] relative bg-gradient-to-br from-purple-750 to-blue-450 rounded-full border-5 border-white dark:border-indigo">
        <Image
          src="/vector.svg"
          width={41}
          height={41}
          alt="vector"
          className="absolute top-[22px] left-[22px]"
        />
      </div>
      <div className="absolute top-[70px]">
        <Text
          as="h1"
          className="text-medium text-white font-bold leading-9 text-center"
        >
          Upgrade to PRO
        </Text>
        <Text
          as="h2"
          size={TEXT_SIZE.sm}
          className="text-small text-white leading-5 font-medium text-center"
        >
          to get access to all features! Connect with Venus World!
        </Text>
      </div>
    </div>
  </div>
);
export default Banner;
