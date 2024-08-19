import { fireEvent, render } from '@testing-library/react';

// Components
import BoxIcon from '.';

// Icons
import { Kanban } from '@/icons';

const onClickBoxIcon = jest.fn();

describe('BoxIcon component', () => {
  it('Should render BoxIcon match snapshot', () => {
    const { container } = render(<BoxIcon icon={<Kanban />} />);
    expect(container).toMatchSnapshot();
  });

  it('Should trigger onClick when simulator click in BoxIcon', () => {
    const { getByTestId } = render(
      <BoxIcon icon={<Kanban />} onClick={onClickBoxIcon} />,
    );

    const BoxIconName = getByTestId('kanban-icon');
    expect(BoxIconName).toBeInTheDocument();

    fireEvent.click(BoxIconName);
    expect(onClickBoxIcon).toHaveBeenCalled();
  });
});
