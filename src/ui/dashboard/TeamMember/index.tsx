// Services
import { getTeamMember } from '@/services/user';

// Components
import TeamMember from './TeamMember';
import { ErrorFallback } from '@/components';

const TeamMemberContainer = async () => {
  const { data, error } = await getTeamMember();

  if (error) {
    return (
      <ErrorFallback message={error.message} className="h-[345px] flex-1" />
    );
  }

  return <TeamMember members={data} />;
};

export default TeamMemberContainer;
export { default as TeamMemberSkeleton } from './TeamMemberSkeleton';
