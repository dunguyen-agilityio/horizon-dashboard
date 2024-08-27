import { render } from '@testing-library/react';

// Component
import ProjectCard from '.';

// Constants
import { NFT_IMAGES } from '@/constants';

const titleProjectCard = 'Technology behind the Blockchain';
const refProject = 'project #2';

describe('ProjectCard tests', () => {
  it('Should match snapshot', () => {
    const { container } = render(
      <ProjectCard id="2" title={titleProjectCard} baseProject={refProject} />,
    );
    expect(container).toMatchSnapshot();
  });

  it('Should render image with alt', () => {
    const { getByAltText } = render(
      <ProjectCard
        id="2"
        title={titleProjectCard}
        imageProject={NFT_IMAGES.COVER}
        baseProject={refProject}
      />,
    );

    const altValue = getByAltText('project-detail');
    expect(altValue).toBeInTheDocument();
  });

  it('Should render icon pencil and correct title', () => {
    const { getAllByTestId, getByText } = render(
      <ProjectCard id="2" title={titleProjectCard} baseProject={refProject} />,
    );
    const listIconPencil = getAllByTestId('pencil-icon');
    expect(listIconPencil[0]).toBeInTheDocument();
    expect(getByText(titleProjectCard)).toBeInTheDocument();
    expect(getByText(refProject)).toBeInTheDocument();
  });
});
