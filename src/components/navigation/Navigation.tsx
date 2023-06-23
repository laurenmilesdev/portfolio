import { AppBar, Tab, Tabs } from '@mui/material';
// import ThemeSwitch from '../themes/ThemeSwitch';
import { a11yProps } from '../../helpers/helpers';

import styles from './Navigation.module.css';

type Props = {
  pageLabels: string[];
  handleChange: (event: React.SyntheticEvent, newValue: number) => void;
  value: number;
  // useDarkTheme: boolean;
  // handleThemeChange: (event: React.SyntheticEvent, theme: boolean) => void;
};

export default function Navigation(props: Props): JSX.Element {
  return (
    <div>
      <AppBar className={styles['app-bar']}>
        <Tabs
          value={props.value}
          onChange={props.handleChange}
          aria-label="navigation tabs"
          className={styles.tabs}
          centered
        >
          {props.pageLabels.map((label: string, index: number) => (
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
