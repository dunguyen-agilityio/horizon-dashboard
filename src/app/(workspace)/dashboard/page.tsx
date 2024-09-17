import { Suspense } from 'react';

// component
import TableComplex from '@/ui/dashboard/TableComplex';
import CourseCTA from '@/ui/dashboard/CourseCTA';
import SafetyCard from '@/ui/dashboard/SafetyCard';
import CashBackCard from '@/ui/dashboard/CashbackCard';
import TableCheck, { TableCheckSkeleton } from '@/ui/dashboard/TableCheck';
import TeamMember, { TeamMemberSkeleton } from '@/ui/dashboard/TeamMember';
import SummaryCards, { SummaryCardSkeleton } from '@/ui/dashboard/SummaryCards';

const Dashboard = () => (
  <div className="flex flex-col gap-5">
    <Suspense fallback={<SummaryCardSkeleton />}>
      <SummaryCards />
    </Suspense>
    <div className="flex flex-col 2xl:flex-row gap-5">
      <Suspense fallback={<TableCheckSkeleton />}>
        <TableCheck />
      </Suspense>
      <Suspense fallback={<TableCheckSkeleton />}>
        <TableComplex />
      </Suspense>
    </div>
    <div className="flex flex-col md:grid md:grid-cols-2 md:grid-rows-2 4xl:flex 4xl:flex-row gap-5">
      <div className="flex-1 h-[345px]">
        <CourseCTA />
      </div>
      <div className="flex-1 h-[345px]">
        <Suspense fallback={<TeamMemberSkeleton />}>
          <TeamMember />
        </Suspense>
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
