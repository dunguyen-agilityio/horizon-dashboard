'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSearchParams, usePathname } from 'next/navigation';

// Components
import { DateRangePicker } from '@nextui-org/date-picker';

// Constants
import { PARAMS } from '@/constants/params';

// Types
import { ITimeRangePicker } from '@/types/date';

// Utils
import { CalendarDate } from '@internationalized/date';
import { parseDateRanged } from '@/utils/format';

const DateRangePickerComponent = () => {
  const [value, setValue] = useState<{
    start: CalendarDate;
    end: CalendarDate;
  } | null>();

  const { push } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const params = new URLSearchParams(searchParams);

  const handleOnTimeChange = (value: ITimeRangePicker) => {
    setValue(value);
    const formatDateRange = parseDateRanged(value.start, value.end);

    params.set(PARAMS.START_DATE, formatDateRange.startDate);
    params.set(PARAMS.END_DATE, formatDateRange.endDate);
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
