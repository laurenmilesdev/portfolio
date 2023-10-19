import Project from '../../../src/models/projects/project';

describe('Project', () => {
  const title = 'title';
  const description = 'description';
  const company = 'company';
  const technologies = ['tech 1', 'tech 2'];
  const companyUrl = 'company.com';

  it('returns Project object without company url', () => {
    const response = new Project(title, company, technologies, description);
    const expectedResponse: Project = {
      title,
      description,
      company,
      technologies,
    };

    expect(response).toEqual(expectedResponse);
  });

  it('returns Project object with company url', () => {
    const response = new Project(title, company, technologies, description, companyUrl);
    const expectedResponse: Project = {
      title,
      description,
      company,
      technologies,
      companyUrl,
    };

    expect(response).toEqual(expectedResponse);
  });
});
