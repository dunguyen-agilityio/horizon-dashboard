import { render } from '@testing-library/react';

// Components
import EditTaskModal from '.';

// Models
import { LABEL } from '@/models/Task';

// Mocks
import { MOCK_USERS } from '@/mocks/user';

const titleModal = 'Option to use local/server version feature';
const descriptionModal =
  "It usually displays this message when you close an unsaved page when you do it on purpose, and it's getting frustrated to see this every time.";

const onOpenChangeMock = jest.fn();

describe('EditTaskModal tests', () => {
  it('Should match snapshot', () => {
    const { container } = render(
      <EditTaskModal
        isOpen={true}
        title={titleModal}
        labels={[LABEL.DONE]}
        description={descriptionModal}
        onOpenChange={onOpenChangeMock}
        assignMembers={MOCK_USERS}
      />,
    );
    expect(container).toMatchSnapshot();
  });

  it('Should render correct title and description of Task', () => {
    const { getByText } = render(
      <EditTaskModal
        isOpen
        title={titleModal}
        labels={[LABEL.DONE]}
        description={descriptionModal}
        onOpenChange={onOpenChangeMock}
        assignMembers={MOCK_USERS}
      />,
    );
    expect(getByText(titleModal)).toBeInTheDocument();
    expect(getByText(descriptionModal)).toBeInTheDocument();
  });
});
