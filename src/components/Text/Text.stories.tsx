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
    text: 'Medium',
  },
};

export const ExtraLarge2: Story = {
  args: {
    size: TEXT_SIZE['2xl'],
    text: '2 Extra Large',
  },
};

export const ExtraLarge: Story = {
  args: {
    size: TEXT_SIZE.xl,
    text: 'Extra Large',
  },
};

export const Large: Story = {
  args: {
    size: TEXT_SIZE.lg,
    text: 'Large',
  },
};

export const Small: Story = {
  args: {
    size: TEXT_SIZE.sm,
    text: 'Small',
  },
};

export const ExtraSmall: Story = {
  args: {
    size: TEXT_SIZE.xs,
    text: 'Extra Small',
  },
};

export const Primary: Story = {
  args: {
    text: 'Primary',
  },
};

export const Secondary: Story = {
  args: {
    text: 'Secondary',
    variant: TEXT_VARIANT.SECONDARY,
  },
};
