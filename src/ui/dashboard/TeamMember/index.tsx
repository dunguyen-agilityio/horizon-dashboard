// Constants
import { API_ENTITY } from '@/constants';

// Services
import { apiClient } from '@/services/api';

// Models
import { UserResponse } from '@/models/User';

// Components
import TeamMember from './TeamMember';
import { ErrorFallback } from '@/components';

const TeamMemberContainer = async () => {
  const { data, error } = await apiClient.get<UserResponse[]>(
    `${API_ENTITY.USERS}?limit=3&populate[0]=avatar&populate[1]=role`,
  );

  if (error) {
    return (
      <ErrorFallback message={error.message} className="h-[345px] flex-1" />
    );
  }

  return <TeamMember members={data} />;
};

export default TeamMemberContainer;
export { default as TeamMemberSkeleton } from './TeamMemberSkeleton';
