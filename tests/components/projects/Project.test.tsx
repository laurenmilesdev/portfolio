import { render } from '@testing-library/react';
import Project from '../../../src/components/projects/Project';
import ProjectType from '../../../src/types/projects/project';

describe('Project component', () => {
  const title = 'Project 1';
  const description = 'Project 1 description';
  const company = 'company';
  const technologies = ['tech 1', 'tech 2'];
  const project: ProjectType = new ProjectType(title, description, company, technologies);

  it('renders project title', () => {
    const { getByTestId } = render(<Project project={project} />);

    expect(getByTestId('project-title')).toHaveTextContent(title);
  });

  it('renders project company', () => {
    const { getByTestId } = render(<Project project={project} />);

    expect(getByTestId('project-company')).toHaveTextContent(company);
  });

  it('renders project description', () => {
    const { getByTestId } = render(<Project project={project} />);

    expect(getByTestId('project-description')).toHaveTextContent(description);
  });
});
