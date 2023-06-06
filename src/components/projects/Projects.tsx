import Project from './Project';
import ProjectType from '@/types/projects/project';

type Props = {
  description: string;
  projects: ProjectType[];
};

export default function Projects(props: Props): JSX.Element {
  return (
    <div className="col-md-12">
      <p data-testid="description">{props.description}</p>
      {props.projects &&
        props.projects.map((project: ProjectType) => (
          <div className="col-md-12" key={project.title}>
            <Project project={project} />
          </div>
        ))}
    </div>
  );
}
