import { Suspense } from 'react';
import { notFound } from 'next/navigation';

// Components
import NFTCardDetail from '@/ui/nft-marketplace/NFTCardDetail';
import { HorizontalNFTsSkeleton, NFTRelated } from '@/ui/nft-marketplace';

// Types
import { StrapiModel, StrapiResponse } from '@/types/strapi';

// Models
import { NFTResponse } from '@/models/NFT';

// Services
import { apiClient } from '@/services/api';

// Constants
import { API_ENTITY } from '@/constants';

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
      <Suspense fallback={<HorizontalNFTsSkeleton />}>
        <NFTRelated />
      </Suspense>
    </div>
  );
};

export default NFTMarketDetail;
