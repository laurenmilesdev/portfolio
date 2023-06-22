import { useState } from 'react';
import { AppBar, Tab, Tabs } from '@mui/material';
// import ThemeSwitch from '../themes/ThemeSwitch';
import { a11yProps } from '../../helpers/helpers';
import TabPanel from '../tabs/TabPanel';
import TabType from '../../types/component-helpers/tab';

import styles from './Navigation.module.css';

type Props = {
  pages: TabType[];
  // useDarkTheme: boolean;
  // handleThemeChange: (event: React.SyntheticEvent, theme: boolean) => void;
};

export default function Navigation(props: Props): JSX.Element {
  const [value, setValue] = useState<number>(0);

  function handleChange(event: React.SyntheticEvent, newValue: number) {
    setValue(newValue);
  }

  return (
    <div>
      {/* Page content */}
      {props.pages.map(({ component }, index: number) => (
        <TabPanel value={value} index={index} key={index}>
          {component}
        </TabPanel>
      ))}

      <AppBar color="transparent">
        {/* Navigation tabs */}
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="navigation tabs"
          className={styles.tabs}
          centered
        >
          {props.pages.map(({ label }, index: number) => (
            <Tab
              className={`${styles.tab} nav-tab`}
              label={label}
              key={index}
              {...a11yProps(index)}
              data-testid={`tab-${index}`}
            />
          ))}
        </Tabs>
      </AppBar>

      {/* <Box>
          <ThemeSwitch
            useDarkTheme={props.useDarkTheme}
            handleThemeChange={props.handleThemeChange}
          />
        </Box> */}
    </div>
  );
}
