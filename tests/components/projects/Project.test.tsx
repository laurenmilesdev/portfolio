import { render } from '@testing-library/react';
import Project from '../../../src/components/projects/Project';
import ProjectType from '../../../src/types/projects/project';

describe('Project component', () => {
  const pageDescription = 'This is a description';
  const technologies = ['tech 1', 'tech 2'];
  const projects: ProjectType[] = [
    new ProjectType('Project 1'.toUpperCase(), 'Company 1', technologies, 'Project 1 description'),
    new ProjectType(
      'Project 2'.toUpperCase(),
      'Company 2',
      technologies,
      'Project 2 description',
      'url.com'
    ),
  ];

  it('renders project titles', () => {
    projects.forEach((project: ProjectType, index: number) => {
      const { getByTestId } = render(
        <Project pageDescription={pageDescription} projects={projects} value={index} />
      );

      expect(getByTestId(`project-title-${index}`)).toHaveTextContent(project.title);
    });
  });

  it('renders project companies', () => {
    projects.forEach((project: ProjectType, index: number) => {
      const { getByTestId } = render(
        <Project pageDescription={pageDescription} projects={projects} value={index} />
      );

      expect(getByTestId(`project-company-${index}`)).toHaveTextContent(project.company);
    });
  });

  it('renders project descriptions', () => {
    projects.forEach((project: ProjectType, index: number) => {
      const { getByTestId } = render(
        <Project pageDescription={pageDescription} projects={projects} value={index} />
      );

      expect(getByTestId(`project-description-${index}`)).toHaveTextContent(project.description);
    });
  });
});
