import { render } from '@testing-library/react';

import SummaryCard from '.';
import AddIcon from '@/icons/Add';

describe('SummaryCard tests', () => {
  it('Should match snapshot', () => {
    const { container } = render(
      <SummaryCard
        title="Earnings"
        counter={350.5}
        additionalContent={<AddIcon />}
      />,
    );
    expect(container).toMatchSnapshot();
  });

  it('Should match snapshot', () => {
    const { container } = render(
      <SummaryCard
        title="Earnings"
        counter={350.5}
        additionalContent={<AddIcon />}
        additionalContentWrapper="bg-red-700 dark:bg-red-700"
        trendValue={20.3}
        trendDescription="since last month"
      />,
    );
    expect(container).toMatchSnapshot();
  });

  it('Should match snapshot', () => {
    const { container } = render(
      <SummaryCard
        title="Earnings"
        counter={350.5}
        additionalContent={<AddIcon />}
        additionalContentWrapper="bg-red-700 dark:bg-red-700"
        trendValue={-9}
        trendDescription="since last month"
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
