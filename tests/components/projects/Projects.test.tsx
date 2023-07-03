import { render } from '@testing-library/react';
import Projects from '../../../src/components/projects/Projects';
import ProjectType from '../../../src/types/projects/project';

describe('Projects component', () => {
  const technologies = ['tech 1', 'tech 2'];
  const projects: ProjectType[] = [
    new ProjectType('Project 1', 'Company 1', technologies, 'Project 1 description'),
    new ProjectType('Project 2', 'Company 2', technologies, 'Project 2 description', 'url.com'),
  ];

  beforeEach(() => {
    render(<Projects projects={projects} />);
  });

  it('renders project titles', () => {
    projects.forEach((project: ProjectType, index: number) => {
      const element = document.getElementById(`project-${index}-title`) as HTMLDivElement;

      expect(element).toHaveTextContent(project.title);
    });
  });

  it('renders project descriptions', () => {
    projects.forEach((project: ProjectType, index: number) => {
      const element = document.getElementById(`project-${index}-description`) as HTMLDivElement;

      expect(element).toHaveTextContent(project.description);
    });
  });

  it('renders project company links', () => {
    projects.forEach((project: ProjectType, index: number) => {
      const element = document.getElementById(`project-${index}-company`) as HTMLButtonElement;

      expect(element).toHaveTextContent(project.company);
      expect(element).toHaveAttribute('href', project.companyUrl);
    });
  });
});
