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
          <h2>{props.project.title}</h2>
          <h4>{props.project.company}</h4>
        </div>
        <div>
          {props.project.technologies && <Technologies technologies={props.project.technologies} />}
        </div>
        <div>
          <p>{props.project.description}</p>
        </div>
      </div>
    )
  );
}
