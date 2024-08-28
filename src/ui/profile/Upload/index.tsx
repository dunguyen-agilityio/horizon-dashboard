// types
import { TEXT_VARIANT } from '@/types/text';

// icons
import { UploadFile } from '@/icons';

// components
import { BoxIcon, Button, Text } from '@/components';

const UploadProfile = () => (
  <div className="flex gap-9 p-7 bg-white rounded-md dark:bg-indigo-light w-[617px] h-[365px]">
    <div className="">
      <div className="flex flex-col gap-6 justify-center items-center bg-grayest dark:bg-indigo-light w-[268px] h-[311px] rounded-md border-dashed border-2 border-amber-450 dark:border-secondary">
        <BoxIcon
          icon={<UploadFile />}
          customClass="w-12 h-14fill-indigo-light fill-blue-450 dark:fill-white"
        />
        <div>
          <Text
            variant={TEXT_VARIANT.QUATERNARY}
            className="text-blue-450 font-bold text-[20px] text-center"
          >
            Upload Files
          </Text>
          <Text className="font-normal text-secondary dark:!text-secondary text-[12px] text-center">
            PNG, JPG and GIF files are allowed
          </Text>
        </div>
      </div>
    </div>
    <div className="flex flex-col justify-around">
      <div>
        <Text className="font-bold text-[24px]">Complete your profile</Text>
        <Text className="font-normal text-secondary dark:!text-secondary">
          Stay on the pulse of distributed projects with an anline whiteboard to
          plan, coordinate and discuss
        </Text>
      </div>

      <Button className="bg-blue-450 text-white w-1/2 dark:bg-purple-750">
        Publish now
      </Button>
    </div>
  </div>
);

export default UploadProfile;
