import type { Meta, StoryObj } from '@storybook/react';

// Components
import ProjectCard from '.';

const meta = {
  title: 'ui/ProjectCard',
  component: ProjectCard,
  tags: ['autodocs'],
} satisfies Meta<typeof ProjectCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: '4',
    baseProject: 'project #4',
    title: 'Technology behind the Blockchain',
  },
};
