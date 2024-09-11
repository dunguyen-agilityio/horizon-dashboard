// mocks
import { MOCK_CHECKS } from '@/mocks/check';
import { MOCK_COMPLEXES } from '@/mocks/complex';
import { MOCK_EARNINGS_COUNTER_DATA } from '@/mocks/summaryCard';
import { MOCK_USERS } from '@/mocks/user';

// component
import TableCheck from '@/ui/dashboard/TableCheck';
import TableComplex from '@/ui/dashboard/TableComplex';
import CourseCTA from '@/ui/dashboard/CourseCTA';
import TeamMember from '@/ui/dashboard/TeamMember';
import SafetyCard from '@/ui/dashboard/SafetyCard';
import CashBackCard from '@/ui/dashboard/CashbackCard';
import SummaryCards from '@/ui/dashboard/SummaryCards';

const Dashboard = () => (
  <div className="flex flex-col gap-5">
    <SummaryCards {...MOCK_EARNINGS_COUNTER_DATA} />
    <div className="flex flex-col 2xl:flex-row gap-5">
      <TableCheck data={MOCK_CHECKS} />
      <TableComplex data={MOCK_COMPLEXES} />
    </div>
    <div className="flex flex-col md:grid md:grid-cols-2 md:grid-rows-2 4xl:flex 4xl:flex-row gap-5">
      <div className="flex-1 h-[345px]">
        <CourseCTA />
      </div>
      <div className="flex-1 h-[345px]">
        <TeamMember members={MOCK_USERS.slice(0, 3)} />
      </div>
      <div className="flex-1 h-[345px]">
        <SafetyCard />
      </div>
      <div className="flex-1 h-[345px]">
        <CashBackCard />
      </div>
    </div>
  </div>
);

export default Dashboard;
