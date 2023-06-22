import { Button } from '@mui/material';
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
    <div className="col-md-12">
      {project.technologies && <Technologies technologies={project.technologies} />}
    </div>

    <div className="col-md-12" id={`project-description-${index}`}>
      <p>{project.description}</p>
    </div>

    <div className="col-md-12">
      <Button
        className="btn-primary"
        href={project.companyUrl ?? ''}
        target="_blank"
        id={`company-${index}`}
        aria-label={`Link to ${project.company} website`}
      >
        {project.company}
      </Button>
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
