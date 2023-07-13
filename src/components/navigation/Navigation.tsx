import { AppBar, Tab, Tabs } from '@mui/material';

import styles from './Navigation.module.css';

type Props = {
  pageValue: number;
  pageLabels: string[];
  handleChange: (event: React.SyntheticEvent, newValue: number) => void;
};

const a11yProps = (index: number): object => ({
  id: `tab-${index}`,
  'aria-controls': `tabpanel-${index}`,
});

export default function Navigation({ pageValue, pageLabels, handleChange }: Props): JSX.Element {
  return (
    <AppBar className={`${styles['app-bar']} col-md-12`} elevation={0}>
      <Tabs value={pageValue} onChange={handleChange} centered>
        {pageLabels.map((label: string, index: number) => (
          <Tab
            className={`${styles.tab} nav-tab`}
            label={label}
            key={index}
            {...a11yProps(index)}
            id={`tab-${index}`}
          />
        ))}
      </Tabs>
    </AppBar>
  );
}
