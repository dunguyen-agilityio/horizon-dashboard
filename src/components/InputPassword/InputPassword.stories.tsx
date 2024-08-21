import type { Meta, StoryObj } from '@storybook/react';

import InputPassword from '@/components/InputPassword';
import { fn } from '@storybook/test';

const meta = {
  title: 'Components/InputPassword',
  component: InputPassword,
  tags: ['autodocs'],
} satisfies Meta<typeof InputPassword>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { onChange: fn() },
};

export const InputPasswordWithDefaultValue: Story = {
  args: {
    ...Default.args,
    defaultValue: 'This is the default',
  },
};

export const InputPasswordIsDisable: Story = {
  args: {
    ...InputPasswordWithDefaultValue.args,
    isDisabled: true,
  },
};

export const InputPasswordWithErrorMessage: Story = {
  args: {
    ...InputPasswordWithDefaultValue.args,
    errorMessage: 'Password is not correct',
    isInvalid: true,
  },
};

export const InputPasswordIsReadOnly: Story = {
  args: {
    onChange: fn(),
    value: 'HandlePasswordWithLove@123',
    isReadOnly: true,
  },
};

export const InputPasswordWithPlaceholder: Story = {
  args: {
    onChange: fn(),
    placeholder: 'Password is read only',
  },
};
