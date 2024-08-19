import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/react';

// Components
import BoxIcon from '.';

// Icons
import { Kanban } from '@/icons';

const meta = {
  title: 'Components/BoxIcon',
  component: BoxIcon,
  tags: ['autodocs'],
} satisfies Meta<typeof BoxIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BoxIconWithIcon: Story = {
  args: {
    icon: <Kanban />,
  },
};

export const BoxIconWithCustomClass: Story = {
  args: {
    ...BoxIconWithIcon.args,
    customClass: 'dark:fill-red-800, fill-green-800',
  },
};

export const BoxIconWithOnClick: Story = {
  args: {
    ...BoxIconWithCustomClass.args,
    onClick: fn(),
  },
};
