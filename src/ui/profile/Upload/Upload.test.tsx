import { render, screen } from '@testing-library/react';

import UploadFile from '.';

describe('UploadFile ui', () => {
  it('should match snapshot', () => {
    const { container } = render(<UploadFile />);
    expect(container).toMatchSnapshot();
  });

  it('should render the UploadFile component correctly', () => {
    render(<UploadFile />);

    const uploadTitle = screen.getByText('Upload Files');
    expect(uploadTitle).toBeInTheDocument();

    const allowedFilesText = screen.getByText(
      'PNG, JPG and GIF files are allowed',
    );
    expect(allowedFilesText).toBeInTheDocument();

    const profileTitle = screen.getByText('Complete your profile');
    expect(profileTitle).toBeInTheDocument();

    const descriptionText = screen.getByText(
      'Stay on the pulse of distributed projects with an anline whiteboard to plan, coordinate and discuss',
    );
    expect(descriptionText).toBeInTheDocument();

    const publishButton = screen.getByRole('button', { name: 'Publish now' });
    expect(publishButton).toBeInTheDocument();
  });
});
