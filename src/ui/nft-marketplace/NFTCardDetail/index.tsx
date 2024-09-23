// Components
import { Text } from '@/components';
import ImageWithBlur from '@/components/ImageWithBlur';

// Types
import { TEXT_SIZE } from '@/types/text';
import { NFTResponse } from '@/models/NFT';
import { formatNFTResponse } from '@/utils/nft';
import { StrapiResponse } from '@/types/strapi';

interface NFTCardDetailProps {
  data: StrapiResponse<NFTResponse>;
}

const NFTCardDetail = async ({ data }: NFTCardDetailProps) => {
  const { name, author, image, description, price } = formatNFTResponse(data);

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
