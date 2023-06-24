import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Technologies from '../technologies/Technologies';
import ProjectType from '../../types/projects/project';

import styles from './Projects.module.css';

type Props = {
  projects: ProjectType[];
  handleChange: (event: React.SyntheticEvent, newValue: number) => void;
  value: number;
};

const content = (project: ProjectType, index: number): JSX.Element => (
  <div className={`${styles.container} col-md-12`}>
    <div className="col-md-2">
      <h5>{project.title.toUpperCase()}</h5>
    </div>

    <div className="col-md-10">
      <div className="col-md-12">
        {project.technologies && <Technologies technologies={project.technologies} />}
      </div>

      <div className="col-md-12" id={`project-description-${index}`}>
        <p>{project.description}</p>
      </div>

      <div className="col-md-12">
        <a
          href={project.companyUrl ?? ''}
          target="_blank"
          id={`company-${index}`}
          aria-label={`Link to ${project.company} website`}
        >
          {project.company.toUpperCase()}
          {<OpenInNewIcon className={styles.icon} />}
        </a>
      </div>
    </div>
  </div>
);

export default function Projects(props: Props): JSX.Element {
  return (
    <>
      {props.projects &&
        props.projects.map((project: ProjectType, index: number) => content(project, index))}
    </>
  );
}
