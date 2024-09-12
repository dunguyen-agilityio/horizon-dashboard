import type { Meta, StoryObj } from '@storybook/react';

// Components
import ItemNotFound from '.';

// Constants
import { PUBLIC_ROUTES } from '@/constants';

const meta = {
  title: 'Components/ItemNotFound',
  component: ItemNotFound,
  tags: ['autodocs'],
} satisfies Meta<typeof ItemNotFound>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ItemNotFoundWithoutNavigation: Story = {
  args: {
    title: 'Start Find Your Favorite NFTs',
    description:
      'Browse our collection and click the heart icon to add NFTs to your favorites list!',
  },
};

export const ItemNotFoundWithNavigation: Story = {
  args: {
    ...ItemNotFoundWithoutNavigation.args,
    href: PUBLIC_ROUTES.NFT_MARKETPLACE,
  },
};

export const ItemNotFoundWithLabel: Story = {
  args: {
    ...ItemNotFoundWithoutNavigation.args,
    href: PUBLIC_ROUTES.NFT_MARKETPLACE,
    label: 'Explore More NFT',
  },
};
