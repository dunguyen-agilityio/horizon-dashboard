import { MOCK_CONTRIBUTORS } from '@/mocks/contributor';
import { ContributorTable } from '@/ui/contributor';

const ContributorPage = () => {
  return <ContributorTable data={MOCK_CONTRIBUTORS} page={1} pageCount={1} />;
};

export default ContributorPage;
