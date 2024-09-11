// Components
import SafetyIcon from '@/icons/Safety';
import { BoxIcon, Button, Text } from '@/components';

// Types
import { TEXT_SIZE, TEXT_VARIANT } from '@/types/text';

const SafetyCard = () => (
  <div className="w-full h-full sm:w-card md:w-auto bg-white dark:bg-indigo-light rounded-md pt-[30px] pr-[30px] pb-[23px] pl-5">
    <div className="flex flex-col gap-[17px]">
      <BoxIcon icon={<SafetyIcon />} customClass="w-fit h-auto" />
      <Text size={TEXT_SIZE.extra}>
        Control card security
        <br /> in-app with a tap
      </Text>
      <Text
        variant={TEXT_VARIANT.SECONDARY}
        size={TEXT_SIZE.sm}
        className="font-medium"
      >
        Discover our cards benefits, with one tap.
      </Text>
    </div>
    <Button
      disabled
      className="bg-blue-450 dark:bg-purple-750 w-full mt-[36px] font-bold text-sm disabled:cursor-not-allowed disabled:opacity-70 py-[11px] text-white"
    >
      Cards
    </Button>
  </div>
);

export default SafetyCard;
