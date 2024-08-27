import { render, screen } from '@testing-library/react';
import TopCreators from '.';
import { MOCK_CREATORS } from '@/mocks/creators';

describe('TopCreators tests', () => {
  const setup = () => render(<TopCreators data={MOCK_CREATORS} />);

  it('Should match snapshot', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });

  it('renders empty content when there is no data', () => {
    render(<TopCreators data={[]} />);

    expect(screen.getByText('No creator to display.')).toBeInTheDocument();
  });
});
