// Components
import Image from 'next/image';
import { Text, BoxIcon } from '@/components';

// Icons
import { Pen } from '@/icons/';

// Types
import { TEXT_SIZE, TEXT_VARIANT } from '@/types/text';
import { Card, CardBody } from '@nextui-org/card';
import { NFT_IMAGES } from '@/constants';
import { Link } from '@nextui-org/link';

const Projects = ({ id }: { id: number }) => (
  <div className="dark:bg-indigo bg-white w-[350px] sm:w-full lg:w-[552px] py-6 px-8 rounded-md">
    <div className="text-center xl:text-start">
      <Text size={TEXT_SIZE.extra} className="font-extrabold leading-8 mb-4">
        All Projects {id}
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
      <Card isBlurred className="border-none dark:bg-indigo-light">
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
                <Text className="font-medium">
                  Technology behind the Blockchain
                </Text>
                <div className="flex items-center gap-[5px]">
                  <Text
                    size={TEXT_SIZE.sm}
                    variant={TEXT_VARIANT.SECONDARY}
                    className="font-medium"
                  >
                    Project #1
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
    </div>
  </div>
);

export default Projects;
