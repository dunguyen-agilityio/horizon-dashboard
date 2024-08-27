import { render } from '@testing-library/react';

import PersonalProjects from '.';

describe('PersonalProjects tests', () => {
  it('Should match snapshot', () => {
    const { container } = render(<PersonalProjects userId={3} />);
    expect(container).toMatchSnapshot();
  });

  it('Should render correct title and description', () => {
    const { getByText } = render(<PersonalProjects userId={3} />);

    const title = getByText('All Projects 3');
    const description = getByText(
      'Here you can find more details about your projects. Keep you user engaged by providing meaningful information.',
    );
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });
});
