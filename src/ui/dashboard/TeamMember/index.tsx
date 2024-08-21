import { Text } from '@/components';
import { User } from '@nextui-org/user';
import { Listbox, ListboxItem } from '@nextui-org/listbox';
import { User as UserModel } from '@/models/User';
import { Add } from '@/icons';
import More from '@/icons/More';

interface TeamMemberProps {
  members: UserModel[];
}

const TeamMember = ({ members }: TeamMemberProps) => (
  <div className="bg-white dark:bg-indigo rounded-md p-7 w-full sm:w-[382px]">
    <div className="flex justify-between items-center">
      <Text as="h2" className="text-lg leading-xl font-bold">
        Team Members
      </Text>
      <button
        className="p-[10px] rounded-[10px] bg-gray dark:bg-indigo-light disabled:cursor-not-allowed disabled:opacity-80"
        disabled
      >
        <div className="bg-primary dark:bg-white rounded-full w-6 h-6 flex items-center justify-center">
          <Add color="secondary" />
        </div>
      </button>
    </div>
    <Listbox items={members} classNames={{ list: 'gap-4', base: 'pt-5' }}>
      {(item) => {
        const { avatar, id, fullName, role } = new UserModel(item);

        return (
          <ListboxItem
            key={id}
            classNames={{
              title: 'flex justify-between items-center px-4 py-3',
            }}
            className="w-full bg-white dark:bg-indigo-light shadow-light-card dark:shadow-none"
          >
            <User
              name={fullName}
              description={role}
              classNames={{
                name: 'text-medium font-bold',
                description: 'text-tiny font-medium text-secondary',
              }}
              avatarProps={{
                src: avatar,
                classNames: { base: 'w-[46px] h-[46px]' },
              }}
            />
            <button
              disabled
              className="disabled:cursor-not-allowed disabled:opacity-80"
            >
              <More />
            </button>
          </ListboxItem>
        );
      }}
    </Listbox>
  </div>
);

export default TeamMember;
