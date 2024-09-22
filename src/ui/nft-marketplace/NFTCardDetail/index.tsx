// Components
import { ErrorFallback, Text } from '@/components';
import ImageWithBlur from '@/components/ImageWithBlur';

// Constants
import { API_ENTITY } from '@/constants';

// Services
import { apiClient } from '@/services/api';

// Types
import { TEXT_SIZE } from '@/types/text';
import { NFTResponse } from '@/models/NFT';
import { formatNFTResponse } from '@/utils/nft';
import { StrapiModel, StrapiResponse } from '@/types/strapi';

interface NFTCardDetailProps {
  id: number;
}

const NFTCardDetail = async ({ id }: NFTCardDetailProps) => {
  const { data, error } = await apiClient.get<
    StrapiModel<StrapiResponse<NFTResponse>>
  >(`${API_ENTITY.NFTS}/${id}?populate=*`);

  if (error)
    return (
      <ErrorFallback
        message={error.message}
        className="h-[860px] bg-gray dark:bg-indigo-dark"
      />
    );

  const { name, author, image, description, price } = formatNFTResponse(
    data.data,
  );

  return (
    <div className="flex gap-10 pb-20 flex-wrap 2xl:flex-nowrap">
      <div className="relative h-[450px] w-[1090px] rounded-md overflow-hidden">
        <ImageWithBlur
          src={image.url}
          alt="NFT Cover"
          additionalClasses="object-cover"
          fill
        />
      </div>
      <div className="flex flex-col xl:w-2/3 2xl:w-1/3 gap-5">
        <Text size={TEXT_SIZE['2xl']}>{name}</Text>
        <Text>By {author.fullName}</Text>
        <Text className="text-blue-450" size={TEXT_SIZE.md}>
          Current bid {price} $
        </Text>
        <Text className="w-full md:w-2/3 lg:w-full">{description}</Text>
      </div>
    </div>
  );
};

export default NFTCardDetail;
