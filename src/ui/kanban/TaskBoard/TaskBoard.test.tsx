import { render } from '@/utils/test-utils';
import TaskBoard from '.';
import { useTask } from '@/hooks/useTask';
import { MOCK_TASKS } from '@/mocks/task';

jest.mock('@/hooks/useTask', () => ({
  useTask: jest.fn(),
}));

const mockPush = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: jest.fn().mockImplementation(() => ({
    push: mockPush,
  })),
  useSearchParams: jest.fn().mockImplementation(() => new URLSearchParams()),
  usePathname: jest.fn().mockImplementation(() => '/'),
}));

describe('TaskBoard', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should match snapshot', () => {
    (useTask as jest.Mock).mockImplementation(() => ({
      tasks: [],
      isLoading: true,
    }));

    const { container } = render(<TaskBoard />);
    expect(container).toMatchSnapshot();
  });

  it('Should match snapshot', () => {
    (useTask as jest.Mock).mockImplementation(() => ({
      tasks: MOCK_TASKS,
      isLoading: false,
    }));

    const { container } = render(<TaskBoard />);
    expect(container).toMatchSnapshot();
  });
});
