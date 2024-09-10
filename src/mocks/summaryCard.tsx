// types
import { SummaryCardProps, TrendInfo } from '@/ui/dashboard/SummaryCard';
import { Earning } from '@/types/earning';

export type SummaryCard = SummaryCardProps & TrendInfo;

export const MOCK_EARNINGS_COUNTER_DATA: Earning = {
  earning: 350.5,
  spend: 682.5,
  sale: 574.34,
  balance: 1000,
  task: 154,
  project: 2935,
  trending: 23,
};
