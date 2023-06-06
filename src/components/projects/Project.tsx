import Technologies from './Technologies';
import ProjectType from '@/types/projects/project';

type Props = {
  project: ProjectType;
};

export default function Project(props: Props): JSX.Element {
  return (
    props.project && (
      <div className="col-md-12">
        <div>
          <h2 data-testid="project-title">{props.project.title}</h2>
          <h4 data-testid="project-company">{props.project.company}</h4>
        </div>
        <div>
          {props.project.technologies && <Technologies technologies={props.project.technologies} />}
        </div>
        <div data-testid="project-description">
          <p>{props.project.description}</p>
        </div>
      </div>
    )
  );
}
