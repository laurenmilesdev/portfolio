import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Technologies from '../../technologies/Technologies';
import ProjectModel from '../../../../models/projects/project';

import styles from './Projects.module.css';

type Props = {
  description: string;
  projects: ProjectModel[];
};

export const descriptionDivId = 'projects-description';
export const getTitleId = (index: number) => `project-${index}-title`;
export const getDescriptionId = (index: number) => `project-${index}-description`;
export const getCompanyId = (index: number) => `project-${index}-company`;

export default function Projects({ description, projects }: Props): JSX.Element {
  return (
    <>
      <div
        className="col-md-12 pb-3"
        id={descriptionDivId}
        dangerouslySetInnerHTML={{ __html: description }}
      />

      {projects &&
        projects.map((project: ProjectModel, index: number) => (
          <div className={`${styles['projects-container']} col-md-12`} key={project.title}>
            <div className={`${styles['project-title']} col-md-12`} id={getTitleId(index)}>
              {project.title}
            </div>

            <div className={`col-md-12`} id={`project-${index}-technologies`}>
              {project.technologies && <Technologies technologies={project.technologies} />}
            </div>

            <div className={`col-md-12 pb-2`} id={getDescriptionId(index)}>
              <p>{project.description}</p>
            </div>

            <div className={`col-md-12`}>
              <a
                href={project.companyUrl ?? ''}
                target="_blank"
                id={getCompanyId(index)}
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
