import { getNFTsRelated } from '@/services/nft';
import { formatNFTResponse } from '@/utils/nft';

const useNFTRelated = async () => {
  const { data, error } = await getNFTsRelated();

  if (error) {
    return { error, data: null };
  }

  const dataFormatted = data.map((item) => formatNFTResponse(item));
  return { data: dataFormatted, error: null };
};

export default useNFTRelated;
