import type { Meta, StoryObj } from '@storybook/react';

import TableCheck from '.';
import { MOCK_CHECKS } from '@/mocks/check';

const meta = {
  title: 'ui/TableCheck',
  component: TableCheck,
  tags: ['autodocs'],
} satisfies Meta<typeof TableCheck>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { rows: MOCK_CHECKS },
};
