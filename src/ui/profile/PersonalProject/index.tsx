// Components
import { Text } from '@/components';

// Types
import { TEXT_SIZE, TEXT_VARIANT } from '@/types/text';
import ProjectCard from './ProjectCard';
import { PROJECTS_MOCK } from '@/mocks/projects';

const PersonalProjects = ({ userId }: { userId: number }) => (
  <div className="dark:bg-indigo bg-white py-6 px-8 rounded-md">
    <div className="text-center xl:text-start">
      <Text size={TEXT_SIZE.extra} className="font-extrabold leading-8 mb-3">
        All Projects {userId}
      </Text>
      <Text
        variant={TEXT_VARIANT.SECONDARY}
        className="leading-[26px] tracking-tight mb-7"
      >
        Here you can find more details about your projects. Keep you user
        engaged by providing meaningful information.
      </Text>
    </div>
    <div className="flex flex-col gap-5 mb-2">
      {PROJECTS_MOCK.map(({ baseProject, id, title, imageProject }) => (
        <ProjectCard
          baseProject={baseProject}
          id={id}
          title={title}
          imageProject={imageProject}
          key={id}
        />
      ))}
    </div>
  </div>
);

export default PersonalProjects;
