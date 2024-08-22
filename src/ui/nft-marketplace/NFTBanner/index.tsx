// Components
import Link from 'next/link';
import Image from 'next/image';
import { Text } from '@/components';

// Constants
import { NFT_IMAGES } from '@/constants/images';

// Types
import { TEXT_SIZE } from '@/types/text';

const { COVER } = NFT_IMAGES;

const NFTBanner = () => (
  <div className="relative flex-1 relative h-[350px] rounded-md bg-blue-450 dark:bg-purple-750">
    <div className="absolute right-0 h-[350px] w-full max-w-[1090px]">
      <Image
        src={COVER}
        alt="NFT Cover"
        fill
        className="object-cover"
        sizes="(max-width: 440px) 60vw, 100vw"
      />
    </div>
    <div className="absolute inset-0 z-10 px-5 py-10 sm:p-10">
      <Text
        as="h1"
        size={TEXT_SIZE['2xl']}
        className="text-white whitespace-break-spaces"
      >
        {'Discover, collect, and\nsell extraordinary NFTs'}
      </Text>
      <Text
        className="text-purple-150 mt-[14px] leading-medium whitespace-break-spaces"
        size={TEXT_SIZE.md}
      >
        {
          'Enter in this creative world. Discover now the\nlatest NFTs or start creating your own!'
        }
      </Text>
      <Link
        className="text-purple-150 text-medium block w-fit mt-[41px] hover:underline font-medium"
        href="#"
      >
        Watch video
      </Link>
    </div>
  </div>
);

export default NFTBanner;
