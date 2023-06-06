export default class Project {
  title: string;

  description: string;

  company: string;

  technologies: string[];

  constructor(title: string, description: string, company: string, technologies: string[]) {
    this.title = title;
    this.description = description;
    this.company = company;
    this.technologies = technologies;
  }
}
