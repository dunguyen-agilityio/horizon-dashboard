import type { Meta, StoryObj } from '@storybook/react';

import Text from '.';
import { TEXT_SIZE, TEXT_VARIANT } from '@/types/text';

const meta = {
  title: 'Components/Text',
  component: Text,
  tags: ['autodocs'],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Medium: Story = {
  args: {
    children: 'Medium',
  },
};

export const ExtraLarge2: Story = {
  args: {
    size: TEXT_SIZE['2xl'],
    children: '2 Extra Large',
  },
};

export const ExtraLarge: Story = {
  args: {
    size: TEXT_SIZE.xl,
    children: 'Extra Large',
  },
};

export const Large: Story = {
  args: {
    size: TEXT_SIZE.lg,
    children: 'Large',
  },
};

export const Small: Story = {
  args: {
    size: TEXT_SIZE.sm,
    children: 'Small',
  },
};

export const ExtraSmall: Story = {
  args: {
    size: TEXT_SIZE.xs,
    children: 'Extra Small',
  },
};

export const Primary: Story = {
  args: {
    children: 'Primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    variant: TEXT_VARIANT.SECONDARY,
  },
};
