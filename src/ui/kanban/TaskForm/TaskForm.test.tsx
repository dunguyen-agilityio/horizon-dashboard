import { act, fireEvent, render, waitFor } from '@testing-library/react';
import TaskForm from '.';
import { STATUS } from '@/models/Task';
import { TASK_MESSAGE } from '@/constants/messages';

const mockChangedTitle = 'Implement Task Board Component';

describe('Task Form tests', () => {
  let mockOnClose: jest.Mock;
  let mockOnSubmit: jest.Mock;

  beforeEach(() => {
    mockOnClose = jest.fn();
    mockOnSubmit = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  const setup = () =>
    render(
      <TaskForm
        onClose={mockOnClose}
        onSubmit={mockOnSubmit}
        status={STATUS.BACKLOG}
      />,
    );

  it('Should match snapshot', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });

  it('Should show error message when click Create button and title invalid', async () => {
    const { getByTestId, getByText, queryByText } = setup();

    act(() =>
      fireEvent.change(getByTestId('title-field'), { target: { value: 'Ne' } }),
    );

    act(() => fireEvent.click(getByText('Create task')));

    await waitFor(() => {
      expect(queryByText(TASK_MESSAGE.MIN_LENGTH)).toBeTruthy();
      expect(mockOnSubmit).not.toHaveBeenCalled();
    });
  });

  it('addNewTask will called when click Create button', async () => {
    const { getByTestId, getByText } = setup();

    act(() =>
      fireEvent.change(getByTestId('title-field'), {
        target: { value: mockChangedTitle },
      }),
    );

    act(() => fireEvent.click(getByText('Create task')));

    await waitFor(() =>
      expect(mockOnSubmit).toHaveBeenNthCalledWith(1, {
        title: mockChangedTitle,
        status: STATUS.BACKLOG,
      }),
    );
  });
});
