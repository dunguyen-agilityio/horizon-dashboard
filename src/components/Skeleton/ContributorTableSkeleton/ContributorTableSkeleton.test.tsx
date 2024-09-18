import { render } from '@testing-library/react';

// Components
import { ContributorTableSkeleton } from '@/components/Skeleton/ContributorTableSkeleton';

describe('ContributorTableSkeleton', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<ContributorTableSkeleton />);
    expect(asFragment).toMatchSnapshot();
  });
});
