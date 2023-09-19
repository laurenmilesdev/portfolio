import Fade from '@mui/material/Fade';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Technologies from '../../technologies/Technologies';
import ProjectModel from '../../../models/projects/project';

import styles from './Projects.module.css';

type Props = {
  projects: ProjectModel[];
};

export default function Projects({ projects }: Props): JSX.Element {
  return (
    <>
      {projects &&
        projects.map((project: ProjectModel, index: number) => (
          <Fade in={true}>
            <div className={`${styles.container} col-md-12`} key={project.title}>
              <div className={`${styles.title} pb-2`} id={`project-${index}-title`}>
                <h5>{project.title}</h5>
              </div>

              <div className={styles.description}>
                <div className="col-md-12 pb-2" id={`project-${index}-technologies`}>
                  {project.technologies && <Technologies technologies={project.technologies} />}
                </div>

                <div className="col-md-12 pb-2" id={`project-${index}-description`}>
                  <p>{project.description}</p>
                </div>

                <div className="col-md-12">
                  <a
                    href={project.companyUrl ?? ''}
                    target="_blank"
                    id={`project-${index}-company`}
                  >
                    {project.company}
                    {<OpenInNewIcon className={styles.icon} />}
                  </a>
                </div>
              </div>
            </div>
          </Fade>
        ))}
    </>
  );
}
