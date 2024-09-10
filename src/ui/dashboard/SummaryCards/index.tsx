import SummaryCard from '../SummaryCard';
import { BoxIcon } from '@/components';
import { Chart } from '@/icons';
import USDMoney from '@/icons/Money';
import AddCheck from '@/icons/AddCheck';
import Copy from '@/icons/Copy';
import { Earning } from '@/types/earning';
import SelectFlag from '@/components/SelectFlag';

const SummaryCards = ({
  balance,
  earning,
  project,
  sale,
  spend,
  task,
  trending,
}: Earning) => (
  <div className="flex flex-col flex-wrap sm:grid sm:grid-cols-2 sm:grid-rows-3 md:grid-cols-3 md:grid-rows-2 2xl:flex 2xl:flex-row 2xl:flex-nowrap gap-5">
    <SummaryCard
      title="Earnings"
      counter={earning}
      additionalContent={
        <BoxIcon icon={<Chart />} customClass="[&_path]:fill-blue-450" />
      }
    />
    <SummaryCard
      title="Spend this Month"
      counter={spend}
      additionalContent={
        <BoxIcon icon={<USDMoney />} customClass="[&_path]:fill-blue-450" />
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
        <BoxIcon icon={<Copy />} customClass="[&_path]:fill-blue-450" />
      }
      additionalContentWrapper=""
    />
  </div>
);

export default SummaryCards;
