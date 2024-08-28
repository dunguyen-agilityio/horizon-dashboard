import type { Meta, StoryObj } from '@storybook/react';

import NFTCard from '.';

import { MOCK_NFTS } from '@/mocks/nft';

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
  },
};
