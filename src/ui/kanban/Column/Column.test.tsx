import Column from '.';
import { STATUS } from '@/models/Task';
import { useTask } from '@/hooks/useTask';
import { MOCK_TASKS } from '@/mocks/task';
import { render, act, fireEvent, waitFor } from '@/utils/test-utils';

jest.mock('@/hooks/useTask', () => ({
  useTask: jest.fn(),
}));

describe('Column tests', () => {
  const setup = () => render(<Column status={STATUS.BACKLOG} />);

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should match snapshot', () => {
    (useTask as jest.Mock).mockImplementation(() => ({
      tasks: [],
      addTask: jest.fn(),
      isLoading: true,
    }));
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });

  it('Should match snapshot', async () => {
    (useTask as jest.Mock).mockImplementation(() => ({
      tasks: MOCK_TASKS,
      addTask: jest.fn(),
      isLoading: false,
    }));
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });

  it('Should show TaskForm when click Create button', async () => {
    (useTask as jest.Mock).mockImplementation(() => ({
      tasks: MOCK_TASKS,
      addTask: jest.fn(),
      isLoading: false,
    }));
    const { queryByTestId, getByTestId, getByText } = setup();

    act(() => fireEvent.click(getByTestId('add-button')));
    await waitFor(() =>
      expect(queryByTestId('add-new-task-form')).toBeTruthy(),
    );

    act(() => fireEvent.click(getByText('Cancel')));
    await waitFor(() => expect(queryByTestId('add-new-task-form')).toBeFalsy());
  });

  it('Should show TaskForm when click Create button', async () => {
    (useTask as jest.Mock).mockImplementation(() => ({
      tasks: MOCK_TASKS,
      addTask: jest.fn(),
      isLoading: false,
    }));
    const { queryByTestId, getByTestId, getByText } = setup();

    act(() => fireEvent.click(getByTestId('add-button')));
    await waitFor(() =>
      expect(queryByTestId('add-new-task-form')).toBeTruthy(),
    );

    act(() => {
      fireEvent.change(getByTestId('title-field'), {
        target: { value: 'User typing title field' },
      });
      fireEvent.click(getByText('Create task'));
    });
    await waitFor(() => expect(queryByTestId('add-new-task-form')).toBeFalsy());
  });
});
