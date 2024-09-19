'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSearchParams, usePathname } from 'next/navigation';
import { useDateFormatter } from '@react-aria/i18n';

// Components
import { DateRangePicker } from '@nextui-org/date-picker';

// Constants
import { PARAMS } from '@/constants/params';

// Types
import { ITimeRangePicker } from '@/types/date';

// Utils
import { getLocalTimeZone, CalendarDate } from '@internationalized/date';
import { parseDateRange } from '@/utils/format';

const DateRangePickerComponent = () => {
  const [value, setValue] = useState<{
    start: CalendarDate;
    end: CalendarDate;
  } | null>();

  const formatter = useDateFormatter();

  const { push } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const params = new URLSearchParams(searchParams);

  const handleOnTimeChange = (value: ITimeRangePicker) => {
    setValue(value);
    const formatDateRange = formatter.formatRange(
      value.start.toDate(getLocalTimeZone()),
      value.end.toDate(getLocalTimeZone()),
    );

    const dateRange = parseDateRange(formatDateRange);

    params.set(PARAMS.START_DATE, dateRange.startDate);
    params.set(PARAMS.END_DATE, dateRange.endDate);
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
