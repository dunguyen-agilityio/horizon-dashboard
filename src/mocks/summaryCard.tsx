// types
import { SummaryCardProps, TrendInfo } from '@/ui/dashboard/SummaryCard';

// icons
import AddIcon from '@/icons/Add';

export type SummaryCard = SummaryCardProps & TrendInfo;

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
    variant: 'secondary',
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
