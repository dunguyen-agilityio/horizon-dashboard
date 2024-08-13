import type { Meta, StoryObj } from '@storybook/react';

import { Task } from '.';

import { MOCK_TASKS } from '@/mocks/task';

const mockTask = MOCK_TASKS[0];
const mockCover = '/default-task-cover.webp';

const meta = {
  title: 'Components/Task',
  component: Task,
  tags: ['autodocs'],
} satisfies Meta<typeof Task>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TaskMissCover: Story = {
  args: { ...mockTask, cover: undefined },
};

export const TaskWithCover: Story = {
  args: { ...mockTask, cover: mockCover },
};
