import { render } from '@/utils/test-utils';

// Components
import EditTaskModal from '.';

// Mocks
import { MOCK_USERS } from '@/mocks/user';
import { MOCK_TASKS } from '@/mocks/task';

const onOpenChangeMock = jest.fn();

describe('EditTaskModal tests', () => {
  it('Should match snapshot', () => {
    const { container } = render(
      <EditTaskModal
        isOpen={true}
        title={MOCK_TASKS[0].title}
        labels={MOCK_TASKS[0].labels}
        description={MOCK_TASKS[0].description}
        onOpenChange={onOpenChangeMock}
        assignMembers={MOCK_USERS}
        id={MOCK_TASKS[0].id}
        status={MOCK_TASKS[0].status}
        startDateTask={''}
        dueDateTask={''}
        onClose={() => {}}
      />,
    );
    expect(container).toMatchSnapshot();
  });

  it('Should render correct title and description of Task', () => {
    const { getByText } = render(
      <EditTaskModal
        isOpen
        title={MOCK_TASKS[0].title}
        labels={MOCK_TASKS[0].labels}
        description={MOCK_TASKS[0].description}
        onOpenChange={onOpenChangeMock}
        assignMembers={MOCK_USERS}
        id={MOCK_TASKS[0].id}
        status={MOCK_TASKS[0].status}
        startDateTask={''}
        dueDateTask={''}
        onClose={() => {}}
      />,
    );
    expect(
      getByText(MOCK_TASKS[0].description.blocks[0].text),
    ).toBeInTheDocument();
  });
});
