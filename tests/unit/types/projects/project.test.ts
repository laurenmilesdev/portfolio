import Project from '../../../../src/types/projects/project';

describe('Project', () => {
  it('returns Project type object', () => {
    const title = 'title';
    const description = 'description';
    const company = 'company';
    const technologies = ['tech 1', 'tech 2'];
    const response = new Project(title, description, company, technologies);
    const expectedResponse: Project = {
      title,
      description,
      company,
      technologies,
    };

    expect(response).toEqual(expectedResponse);
  });
});
