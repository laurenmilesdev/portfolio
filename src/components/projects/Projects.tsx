import { Tab, Tabs } from '@mui/material';
import { a11yProps } from '../../helpers/helpers';
import Project from './Project';
import ProjectType from '@/types/projects/project';

import styles from './Projects.module.css';

type Props = {
  projects: ProjectType[];
  handleChange: (event: React.SyntheticEvent, newValue: number) => void;
  value: number;
};

export default function Projects(props: Props): JSX.Element {
  return (
    <div className="col-md-12 d-flex">
      <div className="col-md-8">
        <Project projects={props.projects} value={props.value} />
      </div>

      <div className="col-md-4">
        {props.projects && (
          <Tabs
            value={props.value}
            onChange={props.handleChange}
            aria-label="project tabs"
            orientation="vertical"
            className="projects-tabs"
            data-testid="projects-tabs"
          >
            {props.projects.map(({ title }, index: number) => (
              <Tab
                label={title}
                key={index}
                {...a11yProps(index)}
                className={`${styles.tab} projects-tab`}
                data-testid={title}
              />
            ))}
          </Tabs>
        )}
      </div>
    </div>
  );
}
