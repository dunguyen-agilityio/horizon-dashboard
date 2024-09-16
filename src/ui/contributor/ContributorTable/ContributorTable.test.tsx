import { fireEvent, render } from '@testing-library/react';

import ContributorTable from '.';

// Mocks
import { MOCK_CONTRIBUTORS } from '@/mocks/contributor';

// Utils
import { compareString } from '@/utils/compare';

const mockPush = jest.fn();

const mockPathname = '/contributors';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn().mockImplementation(() => ({
    push: mockPush,
  })),
  useSearchParams: jest.fn().mockImplementation(() => new URLSearchParams()),
  usePathname: jest.fn().mockImplementation(() => mockPathname),
}));

describe('Contributor Table Tests', () => {
  it('Should match snapshot', () => {
    const { container } = render(
      <ContributorTable data={MOCK_CONTRIBUTORS} page={1} pageCount={4} />,
    );
    expect(container).toMatchSnapshot();
  });

  it('Should hidden pagination and empty message when not found Data', () => {
    const { queryByTestId, queryByText } = render(
      <ContributorTable data={[]} page={1} pageCount={0} />,
    );
    expect(queryByTestId('pagination')).not.toBeInTheDocument();
    expect(queryByText('No Contributors to display.')).toBeInTheDocument();
  });

  it('Will sort and render correctly by fullName when click table header Name', () => {
    const { getByTestId, getAllByTestId } = render(
      <ContributorTable data={MOCK_CONTRIBUTORS} page={1} pageCount={4} />,
    );

    fireEvent.click(getByTestId('table-header-fullName'));
    fireEvent.click(getByTestId('table-header-fullName'));
    const fullNameCells = getAllByTestId('table-cell-fullName');

    expect(
      compareString(fullNameCells[0].innerHTML, fullNameCells[2].innerHTML),
    ).toBeGreaterThan(0);
  });

  it('Will sort and render correctly by createdAt when click table header Date', () => {
    const { getByTestId, getAllByTestId } = render(
      <ContributorTable data={MOCK_CONTRIBUTORS} page={1} pageCount={4} />,
    );

    fireEvent.click(getByTestId('table-header-createdAt'));
    fireEvent.click(getByTestId('table-header-createdAt'));

    const createdAtCells = getAllByTestId('table-cell-createdAt');

    expect(
      compareString(createdAtCells[0].innerHTML, createdAtCells[2].innerHTML),
    ).toBeGreaterThan(0);
  });

  it('mockPush will call correctly when click switch page', () => {
    const { getByLabelText } = render(
      <ContributorTable data={MOCK_CONTRIBUTORS} page={1} pageCount={4} />,
    );

    fireEvent.click(getByLabelText('pagination item 2'));
    expect(mockPush).toHaveBeenNthCalledWith(1, `${mockPathname}?page=2`);
    fireEvent.click(getByLabelText('pagination item 1'));
    expect(mockPush).toHaveBeenNthCalledWith(2, `${mockPathname}?page=1`);
  });
});
