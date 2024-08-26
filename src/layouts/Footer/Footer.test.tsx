import { render } from '@testing-library/react';

// Components
import Footer from '.';

// Constants
import { FOOTER_CONTENT } from '@/constants/text';

describe('Footer component', () => {
  it('Footer should render match snapshot', () => {
    const { container } = render(<Footer />);
    expect(container).toMatchSnapshot();
  });

  it('Footer should render correct right content', () => {
    const { getByText } = render(<Footer />);

    expect(getByText(FOOTER_CONTENT)).toBeInTheDocument();
  });

  it('Footer should render correct left navigation item', () => {
    const { getByText } = render(<Footer />);

    expect(getByText('Marketplace')).toBeInTheDocument();
    expect(getByText('License')).toBeInTheDocument();
    expect(getByText('Terms of Use')).toBeInTheDocument();
    expect(getByText('Blog')).toBeInTheDocument();
  });
});
