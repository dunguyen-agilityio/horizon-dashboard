import { DateTimeParts } from '@/types/date';

export const formatDateRelativeToNow = (date: Date) => {
  const currentDate = new Date();

  const timeDifferenceInSeconds = Math.floor((+currentDate - +date) / 1000);
  const minutesElapsed = Math.floor(timeDifferenceInSeconds / 60);
  const hoursElapsed = Math.floor(timeDifferenceInSeconds / 3600);
  const daysElapsed = Math.floor(timeDifferenceInSeconds / 86400);

  switch (true) {
    case timeDifferenceInSeconds < 60:
      return `${timeDifferenceInSeconds}s ago`;
    case timeDifferenceInSeconds < 3600:
      return `${minutesElapsed}m ago`;
    case timeDifferenceInSeconds < 86400:
      return `${hoursElapsed}h ago`;

    case timeDifferenceInSeconds < 172800:
      return `${daysElapsed}d ago`;

    default:
      return date.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
      });
  }
};

export const formatUserName = (userName: string) => {
  return `@${userName}`;
};

export const formatShortDate = (date: Date) =>
  date.toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

export const convertToUTCString = (date: DateTimeParts | null) => {
  if (!date) return null;
  const localDate = new Date(
    date.year,
    date.month - 1,
    date.day,
    date.hour,
    date.minute,
    date.second,
    date.millisecond,
  );

  return localDate.toISOString();
};

export const formatNumber = (number: number) => {
  const numberFormat = number.toString();

  const [integer, decimal] = numberFormat.split('.');

  const formattedNumber = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return decimal ? `${formattedNumber}.${decimal}` : formattedNumber;
};
