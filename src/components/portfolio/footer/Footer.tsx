import { Dispatch, SetStateAction } from 'react';
// import WindowsThemeButton from './windows-theme-button/WindowsThemeButton';
import Contacts from './contacts/Contacts';
import ThemeSwitch from './theme-switch/ThemeSwitch';
import ContactModel from '../../../models/contact/contact';

import styles from './Footer.module.css';

type Props = {
  contacts: ContactModel[];
  useDarkTheme: boolean;
  setUseDarkTheme: Dispatch<SetStateAction<boolean>>;
  setTheme: Dispatch<SetStateAction<string>>;
  setPageTabValue: Dispatch<SetStateAction<number>>;
};

export default function Footer({
  contacts,
  useDarkTheme,
  setUseDarkTheme,
  setTheme,
}: // setPageTabValue,
Props): JSX.Element {
  return (
    <div className={styles['footer-container']}>
      {/* NOTE: Temporarily hiding Windows theme button */}

      {/* <WindowsThemeButton
        setTheme={setTheme}
        useDarkTheme={useDarkTheme}
        setPageTabValue={setPageTabValue}
      /> */}

      <Contacts contacts={contacts} />

      <ThemeSwitch
        useDarkTheme={useDarkTheme}
        setUseDarkTheme={setUseDarkTheme}
        setTheme={setTheme}
      />
    </div>
  );
}
