import { render, screen } from '@testing-library/react';

// mocks
import { MOCK_STORAGE } from '@/mocks/storage';

import Storage from '.';

describe('Storage component', () => {
  it('should match snapshot', () => {
    const { container } = render(<Storage {...MOCK_STORAGE} />);
    expect(container).toMatchSnapshot();
  });

  it('should render the component correctly', () => {
    render(<Storage {...MOCK_STORAGE} />);

    expect(screen.getByText('Your Storage')).toBeInTheDocument();
    expect(
      screen.getByText('Supervise your drive space in the easiest way'),
    ).toBeInTheDocument();
    expect(screen.getByText('25.6Gb')).toBeInTheDocument();
    expect(screen.getByText('50Gb')).toBeInTheDocument();
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });
});
