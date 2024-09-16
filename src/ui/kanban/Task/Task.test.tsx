import { render } from '@/utils/test-utils';

import { MOCK_TASKS } from '@/mocks/task';

import { Task } from '.';

const mockTask = MOCK_TASKS[0];

describe('Task tests', () => {
  it('Should match snapshot', () => {
    const { container } = render(<Task {...mockTask} />);
    expect(container).toMatchSnapshot();
  });
});
