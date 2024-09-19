import type { Meta, StoryObj } from '@storybook/react';

import NFTCard from '.';

import { MOCK_NFTS } from '@/mocks/nft';

// Utils
import { formatUser } from '@/utils/user';

const MOCK_NFT = MOCK_NFTS[0];

const meta = {
  title: 'ui/NFTCard',
  component: NFTCard,
  tags: ['autodocs'],
} satisfies Meta<typeof NFTCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ...MOCK_NFT,
    author: formatUser(MOCK_NFT.author),
  },
};
