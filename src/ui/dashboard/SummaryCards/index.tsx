// Components
import SummaryCard from '../SummaryCard';
import { BoxIcon, SelectFlag } from '@/components';

// Icons
import { Chart, USDMoney, AddCheck, Copy } from '@/icons';

// Types
import { Earning } from '@/types/earning';

const customIconClass = '[&_path]:fill-blue-450 [&_path]:dark:fill-white';

const SummaryCards = ({
  balance,
  earning,
  project,
  sale,
  spend,
  task,
  trending,
}: Earning) => (
  <div className="flex flex-col flex-wrap xs:grid xs:grid-cols-2 xs:grid-rows-3 md:grid-cols-3 md:grid-rows-2 2xl:flex 2xl:flex-row 2xl:flex-nowrap gap-5">
    <SummaryCard
      title="Earnings"
      counter={earning}
      additionalContent={
        <BoxIcon icon={<Chart />} customClass={customIconClass} />
      }
    />
    <SummaryCard
      title="Spend this Month"
      counter={spend}
      additionalContent={
        <BoxIcon icon={<USDMoney />} customClass={customIconClass} />
      }
    />
    <SummaryCard
      title="Sales"
      counter={sale}
      trendDescription="since last month"
      trendValue={trending}
    />
    <SummaryCard
      title="Your balance"
      counter={balance}
      additionalContent={<SelectFlag />}
      variant="secondary"
      additionalContentWrapper="p-0 !bg-transparent relative"
    />
    <SummaryCard
      title="New Tasks"
      counter={task}
      additionalContent={<BoxIcon icon={<AddCheck />} />}
      additionalContentWrapper="bg-gradient-blue"
    />
    <SummaryCard
      title="Total Projects"
      counter={project}
      additionalContent={
        <BoxIcon icon={<Copy />} customClass={customIconClass} />
      }
    />
  </div>
);

export default SummaryCards;
