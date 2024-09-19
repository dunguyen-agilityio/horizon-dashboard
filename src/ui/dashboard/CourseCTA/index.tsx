// Services
import { getTeamMember } from '@/services/user';
import CourseCTA from './CourseCTA';
import { ErrorFallback } from '@/components';

const CourseCTAContainer = async () => {
  const { data, error } = await getTeamMember();

  if (error) {
    return (
      <ErrorFallback message={error.message} className="h-[345px] flex-1" />
    );
  }

  return <CourseCTA members={data} />;
};

export default CourseCTAContainer;
