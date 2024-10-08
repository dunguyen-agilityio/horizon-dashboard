// component
import NFTCardDetail from '@/ui/nft-marketplace/NFTCardDetail';
import NFTCardWrapper from '@/ui/nft-marketplace/NFTCardWrapper';
import { StrapiModel, StrapiResponse } from '@/types/strapi';
import { NFTResponse } from '@/models/NFT';
import { apiClient } from '@/services/api';
import { API_ENTITY } from '@/constants';
import { notFound } from 'next/navigation';

interface NFTMarketDetailProps {
  params: {
    id: number;
  };
}

const NFTMarketDetail = async ({ params: { id } }: NFTMarketDetailProps) => {
  const { data, error } = await apiClient.get<
    StrapiModel<StrapiResponse<NFTResponse>>
  >(`${API_ENTITY.NFTS}/${id}?populate=*`);

  if (error) return notFound();

  return (
    <div className="flex flex-col">
      <NFTCardDetail data={data.data} />
      <NFTCardWrapper />
    </div>
  );
};

export default NFTMarketDetail;
