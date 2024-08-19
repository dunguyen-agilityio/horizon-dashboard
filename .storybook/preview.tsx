import React from 'react';
import type { Preview } from '@storybook/react';

import Providers from '../src/app/providers';
import RootLayout from '../src/layouts/RootLayout';

import './style.css';
import '../src/app/globals.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextjs: { appDirectory: true },
    layout: 'centered',
  },

  decorators: (Story) => (
    <RootLayout>
      <Providers>
        <Story />
      </Providers>
    </RootLayout>
  ),
  tags: ['autodocs'],
};

export default preview;
