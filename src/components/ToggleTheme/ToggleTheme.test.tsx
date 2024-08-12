import { useTheme } from 'next-themes';
import { act, fireEvent, render, waitFor } from '@testing-library/react';

import ToggleTheme from '.';

jest.mock('next-themes', () => ({
  useTheme: jest.fn(),
}));

describe('ToggleTheme tests', () => {
  let mockSetTheme: jest.Mock;

  beforeEach(() => {
    mockSetTheme = jest.fn();
    (useTheme as jest.Mock).mockImplementation(() => ({
      theme: 'light',
      setTheme: mockSetTheme,
    }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should match snapshot', () => {
    const { container } = render(<ToggleTheme />);
    expect(container).toMatchSnapshot();
  });

  it('Update theme will called correctly', async () => {
    const { getByTestId } = render(
      <ToggleTheme variant="secondary" data-testid="toggle-theme" />,
    );
    act(() => fireEvent.click(getByTestId('toggle-theme')));
    await waitFor(() =>
      expect(mockSetTheme).toHaveBeenNthCalledWith(1, 'dark'),
    );
  });

  it('Update theme will called correctly', async () => {
    (useTheme as jest.Mock).mockImplementation(() => ({
      theme: 'dark',
      setTheme: mockSetTheme,
    }));

    const { getByTestId } = render(<ToggleTheme data-testid="toggle-theme" />);
    act(() => fireEvent.click(getByTestId('toggle-theme')));
    await waitFor(() =>
      expect(mockSetTheme).toHaveBeenNthCalledWith(1, 'light'),
    );
  });
});
