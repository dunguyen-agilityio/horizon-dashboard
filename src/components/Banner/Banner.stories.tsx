import type { Meta, StoryObj } from '@storybook/react';

// Components
import { Banner } from '@/components';

const meta = {
  title: 'Components/Banner',
  component: Banner,
  tags: ['autodocs'],
} satisfies Meta<typeof Banner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
