'use client';

// Components
import { User } from '@nextui-org/user';
import { Listbox, ListboxItem } from '@nextui-org/listbox';
import { BoxIcon, Text } from '@/components';

// Icons
import { Add, More } from '@/icons';

// Utils
import { formatUser } from '@/utils/user';

// Types
import { TUser } from '@/models/User';

interface TeamMemberProps {
  members: TUser[];
}

const TeamMember = ({ members }: TeamMemberProps) => (
  <div className="w-full h-full bg-white dark:bg-indigo rounded-md pt-5 px-2 sm:px-6 pb-[26px] sm:w-card md:w-auto flex flex-col gap-5">
    <div className="flex justify-between items-center h-8">
      <Text as="h2" className="text-lg leading-xl font-bold">
        Team Members
      </Text>
      <button
        aria-label="add icon"
        className="p-[10px] rounded-[10px] bg-gray dark:bg-indigo-light disabled:cursor-not-allowed disabled:opacity-80"
        disabled
      >
        <div className="bg-primary dark:bg-white rounded-full w-6 h-6 flex items-center justify-center">
          <Add color="secondary" />
        </div>
      </button>
    </div>
    <Listbox
      aria-label="Members list"
      items={members}
      classNames={{ list: 'gap-4', base: 'flex-1' }}
    >
      {(item) => {
        const { id, fullName, avatar, role } = formatUser(item);

        return (
          <ListboxItem
            key={id}
            classNames={{
              title: 'flex justify-between items-center px-4 py-3',
              base: 'py-0 ',
            }}
            className="w-full bg-white dark:bg-indigo-light shadow-light-card dark:shadow-none"
          >
            <User
              name={fullName}
              description={role.name}
              classNames={{
                name: 'text-medium font-bold',
                description:
                  'text-tiny font-medium text-secondary dark:text-white',
              }}
              avatarProps={{
                src: avatar?.url,
                classNames: { base: 'w-[46px] h-[46px]' },
              }}
            />
            <button
              disabled
              className="disabled:cursor-not-allowed disabled:opacity-80"
              aria-label="more icon"
            >
              <BoxIcon icon={<More />} customClass="fill-secondary" />
            </button>
          </ListboxItem>
        );
      }}
    </Listbox>
  </div>
);

export default TeamMember;
