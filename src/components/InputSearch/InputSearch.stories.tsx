import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/react';

import InputSearch from '.';

const meta = {
  title: 'Components/InputSearch',
  component: InputSearch,
  tags: ['autodocs'],
  decorators: (Story) => (
    <div className="bg-white dark:bg-indigo p-4 rounded-[30px]">
      <Story />
    </div>
  ),
} satisfies Meta<typeof InputSearch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSearch: fn(),
  },
};

export const WithValue: Story = {
  args: {
    onSearch: fn(),
    defaultValue: 'Sea',
  },
};
