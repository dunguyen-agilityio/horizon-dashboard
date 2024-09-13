import Image from 'next/image';

// components
import { Text, Button } from '@/components';

// Utils
import { formatDateRelativeToNow } from '@/utils/format';

interface History {
  image: string;
  title: string;
  author: string;
  price: string;
  timeAgo: Date;
}

interface NFTHistoryProps {
  historyList: History[];
}

const NFTHistory = ({ historyList }: NFTHistoryProps) => (
  <div className="flex flex-col bg-white dark:bg-indigo rounded-md w-full 4xl:max-w-nftCard overflow-auto shadow-md pb-[46px] pt-[19px]">
    <div className="flex items-center justify-between p-3 xs:p-[18px]">
      <Text className="leading-8 font-poppins font-bold text-blue-450">
        History
      </Text>

      <Button className="text-blue-450 dark:text-white font-medium bg-gray dark:bg-purple-750 rounded-[70px]">
        See all
      </Button>
    </div>

    <div className="flex justify-center flex-col px-3 xs:px-[18px]">
      {historyList.map(({ image, title, author, price, timeAgo }, index) => (
        <div
          key={index}
          className="flex gap-8 justify-between p-4 xs:p-5 rounded-md hover:shadow-md hover:dark:bg-indigo-light"
        >
          <div className="flex items-center gap-4">
            <Image
              src={image}
              alt={title}
              width={66}
              height={66}
              className="rounded-xl w-10 h-10 xs:w-[66px] xs:h-[66px] object-cover"
            />
            <div className="flex flex-col">
              <Text className="leading-tiny font-bold">Colorful Heaven</Text>
              <Text className="leading-small text-small text-secondary">
                By {author}
              </Text>
            </div>
          </div>

          <div className="flex items-center">
            <Text className="font-bold">{price} $</Text>
          </div>

          <div className="hidden xs:flex items-center">
            <Text className="text-secondary">
              {formatDateRelativeToNow(timeAgo)}
            </Text>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default NFTHistory;
