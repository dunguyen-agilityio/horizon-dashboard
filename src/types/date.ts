import { CalendarDate } from '@internationalized/date';

export type DateTimeParts = {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
  millisecond: number;
};

export type TDateOnly = Pick<DateTimeParts, 'year' | 'month' | 'day'>;

export interface ITimeRangePicker {
  start: CalendarDate;
  end: CalendarDate;
}
