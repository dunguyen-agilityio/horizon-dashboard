import { render } from '@testing-library/react';

// Components
import ControlBoard from '.';

// Constants
import { CONTROL_NOTIFICATIONS } from '@/mocks/notify';

describe('ControlBoard component', () => {
  it('ControlBoard should render match snapshot', () => {
    const { container } = render(<ControlBoard />);
    expect(container).toMatchSnapshot();
  });

  it('ControlBoard should render correct title', () => {
    const { getByText } = render(<ControlBoard />);

    const title = getByText('Notifications');
    expect(title).toBeInTheDocument();
  });

  it('ControlBoard should render correct label', () => {
    const { getByText } = render(<ControlBoard />);

    const label = getByText(CONTROL_NOTIFICATIONS[1].label);
    expect(label).toBeInTheDocument();
  });

  it('ControlBoard should render switch button', () => {
    const { getAllByRole } = render(<ControlBoard />);

    const listSwitchButton = getAllByRole('switch');
    expect(listSwitchButton[0]).toBeInTheDocument();
  });
});
