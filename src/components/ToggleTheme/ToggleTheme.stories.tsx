import type { Meta, StoryObj } from '@storybook/react';
import ToggleTheme from '.';

const meta = {
  title: 'Components/ToggleTheme',
  component: ToggleTheme,
  tags: ['autodocs'],
} satisfies Meta<typeof ToggleTheme>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};
