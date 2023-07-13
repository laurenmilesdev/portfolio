export default class Project {
  title: string;

  company: string;

  technologies: string[];

  description: string;

  companyUrl?: string;

  constructor(
    title: string,
    company: string,
    technologies: string[],
    description: string,
    companyUrl?: string
  ) {
    this.title = title;
    this.description = description;
    this.company = company;
    this.technologies = technologies;
    this.companyUrl = companyUrl;
  }
}
