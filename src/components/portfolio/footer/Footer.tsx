import { Dispatch, SetStateAction } from 'react';
import { Tooltip } from '@mui/material';
import WindowsThemeButton from './windows-theme-button/WindowsThemeButton';
import Contacts from './contacts/Contacts';
import ThemeSwitch from './theme-switch/ThemeSwitch';
import ContactModel from '../../../models/contact/contact';
import ThemeConstants from '../../../constants/theme';

import styles from './Footer.module.css';

type Props = {
  contacts: ContactModel[];
  useDarkTheme: boolean;
  setUseDarkTheme: Dispatch<SetStateAction<boolean>>;
  setTheme: Dispatch<SetStateAction<string>>;
  setPageTabValue: Dispatch<SetStateAction<number>>;
};

export const footerDivId = 'footer';

export default function Footer({
  contacts,
  useDarkTheme,
  setUseDarkTheme,
  setTheme,
  setPageTabValue,
}: Props): JSX.Element {
  return (
    <div className={`${styles.container} col-md-12`} id={footerDivId}>
      <WindowsThemeButton
        setTheme={setTheme}
        useDarkTheme={useDarkTheme}
        setPageTabValue={setPageTabValue}
      />

      <Contacts contacts={contacts} />

      <Tooltip title={`${useDarkTheme ? ThemeConstants.DARK : ThemeConstants.LIGHT} mode`}>
        <ThemeSwitch
          useDarkTheme={useDarkTheme}
          setUseDarkTheme={setUseDarkTheme}
          setTheme={setTheme}
        />
      </Tooltip>
    </div>
  );
}
