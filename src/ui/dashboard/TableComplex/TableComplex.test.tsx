import { render } from '@testing-library/react';

import TableComplex from '.';

import { MOCK_COMPLEXES } from '@/mocks/complex';

describe('TableCheck tests', () => {
  it('Should render correct number of rows', () => {
    const { getAllByRole } = render(<TableComplex data={MOCK_COMPLEXES} />);
    expect(getAllByRole('row')).toHaveLength(MOCK_COMPLEXES.length + 1);
  });

  it('Should displays "No rows to display." when no data is provided', () => {
    const { getByText } = render(<TableComplex data={[]} />);
    expect(getByText('No rows to display.')).toBeInTheDocument();
  });
});
