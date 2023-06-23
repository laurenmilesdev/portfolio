import Fade from '@mui/material/Fade';
import TabPanel from '../tabs/TabPanel';
import Technologies from './Technologies';
import ProjectType from '@/types/projects/project';

import styles from './Project.module.css';

type Props = {
  projects: ProjectType[];
  value: number;
};

const content = (project: ProjectType, index: number): JSX.Element => (
  <div className={`${styles.content} col-md-12`}>
    <div className={`${styles['company-links']} col-md-12`}>
      <a
        className={styles['company-link']}
        href={project.companyUrl ?? ''}
        target="_blank"
        id={`company-${index}`}
        aria-label={`Link to ${project.company} website`}
      >
        <h5>{project.company.toUpperCase()}</h5>
      </a>
    </div>

    <div className="col-md-12" id={`project-description-${index}`}>
      <p>{project.description}</p>
    </div>

    <div className="col-md-12">
      {project.technologies && <Technologies technologies={project.technologies} />}
    </div>
  </div>
);

export default function Project(props: Props): JSX.Element {
  return (
    <div className="col-md-12">
      {props.projects.map((project: ProjectType, index: number) => (
        <TabPanel value={props.value} index={index} key={index}>
          <Fade in={true}>{content(project, index)}</Fade>
        </TabPanel>
      ))}
    </div>
  );
}
