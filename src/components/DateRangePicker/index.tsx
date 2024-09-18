'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSearchParams, usePathname } from 'next/navigation';
import { useDateFormatter } from '@react-aria/i18n';

// Components
import { DateRangePicker } from '@nextui-org/date-picker';

// Types
import { ITimeRangePicker } from '@/types/date';

// Utils
import { parseDate, getLocalTimeZone } from '@internationalized/date';
import { parseDateRange } from '@/utils/format';

const DateRangePickerComponent = () => {
  const [value, setValue] = useState<ITimeRangePicker>({
    start: parseDate('2024-09-13'),
    end: parseDate('2024-09-18'),
  });

  const formatter = useDateFormatter();

  const { push } = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const params = new URLSearchParams(searchParams);

  const handleOnTimeChange = (value: ITimeRangePicker) => {
    setValue(value);
    const formatDateRange = formatter.formatRange(
      value.start.toDate(getLocalTimeZone()),
      value.end.toDate(getLocalTimeZone()),
    );

    console.log(formatDateRange);

    const dateRange = parseDateRange(formatDateRange);

    params.set('startDate', dateRange.startDate);
    params.set('endDate', dateRange.endDate);
    push(`${pathname}?${params.toString()}`);
  };

  return (
    <DateRangePicker
      label="Select date"
      className="w-[390px]"
      labelPlacement="outside-left"
      value={value}
      onChange={(value) => handleOnTimeChange(value)}
      classNames={{
        inputWrapper: 'bg-white dark:bg-indigo-light',
        label: 'dark:text-white',
      }}
    />
  );
};

export default DateRangePickerComponent;
