import { getNFTsHistory } from '@/services/nft';
import NFTHistory from './NFTHistory';
import { ErrorFallback } from '@/components';

const NFTHistoryContainer = async () => {
  const { data, error } = await getNFTsHistory();

  if (error) {
    return <ErrorFallback message={error.message} />;
  }

  return <NFTHistory historyList={data} />;
};

export default NFTHistoryContainer;
