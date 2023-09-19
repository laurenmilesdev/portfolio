import { Dispatch, SetStateAction } from 'react';
import WindowsThemeButton from './windows-theme-button/WindowsThemeButton';
import Contacts from './contacts/Contacts';
import ThemeSwitch from './theme-switch/ThemeSwitch';
import ContactModel from '../../../models/contact/contact';

import styles from './Footer.module.css';

type Props = {
  contacts: ContactModel[];
  useDarkTheme: boolean;
  setUseDarkTheme: Dispatch<SetStateAction<boolean>>;
  setTheme: Dispatch<SetStateAction<string>>;
};

export default function Footer({
  contacts,
  useDarkTheme,
  setUseDarkTheme,
  setTheme,
}: Props): JSX.Element {
  return (
    <div className={`${styles.container} col-md-12`}>
      <WindowsThemeButton setTheme={setTheme} useDarkTheme={useDarkTheme} />

      <Contacts contacts={contacts} />

      <ThemeSwitch
        useDarkTheme={useDarkTheme}
        setUseDarkTheme={setUseDarkTheme}
        setTheme={setTheme}
      />
    </div>
  );
}
