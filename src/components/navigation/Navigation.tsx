import { useState } from 'react';
import { Tab, Tabs } from '@mui/material';
import TabPanel from '../tabs/TabPanel';
import TabType from '../../types/component-helpers/tab';

import styles from './Navigation.module.css';

type Props = {
  pages: TabType[];
};

export default function Navigation(props: Props): JSX.Element {
  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={styles.container}>
      <div className="col-md-12">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="navigation tabs"
          sx={{
            '& .MuiTabs-indicator': {
              color: '#fff',
              backgroundColor: '#3D57C2',
              height: '4px',
            },
          }}
        >
          {props.pages.map(({ label }, index: number) => (
            <Tab
              className={styles.tab}
              label={label}
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
      </div>
      {props.pages.map(({ component }, index: number) => (
        <TabPanel value={value} index={index} key={index}>
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
