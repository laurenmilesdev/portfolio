import { AppBar, Tab, Tabs } from '@mui/material';

import styles from './Navigation.module.css';

type Props = {
  pageValue: number;
  pageTitles: string[];
  handleChange: (event: React.SyntheticEvent, newValue: number) => void;
  useWindowsTheme: boolean;
};

export const navigationDivId = 'navigation';

function a11yProps(index: number): object {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}

export default function Navigation({
  pageValue,
  pageTitles,
  handleChange,
  useWindowsTheme,
}: Props): JSX.Element {
  const tabs = (
    <Tabs value={pageValue} onChange={handleChange} className="nav-tabs" centered>
      {pageTitles.map((title: string, index: number) => (
        <Tab
          className={`${styles.tab} nav-tab`}
          label={title}
          key={index}
          {...a11yProps(index)}
          id={`tab-${index}`}
        />
      ))}
    </Tabs>
  );

  return useWindowsTheme ? (
    <div className={`${styles['windows-theme-app-bar']} col-md-12`} id={navigationDivId}>
      {tabs}
    </div>
  ) : (
    <AppBar className={`${styles['app-bar']} col-md-12`} elevation={0} id={navigationDivId}>
      {tabs}
    </AppBar>
  );
}
