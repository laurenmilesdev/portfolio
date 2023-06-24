import { AppBar, Tab, Tabs } from '@mui/material';
import { a11yProps } from '../../helpers/helpers';

import styles from './Navigation.module.css';

type Props = {
  pageLabels: string[];
  pageValue: number;
  handleChange: (event: React.SyntheticEvent, newValue: number) => void;
};

export default function Navigation(props: Props): JSX.Element {
  return (
    <AppBar className={`${styles['app-bar']} col-md-12`} elevation={0}>
      <Tabs
        value={props.pageValue}
        onChange={props.handleChange}
        aria-label="navigation tabs"
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
  );
}
