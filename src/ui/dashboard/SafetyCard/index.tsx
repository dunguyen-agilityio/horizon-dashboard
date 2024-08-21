import { Button, Text } from '@/components';
import SafetyIcon from '@/icons/Safety';
import { TEXT_SIZE, TEXT_VARIANT } from '@/types/text';

const SafetyCard = () => {
  return (
    <div className="w-full sm:w-card bg-white dark:bg-indigo-light rounded-md pt-[30px] pr-[30px] pb-[23px] pl-5">
      <div className="flex flex-col gap-[17px]">
        <SafetyIcon />
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
        color="primary"
        className="dark:bg-purple-750 w-full mt-[36px] font-bold text-sm"
      >
        Cards
      </Button>
    </div>
  );
};

export default SafetyCard;
