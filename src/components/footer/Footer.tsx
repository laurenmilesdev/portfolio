import { Dispatch, SetStateAction } from 'react';
import WindowsStartBar from '../windows-theme/start-bar/StartBar';
import WindowsThemeButton from '../windows-theme/windows-theme-button/WindowsThemeButton';
import Contacts from '../contacts/Contacts';
import ThemeSwitch from '../theme-switch/ThemeSwitch';
import ContactModel from '../../models/contact/contact';
import WindowModel from '../../models/component-helpers/window';

import styles from './Footer.module.css';

type Props = {
  windows: WindowModel[];
  contacts: ContactModel[];
  useDarkTheme: boolean;
  setUseDarkTheme: Dispatch<SetStateAction<boolean>>;
  useWindowsTheme: boolean;
  setTheme: Dispatch<SetStateAction<string>>;
};

export default function Footer({
  windows,
  contacts,
  useDarkTheme,
  setUseDarkTheme,
  useWindowsTheme,
  setTheme,
}: Props): JSX.Element {
  return useWindowsTheme ? (
    <WindowsStartBar windows={windows} useDarkTheme={useDarkTheme} setTheme={setTheme} />
  ) : (
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
