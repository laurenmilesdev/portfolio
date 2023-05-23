import React from 'react';
import { Tab, Tabs } from '@mui/material';
import TabModel from '@/types/tab';

type Props = {
  pages: TabModel[];
};

export default function Navigation(props: Props) {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="col-md-12">
      <div className="col-md-12">
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          {props.pages.map(({ label }, i) => (
            <Tab label={label} key={i} />
          ))}
        </Tabs>
      </div>
      {props.pages.map(({ component }, i) => (
        <TabPanel value={value} index={i} key={i}>
          {component}
        </TabPanel>
      ))}
    </div>
  );
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
