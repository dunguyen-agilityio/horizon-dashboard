import { render } from '@testing-library/react';

// Components
import Banner from '.';

describe('Banner component', () => {
  it('Should match snapshot', () => {
    const { container } = render(<Banner />);
    expect(container).toMatchSnapshot();
  });

  it('Should render correct Banner with content', () => {
    const { getByText } = render(<Banner />);

    const titleBanner = getByText('Upgrade to PRO');
    expect(titleBanner).toBeInTheDocument();
  });
});
