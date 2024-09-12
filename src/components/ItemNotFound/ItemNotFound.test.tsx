import { fireEvent, render } from '@testing-library/react';

// Components
import ItemNotFound from '.';
import { PUBLIC_ROUTES } from '@/constants';

const title = 'Start Find Your Favorite NFTs';
const description =
  'Browse our collection and click the heart icon to add NFTs to your favorites list!';
const labelButton = 'Explore Products';

describe('ItemNotFound component', () => {
  const { container } = render(
    <ItemNotFound title={title} description={description} />,
  );
  it('Should match snapshot', () => {
    expect(container).toMatchSnapshot();
  });

  it('Should render correct title and description', () => {
    const { getByText } = render(
      <ItemNotFound title={title} description={description} />,
    );
    expect(getByText(title)).toBeInTheDocument();
    expect(getByText(description)).toBeInTheDocument();
  });

  it('Should render button to navigation', () => {
    const { getByText } = render(
      <ItemNotFound
        title={title}
        description={description}
        label={labelButton}
        href={PUBLIC_ROUTES.NFT_MARKETPLACE}
      />,
    );
    const buttonExplore = getByText(labelButton);
    expect(buttonExplore).toBeInTheDocument();
    fireEvent.click(buttonExplore);
  });
});
