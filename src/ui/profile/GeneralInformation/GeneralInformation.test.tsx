import { render } from '@testing-library/react';

// Components
import GeneralInformation, { GENERAL_CONTENT } from '.';

describe('GeneralInformation component', () => {
  it('GeneralInformation should render correct title and description', () => {
    const { getByText } = render(<GeneralInformation />);

    const title = getByText(GENERAL_CONTENT.title);
    const description = getByText(GENERAL_CONTENT.description);
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  it('Should render placeholder inside input field', () => {
    const { getByPlaceholderText } = render(<GeneralInformation />);
    expect(getByPlaceholderText('Update your education')).toBeInTheDocument();
  });
});
