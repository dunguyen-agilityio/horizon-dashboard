import { act, fireEvent, render, waitFor } from '@testing-library/react';

import ToggleTheme from '.';
import { useTheme } from 'next-themes';

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

  it('Should match snapshot', async () => {
    const { getByTestId } = render(<ToggleTheme data-testid="toggle-theme" />);

    act(() => fireEvent.click(getByTestId('toggle-theme')));
    await waitFor(() =>
      expect(mockSetTheme).toHaveBeenNthCalledWith(1, 'dark'),
    );
  });
});
