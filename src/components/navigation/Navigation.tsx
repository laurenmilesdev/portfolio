import { useState } from 'react';
import { Container, Box, Tab, Tabs } from '@mui/material';
import ThemeSwitch from '../themes/ThemeSwitch';
import { a11yProps } from '../../helpers/helpers';
import TabPanel from '../tabs/TabPanel';
import TabType from '../../types/component-helpers/tab';

import styles from './Navigation.module.css';

type Props = {
  pages: TabType[];
  useDarkTheme: boolean;
  handleThemeChange: (event: React.SyntheticEvent, theme: boolean) => void;
};

export default function Navigation(props: Props): JSX.Element {
  const [value, setValue] = useState<number>(0);

  function handleChange(event: React.SyntheticEvent, newValue: number) {
    setValue(newValue);
  }

  return (
    <div>
      <div className={styles.nav}>
        <Box sx={{ flexGrow: 1 }}>
          <Tabs value={value} onChange={handleChange} aria-label="navigation tabs">
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
        </Box>

        <Box>
          <ThemeSwitch
            useDarkTheme={props.useDarkTheme}
            handleThemeChange={props.handleThemeChange}
          />
        </Box>
      </div>

      {props.pages.map(({ component }, index: number) => (
        <TabPanel value={value} index={index} key={index}>
          <Container maxWidth={false} sx={{ maxWidth: '85%' }}>
            {component}
          </Container>
        </TabPanel>
      ))}
    </div>
  );
}
