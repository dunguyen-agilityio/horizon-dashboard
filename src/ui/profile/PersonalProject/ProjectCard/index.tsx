// Components
import Image from 'next/image';
import { Link } from '@nextui-org/link';
import { Text, BoxIcon } from '@/components';
import { Card, CardBody } from '@nextui-org/card';

// Icons
import { Pen } from '@/icons/';

// Types
import { TEXT_SIZE, TEXT_VARIANT } from '@/types/text';

// Constants
import { NFT_IMAGES } from '@/constants';

interface IProjectCardProps {
  id: string;
  title: string;
  baseProject: string;
}

const ProjectCard = ({ id, title, baseProject }: IProjectCardProps) => (
  <Card className="border-none bg-white dark:bg-indigo-light">
    <CardBody>
      <div className="flex flex-col items-center sm:flex-row justify-between relative">
        <Link
          href={`project/${id}`}
          className="absolute -right-1 -top-1 sm:hidden"
        >
          <BoxIcon icon={<Pen />} />
        </Link>
        <div className="relative w-20 h-20 my-2 sm:my-0 rounded-2xl overflow-hidden">
          <Image
            fill
            src={NFT_IMAGES.DEFAULT}
            alt="project-detail"
            className="object-cover"
          />
        </div>
        <div className="xl:ml-5 xl:mr-16 mb-2 sm:mb-0 flex items-center">
          <div className="flex flex-col items-center sm:items-start">
            <Text className="font-medium">{title}</Text>
            <div className="flex items-center gap-[5px]">
              <Text
                size={TEXT_SIZE.sm}
                variant={TEXT_VARIANT.SECONDARY}
                className="font-medium"
              >
                {baseProject}
              </Text>
              <div className="bg-secondary w-1 h-1 rounded-full" />
              <Link
                href="#"
                underline="always"
                className="text-blue-450 dark:text-white"
              >
                <Text
                  size={TEXT_SIZE.sm}
                  variant={TEXT_VARIANT.QUATERNARY}
                  className="font-medium"
                >
                  See project details
                </Text>
              </Link>
            </div>
          </div>
        </div>
        <Link href={`project/${id}`} className="hidden sm:block">
          <BoxIcon icon={<Pen />} customClass="mr-4" />
        </Link>
      </div>
    </CardBody>
  </Card>
);

export default ProjectCard;
