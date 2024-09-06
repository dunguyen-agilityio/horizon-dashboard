// mocks
import { MOCK_CHECKS } from '@/mocks/check';
import { MOCK_COMPLEXES } from '@/mocks/complex';
import { MOCK_SUMMARY_CARD } from '@/mocks/summaryCard';
import { MOCK_USERS } from '@/mocks/user';

// component
import SummaryCard from '@/ui/dashboard/SummaryCard';
import TableCheck from '@/ui/dashboard/TableCheck';
import TableComplex from '@/ui/dashboard/TableComplex';
import CourseCTA from '@/ui/dashboard/CourseCTA';
import TeamMember from '@/ui/dashboard/TeamMember';
import SafetyCard from '@/ui/dashboard/SafetyCard';
import CashBackCard from '@/ui/dashboard/CashbackCard';

const Dashboard = () => (
  <div className="flex flex-col">
    <div className="flex gap-5 flex-wrap justify-center">
      {MOCK_SUMMARY_CARD.map((item, index) => (
        <SummaryCard key={index} {...item} />
      ))}
    </div>
    <div className="flex flex-wrap gap-5 pt-5">
      <TableCheck data={MOCK_CHECKS} />
      <TableComplex data={MOCK_COMPLEXES} />
    </div>
    <div className="flex flex-wrap gap-5 pt-5 justify-center">
      <CourseCTA />
      <TeamMember members={MOCK_USERS} />
      <SafetyCard />
      <CashBackCard />
    </div>
  </div>
);
export default Dashboard;
