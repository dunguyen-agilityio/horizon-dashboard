import type { Meta, StoryObj } from '@storybook/react';

import SummaryCard from '.';

import AddIcon from '@/icons/Add';

const meta = {
  title: 'Components/SummaryCard',
  component: SummaryCard,
  tags: ['autodocs'],
} satisfies Meta<typeof SummaryCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'Earnings',
    counter: 350.5,
    additionalContent: <AddIcon />,
  },
};

export const Secondary: Story = {
  args: {
    variant: 'reverse',
    title: 'Earnings',
    counter: 350.5,
    additionalContent: <AddIcon />,
  },
};

export const CustomAdditionalContent: Story = {
  args: {
    title: 'Earnings',
    counter: 350.5,
    additionalContent: <AddIcon />,
    additionalContentWrapper: 'bg-red-700 dark:bg-red-700',
  },
};

export const Increment: Story = {
  args: {
    variant: 'reverse',
    title: 'Earnings',
    counter: 350.5,
    trendValue: 20,
    trendDescription: 'since last month',
  },
};

export const Decrement: Story = {
  args: {
    variant: 'reverse',
    title: 'Earnings',
    counter: 350.5,
    trendValue: -20,
    trendDescription: 'since last month',
  },
};
