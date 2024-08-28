import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

// Components
import { EditTaskModal } from '.';

// Models
import { LABEL } from '@/models/Task';

// Mocks
import { MOCK_USERS } from '@/mocks/user';

const meta = {
  title: 'Components/EditTaskModal',
  component: EditTaskModal,
  tags: ['autodocs'],
} satisfies Meta<typeof EditTaskModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
    title: 'Option to use local/server version feature',
    labels: [LABEL.DONE],
    description:
      'It usually displays this message when you close an unsaved page when you do it on purpose',
    onOpenChange: fn(),
    assignMembers: MOCK_USERS,
  },
};
