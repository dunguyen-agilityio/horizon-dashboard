'use client';

import { Controller, useForm } from 'react-hook-form';

// Components
import { Input } from '@nextui-org/input';
import { Text } from '@/components';

// Types
import { TEXT_SIZE, TEXT_VARIANT } from '@/types/text';

export interface IUserInformation {
  education: string;
  languages: string;
  department: string;
  work: string;
  organization: string;
  birthday: string;
}

const infoFormInitValues: IUserInformation = {
  education: '',
  languages: '',
  department: '',
  work: '',
  organization: '',
  birthday: '',
};

export const GENERAL_CONTENT = {
  title: 'General Information',
  description:
    'As we live, our hearts turn colder. Cause pain is what we go through as we become older. We get insulted by others, lose trust for those others. We get back stabbed by friends. It becomes harder for us to give others a hand. We get our heart broken by people we love, even that we give them all...',
};

const customClass =
  'px-2 py-4 dark:bg-indigo-light shadow-light-card dark:shadow-none hover:bg-white rounded-md';

const customClassNames = {
  label: 'group-data-[filled-within=true]:text-secondary',
  input:
    'group-data-[has-value=true]:text-primary group-data-[has-value=true]:dark:text-white',
  inputWrapper:
    'bg-white group-data-[focus=true]:bg-white data-[hover=true]:bg-white hover:bg-white dark:bg-indigo-light group-data-[focus=true]:dark:bg-indigo-light shadow-none',
};

const GeneralInformation = () => {
  const { control } = useForm<IUserInformation>({
    mode: 'onBlur',
    values: infoFormInitValues,
  });

  return (
    <div className="dark:bg-indigo bg-white w-[350px] sm:w-full lg:w-[430px] xl:w-[617px] pt-[23px] p-[31px] rounded-md">
      <div className="text-center xl:text-start">
        <Text size={TEXT_SIZE.extra} className="font-extrabold leading-8 mb-4">
          {GENERAL_CONTENT.title}
        </Text>
        <Text
          variant={TEXT_VARIANT.SECONDARY}
          className="leading-[26px] tracking-tight mb-8"
        >
          {GENERAL_CONTENT.description}
        </Text>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-2 gap-5">
        {/* Education field */}
        <Controller
          name="education"
          control={control}
          render={({ field }) => (
            <Input
              key="education-input"
              size="lg"
              placeholder="Update your education"
              label="Education"
              className={customClass}
              classNames={customClassNames}
              {...field}
            />
          )}
        />

        {/* Languages */}
        <Controller
          name="languages"
          control={control}
          render={({ field }) => (
            <Input
              key="language-input"
              size="lg"
              placeholder="Update your language"
              label="Languages"
              className={customClass}
              classNames={customClassNames}
              {...field}
            />
          )}
        />

        {/* Department */}
        <Controller
          name="department"
          control={control}
          render={({ field }) => (
            <Input
              key="department-input"
              size="lg"
              placeholder="Update your department"
              label="Department"
              className={customClass}
              classNames={customClassNames}
              {...field}
            />
          )}
        />

        {/* Work History */}
        <Controller
          name="work"
          control={control}
          render={({ field }) => (
            <Input
              key="work-input"
              size="lg"
              placeholder="Update your work"
              label="Work History"
              className={customClass}
              classNames={customClassNames}
              {...field}
            />
          )}
        />

        {/* Organization */}
        <Controller
          name="organization"
          control={control}
          render={({ field }) => (
            <Input
              key="organization-input"
              size="lg"
              placeholder="Update your organization"
              label="Organization"
              className={customClass}
              classNames={customClassNames}
              {...field}
            />
          )}
        />

        {/* Birthday */}
        <Controller
          name="birthday"
          control={control}
          render={({ field }) => (
            <Input
              key="birthday-input"
              size="lg"
              type="date"
              placeholder="Update your birthday"
              label="Birthday"
              className={customClass}
              classNames={customClassNames}
              {...field}
            />
          )}
        />
      </div>
    </div>
  );
};

export default GeneralInformation;
