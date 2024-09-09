import Providers from '@/app/providers';
import { render, RenderOptions } from '@testing-library/react';

const customRender = (ui: React.ReactNode, options?: RenderOptions) =>
  render(ui, { wrapper: Providers, ...options });

export * from '@testing-library/react';

export { customRender as render };
