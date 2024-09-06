// component
import NFTCardDetail from '@/ui/nft-marketplace/NFTCardDetail';
import NFTCardWrapper from '@/ui/nft-marketplace/NFTCardWrapper';

interface NFTMarketDetailProps {
  params: {
    id: number;
  };
}

const NFTMarketDetail = ({ params }: NFTMarketDetailProps) => {
  return (
    <div className="flex flex-col">
      <NFTCardDetail id={params.id} />

      <NFTCardWrapper />
    </div>
  );
};

export default NFTMarketDetail;
