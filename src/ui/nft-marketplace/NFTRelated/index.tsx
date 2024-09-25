// Components
import { ErrorFallback } from '@/components';
import NTFRelated from './NTFRelated';

// Services
import useNFTRelated from '@/hooks/useNFT';

const NTFRelatedContainer = async () => {
  const { data, error } = await useNFTRelated();

  if (error) {
    return <ErrorFallback message={error.message} />;
  }

  return <NTFRelated relatedList={data} />;
};

export default NTFRelatedContainer;
