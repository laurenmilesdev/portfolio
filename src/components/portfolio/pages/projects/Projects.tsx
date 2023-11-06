import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Technologies from '../../technologies/Technologies';
import ProjectModel from '../../../../models/projects/project';

import styles from './Projects.module.css';

type Props = {
  projects: ProjectModel[];
};

export default function Projects({ projects }: Props): JSX.Element {
  return (
    <>
      {projects &&
        projects.map((project: ProjectModel, index: number) => (
          <div className={`${styles['projects-container']} col-md-12`} key={project.title}>
            <div className={`${styles['project-title']} col-md-12`} id={`project-${index}-title`}>
              {project.title}
            </div>

            <div className={`col-md-12`} id={`project-${index}-technologies`}>
              {project.technologies && <Technologies technologies={project.technologies} />}
            </div>

            <div className={`col-md-12 pb-2`} id={`project-${index}-description`}>
              <p>{project.description}</p>
            </div>

            <div className={`col-md-12`}>
              <a
                href={project.companyUrl ?? ''}
                target="_blank"
                id={`project-${index}-company`}
                className={`primary`}
              >
                {project.company}
                {<OpenInNewIcon className={styles.icon} />}
              </a>
            </div>
          </div>
        ))}
    </>
  );
}
