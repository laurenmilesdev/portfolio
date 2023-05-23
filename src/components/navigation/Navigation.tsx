import { useState } from 'react';
import { Tab, Tabs } from '@mui/material';
import TabPanel from '../tabs/TabPanel';
import TabModel from '@/types/tab';

import styles from './Navigation.module.css';

type Props = {
  pages: TabModel[];
};

export default function Navigation(props: Props): JSX.Element {
  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={`${styles.container} col-md-12`}>
      <div className="col-md-12">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="navigation tabs"
          sx={{
            '& .MuiTabs-indicator': {
              color: '#fff',
              backgroundColor: 'orange',
            },
          }}
        >
          {props.pages.map(({ label }, i) => (
            <Tab
              label={label}
              key={i}
              {...a11yProps(i)}
              sx={{
                '&.Mui-selected': {
                  color: '#fff',
                },
                color: '#fff',
              }}
            />
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

function a11yProps(index: number) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}
