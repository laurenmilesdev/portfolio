import { Dispatch, SetStateAction } from 'react';
import { Tab, Tabs } from '@mui/material';

import styles from './Navigation.module.css';

type Props = {
  pageTitles: string[];
  pageTabValue: number;
  setPageTabValue: Dispatch<SetStateAction<number>>;
};

export const navigationDivId = 'navigation';

function a11yProps(index: number): object {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}

export default function Navigation({
  pageTabValue,
  pageTitles,
  setPageTabValue,
}: Props): JSX.Element {
  const tabs = (
    <Tabs
      value={pageTabValue}
      onChange={(event, newValue) => setPageTabValue(newValue as number)}
      className={`${styles.tabs} nav-tabs`}
      orientation="vertical"
    >
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

  return (
    <div className={`${styles['app-bar']} col-md-12`} id={navigationDivId}>
      {tabs}
    </div>
  );
}
