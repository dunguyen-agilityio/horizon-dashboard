import { act, fireEvent, render, waitFor } from '@testing-library/react';
import InputSearch from '.';

describe('Input search tests', () => {
  let mockSearch: jest.Mock;

  beforeEach(() => {
    mockSearch = jest.fn();
  });

  it('Should match snapshot', () => {
    const { container } = render(<InputSearch onSearch={mockSearch} />);
    expect(container).toMatchSnapshot();
  });

  it('Should auto focus input when user click start content', async () => {
    const { getByRole, getByTestId } = render(
      <InputSearch onSearch={mockSearch} data-testid="input-search" />,
    );
    const startContent = getByRole('button');
    expect(startContent).toBeInTheDocument();
    fireEvent.click(startContent);

    await waitFor(() => {
      expect(getByTestId('input-search')).toHaveFocus();
    });
  });

  it('mockOnSearch will triggered when user typing input', async () => {
    const { getByTestId } = render(
      <InputSearch onSearch={mockSearch} data-testid="input-search" />,
    );
    const mockChange = 'value';

    act(() => {
      fireEvent.change(getByTestId('input-search'), {
        target: { value: mockChange },
      });
    });

    await waitFor(() => {
      expect(mockSearch).toHaveBeenNthCalledWith(1, mockChange);
    });
  });
});
