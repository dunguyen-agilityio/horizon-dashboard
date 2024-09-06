import { getTasksInRealTime } from '../useTask';
import {
  collection,
  onSnapshot,
  query,
  where,
  fireStore,
} from '@/config/firebaseConfig';

jest.mock('@/config/firebaseConfig', () => ({
  collection: jest.fn(),
  onSnapshot: jest.fn(),
  query: jest.fn(),
  where: jest.fn(),
}));

describe('getTasksInRealTime', () => {
  let mockSetTasks: jest.Mock;
  let mockUnsubscribe: jest.Mock;

  beforeEach(() => {
    mockSetTasks = jest.fn();
    mockUnsubscribe = jest.fn();

    (onSnapshot as jest.Mock).mockImplementation((_, callback) => {
      callback({
        forEach: (fn: (doc: unknown) => void) => {
          fn({
            id: '1',
            data: () => ({
              title: 'Task 1',
              status: 'IN_PROGRESS',
            }),
          });
          fn({
            id: '2',
            data: () => ({
              title: 'Task 2',
              status: 'IN_PROGRESS',
            }),
          });
        },
      });

      return mockUnsubscribe;
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch tasks with the given status in real-time', () => {
    const status = 'IN_PROGRESS';
    const unsubscribe = getTasksInRealTime(mockSetTasks, status);

    expect(query).toHaveBeenCalledWith(
      collection(fireStore, 'tasks'),
      where('status', '==', status),
    );

    expect(onSnapshot).toHaveBeenCalled();

    expect(mockSetTasks).toHaveBeenCalledWith([
      { id: '1', title: 'Task 1', status: 'IN_PROGRESS' },
      { id: '2', title: 'Task 2', status: 'IN_PROGRESS' },
    ]);

    unsubscribe();
    expect(mockUnsubscribe).toHaveBeenCalled();
  });
});
