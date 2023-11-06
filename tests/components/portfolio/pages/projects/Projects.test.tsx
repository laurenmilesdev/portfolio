import { render } from '@testing-library/react';
import Projects, {
  getCompanyId,
  getDescriptionId,
  getTitleId,
} from '../../../../../src/components/portfolio/pages/projects/Projects';
import ProjectModel from '../../../../../src/models/projects/project';

describe('Projects component', () => {
  const technologies = ['tech 1', 'tech 2'];
  const projects: ProjectModel[] = [
    new ProjectModel('Project 1', 'Company 1', technologies, 'Project 1 description'),
    new ProjectModel('Project 2', 'Company 2', technologies, 'Project 2 description', 'url.com'),
  ];

  beforeEach(() => {
    render(<Projects projects={projects} />);
  });

  it('renders project titles', () => {
    projects.forEach(({ title }, index: number) => {
      const element = document.getElementById(getTitleId(index)) as HTMLDivElement;

      expect(element).toHaveTextContent(title);
    });
  });

  it('renders project descriptions', () => {
    projects.forEach(({ description }, index: number) => {
      const element = document.getElementById(getDescriptionId(index)) as HTMLDivElement;

      expect(element).toHaveTextContent(description);
    });
  });

  it('renders project company links', () => {
    projects.forEach(({ company, companyUrl }, index: number) => {
      const element = document.getElementById(getCompanyId(index)) as HTMLButtonElement;

      expect(element).toHaveTextContent(company);
      expect(element).toHaveAttribute('href', companyUrl);
    });
  });
});
