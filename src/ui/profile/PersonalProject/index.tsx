// Components
import { Text } from '@/components';

// Types
import { TEXT_SIZE, TEXT_VARIANT } from '@/types/text';

const PersonalProjects = ({ userId }: { userId: number }) => (
  <div className="dark:bg-indigo bg-white w-[350px] sm:w-full lg:w-[552px] py-6 px-8 rounded-md">
    <div className="text-center xl:text-start">
      <Text size={TEXT_SIZE.extra} className="font-extrabold leading-8 mb-4">
        All Projects {userId}
      </Text>
      <Text
        variant={TEXT_VARIANT.SECONDARY}
        className="leading-[26px] tracking-tight mb-8"
      >
        Here you can find more details about your projects. Keep you user
        engaged by providing meaningful information.
      </Text>
    </div>
    <div className="flex flex-col gap-5 mb-2">
      {/* TODO: will use user id to fetching project data and render ProjectCard */}
    </div>
  </div>
);

export default PersonalProjects;
