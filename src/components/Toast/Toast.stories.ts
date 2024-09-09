import type { Meta, StoryObj } from '@storybook/react';

import Toast from '.';
import { fn } from '@storybook/test';

const meta = {
  title: 'Components/Toast',
  component: Toast,
  tags: ['autodocs'],
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    title: 'Success',
    message: 'This is messaging!',
    type: 'success',
    onClose: fn(),
  },
};

export const Error: Story = {
  args: { title: 'Error', message: 'This is messaging!', type: 'error' },
};

export const Info: Story = {
  args: { title: 'Info', message: 'This is messaging!', type: 'info' },
};

export const Warning: Story = {
  args: { title: 'Warning', message: 'This is messaging!', type: 'warning' },
};
