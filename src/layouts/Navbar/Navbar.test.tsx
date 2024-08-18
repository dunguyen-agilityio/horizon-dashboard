import { render } from '@testing-library/react';
import Navbar from '.';

jest.mock('next/navigation', () => ({
  usePathname: jest.fn().mockImplementation(() => '/'),
}));

describe('Navbar tests', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should match snapshot', () => {
    const { container } = render(<Navbar />);
    expect(container).toMatchSnapshot();
  });
});
