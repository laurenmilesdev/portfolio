import { Button } from '@mui/material';
import Fade from '@mui/material/Fade';
import TabPanel from '../tabs/TabPanel';
import Technologies from './Technologies';
import ProjectType from '@/types/projects/project';

type Props = {
  pageDescription: string;
  projects: ProjectType[];
  value: number;
};

const content = (project: ProjectType, index: number): JSX.Element => (
  <>
    <h2 data-testid={`project-title-${index}`}>{project.title.toUpperCase()}</h2>
    {project.technologies && <Technologies technologies={project.technologies} />}
    <div data-testid={`project-description-${index}`}>
      <p>{project.description}</p>
    </div>
    <p data-testid={`project-company-${index}`}>
      <Button className="btn-primary" href={project.companyUrl ?? ''} target="_blank">
        {project.company}
      </Button>
    </p>
  </>
);

export default function Project(props: Props): JSX.Element {
  return (
    <div className="col-md-12">
      {props.projects.map((project: ProjectType, index: number) => (
        <TabPanel value={props.value} index={index} key={index}>
          <Fade in={true}>
            <div className="m-4"> {content(project, index)}</div>
          </Fade>
        </TabPanel>
      ))}
    </div>
  );
}
