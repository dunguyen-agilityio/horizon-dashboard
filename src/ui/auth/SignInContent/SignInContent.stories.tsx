import type { Meta, StoryObj } from '@storybook/react';

import SignInForm from '@/ui/auth/SignInContent';

const meta = {
  title: 'Components/SignInForm',
  component: SignInForm,
  tags: ['autodocs'],
} satisfies Meta<typeof SignInForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
