import { render } from '@testing-library/react';

import TableCheck from './TableCheck';

import { MOCK_CHECKS } from '@/mocks/check';

describe('TableCheck tests', () => {
  it('Should render correct number of rows', () => {
    const { getAllByRole } = render(<TableCheck data={MOCK_CHECKS} />);
    expect(getAllByRole('row')).toHaveLength(MOCK_CHECKS.length + 1);
  });

  it('Should displays "No rows to display." when no data is provided', () => {
    const { getByText } = render(<TableCheck data={[]} />);
    expect(getByText('No rows to display.')).toBeInTheDocument();
  });
});
