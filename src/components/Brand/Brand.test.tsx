import { fireEvent, render } from '@testing-library/react';

// Components
import Brand from '.';

describe('Brand component', () => {
  it('Should match snapshot', () => {
    const { container } = render(<Brand />);
    expect(container).toMatchSnapshot();
  });

  it('Should match snapshot', () => {
    const { getByText } = render(<Brand />);

    const brandName = getByText('HORIZON');
    expect(brandName).toBeInTheDocument();
    fireEvent.click(brandName);
  });
});
