// Components
import Image from 'next/image';
import { Text } from '@/components';

// Constants
import { NFT_IMAGES } from '@/constants/images';

// Types
import { TEXT_SIZE } from '@/types/text';

interface NFTCardDetailProps {
  id: number;
}

const NFTCardDetail = async (_: NFTCardDetailProps) => {
  // TODO: should handle call api here ()

  return (
    <div className="flex gap-10 pb-20 flex-wrap 2xl:flex-nowrap">
      <div className="relative h-[450px] w-[1090px] rounded-md overflow-hidden">
        <Image
          src={NFT_IMAGES.DEFAULT}
          alt="NFT Cover"
          className="object-cover"
          fill
        />
      </div>
      <div className="flex flex-col xl:w-2/3 2xl:w-1/3 gap-5">
        <Text size={TEXT_SIZE['2xl']}>Product detail</Text>
        <div className="flex gap-2 items-center">
          <Text className="font-bold">Name:</Text> Mesh Gradients
        </div>
        <div className="flex gap-2 items-center">
          <Text className="font-bold">Author:</Text> Adela Parkson
        </div>
        <Text
          className="text-blue-450 font-bold"
          size={TEXT_SIZE.sm}
        >{`Current Bid: ${123} USD`}</Text>
        <Text className="w-2/3 xl:w-full">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </Text>
      </div>
    </div>
  );
};

export default NFTCardDetail;
