// types
import { SummaryCardProps, TrendInfo } from '@/ui/dashboard/SummaryCard';

// icons
import AddIcon from '@/icons/Add';
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

export const MOCK_SUMMARY_CARD: SummaryCard[] = [
  {
    title: 'Earnings',
    counter: 350.5,
    additionalContent: <AddIcon />,
  },
  {
    title: 'Earnings',
    counter: 350.5,
    additionalContent: <AddIcon />,
  },
  {
    title: 'Earnings',
    counter: 350.5,
    trendValue: 20,
    trendDescription: 'since last month',
  },
  {
    variant: 'secondary',
    title: 'Earnings',
    counter: 350.5,
    additionalContent: <AddIcon />,
  },
  {
    title: 'Earnings',
    counter: 350.5,
    additionalContent: <AddIcon />,
  },
  {
    title: 'Earnings',
    counter: 350.5,
    additionalContent: <AddIcon />,
  },
];
