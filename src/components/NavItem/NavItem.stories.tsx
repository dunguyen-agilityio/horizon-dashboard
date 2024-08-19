import type { Meta, StoryObj } from '@storybook/react';

import NavItem from '.';

// Icons
import { Moon } from '@/icons';

const meta = {
  title: 'Components/NavItem',
  component: NavItem,
  tags: ['autodocs'],
} satisfies Meta<typeof NavItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NavItemActive: Story = {
  args: {
    icon: <Moon />,
    label: 'NFT Marketplace',
    isActive: true,
    href: '/marketplace',
  },
};

export const NavItemUnActive: Story = {
  args: {
    ...NavItemActive.args,
    isActive: false,
  },
};
