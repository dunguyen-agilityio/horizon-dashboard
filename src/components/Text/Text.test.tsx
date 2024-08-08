import { render } from '@testing-library/react';
import Text, { type TextProps } from '.';
import { TEXT_SIZE, TEXT_VARIANT } from '@/types/text';

describe('Text tests', () => {
  const setup = (props: TextProps = {}) => render(<Text {...props} />);

  it('Should match snapshot', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });

  it('Should match snapshot', () => {
    const { container } = setup({
      as: 'h1',
      size: TEXT_SIZE['2xl'],
      variant: TEXT_VARIANT.SECONDARY,
    });
    expect(container).toMatchSnapshot();
  });

  it('Should match snapshot', () => {
    const { container } = setup({
      as: 'h1',
      size: TEXT_SIZE['2xl'],
      variant: TEXT_VARIANT.SECONDARY,
    });
    expect(container).toMatchSnapshot();
  });
});
