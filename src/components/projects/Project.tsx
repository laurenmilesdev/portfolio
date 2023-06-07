import Link from 'next/link';
import TabPanel from '../tabs/TabPanel';
import Technologies from './Technologies';
import ProjectType from '@/types/projects/project';

type Props = {
  pageDescription: string;
  projects: ProjectType[];
  value: number;
};

const content = (project: ProjectType, index: number): JSX.Element => (
  <div>
    <h2 data-testid={`project-title-${index}`}>{project.title}</h2>
    {project.technologies && <Technologies technologies={project.technologies} />}
    <div data-testid={`project-description-${index}`}>
      <p>{project.description}</p>
    </div>
    <p data-testid={`project-company-${index}`}>
      <Link href={project.companyUrl ?? ''} target="_blank">
        {project.company}
      </Link>
    </p>
  </div>
);

export default function Project(props: Props): JSX.Element {
  return (
    <div className="col-md-12">
      <p data-testid="description">{props.pageDescription}</p>
      <hr />
      {props.projects.map((project: ProjectType, index: number) => (
        <TabPanel value={props.value} index={index} key={index}>
          {content(project, index)}
        </TabPanel>
      ))}
    </div>
  );
}
