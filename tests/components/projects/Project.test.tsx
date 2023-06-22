import { render } from '@testing-library/react';
import Project from '../../../src/components/projects/Project';
import ProjectType from '../../../src/types/projects/project';

describe('Project component', () => {
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

  it('renders buttons to companies', () => {
    projects.forEach((project: ProjectType, index: number) => {
      render(<Project projects={projects} value={index} />);

      const button = document.getElementById(`company-${index}`) as HTMLButtonElement;

      expect(button).toHaveTextContent(project.company);
    });
  });

  it('renders project descriptions', () => {
    projects.forEach((project: ProjectType, index: number) => {
      render(<Project projects={projects} value={index} />);

      const projectDescription = document.getElementById(`project-description-${index}`);

      expect(projectDescription).toHaveTextContent(project.description);
    });
  });
});
