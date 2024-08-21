import { Text } from '@/components';
import { STARBUCKS_IMAGE } from '@/constants/images';
import FastFood from '@/icons/FastFood';
import Watch from '@/icons/Watch';
import { TEXT_SIZE, TEXT_VARIANT } from '@/types/text';
import Image from 'next/image';

const { COVER, LOGO } = STARBUCKS_IMAGE;

const CashBackCard = () => (
  <div className="w-full sm:w-card bg-white dark:bg-indigo p-5 pb-[33px] rounded-md">
    <div className="relative w-full h-[185px]">
      <Image src={COVER} fill alt="Starbucks Cover" />
      <Image
        src={LOGO}
        alt="Starbucks Logo"
        width={60}
        height={60}
        className="absolute -bottom-[30px] left-[13px]"
      />
      <button
        disabled
        className="p-[10px] rounded-xl absolute top-[14px] right-[14px] bg-gradient-gray backdrop:blur-[25px] disabled:cursor-default"
      >
        <Watch />
      </button>
    </div>
    <Text className="pt-10" size={TEXT_SIZE.extra} as="h3">
      Starbucks
    </Text>
    <div className="pt-[6px] flex items-center gap-[10px]">
      <FastFood />
      <Text
        variant={TEXT_VARIANT.SECONDARY}
        className="text-lg font-bold"
        as="span"
      >
        10% cashback & off
      </Text>
    </div>
  </div>
);

export default CashBackCard;
