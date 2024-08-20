import { render } from '@testing-library/react';
import TableCheck from '.';
import { MOCK_CHECKS } from '@/mocks/check';

describe('TableCheck test', () => {
  it('Should render correctly', () => {
    const { getAllByRole } = render(<TableCheck data={MOCK_CHECKS} />);
    expect(getAllByRole('row')).toHaveLength(MOCK_CHECKS.length + 1);
  });

  it('Should render correctly', () => {
    const { getByText } = render(<TableCheck data={[]} />);
    expect(getByText('No rows to display.')).toBeInTheDocument();
  });
});
