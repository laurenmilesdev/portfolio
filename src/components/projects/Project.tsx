import Link from 'next/link';
import TabPanel from '../tabs/TabPanel';
import Technologies from './Technologies';
import ProjectType from '@/types/projects/project';

type Props = {
  pageDescription: string;
  projects: ProjectType[];
  value: number;
};

const content = (project: ProjectType): JSX.Element => (
  <div>
    <h2 data-testid="project-title">{project.title}</h2>
    <p data-testid="project-company">
      <Link href={project.companyUrl ?? ''} target="_blank">
        {project.company}
      </Link>
    </p>
    {project.technologies && <Technologies technologies={project.technologies} />}
    <div data-testid="project-description">
      <p>{project.description}</p>
    </div>
  </div>
);

export default function Project(props: Props): JSX.Element {
  return (
    <div className="col-md-12">
      <p data-testid="description">{props.pageDescription}</p>
      <hr />
      {props.projects.map((project: ProjectType, index: number) => (
        <TabPanel value={props.value} index={index} key={index}>
          {content(project)}
        </TabPanel>
      ))}
    </div>
  );
}
