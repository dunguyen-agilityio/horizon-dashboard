// Components
import { Input } from '@nextui-org/input';
import { Text } from '@/components';

// Types
import { TEXT_SIZE, TEXT_VARIANT } from '@/types/text';

interface IGeneralInformationProps {
  title?: string;
  description?: string;
  listData: string[];
}

const MOCK_GENERAL_INFO = [
  {
    id: 1,
    title: 'Education',
    content: 'Stanford University',
  },
  {
    id: 2,
    title: 'Languages',
    content: 'English, Spanish, Italian',
  },
  {
    id: 3,
    title: 'Department',
    content: 'Product Design',
  },
  {
    id: 4,
    title: 'Work History',
    content: 'Google, Facebook',
  },
  {
    id: 5,
    title: 'Organization',
    content: 'Simmmple Web LLC',
  },
  {
    id: 6,
    title: 'Birthday',
    content: '20 July 1986',
  },
];

const GeneralInformation = ({
  title = 'General Information',
  description = 'This is the general information about user',
}: IGeneralInformationProps) => (
  <div className="dark:bg-indigo bg-white w-[350px] lg:w-[430px] xl:w-[617px] pt-[23px] p-[31px] rounded-md">
    <div className="text-center xl:text-start">
      <Text size={TEXT_SIZE.extra} className="font-extrabold leading-8 mb-4">
        {title}
      </Text>
      <Text
        variant={TEXT_VARIANT.SECONDARY}
        className="leading-[26px] tracking-tight mb-8"
      >
        {description}
      </Text>
    </div>
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
      {MOCK_GENERAL_INFO.map((info) => (
        <Input
          key={info.id}
          required={false}
          size="lg"
          label={info.title}
          className="px-2 py-4 bg-[#f5f7ff] dark:bg-indigo-light rounded-md"
          classNames={{
            label: 'text-red-500 ',
            input: 'text-red-500',
            inputWrapper: 'dark:bg-indigo-light',
          }}
          defaultValue={info.content}
        />
      ))}
    </div>
  </div>
);

export default GeneralInformation;
