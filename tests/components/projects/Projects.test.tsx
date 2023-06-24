import { render } from '@testing-library/react';
import Projects from '../../../src/components/projects/Projects';
import ProjectType from '../../../src/types/projects/project';

describe('Projects component', () => {
  const technologies = ['tech 1', 'tech 2'];
  const projects: ProjectType[] = [
    new ProjectType('Project 1', 'Company 1', technologies, 'Project 1 description'),
    new ProjectType('Project 2', 'Company 2', technologies, 'Project 2 description', 'url.com'),
  ];

  it('renders project titles', () => {
    render(<Projects projects={projects} />);

    projects.forEach((project: ProjectType, index: number) => {
      const title = document.getElementById(`project-${index}-title`);

      expect(title).toHaveTextContent(project.title.toUpperCase());
    });
  });

  it('renders project descriptions', () => {
    render(<Projects projects={projects} />);

    projects.forEach((project: ProjectType, index: number) => {
      const description = document.getElementById(`project-${index}-description`);

      expect(description).toHaveTextContent(project.description);
    });
  });

  it('renders project company links', () => {
    render(<Projects projects={projects} />);

    projects.forEach((project: ProjectType, index: number) => {
      const company = document.getElementById(`project-${index}-company`);

      expect(company).toHaveTextContent(project.company.toUpperCase());
    });
  });
});
