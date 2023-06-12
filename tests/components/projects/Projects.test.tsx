import { render } from '@testing-library/react';
import Projects from '../../../src/components/projects/Projects';
import ProjectType from '../../../src/types/projects/project';

describe('Projects component', () => {
  const description = 'This is a description';
  const technologies = ['tech 1', 'tech 2'];
  const projects: ProjectType[] = [
    new ProjectType('Project 1', 'Company 1', technologies, 'Project 1 description'),
    new ProjectType('Project 2', 'Company 2', technologies, 'Project 2 description', 'url.com'),
  ];
  const handleChange = (event: React.SyntheticEvent, newValue: number) => console.log('test');
  const value = 1;

  it('renders tabs', () => {
    const { getByTestId } = render(
      <Projects
        description={description}
        projects={projects}
        handleChange={handleChange}
        value={value}
      />
    );

    expect(getByTestId('projects-tabs')).toHaveTextContent(projects[0].title);
    expect(getByTestId('projects-tabs')).toHaveTextContent(projects[1].title);
  });
});
