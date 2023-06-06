import { render } from '@testing-library/react';
import Projects from '../../../src/components/projects/Projects';
import ProjectType from '../../../src/types/projects/project';

describe('Projects component', () => {
  it('renders projects description', () => {
    const description = 'This is a description';
    const projects: ProjectType[] = [
      new ProjectType('Project 1', 'Project 1 description', 'Company 1', ['tech 1', 'tech 2']),
      new ProjectType('Project 2', 'Project 2 description', 'Company 2', ['tech 1', 'tech 2']),
    ];

    const { getByTestId } = render(<Projects description={description} projects={projects} />);

    expect(getByTestId('description')).toHaveTextContent(description);
  });
});
