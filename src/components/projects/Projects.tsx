import { Tab, Tabs } from '@mui/material';
import { a11yProps } from '../../helpers/helpers';
import ProjectType from '@/types/projects/project';

type Props = {
  description: string;
  projects: ProjectType[];
  handleChange: (event: React.SyntheticEvent, newValue: number) => void;
  value: number;
};

export default function Projects(props: Props): JSX.Element {
  return (
    <div className="col-md-12">
      {props.projects && (
        <Tabs value={props.value} onChange={props.handleChange} aria-label="project tabs">
          {props.projects.map(({ title }, index: number) => (
            <Tab
              label={title}
              key={index}
              {...a11yProps(index)}
              data-testid={`tab-${index}`}
              sx={{
                '&.Mui-selected': {
                  color: '#fff',
                },
              }}
            />
          ))}
        </Tabs>
      )}
    </div>
  );
}
