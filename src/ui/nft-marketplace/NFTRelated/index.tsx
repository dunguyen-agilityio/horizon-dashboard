// Components
import { ErrorFallback } from '@/components';
import NTFRelated from './NTFRelated';

// Services
import { getNFTsRelated } from '@/services/nft';

const NTFRelatedContainer = async () => {
  const { data, error } = await getNFTsRelated();

  if (error) {
    return <ErrorFallback message={error.message} />;
  }

  return <NTFRelated relatedList={data} />;
};

export default NTFRelatedContainer;
