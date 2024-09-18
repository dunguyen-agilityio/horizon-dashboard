import type { Meta, StoryObj } from '@storybook/react';

// Components
import { ContributorTableSkeleton } from '@/components/Skeleton/ContributorTableSkeleton';

const meta = {
  title: 'Components/Skeleton/ContributorTableSkeleton',
  component: ContributorTableSkeleton,
  tags: ['autodocs'],
} satisfies Meta<typeof ContributorTableSkeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
